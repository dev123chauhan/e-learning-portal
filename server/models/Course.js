const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const CourseSchema = new mongoose.Schema({
  image: String,
  title: String, 
  description: String,
  bullets: [String],
  tag: String,
  duration: String,
  price: String
});

// CourseSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Course', CourseSchema);







// const mongoose = require('mongoose');

// const courseSchema = new mongoose.Schema({
//   id: Number,
//   title: String,
//   image: String,
//   tag: String,
//   duration: String,
//   text: String,
//   price: String,
// });

// const Course = mongoose.model('Course', courseSchema);

// module.exports = Course;
