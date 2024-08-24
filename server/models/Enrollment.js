// /models/Enrollment.js
const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courseId: { type: String, required: true },
  duration: { type: String, required: true },
  enrolledAt: { type: Date, default: Date.now },

});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
