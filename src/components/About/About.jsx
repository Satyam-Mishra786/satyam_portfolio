import React from "react";
import styled from "styled-components";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { darkTheme } from "../../assets/Theme";
import { pink, green } from "@mui/material/colors";

const About = ({ darkMode }) => {
  const ProgrammingSkills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    " BOOTSTRAP",
    "REACT JS",
    "STYLED COMPONENTS",
    "MATERIAL UI",
    "ADOBE PHOTOSHOP",
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
            best <Highlight> UI Designs </Highlight> for best user experience.
            I'm a student currently studying Bachelor in Computer Application at
            Patna Science College, Patna.
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
  padding: 20px 50px;
  @media (max-width: 1046px) {
    padding: 10px 30px;
  }
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: 70px;
  background: transparent;
  text-align: center;
  font-size: 35px;
  color: ${(props) => props.theme.textSoft};
  margin-bottom: 10px;
  @media (max-width: 1046px) {
    font-size: 35px;
    height: 50px;
  }
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
  font-size: 22px;
  border-radius: 20px;
  box-shadow: 1px -1px 8px 5px rgba(0, 0, 0, 0.27);
  -webkit-box-shadow: 1px -1px 8px 5px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 1px -1px 8px 5px rgba(0, 0, 0, 0.27);
`;
export const RightContainer = styled.div`
  padding-top: 20px;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    clear: both;
  }
`;

export const ContainerHeads = styled.div`
  font-size: 26px;
  text-align: center;
  text-decoration: underline;

  @media (max-width: 800px) {
    font-size: 21px;
  }
`;
export const ContentContainerLeft = styled.div`
  padding: 20px 50px;
  line-height: 2;
  word-spacing: 10px;
  @media (max-width: 1046px) {
    word-spacing: 3px;
    line-height: 1.2;
    padding: 15px 35px;
  }
`;
export const ContentContainerRight = styled.div`
  padding: 20px 50px;
  @media (max-width: 1046px) {
    padding: 10px 30px;
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;

export const SKills = styled.li`
  display: flex;
  align-items: center;
  font-size: 25px;
  gap: 15px;

  @media (max-width: 1046px) {
    font-size: 18px;
    gap: 10px;
  }
`;

export const Highlight = styled.span`
  color: #c50005;
  color: ${(props) => (props.theme === darkTheme ? "#dd7183" : "#05b764")};
`;
