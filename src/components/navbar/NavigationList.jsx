import React from "react";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonIcon from "@mui/icons-material/Person";

const NavigationList = ({ darkMode, setDarkMode }) => {
  const toggleMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <NavigationListContainer>
      <List>
        <ListItem href="#home">
          <HomeIcon />
          Home
        </ListItem>
        <ListItem href="#myapps">
          <AppsIcon />
          My Apps
        </ListItem>
        <ListItem href="#about">
          <PersonIcon />
          About Me
        </ListItem>
        <ListItem href="#contact">
          <ContactsIcon />
          Contact
        </ListItem>
        <ModeTogglerContainer onClick={toggleMode} darkMode={darkMode}>
          <ModeToggler darkMode={darkMode} />
        </ModeTogglerContainer>
      </List>
    </NavigationListContainer>
  );
};

export default NavigationList;

const NavigationListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
  & :nth-child(1),
  & :nth-child(2),
  & :nth-child(3),
  & :nth-child(4) {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    color: ${(props) => props.theme.text};
  }

  & > *:hover {
    color: ${(props) => props.theme.textSoft};
  }
`;

const ListItem = styled.a``;

const ModeTogglerContainer = styled.div`
  z-index: 1;
  width: 40px;
  height: 22px;
  border-radius: 42%;
  background-color: ${(props) => (props.darkMode ? "white" : "black")};
  color: ${(props) => (props.darkMode ? "black" : "white")};
  padding: 3px;
  display: flex;
  transition: all 0.5s ease-out;
  cursor: pointer;
`;
const ModeToggler = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  width: 50%;
  height: 100%;
  border-radius: 50%;

  transform-origin: left;
  transform: ${(props) => (props.darkMode ? "translateX(17px)" : "")};
`;
