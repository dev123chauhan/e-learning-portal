import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: black;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100%;
    background-color: white;
    z-index: 2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: left 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  margin-right: 1.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Logo>My App</Logo>
      <Menu isOpen={isMenuOpen}>
        <MenuItem>
          <Link to="">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link to="">Contact</Link>
        </MenuItem>
      </Menu>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
    </Wrapper>
  );
};

export default Navigation;