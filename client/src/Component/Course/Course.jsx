import card1 from "../../assets/card1.png"
import courseImg from "../../assets/courseImg.png"
import avatarImage from "../../assets/avatarImage.png"
import bgCourse from "../../assets/bgCourse.png"
import courseImg2 from "../../assets/courseImg2.png"
import styled from 'styled-components';
import Category from "./Category"
import RecommendedCourse from "./RecommendedCourse"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
 
`;
const styleBg = {
    backgroundImage: `url(${bgCourse})`
};
const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const CourseCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CourseInfo = styled.div`
  padding: 15px;
`;

const CourseName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const InstructorAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const InstructorName = styled.span`
  font-size: 14px;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  height: 5px;
  margin-top: 10px;
`;

const Progress = styled.div`
  width: 70%;
  height: 100%;
  background-color: #49BBBD;
`;

const LessonInfo = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
  margin-top: 5px;
`;

const Course = () => {
    const courseImages = [card1, courseImg, courseImg2];
  return (
    <>
    <div style={styleBg}>
    <Container>
    <Title>Welcome back, ready for your next lesson?</Title>
    <CourseGrid>
      {courseImages.map((image, index) => (
        <CourseCard key={index}>
          <CourseImage src={image} alt={`Course thumbnail ${index + 1}`} />
          <CourseInfo>
            <CourseName>AWS Certified Solutions Architect</CourseName>
            <InstructorInfo>
              <InstructorAvatar src={avatarImage} alt="Instructor" />
              <InstructorName>Lina</InstructorName>
            </InstructorInfo>
            <ProgressBar>
              <Progress />
            </ProgressBar>
            <LessonInfo>Lesson 5 of 7</LessonInfo>
          </CourseInfo>
        </CourseCard>
      ))}
    </CourseGrid>
  </Container>

  </div>
  <Category/>
  <RecommendedCourse/>
  </>
  );
};

export default Course;