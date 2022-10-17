import React from "react";
import styled from "styled-components";
import NavigationList from "../navbar/NavigationList";

const Menu = ({ darkMode, setDarkMode, activeNav }) => {
  return (
    <MenuContainer activeNav={activeNav}>
      <NavigationList darkMode={darkMode} setDarkMode={setDarkMode} />
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: ${(props) => (props.activeNav ? "block" : "none")};
  position: fixed;
  top: 70px;
  z-index: 2;
  border-top: 2px solid black;
  background-color: ${(props) => props.theme.bg};
  width: 100%;
  padding: 10px 20px;
  box-shadow: 0px 2px 9px -1px rgba(0, 0, 0, 0.75);
  color: ${(props) => props.theme.text};
`;
