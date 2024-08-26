import styled from 'styled-components';
import noProfile from "../../assets/noProfile.jpg";
import useAuth from "../../hooks/useAuth";
import { IoMdTime } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import axios from "axios"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// Styled components for the card
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 60px;
`;

const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h5`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0 20px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
`;

const Tag = styled.span`
  ${'' /* background-color: #f2f2f2; */}
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  display:flex;
  align-items: center;
  gap: 5px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #49BBBD;
`;


const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 0 2px #53bfba;
  }
`;
function cropText(text, maxLength) {
  if (text?.length <= maxLength) {
    return text;
  }
  return text?.substring(0, maxLength) + '...';
}


// Main component
// const CourseCards = ({ searchTerm, subjectFilter }) => {
const CourseCards = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();


  



  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/courses');
        setCourses(response.data);
        console.log(response.data)
      } catch (error) {
        // setError('Error fetching courses');
        console.error('Error fetching courses:', error);
      } finally {
        // setLoading(false);
      }
    };

    fetchCourses();
  }, []);


  const handleCardClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return ( 
    <CardGrid>
      {courses.map(course => (
        <Card key={course.id} onClick={() => handleCardClick(course.id)}>
        <CardImage src={course.image} alt={course.image} />
          <CardBody>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Tag><RxDashboard fontSize={20}/>{course.tag}</Tag>
              <Tag><IoMdTime fontSize={20}/>{course.duration}</Tag>
              
            </div>
            <CardTitle>{course.title}</CardTitle>
            <CardText>{cropText(course.description, 65)}</CardText>
          </CardBody>
          <CardFooter>
            <ProfileImage src={user?.profileImage ? `http://localhost:8000/uploads/${user.profileImage}` : noProfile}/> {user?.username}
            <Price>{course.price}</Price>
          </CardFooter>
        </Card>
      ))}
    </CardGrid>
  );
};
CourseCards.propTypes = {
  searchTerm: PropTypes.string,
  subjectFilter: PropTypes.string, // Define the expected prop type
};
export default CourseCards;



  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/api/courses`);
  //       let filteredCourses = response.data;

  //       if (searchTerm) {
  //         filteredCourses = filteredCourses.filter((course) =>
  //           course.title.toLowerCase().includes(searchTerm.toLowerCase())
  //         );
  //       }

  //       if (subjectFilter && subjectFilter !== 'All') {
  //         filteredCourses = filteredCourses.filter((course) =>
  //           course.tag.toLowerCase().includes(subjectFilter.toLowerCase())
  //         );
  //       }

  //       setCourses(filteredCourses);
  //     } catch (error) {
  //       console.error('Error fetching the courses:', error);
  //     }
  //   };

  //   fetchCourses();
  // }, [searchTerm, subjectFilter]);


  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/api/courses${searchTerm ? `?search=${searchTerm}` : ''}`);
  //       setCourses(response.data);
  //     } catch (error) {
  //       console.error('Error fetching the courses:', error);
  //     }
  //   };

  //   const delayDebounceFn = setTimeout(() => {
  //     fetchCourses();
  //   }, 300);


  //   return () => clearTimeout(delayDebounceFn);
  // }, [searchTerm]);