import bannerImage from "../../assets/bannerImage.png"
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const TextContent = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  
  span:first-child {
    color: #00bcd4;
  }
  
  span:last-child {
    color: #3f51b5;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 45%;
`;

const StudentImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50% 50% 0 50%;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #ff7675;
  border-radius: 50%;
  top: -50px;
  right: -50px;
  z-index: -1;
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Dot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

const TeachersAndLearnersTools = () => {
  return (
    <Container>
      <TextContent>
        <Title>
          <span>Tools</span> For <span>Teachers</span><br />
          And Learners
        </Title>
        <Paragraph>
          Class has a dynamic set of teaching tools built to
          be deployed and used during class. Teachers can
          handout assignments in real-time for students to
          complete and submit.
        </Paragraph>
      </TextContent>
      <ImageContainer>
        <BackgroundCircle />
        <StudentImage src={bannerImage} alt="Student" />
        <FloatingIcon color="#4285f4" style={{ top: '10%', right: '20%' }}>🎓</FloatingIcon>
        <FloatingIcon color="#fbbc05" style={{ bottom: '20%', left: '10%' }}>📚</FloatingIcon>
        <Dot color="#4CAF50" style={{ top: '5%', right: '5%' }} />
        <Dot color="#9C27B0" style={{ bottom: '15%', right: '25%' }} />
        <Dot color="#FF5722" style={{ top: '40%', left: '5%' }} />
      </ImageContainer>
    </Container>
  );
};

export default TeachersAndLearnersTools;