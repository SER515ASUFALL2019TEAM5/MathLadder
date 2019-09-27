const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rolesSchema = new Schema({
  rid: { type: Number, required: true },
  role: { type: String, required: true },
}, {
  timestamps: true,
});

const Roles = mongoose.model('Roles', rolesSchema);

module.exports = Roles;