const authentication = () => {
  let isLogin = false;
  return (value) => {
    return !value ? isLogin : (isLogin = value);
  };
};

module.exports = authentication();
