import courseDetailImage from "../../assets/courseDetailImg.png"
import styled from 'styled-components';
import Rating from "./Rating";
const Container = styled.div`
  ${'' /* max-width: 1200px; */}
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const ImageSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 400px;
`;

const OverlayCard = styled.div`
  position: absolute;
  right: 70px;
  top: 235px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const SmallImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-left: 10px;
`;

const Discount = styled.span`
  color: #49BBBD;
  margin-left: 10px;
`;

const TimeLeft = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const BuyNowButton = styled.button`
  width: 100%;
  padding: 7px;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const CourseIncludes = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CourseItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #49BBBD;
    margin-right: 10px;
  }
`;

const ShareSection = styled.div`
  display: flex;
  gap: 10px;
`;

const ShareIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;
const OverviewSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
const OverviewButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#49BBBD' : '#f0f0f0'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'black'};
`;

function CourseDetail() {
  return (
    <Container>
      <ImageSection>
        <MainImage src={courseDetailImage} alt="Course overview" />
        <OverlayCard>
          <SmallImage src={courseDetailImage} alt="Course thumbnail" />
          <PriceSection>
            <CurrentPrice>$49.65</CurrentPrice>
            <OriginalPrice>$99.99</OriginalPrice>
            <Discount>50% Off</Discount>
          </PriceSection>
          <TimeLeft>11 hour left at this price</TimeLeft>
          <BuyNowButton>Buy Now</BuyNowButton>
          <h3>This Course included</h3>
          <CourseIncludes>
            <CourseItem>Money Back Guarantee</CourseItem>
            <CourseItem>Access on all devices</CourseItem>
            <CourseItem>Certification of completion</CourseItem>
            <CourseItem>32 Module</CourseItem>
          </CourseIncludes>
          <h3>Training 5 or more people</h3>
          <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <h3>Share this course</h3>
          <ShareSection>
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
            <ShareIcon />
          </ShareSection>
        </OverlayCard>
      </ImageSection>
      
      <OverviewSection>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton>Overview</OverviewButton>
        <OverviewButton active>Overview</OverviewButton>
      </OverviewSection>
      <Rating/>
    </Container>
  );
}

export default CourseDetail;

// import courseDetailImage from "../../assets/courseDetailImg.png"
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const ImageSection = styled.div`
//   position: relative;
//   margin-bottom: 20px;
// `;

// const MainImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const SmallImageOverlay = styled.div`
//   position: absolute;
//   right: 20px;
//   bottom: 20px;
//   background: white;
//   padding: 10px;
//   border-radius: 5px;
// `;

// const SmallImage = styled.img`
//   width: 150px;
//   height: auto;
// `;

// const PriceOverlay = styled.div`
//   position: absolute;
//   right: 20px;
//   top: 20px;
//   background: white;
//   padding: 10px;
//   border-radius: 5px;
// `;

// const CurrentPrice = styled.span`
//   font-size: 24px;
//   font-weight: bold;
//   color: #000;
// `;

// const OriginalPrice = styled.span`
//   text-decoration: line-through;
//   color: #888;
//   margin-left: 10px;
// `;

// const Discount = styled.span`
//   color: #49BBBD;
//   margin-left: 10px;
// `;

// const OverviewSection = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const OverviewButton = styled.button`
//   padding: 10px 20px;
//   background-color: ${props => props.active ? '#49BBBD' : '#f0f0f0'};
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   color: ${props => props.active ? 'white' : 'black'};
// `;

// const ContentSection = styled.div`
//   display: flex;
//   gap: 20px;
// `;

// const LeftColumn = styled.div`
//   flex: 2;
// `;

// const RightColumn = styled.div`
//   flex: 1;
// `;

// const TimeLeft = styled.p`
//   color: #888;
//   font-size: 14px;
// `;

// const BuyNowButton = styled.button`
//   width: 100%;
//   padding: 15px;
//   background-color: #49BBBD;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 18px;
//   cursor: pointer;
//   margin-bottom: 20px;
// `;

// const CourseIncludes = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const CourseItem = styled.li`
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
  
//   &:before {
//     content: '✓';
//     color: #49BBBD;
//     margin-right: 10px;
//   }
// `;

// const ShareSection = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const ShareIcon = styled.div`
//   width: 30px;
//   height: 30px;
//   background-color: #f0f0f0;
//   border-radius: 50%;
// `;

// function CourseDetail() {
//   return (
//     <Container>
//       <ImageSection>
//         <MainImage src={courseDetailImage} alt="Course overview" />
//         <SmallImageOverlay>
//           <SmallImage src={courseDetailImage} alt="Course thumbnail" />
//         </SmallImageOverlay>
//         <PriceOverlay>
//           <CurrentPrice>$49.65</CurrentPrice>
//           <OriginalPrice>$99.99</OriginalPrice>
//           <Discount>50% Off</Discount>
//         </PriceOverlay>
//       </ImageSection>
      
    //   <OverviewSection>
    //     <OverviewButton>Overview</OverviewButton>
    //     <OverviewButton>Overview</OverviewButton>
    //     <OverviewButton>Overview</OverviewButton>
    //     <OverviewButton active>Overview</OverviewButton>
    //   </OverviewSection>
      
//       <ContentSection>
//         <LeftColumn>
//           {/* Add content for left column */}
//         </LeftColumn>
//         <RightColumn>
//           <TimeLeft>11 hour left at this price</TimeLeft>
//           <BuyNowButton>Buy Now</BuyNowButton>
//           <h3>This Course included</h3>
//           <CourseIncludes>
//             <CourseItem>Money Back Guarantee</CourseItem>
//             <CourseItem>Access on all devices</CourseItem>
//             <CourseItem>Certification of completion</CourseItem>
//             <CourseItem>32 Module</CourseItem>
//           </CourseIncludes>
//           <h3>Training 5 or more people</h3>
//           <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
//           <h3>Share this course</h3>
//           <ShareSection>
//             <ShareIcon />
//             <ShareIcon />
//             <ShareIcon />
//             <ShareIcon />
//             <ShareIcon />
//           </ShareSection>
//         </RightColumn>
//       </ContentSection>
//     </Container>
//   );
// }

// export default CourseDetail;