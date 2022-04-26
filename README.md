[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Express ORM

> A Binar Academy project challenge-4 chapter-6 using express framework, EJS view engine, and ORM (sequelize).

## Prerequisites

This project requires NodeJS (version 16 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.1.2
v16.12.2
```

## Table of contents

- [Project Name](#Express)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/ItanSutarlan/challenge-3.git
$ cd PROJECT
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```

Modify config.json file to be same as your local database, then run:

```sh
$ sequelize db:create                         Create database specified by configuration
$ sequelize db:migrate                        Run pending migrations
```

## Usage

### Serving the app

```sh
$ npm start
```

## Built With

- VScode

## Authors

- **Itan Sutarlan** - [ItanSutarlan](https://github.com/ItanSutarlan)

## License

[MIT License]
