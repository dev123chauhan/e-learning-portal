import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.png"
import card4 from "../../assets/card4.png"
import avatarImage from "../../assets/avatarImage.png"
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-left: 3rem;
`;

const SeeAll = styled.a`
  color: #00a0e9;
  text-decoration: none;
`;

const Grid = styled.div`
  ${'' /* display: grid; */}
  ${'' /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 3rem
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

const CourseTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
`;

const Description = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Instructor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Price = styled.div`
  span:first-child {
    text-decoration: line-through; 
    color: #888;
    margin-right: 5px;
  }
  span:last-child {
    color: #49BBBD;
    font-weight: bold;
  }
`;

const RecommendedCourse = () => {
  const courses = [
    {
      image: card1,
      category: 'Design',
      duration: '3 Month',
      title: 'AWS Certified solutions Architect',
      description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
      instructor: 'Lina',
      avatar: avatarImage,
      originalPrice: 100,
      discountedPrice: 80
    },
    {
        image: card2,
        category: 'Design',
        duration: '3 Month',
        title: 'AWS Certified solutions Architect',
        description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        instructor: 'Lina',
        avatar: avatarImage,
        originalPrice: 100,
        discountedPrice: 80
      },
      {
        image: card3,
        category: 'Design',
        duration: '3 Month',
        title: 'AWS Certified solutions Architect',
        description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        instructor: 'Lina',
        avatar: avatarImage,
        originalPrice: 100,
        discountedPrice: 80
      },
      {
        image: card4,
        category: 'Design',
        duration: '3 Month',
        title: 'AWS Certified solutions Architect',
        description: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
        instructor: 'Lina',
        avatar: avatarImage,
        originalPrice: 100,
        discountedPrice: 80
      },
  ];

  return (
    <Container>
      <Header>
        <Title>Recommended for you</Title>
        <SeeAll href="#">See all</SeeAll>
      </Header>
      <Grid>
        {courses.map((course, index) => (
          <Card key={index}>
            <Image src={course.image} alt={course.title} />
            <Content>
              <Category>
                <span>{course.category}</span>
                <span>{course.duration}</span>
              </Category>
              <CourseTitle>{course.title}</CourseTitle>
              <Description>{course.description}</Description>
              <Instructor>
                <InstructorInfo>
                  <Avatar src={course.avatar} alt={course.instructor} />
                  <span>{course.instructor}</span>
                </InstructorInfo>
                <Price>
                  <span>${course.originalPrice}</span>
                  <span>${course.discountedPrice}</span>
                </Price>
              </Instructor>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendedCourse;