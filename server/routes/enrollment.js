// /routes/enrollment.js
const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.post('/enroll', async (req, res) => {
  const { firstName, lastName, email, courseId, duration } = req.body;

  try {
    // Check if the user is already enrolled in this course
    const existingEnrollment = await Enrollment.findOne({ email, courseId });
    if (existingEnrollment) {
      return res.status(400).json({ success: false, message: 'User is already enrolled in this course.' });
    }

    // Create a new enrollment record
    const newEnrollment = new Enrollment({
      firstName,
      lastName,
      email,
      courseId,
      duration,
    });

    // Save the enrollment record to the database
    await newEnrollment.save();

    // Send a success response
    res.json({ success: true, message: 'Enrollment successful!' });

  } catch (error) {
    console.error('Enrollment failed:', error);
    res.status(500).json({ success: false, message: 'Enrollment failed. Please try again later.' });
  }
});

module.exports = router;
