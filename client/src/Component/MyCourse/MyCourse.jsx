// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const CourseGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   gap: 20px;
//   padding: 20px;
// `;

// const CourseCard = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
// `;

// const CourseInfo = styled.div`
//   padding: 15px;
// `;

// const CourseTitle = styled.h3`
//   margin: 0 0 10px 0;
//   font-size: 18px;
// `;

// const CourseDescription = styled.p`
//   font-size: 14px;
//   color: #666;
// `;

// function MyCourses() {
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEnrolledCourses = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get('http://localhost:8000/api/enrolled-courses');
//         console.log('API response:', response.data);

//         if (Array.isArray(response.data) && response.data.every(id => typeof id === 'string')) {
//           // If we only get an array of IDs, we need to fetch the full course data
//           const coursesData = await Promise.all(
//             response.data.map(id => axios.get(`http://localhost:8000/api/courses/${id}`))
//           );
//           setEnrolledCourses(coursesData.map(res => res.data));
//         } else {
//           setEnrolledCourses(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching enrolled courses:', error);
//         setError('Failed to load courses. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchEnrolledCourses();
//   }, []);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2>My Courses</h2>
//       {enrolledCourses.length === 0 ? (
//         <p>You are not enrolled in any courses yet.</p>
//       ) : (
//         <CourseGrid>
//           {enrolledCourses.map((course, index) => (
//             <CourseCard key={course._id || index}>
//               <Link to="/enrolled-course-detail">
//                 <CourseImage src={course.image} alt={course.title || 'Course image'} />
//                 <CourseInfo>
//                   <CourseTitle>{course.title || 'Untitled Course'}</CourseTitle>
//                   <CourseDescription>
//                     {(course.description && course.description.substring(0, 100)) || 'No description available'}...
//                   </CourseDescription>
//                 </CourseInfo>
//               </Link>
//             </CourseCard>
//           ))}
//         </CourseGrid>
//       )}
//     </div>
//   );
// }

// export default MyCourses;

import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Dropdown, Menu, Modal, message } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Meta } = Card;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const StyledCard = styled(Card)`
  .ant-card-cover img {
    height: 150px;
    object-fit: cover;
  }
`;

function MyCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:8000/api/enrolled-courses"
      );
      setEnrolledCourses(response.data);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveCourse = async (courseId) => {
    Modal.confirm({
      title: "Are you sure you want to remove this course?",
      content: "This action cannot be undone.",
      okText: "Yes",
      cancelText: "No",
      onOk: async () => {
        try {
          await axios.delete(
            `http://localhost:8000/api/enrolled-courses/${courseId}`
          );
          message.success("Course removed successfully");
          fetchEnrolledCourses(); // Refresh the course list
        } catch (error) {
          console.error("Error removing course:", error);
          message.error("Failed to remove course. Please try again.");
        }
      },
    });
  };

  const menu = (courseId) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handleRemoveCourse(courseId)}>
        Remove Course
      </Menu.Item>
    </Menu>
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>My Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>You are not enrolled in any courses yet.</p>
      ) : (
        <CourseGrid>
          {enrolledCourses.map((course) => (
            <StyledCard
              key={course._id}
              cover={
                <img alt={course.title || "Course image"} src={course.image} />
              }
              actions={[
                <Dropdown
                  key="more"
                  overlay={menu(course._id)}
                  trigger={["click"]}
                >
                  <EllipsisOutlined />
                </Dropdown>,
              ]}
            >
              {/* <Link to={`/enrolled-course-detail/${course._id}`}>  */}
              <Link to="/enrolled-course-detail">
                <Meta
                  title={course.title || "Untitled Course"}
                  description={
                    (course.description &&
                      course.description.substring(0, 100) + "...") ||
                    "No description available"
                  }
                />
              </Link>
            </StyledCard>
          ))}
        </CourseGrid>
      )}
    </div>
  );
}

export default MyCourses;
