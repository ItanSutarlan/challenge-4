class RPS {
  determineWinner(playerChoice, computerChoice) {
    console.info(
      `Player's choice: ${playerChoice}\nComputer's choice: ${computerChoice}`
    );
    if (playerChoice === computerChoice) {
      return 'draw';
    }
    if (playerChoice === 'rock') {
      return computerChoice === 'scissors' ? 'win' : 'lose';
    }
    if (playerChoice === 'paper') {
      return computerChoice === 'rock' ? 'win' : 'lose';
    }
    if (playerChoice === 'scissors') {
      return computerChoice === 'paper' ? 'win' : 'lose';
    }
  }
}

class GameRPS extends RPS {
  #playerScore;
  #computerScore;
  constructor() {
    super();
    this.#playerScore = 0;
    this.#computerScore = 0;
  }
  play(playerChoice) {
    this.#reset();
    const computerChoice = this.#randomize();
    this.#setBackground(playerChoice, computerChoice);
    const result = super.determineWinner(playerChoice, computerChoice);
    this.#setResult(result);
  }
  #reset() {
    document.getElementById('player-rock').classList.remove('bg-light');
    document.getElementById('player-paper').classList.remove('bg-light');
    document.getElementById('player-scissors').classList.remove('bg-light');
    document.getElementById('com-rock').classList.remove('bg-light');
    document.getElementById('com-paper').classList.remove('bg-light');
    document.getElementById('com-scissors').classList.remove('bg-light');
    const result = document.getElementById('result');
    result.classList.remove('winner');
    result.classList.remove('draw');
    result.innerHTML = 'vs';
  }
  #randomize() {
    const SELECTIONS = ['rock', 'paper', 'scissors'];
    return SELECTIONS[Math.floor(Math.random() * 3)];
  }
  #setBackground(playerChoice, computerChoice) {
    document.getElementById(`player-${playerChoice}`).classList.add('bg-light');
    document.getElementById(`com-${computerChoice}`).classList.add('bg-light');
  }
  #setResult(result) {
    console.info(result);

    switch (result) {
      case 'draw':
        const draw = document.getElementById('result');
        draw.textContent = 'draw';
        draw.classList.add('draw');
        break;
      case 'win':
        this.#playerScore++;
        document.getElementById('player-score').textContent = this.#playerScore;
        const win = document.getElementById('result');
        win.innerHTML = 'player 1 win';
        win.classList.add('winner');
        break;
      case 'lose':
        this.#computerScore++;
        document.getElementById('computer-score').textContent =
          this.#computerScore;
        const lose = document.getElementById('result');
        lose.innerHTML = `com <br> win`;
        lose.classList.add('winner');
        break;
    }
  }
  refresh(el) {
    if (confirm('Are you sure you want to refresh the game?')) {
      this.#reset();
      document.getElementById('player-score').textContent =
        this.#playerScore = 0;
      document.getElementById('computer-score').textContent =
        this.#computerScore = 0;
      el.classList.toggle('active');
    }
  }
}

const game = new GameRPS();
