import card1 from '../../assets/card1.png';
import styled from 'styled-components';
const Container = styled.div`
  background-color: #f0f8ff;
  padding: 2rem;
`;

const Content = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AuthorInfo = styled.p`
  color: #4682b4;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: #191970;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #708090;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #20b2aa;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-start;
`;

const ImageSection = styled.div`
  flex: 0.7;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
const Blog = () => (
  <Container>
    <Content>
      <TextSection>
        <AuthorInfo>By Themadbrains in Inspiration</AuthorInfo>
        <Title>Why Swift UI Should Be on the Radar of Every Mobile Developer</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor Lorem ipsum dolor sitamet, 
          consectetur adipiscing elit, sed do eiusmod tempor
        </Description>
        <Button>Start learning now</Button>
      </TextSection>
      <ImageSection>
        <img src={card1} alt="Developer workspace" />
      </ImageSection>
    </Content>
  </Container>
);

export default Blog;