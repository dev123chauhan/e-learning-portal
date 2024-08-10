import styled from 'styled-components';
import VideoPlayerEnrolledCourse from './VideoPlayer';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
  ${'' /* background-color: #d4fff1; */}
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  ${'' /* background-color: #2c3e50; */}
  color: black;
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

// const SidebarSection = styled.div`
//   margin-bottom: 15px;
// `;

// const SectionTitle = styled.h3`
//   font-size: 18px;
//   margin-bottom: 10px;
// `;

// const LessonList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const LessonItem = styled.li`
//   margin-bottom: 8px;
//   cursor: pointer;
//   &:hover {
//     color: #007bff;
//   }
// `;

const AccordionSection = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
`;

const AccordionContent = styled.div`
  padding-left: 20px;
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

const LessonItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: #666;
  font-size: 14px;
`;

const LessonIcon = styled.span`
  margin-right: 10px;
  color: #2196f3;
`;
const SidebarTitle = styled.h2`
  color: #2196f3;
  font-size: 18px;
  margin-bottom: 20px;
`;
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionSection>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span>
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionSection>
  );
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};
function EnrolledCourse() {
  return (
    <PageContainer>
      {/* <Sidebar>
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
      </Sidebar> */}
      <Sidebar>
        <SidebarTitle>Course Content</SidebarTitle>
        <Accordion title="Getting Started">
          <LessonItem>
            <LessonIcon>📘</LessonIcon>
            Welcome to the course
          </LessonItem>
          <LessonItem>
            <LessonIcon>🕒</LessonIcon>
            What is React JS?
          </LessonItem>
          <LessonItem>
            <LessonIcon>🕒</LessonIcon>
            Why React but not JavaScript ?
          </LessonItem>
          <LessonItem>
            <LessonIcon>📘</LessonIcon>
            Setting up Environment
          </LessonItem>
        </Accordion>
        <Accordion title="JavaScript refresher" />
        <Accordion title="React Basics & Working with Components" />
        <Accordion title="React States & Working with events" />
        <Accordion title="Rendering listings" />
        <Accordion title="Styling React Components" />
        <Accordion title="Debugging React Apps" />
        <Accordion title="Practice : A complete project" />
        <Accordion title="Diving Deeper" />
        <Accordion title="Advance Topics" />
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
          <VideoPlayerEnrolledCourse />
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