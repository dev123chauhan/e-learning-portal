import styled from 'styled-components';
import bannerImage from "../../assets/bannerImage.png"
const HeroContainer = styled.section`
  display: flex;
  padding: 50px;
  color: white;
`;

const ContentArea = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  
  span {
    color: #FF7A00;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const CTAGroup = styled.div`
  display: flex;
`;

const JoinButton = styled.button`
  background-color: white;
  color: #53BFBA;
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  margin-right: 20px;
  cursor: pointer;
`;

const WatchButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 15px 30px;
  border: 1px solid white;
  border-radius: 25px;
  cursor: pointer;
`;

const ImageArea = styled.div`
  flex: 1;
  position: relative;
`;

const StudentImage = styled.img`
  width: 100%;
  max-width: 400px;
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const AssistedStudentCard = styled(InfoCard)`
  top: 20px;
  left: 20px;
`;

const UserExperienceCard = styled(InfoCard)`
  bottom: 100px;
  left: 50px;
`;

const CongratulationsCard = styled(InfoCard)`
  top: 150px;
  right: 50px;
`;

function Banner() {
  return (
    <HeroContainer>
      <ContentArea>
        <Title><span>Studying</span> Online is now much easier</Title>
        <Subtitle>TOTC is an interesting platform that will teach you in more an interactive way</Subtitle>
        <CTAGroup>
          <JoinButton>Join for free</JoinButton>
          <WatchButton>Watch how it works</WatchButton>
        </CTAGroup>
      </ContentArea>
      <ImageArea>
        <StudentImage src={bannerImage} alt="Student" />
        <AssistedStudentCard>
          250k Assisted Student
        </AssistedStudentCard>
        <UserExperienceCard>
          User Experience Class Today at 12.00 PM
          <button>Join Now</button>
        </UserExperienceCard>
        <CongratulationsCard>
          Congratulations
          Your admission completed
        </CongratulationsCard>
      </ImageArea>
    </HeroContainer>
  );
}

export default Banner;