const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }else{
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        status: req.body.status
      });
      newUser.save()
      //.then(() => res.json('User added!'))
      .then(() => res.status(200))
      
      .catch(err => res.status(400).json('Error: ' + err));
    }
  });
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
  });
});

module.exports = router;