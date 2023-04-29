import React from "react";
import styled from "styled-components";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { darkTheme } from "../../assets/Theme";
import { pink, green } from "@mui/material/colors";

const About = ({ darkMode }) => {
  const ProgrammingSkills = [
    "HTML",
    "CSS/Bootstrap",
    "JavaScript",
    "React Js",
    "Styled Components",
    "Data Structures And Algo",
    "Java and C++",
  ];
  return (
    <AboutContainer id="about">
      <HeadContainer>ABOUT ME</HeadContainer>
      <Wrapper>
        <LeftContainer>
          <ContainerHeads>LET ME INTRODUCE MYSELF</ContainerHeads>
          <ContentContainerLeft>
            Hello I'm
            <Highlight> Front-end Web Developer </Highlight>
            from <Highlight> India. </Highlight> I am dedicated to deliver the
            best <Highlight> UI Designs </Highlight> for best user experience. I
            can create fully responsive websites.
            <br></br>
            <Highlight>Problem Solver </Highlight>
            || Learning
            <Highlight> Data Structures and Algorithms </Highlight>
            In Java
          </ContentContainerLeft>
        </LeftContainer>
        <RightContainer>
          <ContainerHeads>LOOK WHAT I CAN DO</ContainerHeads>
          <ContentContainerRight>
            <SkillList>
              {ProgrammingSkills.map((i, index) => (
                <SKills key={index}>
                  <KeyboardDoubleArrowRightIcon
                    // color={darkMode ? "primary" : "success"}
                    fontSize="large"
                    sx={{ color: darkMode ? pink[500] : green[500] }}
                  />
                  {i}
                </SKills>
              ))}
            </SkillList>
          </ContentContainerRight>
        </RightContainer>
      </Wrapper>
    </AboutContainer>
  );
};

export default About;

export const AboutContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  padding: 1.5rem 3rem;
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: clamp(50px, 70px, 100px);
  background: transparent;
  text-align: center;
  font-size: 2.2rem;
  color: ${(props) => props.theme.textSoft};
  margin-bottom: 10px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  /* height: calc(100vh - 140px); */

  & > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.textSoft};
    @media (max-width: 800px) {
      flex: auto;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const LeftContainer = styled.div`
  padding-top: 20px;
  border-right: 3px solid ${(props) => props.theme.textSoft};
  border-left: 3px solid ${(props) => props.theme.textSoft};
  border-radius: 1rem;
  -webkit-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
`;
export const RightContainer = styled.div`
  padding-top: 20px;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerHeads = styled.div`
  font-size: 1.9rem;
  text-align: center;
  text-decoration: underline;
`;
export const ContentContainerLeft = styled.div`
  padding: 1.5rem 2.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  word-spacing: 5px;
`;
export const ContentContainerRight = styled.div`
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
`;

export const SkillList = styled.ul`
  list-style: none;
  flex-direction: column;
  display: flex;
  gap: 1.5rem;
`;

export const SKills = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 15px;
`;

export const Highlight = styled.span`
  color: #c50005;
  color: ${(props) => (props.theme === darkTheme ? "#dd7183" : "#05b764")};
`;
