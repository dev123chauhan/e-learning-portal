import  { useState } from 'react';
import styled from 'styled-components';
import authImage from "../../assets/authImage.jpg"
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const Container = styled.div`
  display: flex;
  ${'' /* max-width: 1200px; */}
  ${'' /* margin: 0 auto; */}
  ${'' /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */}

`;

const ImageContainer = styled.div`
  flex: 2;
  background-image: url(${authImage});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 100vh;
  ${'' /* border-radius: 10px 0 0 10px; */}
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 40px;
  background-color: white;
  border-radius: 0 10px 10px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  background-color: #E0F4FF;
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.active ? '#53BFBA' : 'transparent'};
  color: ${props => props.active ? 'white' : 'black'};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: #666;
`;


const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <Container>
      <ImageContainer>
        <TextOverlay>
          <h2>Lorem Ipsum is simply</h2>
          <p>Lorem Ipsum is simply</p>
        </TextOverlay>
      </ImageContainer>
      <FormContainer>
        <Title>Welcome to lorem.!</Title>
        <TabContainer>
          <Tab 
            active={activeTab === 'login'} 
            onClick={() => setActiveTab('login')}
          >
            Login
          </Tab>
          <Tab 
            active={activeTab === 'register'} 
            onClick={() => setActiveTab('register')}
          >
            Register
          </Tab>
        </TabContainer>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Description>
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </FormContainer>
    </Container>
  );
};

export default AuthForm;

// import  { useState } from 'react';
// import styled from 'styled-components';
// import authImage from "../../assets/authImage.jpg"
// const Container = styled.div`
//   display: flex;
//   ${'' /* max-width: 1200px; */}
//   ${'' /* margin: 0 auto; */}
//   ${'' /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */}

// `;

// const ImageContainer = styled.div`
//   flex: 2;
//   background-image: url(${authImage});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   height: 100vh;
//   ${'' /* border-radius: 10px 0 0 10px; */}
// `;

// const TextOverlay = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   color: white;
//   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
// `;

// const FormContainer = styled.div`
//   flex: 1;
//   padding: 40px;
//   background-color: white;
//   border-radius: 0 10px 10px 0;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const TabContainer = styled.div`
//   display: flex;
//   background-color: #E0F4FF;
//   border-radius: 25px;
//   padding: 5px;
//   margin-bottom: 20px;
// `;

// const Tab = styled.button`
//   flex: 1;
//   padding: 10px 20px;
//   border: none;
//   background-color: ${props => props.active ? '#53BFBA' : 'transparent'};
//   color: ${props => props.active ? 'white' : 'black'};
//   border-radius: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// `;

// const Description = styled.p`
//   margin-bottom: 20px;
//   color: #666;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const InputLabel = styled.label`
//   margin-bottom: 5px;
//   color: #333;
// `;

// const Input = styled.input`
//   margin-bottom: 15px;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 25px;
//   font-size: 16px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: #53BFBA;
//   color: white;
//   border: none;
//   border-radius: 25px;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   font-size: 16px;

//   &:hover {
//     background-color: #53BFBA;
//   }
// `;

// const ForgotPassword = styled.a`
//   text-align: right;
//   color: #53BFBA;
//   text-decoration: none;
//   font-size: 14px;
// `;

// const Checkbox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;

//   input {
//     margin-right: 10px;
//   }
// `;

// const AuthForm = () => {
//   const [activeTab, setActiveTab] = useState('login');

//   const LoginForm = () => (
//     <Form>
//       <InputLabel>User name</InputLabel>
//       <Input type="text" placeholder="Enter your User name" />
//       <InputLabel>Password</InputLabel>
//       <Input type="password" placeholder="Enter your Password" />
//       <Checkbox>
//         <input type="checkbox" id="remember" />
//         <label htmlFor="remember">Remember me</label>
//         <ForgotPassword href="#">Forgot Password?</ForgotPassword>
//       </Checkbox>
//       <Button type="submit">Login</Button>
//     </Form>
//   );

//   const RegisterForm = () => (
//     <Form>
//       <InputLabel>Email Address</InputLabel>
//       <Input type="email" placeholder="Enter your Email Address" />
//       <InputLabel>User name</InputLabel>
//       <Input type="text" placeholder="Enter your User name" />
//       <InputLabel>Password</InputLabel>
//       <Input type="password" placeholder="Enter your Password" />
//       <Button type="submit">Register</Button>
//     </Form>
//   );

//   return (
//     <Container>
//       <ImageContainer>
//         <TextOverlay>
//           <h2>Lorem Ipsum is simply</h2>
//           <p>Lorem Ipsum is simply</p>
//         </TextOverlay>
//       </ImageContainer>
//       <FormContainer>
//         <Title>Welcome to lorem.!</Title>
//         <TabContainer>
//           <Tab 
//             active={activeTab === 'login'} 
//             onClick={() => setActiveTab('login')}
//           >
//             Login
//           </Tab>
//           <Tab 
//             active={activeTab === 'register'} 
//             onClick={() => setActiveTab('register')}
//           >
//             Register
//           </Tab>
//         </TabContainer>
//         <Description>
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </Description>
//         {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
//       </FormContainer>
//     </Container>
//   );
// };

// export default AuthForm;