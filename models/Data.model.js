const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const posdata = new Schema({
  username: { type: String, },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Data = mongoose.model('POS_Data', posdata );

module.exports = Data;