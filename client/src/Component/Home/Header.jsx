import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import noProfile from "../../assets/noProfile.jpg";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;

    li {
      margin: 0 15px;
      color: white;
    }
    a {
      text-decoration: none;
    }
  }
`;

const ButtonGroup = styled.div`
  button {
    margin-left: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  background-color: white;
  color: #53bfba;
`;

const SignUpButton = styled.button`
  background-color: #53bfba;
  color: white;
  border: 1px solid white !important;
`;


const ProfileContainer = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 0 2px #53bfba;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-10px)")};
  transition: all 0.3s ease;
  z-index: 1000;
  min-width: 200px;
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #d4fff1;
  }

  svg {
    margin-right: 10px;
    font-size: 18px;
    color: #53bfba;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 8px 0;
`;

const UserInfo = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const UserName = styled.h4`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const UserEmail = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
`;

function Header() {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Logo>TOTC</Logo>
      <Nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/courses"><li>Courses</li></Link>
          <Link to="career"><li>Careers</li></Link>
          <Link to="blog"><li>Blog</li></Link>
          <Link to="/aboutus"><li>About Us</li></Link>
        </ul>
      </Nav>
      <ButtonGroup>
        {user ? (
          <ProfileContainer ref={dropdownRef}>
            <ProfileImage
              onClick={toggleDropdown}
              alt={user.name}
              src={user?.profileImage ? `http://localhost:8000/uploads/${user.profileImage}` : noProfile}
            />
            <Dropdown isOpen={isDropdownOpen}>
              <UserInfo>
                <UserName>{user.name}</UserName>
                <UserEmail>{user.email}</UserEmail>
              </UserInfo>
              <DropdownItem to="/profile">
                <FaUser />
                My Profile
              </DropdownItem>
              <DropdownItem to="/settings">
                <FaCog />
                Settings
              </DropdownItem>
              <Divider />
            
              <DropdownItem  onClick={logout}>
                <FaSignOutAlt />
                Logout
              </DropdownItem>
            </Dropdown>
          </ProfileContainer>
        ) : (
          <>
            <Link to="/auth">
              <LoginButton>Login</LoginButton>
            </Link>
            <Link to="/auth">
              <SignUpButton>Sign Up</SignUpButton>
            </Link>
          </>
        )}
      </ButtonGroup>
    </HeaderContainer>
  );
}

export default Header;


// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import useAuth from "../../hooks/useAuth";
// import noProfile from "../../assets/noProfile.jpg";
// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 50px;
// `;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   color: white;
// `;

// const Nav = styled.nav`
//   ul {
//     display: flex;
//     list-style-type: none;

//     li {
//       margin: 0 15px;
//       color: white;
//     }
//     a {
//       text-decoration: none;
//     }
//   }
// `;

// const ButtonGroup = styled.div`
//   button {
//     margin-left: 10px;
//     padding: 10px 20px;
//     border-radius: 20px;
//     border: none;
//     cursor: pointer;
//   }
// `;

// const LoginButton = styled.button`
//   background-color: white;
//   color: #53bfba;
// `;

// const SignUpButton = styled.button`
//   background-color: #53bfba;
//   color: white;
//   border: 1px solid white !important;
// `;
// const styleAvatar = {
//   borderRadius: "50%",
//   width: "45px",
//   height: "45px",
//   objectFit: "cover",
//   color: "transparent",
// };

// function Header() {
//   const { user } = useAuth();
//   return (
//     <HeaderContainer>
//       <Logo>TOTC</Logo>
//       <Nav>
//         <ul>
//           <Link to="/">
//             <li>Home</li>
//           </Link>
//           <Link to="/courses">
//             <li>Courses</li>
//           </Link>
//           <Link to="career">
//             <li>Careers</li>
//           </Link>
//           <Link to="blog">
//             <li>Blog</li>
//           </Link>
//           <Link to="/aboutus">
//             <li>About Us</li>
//           </Link>
//         </ul>
//       </Nav>
//       <ButtonGroup>
//         {user ? (
//           <img
//             style={styleAvatar}
//             alt={user.name}
//             src={
//               user?.profileImage
//                 ? `http://localhost:8000/uploads/${user.profileImage}`
//                 : noProfile
//             }
//           />
//         ) : (
//           <>
//             <Link to="/auth">
//               <LoginButton>Login</LoginButton>
//             </Link>
//             <Link to="/auth">
//               {" "}
//               <SignUpButton>Sign Up</SignUpButton>
//             </Link>
//           </>
//         )}
//       </ButtonGroup>
//     </HeaderContainer>
//   );
// }

// export default Header;