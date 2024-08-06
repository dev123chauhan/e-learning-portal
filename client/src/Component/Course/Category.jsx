import design from "../../assets/design.png"
import development from "../../assets/development.png"
import buisness from "../../assets/buisness.png"
import marketing from "../../assets/marketing.png"
import photography from "../../assets/photography.png"
import acting from "../../assets/acting.png"
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;



const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

const categories = [
  { name: 'Design', image: design, color: '#E6F7F5' },
  { name: 'Development', image: development, color: '#E6E6FA' },
  { name: 'Business', image: buisness, color: '#E6F3FF' },
  { name: 'Marketing', image: marketing, color: '#E6F7F5' },
  { name: 'Photography', image: photography, color: '#FFF0E6' },
  { name: 'Acting', image: acting, color: '#FFE6E6' },
];

const Category = () => {
  return (
    <Grid>
      {categories.map((category, index) => (
        <Card key={index}>
       <img src={category.image} style={{ backgroundColor: category.color, padding:"20px",borderRadius: "8px", width:"20px" }}/>
          <Title>{category.name}</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmodadipiscing elit, sed do eiusmod
          </Description>
        </Card>
      ))}
    </Grid>
  );
};

export default Category;