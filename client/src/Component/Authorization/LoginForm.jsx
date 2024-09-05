import { useState } from "react";
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { FaRegEyeSlash, FaRegEye  } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
const Form = styled.form` 
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #53BFBA;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
  margin-bottom: 10px;

  ${'' /* &:hover {
    background-color: #53BFBA;
  } */}
`;

const ForgotPassword = styled.a`
  text-align: right;
  color: #53BFBA;
  text-decoration: none;
  font-size: 14px;
`;

// const Checkbox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
//   justify-content: space-between;

//   input {
//     margin-right: 10px;
//   }
// `;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;

  input {
    margin-right: 10px;
  }

  label {
    margin-right: auto;
  }

  a {
    margin-left: auto;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ShowPasswordIcon = styled.div`
  position: absolute;
  top: 45%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #53BFBA;
  font-size: 1.4rem;
`;
const GoogleButton = styled(Button)`
  background-color: white;
  display: flex;
  align-items: center;
  gap:10px;
  color: black;
  margin: auto;
`;
export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading spinner
    const navigate = useNavigate();
    const { login } = useAuth();
  
    const handleLogin = async (event) => {
      event.preventDefault();
      setLoading(true); // Show spinner
      try {
        const response = await axios.post('http://localhost:8000/api/login', { email, password });
        const token = response.data.token;
        login(token);
        toast.success('Successfully logged in!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
        setLoading(false); // Hide spinner
      } catch (error) {
        toast.error('Login failed. Please check your credentials.');
        setLoading(false); // Hide spinner
      }
    };
    const handleGoogleSuccess = async (response) => {
      setLoading(true);
      try {
        const result = await axios.post('http://localhost:8000/api/auth/google', {
          token: response.tokenId,
        });
        const token = result.data.token;
        login(token);
        toast.success('Successfully logged in with Google!');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        // toast.error('Google login failed. Please try again.');
      }
      setLoading(false);
    };
  
    const handleGoogleFailure = (error) => {
      console.error('Google login error:', error);
      // toast.error('Google login failed. Please try again.');
    };
  return (
    <>
    <Toaster/>
    <Form onSubmit={handleLogin}>
    <InputLabel>Email address</InputLabel>
    <Input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your User name" />
    <InputLabel>Password</InputLabel>
    <InputWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?  <FaRegEye /> : <FaRegEyeSlash /> }
          </ShowPasswordIcon>
        </InputWrapper>
    <Checkbox>
      <input type="checkbox" id="remember" />
      <label htmlFor="remember">Remember me</label>
      <ForgotPassword href="#">Forgot Password?</ForgotPassword>
    </Checkbox>
    <Button type="submit">{loading ? <ClipLoader size={20} color={"#fff"} /> : "Login"}  </Button>
    <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          render={renderProps => (
            <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
           <FcGoogle size={30}/>
           Login with Google
            </GoogleButton>
          )}
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
  </Form>
  </>
  )
}
