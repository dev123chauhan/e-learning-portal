import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Container = styled.div`
  flex-grow: 1;
  padding: 2rem;
  margin-top: 5rem;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const GridItem = styled.div`
  flex: 1;
  min-width: calc(50% - 2rem);
`;

const Paper = styled.div`
  padding: 2rem;
  background-color: #fff;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #49bbbd;
  font-weight: bold;
  text-align: center;
`;

const GetTitle = styled.h6`
  margin-bottom: 1rem;
  color: black;
  font-size: 1rem;
`;

const TextField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #49bbbd;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 10rem;
  &:focus {
    border-color: #49bbbd;
  }
`;

const Button = styled.button`
  background-color: #49bbbd;
  color: #fff;
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #3a9da1;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  font-size: 1.5rem;
`;
const ContactDetail = styled.h4`
  font-weight: 400;
`;
const ContactDetailIcon = styled.h2`
   display: flex;
   gap: 20px;
`; 
const styleIconColorFacebook ={
  color:"#3b5998"
}
const styleIconColorYoutube ={
  color:"#FF0000"
}
const styleIconColorTwitter ={
  color:"#1DA1F2"
}



const Contact = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/contact",
        formData
      );
      console.log(res.data);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Thanks for contact");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container>
      <Toaster />
      <Title>Contact Us</Title>
      <GridContainer>
        <GridItem>
          <Paper>
            <GetTitle>Leave us a message</GetTitle>
            <form onSubmit={handleSubmit}>
              <div>
                {isNameFocused && (
                  <IconContainer>
                    <CiUser />
                  </IconContainer>
                )}
                <TextField
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                />
              </div>
              <div>
                {isEmailFocused && (
                  <IconContainer>
                    <AiOutlineMail />
                  </IconContainer>
                )}
                <TextField
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
              </div>
              <TextArea
                placeholder="Message"
                name="message"
                value={message}
                onChange={handleChange}
              />
              <Button type="submit">
                {loading ? <ClipLoader size={20} color={"#fff"} /> : "SUBMIT"}
              </Button>
            </form>
          </Paper>
        </GridItem>
        <GridItem>
          <Paper>
            <ContactDetail>
              Weekend UX
              </ContactDetail>  <ContactDetail> B 37/3 Ground Floor Double </ContactDetail>
              <ContactDetail>
               StoryRamesh Nagar , Near
              Raja Garden </ContactDetail>
              <ContactDetail>
              Chowk.Delhi: 110015
              </ContactDetail>
              <ContactDetail>+917067529251</ContactDetail>
              <ContactDetail>hello@info.com.org</ContactDetail>  
              <ContactDetailIcon>   <FaYoutube style={styleIconColorYoutube}/>
              <FaFacebook style={styleIconColorFacebook}/>
              <FaTwitter style={styleIconColorTwitter}/>
              <FaInstagram className="instagramIcon"/></ContactDetailIcon>
           
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019652865481!2d144.96332!3d-37.8142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1a38e41%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1602046785821!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            />
          </Paper>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default Contact;

// import { useState } from "react";
// import axios from "axios";
// import { Container, Grid, Paper, TextField, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import InputAdornment from "@mui/material/InputAdornment";
// import { CiUser } from "react-icons/ci";
// import { AiOutlineMail } from "react-icons/ai";
// import { toast, ToastContainer } from "react-toastify";
// import { ClipLoader } from "react-spinners";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//     marginTop: "5rem",
//   },
//   formContainer: {
//     padding: theme.spacing(4),
//     backgroundColor: "#fff",
//   },
//   formField: {
//     marginBottom: "1rem !important",
//   },
//   mapContainer: {
//     padding: theme.spacing(4),
//     height: "100%",
//   },
//   title: {
//     marginBottom: "2rem !important",
//     color: "#49BBBD",
//     fontWeight: "bold !important",
//   },
//   getTitle: {
//     marginBottom: "1rem !important",
//     color: "#49BBBD",
//     fontSize: "1rem !important",
//   },
//   iframe: {
//     border: 0,
//     width: "100%",
//     height: "400px",
//   },
//   contactImg: {
//     width: "100%",
//   },
//   iconSize: {
//     fontSize: "1.5rem",
//   },
// }));

// const Contact = () => {
//   const classes = useStyles();
//   const [isNameFocused, setIsNameFocused] = useState(false);
//   const [isEmailFocused, setIsEmailFocused] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const { name, email, message } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/contact",
//         formData
//       );
//       console.log(res.data);
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });
//       toast.success("Thanks for contact");
//       setTimeout(() => {
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       toast.error("Login failed. Please check your credentials.");
//     }
//   };

//   return (
//     <Container className={classes.root}>
//       <ToastContainer />
//       <Typography variant="h4" className={classes.title} align="center">
//         Contact Us
//       </Typography>
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={6}>
//           <Paper className={classes.formContainer}>
//             <Typography className={classes.getTitle} variant="h6">
//               Get In Touch
//             </Typography>
//             <form onSubmit={handleSubmit}>
//               <TextField
//                 className={classes.formField}
//                 label="Name"
//                 fullWidth
//                 variant="outlined"
//                 name="name"
//                 value={name}
//                 onChange={handleChange}
//                 onFocus={() => setIsNameFocused(true)}
//                 onBlur={() => setIsNameFocused(false)}
//                 InputProps={{
//                   startAdornment: isNameFocused ? (
//                     <InputAdornment position="start">
//                       <CiUser className={classes.iconSize} />
//                     </InputAdornment>
//                   ) : null,
//                 }}
//               />
//               <TextField
//                 className={classes.formField}
//                 label="Email"
//                 fullWidth
//                 variant="outlined"
//                 name="email"
//                 value={email}
//                 onChange={handleChange}
//                 onFocus={() => setIsEmailFocused(true)}
//                 onBlur={() => setIsEmailFocused(false)}
//                 InputProps={{
//                   startAdornment: isEmailFocused ? (
//                     <InputAdornment position="start">
//                       <AiOutlineMail className={classes.iconSize} />
//                     </InputAdornment>
//                   ) : null,
//                 }}
//               />
//               <TextField
//                 className={classes.formField}
//                 label="Message"
//                 fullWidth
//                 variant="outlined"
//                 multiline
//                 minRows={10}
//                 name="message"
//                 value={message}
//                 onChange={handleChange}
//               />
//               <button type="submit" className="buttonColor">
//                 {loading ? <ClipLoader size={20} color={"#fff"} /> : "SUBMIT"}
//               </button>
//             </form>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper className={classes.mapContainer}>
//             {/* <img className={classes.contactImg} src={contactImg} alt="" /> */}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Contact;
