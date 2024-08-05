// components/UserProfile.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>Personal Information</h2>
      <p>Date of Birth: {user.personalInfo.dateOfBirth}</p>
      <p>Address: {user.personalInfo.address}</p>
      <p>Phone: {user.personalInfo.phoneNumber}</p>
      
      {user.role === 'student' && (
        <div>
          <h2>Enrolled Courses</h2>
          <ul>
            {user.enrolledCourses.map(course => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        </div>
      )}
      
      {user.role === 'educator' && (
        <div>
          <h2>Courses Taught</h2>
          <ul>
            {user.coursesTaught.map(course => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
UserProfile.propTypes = {
    userId: PropTypes.string.isRequired,
  };

export default UserProfile;