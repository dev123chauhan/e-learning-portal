// import styled from 'styled-components';
// import bannerImage from "../../assets/bannerImage.png"
// import PropTypes from 'prop-types';
// import calender from "../../assets/calender.png"
// import profile from "../../assets/userProfile.png"
// import baseImageSrc from "../../assets/mailBox.png"
// import mail from "../../assets/email.png"
// const HeroContainer = styled.section`
//   display: flex;
//   padding: 50px;
//   align-items:center;
//   ${'' /* padding-top: ${props => props.headerHeight || '50px'}; */}
//   color: white;
//   background-color: #49BBBD; // Add this to match the image background
//   min-height: 100vh; // This ensures the banner takes up at least the full viewport height
// `;

// const ContentArea = styled.div`
//   flex: 1;
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   margin-bottom: 20px;
  
//   span {
//     color: #FF7A00;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   margin-bottom: 30px;
// `;

// const CTAGroup = styled.div`
//   display: flex;
// `;

// const JoinButton = styled.button`
//   background-color: white;
//   color: #53BFBA;
//   padding: 15px 30px;
//   border: none;
//   border-radius: 25px;
//   margin-right: 20px;
//   cursor: pointer;
// `;

// const WatchButton = styled.button`
//   background-color: transparent;
//   color: white;
//   padding: 15px 30px;
//   border: 1px solid white;
//   border-radius: 25px;
//   cursor: pointer;
// `;

// const ImageArea = styled.div`
//   flex: 1;
//   position: relative;
// `;

// const StudentImage = styled.img`
//   width: 100%;
//   max-width: 400px;
// `;

// const InfoCard = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   padding: 10px;
//   position: absolute;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// `;

// const AssistedStudentCard = styled(InfoCard)`
//   top: 20px;
//   left: 20px;
//   display: flex;
//   align-items: center;
//   gap:10px
// `;

// const UserExperienceCard = styled(InfoCard)`
//   bottom: 100px;
//   left: 50px;
//   display:flex;
//   align-items: center;
//   gap: 10px;
// `;

// const CongratulationsCard = styled(InfoCard)`
//   top: 150px;
//   right: 50px;
//   display:flex;
//   align-items: center;
//   gap:10px;
// `;

// const styleColor ={
//   color:"black"
// }
// const styleButton = {
//   backgroundColor:"#D8587E",
//   color:"white",
//   borderRadius:"25px",
//   border:"none",
//   padding:"10px 30px"
// }
// const ImageContainer = styled.div`
//   position: relative;
//   width: fit-content; // Adjust according to your needs
// `;

// const BaseImage = styled.img`
//   display: block; // Ensures the image doesn't have extra space at the bottom
//   width: 100%; // Adjust according to your needs
// `;

// const OverlayImage = styled.img`
//   position: absolute;
//   top: 10px; // Change as needed
//   left: 10px; // Change as needed// Ensures overlay covers the base image entirely // Optional: makes the overlay semi-transparent
// `;

// function Banner({ headerHeight }) {
//   return (
//     <HeroContainer headerHeight={headerHeight}>
//       <ContentArea>
//         <Title><span>Studying</span> Online is now much easier</Title>
//         <Subtitle>TOTC is an interesting platform that will teach you in more an interactive way</Subtitle>
//         <CTAGroup>
//           <JoinButton>Join for free</JoinButton>
//           <WatchButton>Watch how it works</WatchButton>
//         </CTAGroup>
//       </ContentArea>
//       <ImageArea>
//         <StudentImage src={bannerImage} alt="Student" />
//         <AssistedStudentCard>
//          <img src={calender} alt="" /> 
//          <p style={styleColor}>250k Assisted Student</p>
//         </AssistedStudentCard>
//         <UserExperienceCard>
//         <img src={profile} alt="" /> 
//         <p style={styleColor}>User Experience Class Today at 12.00 PM</p>
          
//           <button style={styleButton}>Join Now</button>
//         </UserExperienceCard>
//         <CongratulationsCard>
//         <ImageContainer>
//       <BaseImage src={baseImageSrc} alt="Base Image" />
//       <OverlayImage src={mail} alt="Overlay Image" />
//     </ImageContainer>
//         <p style={styleColor}>Congratulations Your admission completed</p> 
//         </CongratulationsCard>
//       </ImageArea>
//     </HeroContainer>
//   );
// }
// Banner.propTypes = {
//   headerHeight: PropTypes.string
// };

// export default Banner;


import styled from 'styled-components';
import bannerImage from "../../assets/bannerImage.png"
import PropTypes from 'prop-types';
import calender from "../../assets/calender.png"
import profile from "../../assets/userProfile.png"
import baseImageSrc from "../../assets/mailBox.png"
import mail from "../../assets/email.png"

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  align-items: center;
  color: white;
  background-color: #49BBBD;
  min-height: 100vh;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 50px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  
  span {
    color: #FF7A00;
  }

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  max-width: 250px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const JoinButton = styled(Button)`
  background-color: white;
  color: #53BFBA;
  border: none;
`;

const WatchButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
`;

const ImageArea = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
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
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const AssistedStudentCard = styled(InfoCard)`
  top: 5%;
  left: 5%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserExperienceCard = styled(InfoCard)`
  bottom: 25%;
  left: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const CongratulationsCard = styled(InfoCard)`
  top: 40%;
  right: 5%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const styleColor = {
  color: "black"
};

const styleButton = {
  backgroundColor: "#D8587E",
  color: "white",
  borderRadius: "25px",
  border: "none",
  padding: "5px 15px",
  fontSize: "12px",
  cursor: "pointer"
};

const ImageContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

const BaseImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
`;

function Banner({ headerHeight }) {
  return (
    <HeroContainer headerHeight={headerHeight}>
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
          <img src={calender} alt="" width="20" height="20" /> 
          <p style={styleColor}>250k Assisted Student</p>
        </AssistedStudentCard>
        <UserExperienceCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={profile} alt="" width="20" height="20" /> 
            <p style={styleColor}>User Experience Class</p>
          </div>
          <button style={styleButton}>Join Now</button>
        </UserExperienceCard>
        <CongratulationsCard>
          <ImageContainer>
            <BaseImage src={baseImageSrc} alt="Base Image" />
            <OverlayImage src={mail} alt="Overlay Image" />
          </ImageContainer>
          <p style={styleColor}>Congratulations</p> 
        </CongratulationsCard>
      </ImageArea>
    </HeroContainer>
  );
}

Banner.propTypes = {
  headerHeight: PropTypes.string
};

export default Banner;