// // /routes/enrollment.js
// const express = require('express');
// const router = express.Router();
// const Enrollment = require('../models/Enrollment');

// router.post('/enroll', async (req, res) => {
//   const { firstName, lastName, email, courseId, duration } = req.body;

//   try {
//     // Check if the user is already enrolled in this course
//     const existingEnrollment = await Enrollment.findOne({ email, courseId });
//     if (existingEnrollment) {
//       return res.status(400).json({ success: false, message: 'User is already enrolled in this course.' });
//     }

//     // Create a new enrollment record
//     const newEnrollment = new Enrollment({
//       firstName,
//       lastName,
//       email,
//       courseId,
//       duration,
//     });

//     // Save the enrollment record to the database
//     await newEnrollment.save();

//     // Send a success response
//     res.json({ success: true, message: 'Enrollment successful!' });

//   } catch (error) {
//     console.error('Enrollment failed:', error);
//     res.status(500).json({ success: false, message: 'Enrollment failed. Please try again later.' });
//   }
// });

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Enrollment = require('../models/Enrollment');

// router.post('/enroll', async (req, res) => {
//   const { firstName, lastName, email, courseId, duration } = req.body;

//   if (!courseId) {
//     return res.status(400).json({ success: false, message: 'courseId is required.' });
//   }

//   try {
//     // Check if the user is already enrolled in this course
//     const existingEnrollment = await Enrollment.findOne({ email, courseId });
//     if (existingEnrollment) {
//       return res.status(400).json({ success: false, message: 'User is already enrolled in this course.' });
//     }

//     // Create a new enrollment record
//     const newEnrollment = new Enrollment({
//       firstName,
//       lastName,
//       email,
//       courseId,
//       duration,
//     });

//     // Save the enrollment record to the database
//     await newEnrollment.save();

//     // Send a success response
//     res.json({ success: true, message: 'Enrollment successful!' });

//   } catch (error) {
//     console.error('Enrollment failed:', error);
//     res.status(500).json({ success: false, message: 'Enrollment failed. Please try again later.' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

router.post('/enroll', async (req, res) => {
  try {
    const { courseId, firstName, lastName, email, duration } = req.body;

    // Validate input
    if (!courseId || !firstName || !lastName || !email || !duration) {
      return res.status(400).send('Missing required fields');
    }

    // Check if the user is already enrolled
    const existingEnrollment = await Enrollment.findOne({ email });
    if (existingEnrollment) {
      return res.status(400).send('User is already enrolled');
    }
    // Create new enrollment
    const enrollment = await Enrollment.create({ courseId, firstName, lastName, email, duration });

    res.status(200).json({success: true, enrollment});
  } catch (error) {
    console.error('Error enrolling user:', error);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/enrolled-courses', async (req, res) => {
  try {
    // In a real application, you'd get the user ID from the authenticated session
    // For now, we'll just fetch all enrolled courses
    const enrollments = await Enrollment.find().populate('courseId');
    const enrolledCourses = enrollments.map(enrollment => enrollment.courseId);
    res.json(enrolledCourses);
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;