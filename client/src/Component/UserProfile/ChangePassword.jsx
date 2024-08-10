import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
// import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { ClipLoader } from 'react-spinners';

const Container = styled.div`
  margin-top: 64px;
  margin-bottom: 192px;
`;

const Title = styled.h4`
  margin-bottom: 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: #49BBBD;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// const IconButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: inherit;
// `;

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setLoading(false);
      toast.error('New passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8000/api/change-password',
        { currentPassword, newPassword },
        {
          headers: { 'x-auth-token': token },
        }
      );
      console.log(response);
      toast.success('Password Changed Successfully');
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Toaster />
      <Title>Change Password</Title>
      <form onSubmit={handleSubmit}>
        {[{label: "Current Password", state: currentPassword, setState: setCurrentPassword, show: showCurrentPassword, setShow: setShowCurrentPassword},
          {label: "New Password", state: newPassword, setState: setNewPassword, show: showNewPassword, setShow: setShowNewPassword},
          {label: "Confirm Password", state: confirmPassword, setState: setConfirmPassword, show: showConfirmPassword, setShow: setShowConfirmPassword}
        ].map((input, index) => (
          <InputWrapper key={index}>
            <InputField
              type={input.show ? 'text' : 'password'}
              value={input.state}
              onChange={(e) => input.setState(e.target.value)}
              placeholder={input.label}
            />
            {/* <IconButton onClick={() => input.setShow(!input.show)}>
              {input.show ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
            </IconButton> */}
          </InputWrapper>
        ))}
        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color={"#fff"} /> : "Update"} 
        </Button>
      </form>
    </Container>
  );
};

export default ChangePassword;











// import { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import toast, { Toaster } from 'react-hot-toast';
// import { Visibility, VisibilityOff } from '@material-ui/icons';
// import { ClipLoader } from 'react-spinners';

// const Container = styled.div`
//   margin-top: 64px;
//   margin-bottom: 192px;
// `;

// const Title = styled.h4`
//   margin-bottom: 16px;
// `;

// const InputField = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 16px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px 0;
//   border: none;
//   background-color: #49BBBD;
//   color: white;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const IconButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: inherit;
// `;

// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (newPassword !== confirmPassword) {
//       setLoading(false);
//       toast.error('New passwords do not match');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         'http://localhost:8000/api/change-password',
//         { currentPassword, newPassword },
//         {
//           headers: { 'x-auth-token': token },
//         }
//       );
//       console.log(response);
//       toast.success('Password Changed Successfully');
//     } catch (error) {
//       toast.error(error.response?.data?.msg || 'Failed to change password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container>
//       <Toaster />
//       <Title>Change Password</Title>
//       <form onSubmit={handleSubmit}>
//         {[{label: "Current Password", state: currentPassword, setState: setCurrentPassword, show: showCurrentPassword, setShow: setShowCurrentPassword},
//           {label: "New Password", state: newPassword, setState: setNewPassword, show: showNewPassword, setShow: setShowNewPassword},
//           {label: "Confirm Password", state: confirmPassword, setState: setConfirmPassword, show: showConfirmPassword, setShow: setShowConfirmPassword}
//         ].map((input, index) => (
//           <div key={index}>
//             <InputField
//               type={input.show ? 'text' : 'password'}
//               value={input.state}
//               onChange={(e) => input.setState(e.target.value)}
//               placeholder={input.label}
//             />
//             <IconButton onClick={() => input.setShow(!input.show)}>
//               {input.show ? <Visibility /> : <VisibilityOff />}
//             </IconButton>
//           </div>
//         ))}
//         <Button type="submit" disabled={loading}>
//           {loading ? <ClipLoader size={20} color={"#fff"} /> : "Update"} 
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default ChangePassword;





// import { useState } from 'react';
// import axios from 'axios';
// import { Box,  IconButton, InputAdornment, TextField, Typography } from '@mui/material';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Visibility, VisibilityOff } from '@material-ui/icons';
// import { ClipLoader } from 'react-spinners';

// const ChangePassword = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false)
//   const [showNewPassword, setShowNewPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (newPassword !== confirmPassword) {
//       setLoading(false);
//       toast.error('New passwords do not match');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(
//         'http://localhost:8000/api/change-password',
//         { currentPassword, newPassword },
//         {
//           headers: { 'x-auth-token': token },
//         }
//       );
//        console.log(response)
      
//       toast.success('Password Changed Successfully');
//     } catch (error) {
//       toast.error(error.response?.data?.msg || 'Failed to change password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box className="changePassword" sx={{ mt: 4, mb:12 }}>
//       <ToastContainer />
//       <Typography variant="h4" gutterBottom>
//         Change Password
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             label="Current Password"
//             type={showCurrentPassword ? "text" : "password"}
//             variant="outlined"
//             value={currentPassword}
//             onChange={(e) => setCurrentPassword(e.target.value)}
//             InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
//                       {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//           />
//         </Box>
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             label="New Password"
//             type={showNewPassword ? "text" : "password"}
//             variant="outlined"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowNewPassword(!showNewPassword)}>
//                       {showNewPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//           />
//         </Box>
//         <Box mb={2}>
//           <TextField
//             fullWidth
//             label="Confirm Password"
//             type={showConfirmPassword ? "text" : "password"}
//             variant="outlined"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
//                       {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//           />
//         </Box>
//         <Box sx={{  mt: 2 }}>
//           <button style={{width:"100%"}} className='loginButton' type="submit" disabled={loading}>
//           {loading ? <ClipLoader size={20} color={"#fff"} /> : "Update"} 
//           </button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default ChangePassword;
