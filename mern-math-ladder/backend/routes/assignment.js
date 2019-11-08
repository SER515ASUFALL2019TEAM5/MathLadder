const Assignment = require('../models/assignment')
const User = require('../models/user')
const router = require('express').Router()
const cors = require("cors")
const mongoose = require("mongoose")
const auth = require("../middleware/auth")

router.use(cors())


router.route('/addAssignment').post(auth, async (req, res) => {

    const {question, options } = req.body;
    const id = req.decoded;
    const user =  await User.findById(id);
    console.log(user);
    const assignmentdata = new Assignment({
      user,
      question,
      options: options.map(option => ({
        option, answeredBy:0
      })),

    })
    Assignment.create(assignmentdata)
    .then(question => {
      res.json({status: 'Assignment created'});
    })
    .catch(err => {
       res.send('error: ' + err)
    })
})

router.route('/viewAssignment').get( async(req, res) => {
    const availableAssignments =  await Assignment.find()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400)
      res.send('Some Problem occured in viewing the assignment')
    })
})





module.exports = router;