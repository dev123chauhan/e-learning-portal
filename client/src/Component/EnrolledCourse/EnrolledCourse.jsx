import { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoPlayerEnrolledCourse from './VideoPlayer';
import video1 from "../../assets/html css.mp4"
import video2 from "../../assets/html css 2.mp4"
import video3 from "../../assets/html css 3.mp4"
import video4 from "../../assets/html css 4.mp4"
import { FiBook } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import PropTypes from 'prop-types';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: white;
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
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const VideoContainer = styled.div`
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
  color: ${props => props.isOpen ? '#49BBBD' : 'inherit'};
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
  color: ${props => props.active ? '#49BBBD' : '#666'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  font-size: 14px;
  cursor: pointer;
`;

const LessonIcon = styled.span`
  margin-right: 10px;
  color: #49BBBD;
`;

const SidebarTitle = styled.h2`
  color: #49BBBD;
  font-size: 18px;
  margin-bottom: 20px;
`;

function Accordion({ title, children, index, isOpen, toggleAccordion }) {
  return (
    <AccordionSection>
      <AccordionTitle isOpen={isOpen} onClick={() => toggleAccordion(index)}>
        {title}
        <span>{isOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}</span>
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionSection>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired
};

function EnrolledCourse() {
  const courseStructure = [
    {
      title: "Getting Started",
      lessons: [
        { title: "Welcome to the course", url: video1 },
        { title: "What is React JS?", url: video2 },
        { title: "Why React but not JavaScript?", url: video3 },
        { title: "Setting up Environment", url: video4 },
      ]
    },
    {
      title: "JavaScript refresher",
      lessons: [
        { title: "ES6+ Features", url: video1 },
        { title: "Async JavaScript", url: video2 },
      ]
    },
    {
      title: "React Basics & Working with Components",
      lessons: [
        { title: "Components Overview", url: video3 },
        { title: "Props and State", url: video4 },
      ]
    },
    {
      title: "React States & Working with events",
      lessons: [
        { title: "State Management", url: video1 },
        { title: "Event Handling", url: video2 },
      ]
    },
    {
      title: "Rendering listings",
      lessons: [
        { title: "List Rendering", url: video3 },
        { title: "Conditional Rendering", url: video4 },
      ]
    },
    {
      title: "Styling React Components",
      lessons: [
        { title: "CSS in React", url: video1 },
        { title: "Styled Components", url: video2 },
      ]
    },
    {
      title: "Debugging React Apps",
      lessons: [
        { title: "React Developer Tools", url: video3 },
        { title: "Common Debugging Techniques", url: video4 },
      ]
    },
    {
      title: "Practice : A complete project",
      lessons: [
        { title: "Project Setup", url: video1 },
        { title: "Building Components", url: video2 },
      ]
    },
    {
      title: "Diving Deeper",
      lessons: [
        { title: "Advanced React Patterns", url: video3 },
        { title: "Performance Optimization", url: video4 },
      ]
    },
    {
      title: "Advance Topics",
      lessons: [
        { title: "React Hooks", url: video1 },
        { title: "Context API", url: video2 },
      ]
    },
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const currentVideo = courseStructure[currentSectionIndex].lessons[currentLessonIndex];

  const openCorrectAccordion = (sectionIndex) => {
    if (!openAccordions.includes(sectionIndex)) {
      setOpenAccordions(prev => [...prev, sectionIndex]);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionIndex = currentSectionIndex - 1;
      setCurrentSectionIndex(prevSectionIndex);
      setCurrentLessonIndex(courseStructure[prevSectionIndex].lessons.length - 1);
      openCorrectAccordion(prevSectionIndex);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < courseStructure[currentSectionIndex].lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else if (currentSectionIndex < courseStructure.length - 1) {
      const nextSectionIndex = currentSectionIndex + 1;
      setCurrentSectionIndex(nextSectionIndex);
      setCurrentLessonIndex(0);
      openCorrectAccordion(nextSectionIndex);
    }
  };

  const markAsComplete = () => {
    const lessonId = `${currentSectionIndex}-${currentLessonIndex}`;
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const toggleAccordion = (index) => {
    setOpenAccordions(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleVideoComplete = () => {
    markAsComplete();
    handleNext();
  };

  useEffect(() => {
    openCorrectAccordion(currentSectionIndex);
  }, []);

  return (
    <PageContainer>
      <Sidebar>
        <SidebarTitle>Course Content</SidebarTitle>
        {courseStructure.map((section, sectionIndex) => (
          <Accordion 
            key={sectionIndex}
            title={section.title} 
            index={sectionIndex} 
            isOpen={openAccordions.includes(sectionIndex)}
            toggleAccordion={toggleAccordion}
          >
            {section.lessons.map((lesson, lessonIndex) => (
              <LessonItem
                key={lessonIndex}
                active={currentSectionIndex === sectionIndex && currentLessonIndex === lessonIndex}
                onClick={() => {
                  setCurrentSectionIndex(sectionIndex);
                  setCurrentLessonIndex(lessonIndex);
                  openCorrectAccordion(sectionIndex);
                }}
              >
                <LessonIcon>
                  {completedLessons.includes(`${sectionIndex}-${lessonIndex}`) ? <FaCheckCircle/> : <FiBook />}
                </LessonIcon>
                {lesson.title}
              </LessonItem>
            ))}
          </Accordion>
        ))}
      </Sidebar>
      <MainContent>
        <Header>
          <div>{currentVideo.title}</div>
          <div>
            <NavButton onClick={handlePrev} disabled={currentSectionIndex === 0 && currentLessonIndex === 0}>
              Prev
            </NavButton>
            <NavButton onClick={handleNext} disabled={currentSectionIndex === courseStructure.length - 1 && currentLessonIndex === courseStructure[courseStructure.length - 1].lessons.length - 1}>
              Next
            </NavButton>
            <NavButton onClick={markAsComplete} disabled={completedLessons.includes(`${currentSectionIndex}-${currentLessonIndex}`)}>
              {completedLessons.includes(`${currentSectionIndex}-${currentLessonIndex}`) ? "Completed" : "Mark as Complete"}
            </NavButton>
          </div>
        </Header>
        <VideoContainer>
          <CourseTitle>THE FULL STACK REACT COURSE</CourseTitle>
          <Instructor>BUILD AND DEPLOY AN E-COMMERCE APP</Instructor>
          <VideoPlayerEnrolledCourse
            videoSrc={currentVideo.url}
            onVideoComplete={handleVideoComplete}
          />
        </VideoContainer>
        <h2>{currentVideo.title}</h2>
        <p>
          This is where you can add the content for each lesson. You can include text, images, 
          code snippets, or any other relevant information for the current lesson.
        </p>
        {/* Add more content as needed */}
      </MainContent>
    </PageContainer>
  );
}

export default EnrolledCourse;




