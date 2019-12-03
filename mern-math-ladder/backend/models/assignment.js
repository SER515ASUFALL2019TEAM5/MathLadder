/**
 * @author Sakshi Jain
 * @reference = https://www.youtube.com/watch?v=J6-khGTiR7k&list=PLBeQxJQNprbgrNfcntLO8N2Y-dzlMZXZe&index=4
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const optionSchema = new schema ({
    option: String,
    answeredBy: {
        type: Number,
        default: 0
    }
})

const assignmentSchema = new schema({
    user: {
        type: schema.Types.ObjectId,
         ref: 'users'
    },
    question: String,
    options: [optionSchema],
    answered: [{type: schema.Types.ObjectId, ref: 'answer'}]  //this will store Object Id of all users who have answered this
})

module.exports = mongoose.model('Assignment', assignmentSchema);