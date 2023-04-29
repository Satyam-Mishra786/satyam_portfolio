import { Code, Email, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import socialImg from "../../assets/img/network.png";
const linkSytle = {
  color: "inherit",
  "text-decoration": "none",
};
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <LeftContainer>
        <LeftImage src={socialImg} />
      </LeftContainer>

      <RightContainer>
        <MyContact>
          <ContactHead>Contact & Profile</ContactHead>
          <ContactWrapper>
            <ContactDiv>
              <Link
                style={linkSytle}
                href="mailto:satyam482002@gmail.com"
                target="_blank"
              >
                <LogoInfoContainer>
                  <Email fontSize="large" />
                  Send Email
                </LogoInfoContainer>
              </Link>
            </ContactDiv>
            <ContactDiv>
              <Link
                style={linkSytle}
                href="https://www.linkedin.com/in/satyam-mishra-61258424b"
                target="_blank"
              >
                <LogoInfoContainer>
                  <LinkedIn fontSize="large" />
                  Linked In
                </LogoInfoContainer>
              </Link>
            </ContactDiv>
            <ContactDiv>
              <Link
                style={linkSytle}
                href="https://github.com/Satyam-Mishra786"
                target="_blank"
              >
                <LogoInfoContainer>
                  <GitHub fontSize="large" />
                  Git Hub
                </LogoInfoContainer>
              </Link>
            </ContactDiv>
            <ContactDiv>
              <Link
                style={linkSytle}
                href="https://www.instagram.com/satyammishra5509/"
                target="_blank"
              >
                <LogoInfoContainer>
                  <Instagram fontSize="large" />
                  Instagram
                </LogoInfoContainer>
              </Link>
            </ContactDiv>
            <ContactDiv>
              <Link
                style={linkSytle}
                href="https://auth.geeksforgeeks.org/user/satyambh3ceq/"
                target="_blank"
              >
                <LogoInfoContainer>
                  <Code fontSize="large" />
                  Geeks For Geeks
                </LogoInfoContainer>
              </Link>
            </ContactDiv>
          </ContactWrapper>
        </MyContact>
      </RightContainer>
    </ContactContainer>
  );
};

export default Contact;

// STYLED COMPONENTS
const ContactContainer = styled.div`
  width: 100%;
  height: clamp(100vh, 100vh, 100%);
  padding: 3rem;

  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 1046px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightContainer = styled.div`
  flex: 1;
  height: clamp(50vh, 100vh, 100vh);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    padding: 10px;
  }
`;

const MyContact = styled.div`
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 50px;
  width: 100%;
  @media (max-width: 450px) {
    padding: 10px;
    width: 100%;
  }
`;

const ContactHead = styled.div`
  font-size: 2.5rem;
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;

const ContactDiv = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  font-size: 1.5rem;
`;
const LogoInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
