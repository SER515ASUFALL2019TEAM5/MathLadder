/*
Author : Chandan, Sakshi
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: String, required: true },
  educator:  { type: Boolean, required: true },
  student:  { type: Boolean, required: true }
}, {
  timestamps: true,
});

const user = mongoose.model('users', UserSchema);

module.exports = user;