import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const NavButton = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CourseTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Instructor = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const SidebarSection = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LessonList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LessonItem = styled.li`
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

function EnrolledCourse() {
  return (
    <PageContainer>
      <Sidebar>
        <h2>Course Content</h2>
        <SidebarSection>
          <SectionTitle>Getting Started</SectionTitle>
          <LessonList>
            <LessonItem>Welcome to the course</LessonItem>
            <LessonItem>What is React JS?</LessonItem>
            <LessonItem>Why React but not JavaScript ?</LessonItem>
            <LessonItem>Setting up Environment</LessonItem>
          </LessonList>
        </SidebarSection>
        {/* Add more sections here */}
      </Sidebar>
      <MainContent>
        <Header>
          <div>Welcome to the course</div>
          <div>
            <NavButton>Prev</NavButton>
            <NavButton>Next</NavButton>
            <NavButton>Mark as Complete</NavButton>
          </div>
        </Header>
        <VideoContainer>
          <CourseTitle>THE FULL STACK REACT COURSE</CourseTitle>
          <Instructor>BUILD AND DEPLOY AN E-COMMERCE APP</Instructor>
          <VideoPlayer />
        </VideoContainer>
        <h2>Welcome to the course</h2>
        <p>
          Hi! I am Thomas Wayne, your React.js instructor for this course. Let me tell you this, I am super happy to help
          you understand the core basics and advance topics of React.
        </p>
        <p>
          In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand
          React in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video
          lessons as well as assignments to help you test yourself.
        </p>
        <p>Lets start now without getting any further late, lets dive in.</p>
      </MainContent>
    </PageContainer>
  );
}

export default EnrolledCourse;