const createError = require('http-errors');
const express = require('express');
const router = express.Router();

// static users data
const Users = require('../db/users.json');

router.get('/', function (req, res) {
  res.render('register');
});

router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  const user = Users.find((user) => user.username === username);
  if (user) {
    return next(createError(409, 'User already exists'));
    // return res.status(409).json({ message: 'User already exists' });
  }
  Users.push({ username, password });
  res.redirect('/login');
  // res.status(201).json({ message: 'User Succesfully registered' });
});

module.exports = router;
