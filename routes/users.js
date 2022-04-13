const express = require('express');
const router = express.Router();

const { User, Biodata, History } = require('../models');

/* GET users listing. */
// Read data
router.get('/', function (req, res, next) {
  User.findAll({
    attributes: {
      exclude: ['id', 'createdAt', 'updatedAt'],
    },
    include: [
      {
        model: Biodata,
        as: 'user_biodata',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt', 'userId'],
        },
      },
      {
        model: History,
        as: 'user_history',
        attributes: {
          exclude: ['id', 'createdAt', 'updatedAt', 'userId'],
        },
      },
    ],
  }).then((users) => {
    console.info(users);
    res.render('list', { users });
  });
});

// Add data
router.get('/add', function (req, res) {
  res.render('add');
});

router.post('/', function (req, res, next) {
  const { username, password, firstName, lastName, score } = req.body;

  User.create({
    username,
    password,
  }).then((user) => {
    Biodata.create({
      firstName,
      lastName,
      userId: user.id,
    }).then(() => {
      History.create({
        score,
        userId: user.id,
      }).then(() => {
        console.info('Data successfully created');
        res.redirect('/users');
      });
    });
  });
});

// Update Data
router.get('/edit/:uuid', function (req, res) {
  res.render('edit', { uuid: req.params.uuid });
});

router.put('/:uuid', function (req, res) {
  const { uuid } = req.params;
  const { username, password, firstName, lastName, score } = req.body;

  User.update(
    {
      username,
      password,
    },
    {
      where: { uuid },
      returning: true,
    }
  ).then(
    ([
      total,
      [
        {
          dataValues: { id },
        },
      ],
    ]) => {
      Biodata.update(
        {
          firstName,
          lastName,
        },
        {
          where: {
            userId: id,
          },
        }
      ).then(() => {
        History.update(
          {
            score,
          },
          {
            where: {
              userId: id,
            },
          }
        ).then(() => {
          console.info(`${total} data successfully updated`);
          res.redirect('/users');
        });
      });
    }
  );
});

// Delete data
router.delete('/:uuid', (req, res) => {
  const { uuid } = req.params;

  User.destroy({
    where: {
      uuid,
    },
  }).then(() => {
    console.info('Data successfully deleted');
    res.redirect('/users');
  });
});

module.exports = router;
