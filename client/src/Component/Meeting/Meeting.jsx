import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import person4 from "../../assets/person4.png"
import person5 from "../../assets/person5.png"
import video from "../../assets/video.png"
import audio from "../../assets/audio.png"
import arrow from "../../assets/arrow.png"
import screen from "../../assets/screen.png"
import call from "../../assets/call.png"
import meetingLeft from "../../assets/meetingLeft.png"
import meetingRight from "../../assets/meetingRight.png"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
  background-color: #f0f4f8;
  padding: 20px;
  margin-top: 4rem;
`;

const LeftSection = styled.div`
  flex: 2;
  margin-right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 5px 0 0 0;
  color: #666;
`;

const SettingsIcon = styled.span`
  font-size: 24px;
  color: #666;
`;

const VideoContainer = styled.div`
  position: relative;
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const MainVideo = styled.img`
  width: 100%;
  display: block;
`;

const ParticipantContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ParticipantImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ControlBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const ControlButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
`;

const CourseContents = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CourseSection = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
`;

const LessonItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const BookSection = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const BookContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const BookCard = styled.div`
  background-color: #f0f4f8;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
`;

const BookImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

function Meeting() {
  return (
    <Container>
      <LeftSection>
        <Header>
          <BackButton>←</BackButton>
          <div>
            <Title>UX/UI Design Confrence Meeting</Title>
            <Subtitle>9 Lesson 6h 30min</Subtitle>
          </div>
          <SettingsIcon>⚙️</SettingsIcon>
        </Header>
        <VideoContainer>
          <MainVideo src={person1} alt="Main video" />
          <ParticipantContainer>
            <ParticipantImage src={person2} alt="Participant 1" />
            <ParticipantImage src={person4} alt="Participant 2" />
            <ParticipantImage src={person5} alt="Participant 3" />
          </ParticipantContainer>
          <ControlBar>
            <ControlButton><img src={video} alt="" /></ControlButton>
            <ControlButton><img src={audio} alt="" /></ControlButton>
            <ControlButton><img src={call} alt="" /></ControlButton>
            <ControlButton><img src={screen} alt="" /></ControlButton>
            <ControlButton><img src={arrow} alt="" /></ControlButton>
          </ControlBar>
        </VideoContainer>
      </LeftSection>
      <RightSection>
        <CourseContents>
          <CourseHeader>
            <h2>Course Contents</h2>
            <span>2/5 COMPLETED 📅</span>
          </CourseHeader>
          <CourseSection>
            <SectionTitle>
              Get Started
              <span>1 Hour 5 Lessons</span>
            </SectionTitle>
          </CourseSection>
          <CourseSection>
            <SectionTitle>
              Illustrator Structures ▲
              <span>2 Hour 3 Lessons</span>
            </SectionTitle>
            <LessonItem>
              <span>1. Lorem ipsum dolor sit amet</span>
              <span>55:00</span>
            </LessonItem>
            <LessonItem>
              <span>2. Lorem ipsum dolor</span>
              <span>25:00 🔒</span>
            </LessonItem>
            <LessonItem>
              <span>3. Lorem ipsum dolor sit amet</span>
              <span>30:00 🔒</span>
            </LessonItem>
          </CourseSection>
          {/* Add more course sections as needed */}
        </CourseContents>
        <BookSection>
          <h2>Book for you</h2>
          <BookContainer>
            <BookCard>
              <BookImage src={meetingRight} alt="Book 1" />
              <h3>All Benefits of PLUS</h3>
              <p>$24</p>
            </BookCard>
            <BookCard>
              <BookImage src={meetingLeft} alt="Book 2" />
              <h3>All Benefits of PLUS</h3>
              <p>$24</p>
            </BookCard>
          </BookContainer>
        </BookSection>
      </RightSection>
    </Container>
  );
}

export default Meeting;