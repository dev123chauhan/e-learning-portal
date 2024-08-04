import styled from 'styled-components';
import classroom from "../../assets/classroom.png"
const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f5f5f5;
`;

const ContentSection = styled.div`
  flex: 1;
  padding-right: 40px;
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333366;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #00cccc;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const LearnMoreButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: #333366;
  text-decoration: none;
  border: 2px solid #333366;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333366;
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const GreenCircle = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: #00cc66;
  border-radius: 50%;
  top: -30px;
  left: -30px;
`;

const BlueShape = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #00cccc;
  border-radius: 0 0 100px 0;
  top: -20px;
  right: -20px;
`;

const PlayButton = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #00cccc;
    margin-left: 5px;
  }
`;

const Classroom = () => {
  return (
    <Container>
      <ContentSection>
        <Title>
          Everything you can do in a physical classroom, <Highlight>you can do with TOTC</Highlight>
        </Title>
        <Description>
          TOTCs school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
        </Description>
        <LearnMoreButton href="#">Learn more</LearnMoreButton>
      </ContentSection>
      <ImageSection>
        <GreenCircle />
        <BlueShape />
        <Image src={classroom} alt="Classroom" />
        <PlayButton />
      </ImageSection>
    </Container>
  );
};

export default Classroom;