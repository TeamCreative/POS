const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    monday: { type: String, required: true },
    tuesday: { type: String, required: true },
    wednesday: { type: String, required: true },
    thrusday: { type: String, required: true },
    friday: { type: String, required: true },
    saturday: { type: String, required: true },
    sunday: { type: String, required: true },
    totalhours: { type: String, required: true },
    date: { type: Date },
    style: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exececise", exerciseSchema);

module.exports = Exercise;
