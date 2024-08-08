// components/UserProfile.js
import useAuth from "../../hooks/useAuth";
const UserProfile = () => {
  const { user } = useAuth();
  const formattedDateOfBirth = user?.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : "N/A";



  return (
    <div>
      <h1>{user?.username}</h1>
      <p>Email: {user?.email}</p>
      <h2>Personal Information</h2>
      <p>Date of Birth: {formattedDateOfBirth}</p>
      <p>Address: {user?.address}</p>
      <p>Phone: {user?.phoneNumber}</p>
      
      {user?.role === 'student' && (
        <div>
          <h2>Enrolled Courses</h2>
          <ul>
            {user?.enrolledCourses.map(course => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        </div>
      )}
      
      {user?.role === 'educator' && (
        <div>
          <h2>Courses Taught</h2>
          <ul>
            {user?.coursesTaught.map(course => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default UserProfile;