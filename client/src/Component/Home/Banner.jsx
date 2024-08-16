import styled from 'styled-components';
import bannerImage from "../../assets/bannerImage.png"
import PropTypes from 'prop-types';
import calendarIcon from "../../assets/calender.png"
import profileIcon from "../../assets/userProfile.png"
import mailIcon from "../../assets/email.png"
import baseImageSrc from "../../assets/mailBox.png"
import statsIcon from "../../assets/state.png"

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #49BBBD;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 50px 5%;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  text-align: center;
  z-index: 2;

  @media (min-width: 1024px) {
    width: 50%;
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  
  span {
    color: #FF7A00;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
  max-width: 500px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
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
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 15px 30px;
    font-size: 16px;
  }
`;

const JoinButton = styled(Button)`
  background-color: white;
  color: #49BBBD;
  border: none;
`;

const WatchButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '▶';
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: white;
    color: #49BBBD;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  margin-top: 30px;

  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 0;
  }
`;

const StudentImage = styled.img`
  width: 100%;
  ${'' /* max-width: 400px; */}
  display: block;
  margin: 0 auto;

  @media (min-width: 1024px) {
    position: absolute;
    right:100px;
    bottom: -500px;
    max-width: 600px;
    width: 120%;
  }
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 8px 12px;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-size: 12px;
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

const AssistedStudentCard = styled(InfoCard)`
  top: 40%;
  left: 50%;
`;

const UserExperienceCard = styled(InfoCard)`
  bottom: 25%;
  left: 50%;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
`;

const CongratulationsCard = styled(InfoCard)`
  top: 40%;
  right: 5%;
`;

const JoinNowButton = styled.button`
  background-color: #D8587E;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 5px;
`;

const WaveShape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  clip-path: ellipse(50% 100% at 50% 100%);

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const StatsIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

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
        <AssistedStudentCard>
          <img src={calendarIcon} alt="" width="20" height="20" /> 
          <div>
            <strong>250k</strong>
            <div>Assisted Student</div>
          </div>
        </AssistedStudentCard>
        <UserExperienceCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={profileIcon} alt="" width="20" height="20" /> 
            <div>
              <strong>User Experience Class</strong>
              <div>Today at 12.00 PM</div>
            </div>
          </div>
          <JoinNowButton>Join Now</JoinNowButton>
        </UserExperienceCard>
      <ImageArea>
        <StudentImage src={bannerImage} alt="Student" />
    
          
     
        <CongratulationsCard>
        <ImageContainer>
           <BaseImage src={baseImageSrc} alt="Base Image" />
           <OverlayImage src={mailIcon} alt="Overlay Image" />
          </ImageContainer>
          <div>
            <strong>Congratulations</strong>
            <div>Your admission completed</div>
          </div>
        </CongratulationsCard>
      </ImageArea>
      <WaveShape />
      <StatsIcon src={statsIcon} alt="Stats" />
    </HeroContainer>
  );
}

Banner.propTypes = {
  headerHeight: PropTypes.string
};

export default Banner;


// import styled from 'styled-components';
// import bannerImage from "../../assets/bannerImage.png"
// import PropTypes from 'prop-types';
// import calender from "../../assets/calender.png"
// import profile from "../../assets/userProfile.png"
// import baseImageSrc from "../../assets/mailBox.png"
// import mail from "../../assets/email.png"

// const HeroContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
//   min-height: 100vh;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     padding: 50px;
//   }
// `;

// const ContentArea = styled.div`
//   flex: 1;
//   width: 100%;
//   text-align: center;
//   margin-bottom: 30px;
//   padding: 0 20px;

//   @media (min-width: 768px) {
//     width: 50%;
//     text-align: left;
//     margin-bottom: 0;
//   }
// `;

// const Title = styled.h1`
//   font-size: 32px;
//   margin-bottom: 20px;
  
//   span {
//     color: #FF7A00;
//   }

//   @media (min-width: 768px) {
//     font-size: 48px;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 16px;
//   margin-bottom: 30px;

//   @media (min-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const CTAGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: flex-start;
//   }
// `;

// const Button = styled.button`
//   padding: 15px 30px;
//   border-radius: 25px;
//   cursor: pointer;
//   font-size: 16px;
//   width: 100%;
//   max-width: 250px;

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;

// const JoinButton = styled(Button)`
//   background-color: white;
//   color: #53BFBA;
//   border: none;
// `;

// const WatchButton = styled(Button)`
//   background-color: transparent;
//   color: white;
//   border: 1px solid white;
// `;

// const ImageArea = styled.div`
//   flex: 1;
//   width: 100%;
//   position: relative;
//   max-width: 400px;
//   margin: 0 auto;

//   @media (min-width: 768px) {
//     width: 50%;
//     max-width: none;
//     margin: 0;
//   }
// `;

// const StudentImage = styled.img`
//   width: 100%;
//   max-width: 400px;

//   @media (min-width: 768px) {
//     max-width: 100%;
//   }
// `;

// const InfoCard = styled.div`
//   background-color: white;
//   border-radius: 10px;
//   padding: 10px;
//   position: absolute;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//   font-size: 12px;

//   @media (min-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const AssistedStudentCard = styled(InfoCard)`
//   top: 5%;
//   left: 5%;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const UserExperienceCard = styled(InfoCard)`
//   bottom: 25%;
//   left: 5%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 10px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//   }
// `;

// const CongratulationsCard = styled(InfoCard)`
//   top: 40%;
//   right: 5%;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const styleColor = {
//   color: "black"
// };

// const styleButton = {
//   backgroundColor: "#D8587E",
//   color: "white",
//   borderRadius: "25px",
//   border: "none",
//   padding: "5px 15px",
//   fontSize: "12px",
//   cursor: "pointer"
// };

// const ImageContainer = styled.div`
//   position: relative;
//   width: 30px;
//   height: 30px;
// `;

// const BaseImage = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
// `;

// const OverlayImage = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 60%;
//   height: 60%;
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
//           <img src={calender} alt="" width="20" height="20" /> 
//           <p style={styleColor}>250k Assisted Student</p>
//         </AssistedStudentCard>
//         <UserExperienceCard>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//             <img src={profile} alt="" width="20" height="20" /> 
//             <p style={styleColor}>User Experience Class</p>
//           </div>
//           <button style={styleButton}>Join Now</button>
//         </UserExperienceCard>
//         <CongratulationsCard>
//           <ImageContainer>
//             <BaseImage src={baseImageSrc} alt="Base Image" />
//             <OverlayImage src={mail} alt="Overlay Image" />
//           </ImageContainer>
//           <p style={styleColor}>Congratulations Your admission completed</p> 
//         </CongratulationsCard>
//       </ImageArea>
//     </HeroContainer>
//   );
// }

// Banner.propTypes = {
//   headerHeight: PropTypes.string
// };

// export default Banner;






// import styled from 'styled-components';
// import bannerImage from "../../assets/bannerImage.png"
// import PropTypes from 'prop-types';
// import calender from "../../assets/calender.png"
// import profile from "../../assets/userProfile.png"
// import baseImageSrc from "../../assets/mailBox.png"
// import mail from "../../assets/email.png"

// const HeroContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   ${'' /* padding: 50px 20px; */}
//   align-items: center;
//   color: white;
//   ${'' /* background-color: #49BBBD; */}
//   min-height: 100vh;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     padding: 50px;
//   }
// `;

// const ContentArea = styled.div`
//   flex: 1;
//   text-align: center;
//   margin-bottom: 30px;

//   @media (min-width: 768px) {
//     text-align: left;
//     margin-bottom: 0;
//   }
// `;

// const Title = styled.h1`
//   font-size: 32px;
//   margin-bottom: 20px;
  
//   span {
//     color: #FF7A00;
//   }

//   @media (min-width: 768px) {
//     font-size: 48px;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 16px;
//   margin-bottom: 30px;

//   @media (min-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const CTAGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: flex-start;
//   }
// `;

// const Button = styled.button`
//   padding: 15px 30px;
//   border-radius: 25px;
//   cursor: pointer;
//   font-size: 16px;
//   width: 100%;
//   max-width: 250px;

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;

// const JoinButton = styled(Button)`
//   background-color: white;
//   color: #53BFBA;
//   border: none;
// `;

// const WatchButton = styled(Button)`
//   background-color: transparent;
//   color: white;
//   border: 1px solid white;
// `;

// const ImageArea = styled.div`
//   flex: 1;
//   position: relative;
//   width: 100%;
//   max-width: 400px;
//   margin: 0 auto;

//   @media (min-width: 768px) {
//     margin: 0;
//   }
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
//   font-size: 12px;

//   @media (min-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const AssistedStudentCard = styled(InfoCard)`
//   top: 5%;
//   left: 5%;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const UserExperienceCard = styled(InfoCard)`
//   bottom: 25%;
//   left: 5%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 10px;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     align-items: center;
//   }
// `;

// const CongratulationsCard = styled(InfoCard)`
//   top: 40%;
//   right: 5%;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const styleColor = {
//   color: "black"
// };

// const styleButton = {
//   backgroundColor: "#D8587E",
//   color: "white",
//   borderRadius: "25px",
//   border: "none",
//   padding: "5px 15px",
//   fontSize: "12px",
//   cursor: "pointer"
// };

// const ImageContainer = styled.div`
//   position: relative;
//   width: 30px;
//   height: 30px;
// `;

// const BaseImage = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
// `;

// const OverlayImage = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 60%;
//   height: 60%;
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
//           <img src={calender} alt="" width="20" height="20" /> 
//           <p style={styleColor}>250k Assisted Student</p>
//         </AssistedStudentCard>
//         <UserExperienceCard>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//             <img src={profile} alt="" width="20" height="20" /> 
//             <p style={styleColor}>User Experience Class</p>
//           </div>
//           <button style={styleButton}>Join Now</button>
//         </UserExperienceCard>
//         <CongratulationsCard>
//           <ImageContainer>
//             <BaseImage src={baseImageSrc} alt="Base Image" />
//             <OverlayImage src={mail} alt="Overlay Image" />
//           </ImageContainer>
//           <p style={styleColor}>Congratulations</p> 
//         </CongratulationsCard>
//       </ImageArea>
//     </HeroContainer>
//   );
// }

// Banner.propTypes = {
//   headerHeight: PropTypes.string
// };

// export default Banner;