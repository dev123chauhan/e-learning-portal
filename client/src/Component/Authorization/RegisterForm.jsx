import { useState } from 'react';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { ClipLoader } from "react-spinners";
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


export default function RegisterForm() {
     // const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password } = formData;
    try {
      await axios.post("http://localhost:8000/api/register", {
        username: name,
        email,
        password,
      });
      toast.success("Successfully registered");
      setTimeout(() => {
        setLoading(false);
      }, 1200);
    } catch (error) {
      toast.error("Registration failed");
      console.error("Error registering user:", error);
      setLoading(false);
    }
  };
  return (
    <>
    <Toaster/>
    <Form onSubmit={handleSubmit}>
    
      <InputLabel>User name</InputLabel>
      <Input type="text" value={formData.name}   name="name" onChange={handleChange} placeholder="Enter your User name" />
      <InputLabel>Email Address</InputLabel>
      <Input type="email"   name="email"  value={formData.email} onChange={handleChange} placeholder="Enter your Email Address" />
      <InputLabel>Password</InputLabel>
      <Input type="password"    name="password"  value={formData.password} onChange={handleChange} placeholder="Enter your Password" />
      <Button type="submit">{loading ? <ClipLoader size={20} color={"#fff"} /> : "Register"}  </Button>
    </Form>
    </>
  )
}
