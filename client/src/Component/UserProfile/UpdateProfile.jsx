import styled from 'styled-components';
import { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from 'react-hot-toast';
import { ClipLoader } from "react-spinners";

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: block;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const GridItem = styled.div`
  flex: 1 1 100%;

  @media (min-width: 600px) {
    flex: 1 1 50%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #000;
  display: block;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #49BBBD;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #49BBBD;
  }
`;

const UpdateProfile = () => {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "Male",
    dateOfBirth: user?.dateOfBirth ? new Date(user.dateOfBirth).toISOString().substr(0, 10) : "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:8000/api/update-profile",
        formData,
        { headers: { "x-auth-token": token } }
      );
      setUser(res.data.user);
      setLoading(false);
      toast.success('User profile updated successfully');
    } catch (err) {
      toast.error('Error updating profile');
      setLoading(false);
    }
  };

  return (
    <Container>
      <Toaster />
      <Title>Update Profile</Title>
      <Form onSubmit={handleSubmit}>
        <Grid>
          <GridItem>
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" type="text" value={formData.username} onChange={handleChange} required />
          </GridItem>
          <GridItem>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </GridItem>
          <GridItem>
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Input id="mobileNumber" name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
          </GridItem>
          <GridItem>
            <Label htmlFor="address">Address</Label>
            <Input as="textarea" id="address" name="address" rows="4" value={formData.address} onChange={handleChange} />
          </GridItem>
          <Button type="submit">
            {loading ? <ClipLoader size={20} color={"#fff"} /> : "Save Changes"}
          </Button>
        </Grid>
      </Form>
    </Container>
  );
};

export default UpdateProfile;





// import { useState } from "react";
// import axios from "axios";
// import useAuth from "../../hooks/useAuth";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   TextField,
//   FormControl,
//   Typography,
//   Box,
//   Grid,
//   FormControlLabel,
//   RadioGroup,
//   FormLabel,
//   Radio,
// } from "@mui/material";
// import { ClipLoader } from "react-spinners";

// const UpdateProfile = () => {
//   const { user, setUser } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     username: user?.username || "",
//     email: user?.email || "",
//     mobileNumber: user?.mobileNumber || "",
//     gender: user?.gender || "Male",
//     dateOfBirth: user?.dateOfBirth
//       ? new Date(user.dateOfBirth).toISOString().substr(0, 10)
//       : "",
//     address: user?.address || "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/update-profile",
//         formData,
//         {
//           headers: { "x-auth-token": token },
//         }
//       );
//       setUser(res.data.user);
//       setTimeout(() => {
//         setLoading(false); // Hide spinner
//       }, 1000);
//       toast.success('User profile updated successfully');
//     } catch (err) {
//       console.error(
//         "Error updating profile:",
//         err.response?.data || err.message
//       );
//       toast.error('Please update a field');
//       setLoading(false);
//     }
//     // setLoading(false);
//   };

//   return (
   
//     <Box>
//           <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Update Profile
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={1}>
//           <Grid item xs={12} sm={6}>
          
//               <TextField
//                 fullWidth
//                 margin="normal"
//                 label="Username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
     
//           </Grid>
//           <Grid item xs={12} sm={6}>
         
//               <TextField
//                 fullWidth
//                 margin="normal"
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
        
//           </Grid>
         

//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Mobile Number"
//               name="mobileNumber"
//               type="tel"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControl component="fieldset" margin="normal">
//             <FormLabel component="legend">Gender</FormLabel>
//             <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
//               <FormControlLabel value="Male" control={<Radio />} label="Male" />
//               <FormControlLabel value="Female" control={<Radio />} label="Female" />
//               <FormControlLabel value="Other" control={<Radio />} label="Other" />
//             </RadioGroup>
//           </FormControl>

         
//           </Grid>

//           <TextField
//             fullWidth
//             margin="normal"
//             label="Date of Birth"
//             name="dateOfBirth"
//             type="date"
//             InputLabelProps={{ shrink: true }}
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Address"
//             name="address"
//             multiline
//             rows={4}
//             value={formData.address}
//             onChange={handleChange}
//           />
//           <button
//             style={{width:"100%", borderRadius:"4px"}}
//             type="submit"
//           >
//         {loading ? <ClipLoader size={20} color={"#fff"} /> : " Save Changes"}       
//           </button>
//         </Grid>
//       </form>
//     </Box>

//   );
// };

// export default UpdateProfile;
