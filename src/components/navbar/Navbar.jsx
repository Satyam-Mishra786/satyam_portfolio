import React from "react";
import logoImage from "../../assets/img/logo.jpg";
import NavigationList from "./NavigationList";

import {
  Nav,
  NavWrapper,
  LogoContainer,
  Logo,
  Hamburger,
  Line1,
  Line2,
  Line3,
} from "./NavImports.js";

const Navbar = ({ darkMode, setDarkMode, mobile, activeNav, setActiveNav }) => {
  const toggleMenu = () => {
    setActiveNav((prevState) => !prevState);
  };
  return (
    <Nav>
      <NavWrapper>
        <LogoContainer>
          <Logo src={logoImage} />
        </LogoContainer>

        {mobile ? (
          <Hamburger
            className={activeNav ? "hamburger active" : "hamburger"}
            onClick={toggleMenu}
          >
            <Line1></Line1>
            <Line2></Line2>
            <Line3></Line3>
          </Hamburger>
        ) : (
          <NavigationList setDarkMode={setDarkMode} darkMode={darkMode} />
        )}
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
