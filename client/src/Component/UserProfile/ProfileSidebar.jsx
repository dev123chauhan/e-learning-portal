import PropTypes from "prop-types";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
import { FaUser, FaPencilAlt, FaImage, FaLock } from 'react-icons/fa';
const SidebarContainer = styled.div`
  padding: 16px;
  height: 100vh;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Username = styled.h6`
  margin-top: 8px;
  font-size: 1.2rem;
  color: #333;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NavItem = styled.li`
  ${"" /* text-align: center; */}
  margin-bottom: 8px;
  padding: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#49BBBD" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#333")};
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.selected ? "#49BBBD" : "#d4fff1")};
  }
`;

const Divider = styled.hr`
  margin: 16px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

const LogoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #49bbbd;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3d9d9d;
  }
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #40E0D0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // Call the logout function from useAuth
  };


  return (
    <SidebarContainer>
      <ProfileSection>
        <Avatar
          src={
            user?.profileImage
              ? `http://localhost:8000/uploads/${user.profileImage}`
              : noProfile
          }
        />
        <Username>{user?.username || "User Name"}</Username>
      </ProfileSection>
      {/* <NavList>
        {["profile", "update", "picture", "password"].map((tab) => (
          <NavItem
            key={tab}
            selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab === "profile" ? "User Profile" : tab === "update" ? "Update Profile" : tab === "picture" ? "Upload Picture" : "Change Password"}
          </NavItem>
        ))}
      </NavList> */}
      <NavList>
  {["profile", "update", "picture", "password"].map((tab) => (
    <NavItem
      key={tab}
      selected={activeTab === tab}
      onClick={() => setActiveTab(tab)}
      style={{ display: "flex", alignItems: "center" }} // Ensure items are aligned
    >
      <Icon>
        {tab === "profile" ? <FaUser color="white"/> :
         tab === "update" ? <FaPencilAlt  color="white"/> :
         tab === "picture" ? <FaImage  color="white"/> :
         tab === "password" ? <FaLock  color="white"/> : null}
      </Icon>
      {tab === "profile"
        ? "User Profile"
        : tab === "update"
        ? "Update Profile"
        : tab === "picture"
        ? "Upload Picture"
        : "Change Password"}
    </NavItem>
  ))}
</NavList>

      <Divider />
      <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
    </SidebarContainer>
  );
};

ProfileSidebar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default ProfileSidebar;

// import PropTypes from "prop-types";
// import useAuth from "../../hooks/useAuth";
// import noProfile from "../../assets/noProfile.jpg";
// import {
//   Avatar,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Typography,
//   Box,
// } from "@mui/material";

// const ProfileSidebar = ({ activeTab, setActiveTab }) => {
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout(); // Call the logout function from useAuth
//   };

//   return (
//     <Box sx={{ p: 2 }}>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <Avatar
//           src={
//             user?.profileImage
//               ? `http://localhost:8000/uploads/${user.profileImage}`
//               : noProfile
//           }
//           sx={{ width: 100, height: 100 }}
//         />
//         <Typography variant="h6" sx={{ mt: 1 }}>
//           {user?.username || "User Name"}
//         </Typography>
//       </Box>
//       <List>
//         <ListItem
//           style={{textAlign:"center"}}
//           button
//           selected={activeTab === "profile"}
//           onClick={() => setActiveTab("profile")}
//         >
//           {/* <AccountCircleOutlinedIcon/> */}
//           <ListItemText
//             primary="User Profile"
//           />
//         </ListItem>
//         <ListItem
//            style={{textAlign:"center"}}
//           button
//           selected={activeTab === "update"}
//           onClick={() => setActiveTab("update")}
//         >
//           {/* <EditOutlinedIcon /> */}
//           <ListItemText
//             primary="Update Profile"
//           />
//         </ListItem>
//         <ListItem
//            style={{textAlign:"center"}}
//           button
//           selected={activeTab === "picture"}
//           onClick={() => setActiveTab("picture")}
//         >
//           {/* <CloudUploadOutlinedIcon /> */}
//           <ListItemText
//             primary="Upload Picture"
//           />
//         </ListItem>
//         <ListItem
//            style={{textAlign:"center"}}
//           button
//           selected={activeTab === "password"}
//           onClick={() => setActiveTab("password")}
//         >
//           {/* <ChangeCircleOutlinedIcon /> */}
//           <ListItemText
//             primary="Change Password"
//           />
//         </ListItem>
//       </List>
//       <Divider sx={{ mt: 2, mb: 2 }} />
//       <Button variant="contained" fullWidth onClick={handleLogout}>
//         Log Out
//       </Button>
//     </Box>
//   );
// };

// ProfileSidebar.propTypes = {
//   activeTab: PropTypes.string.isRequired,
//   setActiveTab: PropTypes.func.isRequired,
// };

// export default ProfileSidebar;
