const router = require('express').Router();
let Roles = require('../models/roles.model');

router.route('/').get((req, res) => {
    Roles.find()
    .then(roles => res.json(roles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const rid = req.body.rid;
  const role = req.body.role;

  const newRole = new Roles({rid, role,});

  newRole.save()
    .then(() => res.json('Role added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;