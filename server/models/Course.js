const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  image: String,
  tag: String,
  duration: String,
  text: String,
  price: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
