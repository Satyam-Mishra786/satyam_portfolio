import React from "react";
import logoImage from "../../assets/img/logo.jpg";
import NavigationList from "./NavigationList";

import {
  Nav,
  NavWrapper,
  LogoContainer,
  Logo,
  NavContact,
  Email,
  Phone,
  SpanBold,
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

        {!mobile && (
          <NavContact>
            <Email>
              Email <SpanBold> : satyam482002@gmail.com</SpanBold>
            </Email>
            <Phone>
              Phone <SpanBold> : +91 8252323109</SpanBold>
            </Phone>
          </NavContact>
        )}

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
