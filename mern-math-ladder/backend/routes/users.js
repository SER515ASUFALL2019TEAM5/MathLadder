/*
Author : Chandan, Sakshi
*/

const router = require('express').Router()
const User = require('../models/user')
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.use(cors())
process.env.SECRET_KEY = 'secret'

router.route('/add').post((req, res) => {

  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      console.log("400")
      res.status(400)
      const e = new Error('Not Found');
      e.status = 404;
      res.send(e);
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
          res.statusCode = 200
          res.json({status: user.email + ' registered'});
      })
      .catch(err => {
          console.log("400")
          res.status(400)
          res.send('error: ' + err);
      })
    }
  })
  .catch(err => {
    console.log("400")
    res.status(400)
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
      const payload = {
        _id: user.id,
        username: user.username,
        email: user.email,
        educator: user.educator,
        student: user.student
      }
      const token = jwt.sign(payload, process.env.SECRET_KEY,{
        expiresIn: 14440
      })
      res.send(token)
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