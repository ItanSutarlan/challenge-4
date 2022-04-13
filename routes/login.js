const createError = require('http-errors');
const express = require('express');
const router = express.Router();

// static users data
const Users = require('../db/users.json');
const authenticate = require('../middlewares/auth');

router.get('/', function (req, res) {
  res.render('login');
});

router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  const user = Users.find((user) => user.username === username);
  if (user) {
    if (user.password === password) {
      authenticate(true);
      return res.redirect('/users');
    }
    return next(createError(400, 'Wrong Password'));
  }
  next(createError(404, 'User Not Found'));
});

module.exports = router;
