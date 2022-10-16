import React from "react";
import {
  List,
  ListItem2,
  ListItem1,
  ListItem3,
  ModeTogglerContainer,
  ModeToggler,
  NavigationListContainer,
} from "./navbar.styled";

const NavigationList = ({ darkMode, setDarkMode }) => {
  const toggleMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <NavigationListContainer>
      <List>
        <ListItem1>Home</ListItem1>
        <ListItem2>My Apps</ListItem2>
        <ListItem3>Contact</ListItem3>
        <ModeTogglerContainer onClick={toggleMode} darkMode={darkMode}>
          <ModeToggler darkMode={darkMode} />
        </ModeTogglerContainer>
      </List>
    </NavigationListContainer>
  );
};

export default NavigationList;
