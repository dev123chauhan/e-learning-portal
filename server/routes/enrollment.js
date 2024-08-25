const express = require("express");
const router = express.Router();
const Enrollment = require("../models/Enrollment");

router.post("/enroll", async (req, res) => {
  try {
    const { courseId, firstName, lastName, email, duration } = req.body;
    console.log(req.body);
    // Validate input
    if (!courseId || !firstName || !lastName || !email || !duration) {
      return res.status(400).send("Missing required fields");
    }

    // Check if the user is already enrolled
    const existingEnrollment = await Enrollment.findOne({ email });
    if (existingEnrollment) {
      return res.status(400).send("User is already enrolled");
    }
    // Create new enrollment
    const enrollment = await Enrollment.create({
      courseId,
      firstName,
      lastName,
      email,
      duration,
    });

    res.status(200).json({ success: true, enrollment });
  } catch (error) {
    console.error("Error enrolling user:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/enrolled-courses", async (req, res) => {
  try {
    // In a real application, you'd get the user ID from the authenticated session
    // For now, we'll just fetch all enrolled courses
    const enrollments = await Enrollment.find().populate("courseId");
    const enrolledCourses = enrollments.map(
      (enrollment) => enrollment.courseId
    );
    res.json(enrolledCourses);
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
