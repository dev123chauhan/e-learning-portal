import { useState } from "react";
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
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

  &:hover {
    background-color: #53BFBA;
  }
`;

const ForgotPassword = styled.a`
  text-align: right;
  color: #53BFBA;
  text-decoration: none;
  font-size: 14px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  input {
    margin-right: 10px;
  }
`;

export default function LoginForm() {
    // const [showPassword, setShowPassword] = useState(false);
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
   
  return (
    <>
    <Toaster/>
    <Form onSubmit={handleLogin}>
    <InputLabel>Email address</InputLabel>
    <Input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your User name" />
    <InputLabel>Password</InputLabel>
    <Input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
    <Checkbox>
      <input type="checkbox" id="remember" />
      <label htmlFor="remember">Remember me</label>
      <ForgotPassword href="#">Forgot Password?</ForgotPassword>
    </Checkbox>
    <Button type="submit">{loading ? <ClipLoader size={20} color={"#fff"} /> : "Login"}  </Button>
  </Form>
  </>
  )
}
