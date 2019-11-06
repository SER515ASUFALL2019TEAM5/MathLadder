/*
Author : Chandan, Sakshi
*/

const router = require('express').Router()
const User = require('../models/user')
const cors = require("cors")
const bcrypt = require("bcrypt")

router.use(cors())
process.env.SECRET_KEY = 'secret'

router.route('/add').post((req, res) => {

  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      res.json({error : 'User already exist'})
    }
    else
    {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status,
        educator: req.body.educator,
        student: req.body.student
      });

      User.create(newUser)
      .then(user => {
          res.json({status: user.email + ' registered'});
      })
      .catch(err => {
          res.send('error: ' + err);
      })
    }
  })
  .catch(err => {
      res.send('error: ' + err)
  })
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email, password })
  .then(user => {
    if (!user) {
      res.json({error : "User doesnot exist"});
    }
    else
    {
      res.json({status : "User signed in Successfully"})
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
});

router.route('/profile').post((req, res) => {

})

module.exports = router;