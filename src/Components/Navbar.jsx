import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes, FaCaretDown, FaShoppingCart, FaInfoCircle, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navlist = [
    { name: "About", link: "/about", icon: <FaInfoCircle /> },
    { name: "Sustainability", link: "/sustainability", icon: <FaLeaf /> },
    { name: "Shop", link: "/shop", icon: <FaShoppingCart /> }
  ];

  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>beeze</Logo>
      </Link>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navlist.map((item, index) =>
          item.submenu ? (
            <Dropdown key={item.name}>
              <DropdownToggle onClick={() => toggleDropdown(index)}>
                {item.icon} {item.name} <FaCaretDown />
              </DropdownToggle>
              <DropdownMenu isOpen={openDropdown === index}>
                {item.submenu.map((subItem) => (
                  <DropdownItem key={subItem.name}>
                    <Link to={subItem.link}>{subItem.name}</Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <MenuItem key={item.name}>
              <Link to={item.link}>
                {item.icon} {item.name}
              </Link>
            </MenuItem>
          )
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
   max-width: 1370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.796);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.796);
  box-sizing: border-box;
  color:white;
   @media (max-width: 1024px) {
    width:100%;
     max-width:1024px;
   }
     @media (max-width: 768px) {
   
     max-width:768px;
   }
      @media (max-width: 425px) {
  
     max-width:425px;
   }
     @media (max-width: 375px) {
   
     max-width:375px;
   }
      @media (max-width: 320px) {
   
     max-width:320px;
   }
`;


const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    svg {
      margin-right: 8px;  /* Adjust spacing as needed */
    }
  }
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 8px;  /* Adjust spacing as needed */
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;

  a {
    text-decoration: none;
    color: #333;
  }
`