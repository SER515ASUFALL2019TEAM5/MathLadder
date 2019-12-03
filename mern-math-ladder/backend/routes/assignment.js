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
    const assignmentdata = new Assignment({
      user,
      question,
      options: options.map(option => ({
        option, answeredBy:0
      })),

    })
    Assignment.create(assignmentdata)
    .then( question => {
      res.json({status: 'Assignment created'});
    })
    .catch(err => {
       res.send('error: ' + err)
    })

    user.questions.push(assignmentdata._id);
    await user.save();
})

router.route('/viewAssignment').get( async(req, res) => {
    await Assignment.find().populate('user', ['username', 'id'])
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400)
      res.send('Some Problem occured in viewing the assignment')
    })
})

router.route('/getAssignmentCreatedByUser').get(auth,  async(req, res) => {
    const id = req.decoded;
    await User.findById(id).populate('questions')
    .then(data => {
        res.status(200).json(data.questions)
    })
    .catch(err => {
      res.status(400)
      res.send('Some Error occured in fetching the assignment')
    })

})

router.route('/getAssignments/:id').get(async(req, res) =>{
  const {id} = req.params;
  const assignment = await Assignment.findById(id)
  .populate('user', ['username']);

  if(!assignment) throw new Error('No Assignment Found');

  res.status(200).json(assignment);
})
.delete(auth, async (req, res) => {
  const {id: assignmentId} = req.params;
  const userId = req.decoded._id;
  const assignment = await Assignment.findById(assignmentId);
  if(assignment.user.toString() != userId) throw new Error('UnAuthorized Access');

  if(!assignment) throw new Error('Cannot found assignment');

  await assignment.remove();
  res.status(202).send(assignment);
})

router.route('/answerAssignment/:id').post(auth , async(req, res) => {
  const {id: assignmentId} = req.params;
  const userId = req.decoded._id;
  const answer = req.body.answer;

  if(answer)
  {
    const assignment = await Assignment.findById(assignmentId);
    const choices = assignment.options; 

    if(!assignment)
    {
      throw new Error('No question found');
    }

    const finalOptionChoosed = assignment.options.map(
      option => {
        if(option.option == answer){
          return {
            option: option.option,
            _id: option._id,
            answeredBy: option.answeredBy + 1
          };
        }else{
          return option;
        }
      }
    );

    if(assignment.answered.filter(user => user.toString() === userId).length <= 0 ) {
      assignment.answered.push(userId);
      assignment.options = finalOptionChoosed;
        await assignment.save();

        return res.json({assignment: assignment, statusText: "Assignment Answered scuccessfully"})
    } else{
        return res.json({statusText: 'Answer already given'})
    } 

  }
  else
  {
    throw new Error('No answer given');
  }
})


module.exports = router;