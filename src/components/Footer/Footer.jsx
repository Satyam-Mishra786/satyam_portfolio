import { Email, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>Copyright reserve @ 2008 Satyam Mishra</Copyright>
      <ContactIcon>
        <Facebook />
        <Instagram />
        <LinkedIn />
        <Email />
      </ContactIcon>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};

  box-shadow: 0px -3px 12px -2px rgba(0, 0, 0, 0.81);
  -webkit-box-shadow: 0px -3px 12px -2px rgba(0, 0, 0, 0.81);
  -moz-box-shadow: 0px -3px 12px -2px rgba(0, 0, 0, 0.81);

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px 30px;
  }
`;

const Copyright = styled.div``;
const ContactIcon = styled.div`
  display: flex;
  gap: 20px;
`;
