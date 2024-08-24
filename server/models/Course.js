const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  // customId: { type: String, unique: true },
  title: String,
  image: String,
  tag: String,
  duration: String,
  text: String,
  price: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
