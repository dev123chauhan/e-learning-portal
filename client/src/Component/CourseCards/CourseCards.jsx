import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import card5 from "../../assets/card5.png"
import card6 from "../../assets/card6.png"
import card7 from "../../assets/card7.png"
import card8 from "../../assets/card8.png"
import styled from 'styled-components';
import noProfile from "../../assets/noProfile.jpg";
import useAuth from "../../hooks/useAuth";
import { IoMdTime } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
// Styled components for the card
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 60px;
`;

const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const CardTitle = styled.h5`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0 20px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
`;

const Tag = styled.span`
  ${'' /* background-color: #f2f2f2; */}
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  display:flex;
  align-items: center;
  gap: 5px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #49BBBD;
`;

// Sample data
const courses = [
  {
    id: 1,
    image: card1,
    title: "Html Css & Javascript",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 2,
    image: card2,
    title: "Python Fundamental",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 3,
    image: card3,
    title: "C Programming",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 4,
    image: card4,
    title: "C++",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 5,
    image: card5,
    title: "React",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 6,
    image: card6,
    title: "Node.Js",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 7,
    image: card7,
    title: "Mongodb",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
  {
    id: 8,
    image: card8,
    title: "Java",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    tag: "Design",
    duration: "3 Month",
    price: "$80"
  },
];
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 0 2px #53bfba;
  }
`;

// Main component
const CourseCards = () => {
  const { user } = useAuth();
  return (
    <CardGrid>
      {courses.map(course => (
        <Card key={course.id}>
          <CardImage src={course.image} alt={course.title} />
          <CardBody>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Tag><RxDashboard fontSize={20}/>{course.tag}</Tag>
              <Tag><IoMdTime fontSize={20}/>{course.duration}</Tag>
              
            </div>
            <CardTitle>{course.title}</CardTitle>
            <CardText>{course.text}</CardText>
          </CardBody>
          <CardFooter>
            <ProfileImage src={user?.profileImage ? `http://localhost:8000/uploads/${user.profileImage}` : noProfile}/>
            <Price>{course.price}</Price>
           
          </CardFooter>
        </Card>
      ))}
    </CardGrid>
  );
};

export default CourseCards;
