import React from "react";
import Cards from "../Cards/Cards";
import {
  ProjectContainer,
  ProjectType,
  // eslint-disable-next-line
  ReactProjects,
  // eslint-disable-next-line
  SimpleProjects,
  CardsContianer,
} from "./Projects.styled";
const Projects = () => {
  return (
    <ProjectContainer id="myapps">
      <ProjectType>
        {/* <ReactProjects>React Apps</ReactProjects>
        <SimpleProjects>Vanilla JS App</SimpleProjects> */}
        My Apps
      </ProjectType>
      <CardsContianer>
        <Cards />
      </CardsContianer>
    </ProjectContainer>
  );
};

export default Projects;
