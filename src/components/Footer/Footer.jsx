import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import styled from "styled-components";

const linkSytle = {
  color: "inherit",
};
const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>Design & Developed By @Satyam Mishra</Copyright>
      <ContactIcon>
        <Link
          style={linkSytle}
          href="https://github.com/Satyam-Mishra786"
          target="_blank"
        >
          <GitHub />
        </Link>
        <Link
          style={linkSytle}
          href="https://www.instagram.com/satyammishra5509/"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          style={linkSytle}
          href="https://www.linkedin.com/in/satyam-mishra-61258424b"
          target="_blank"
        >
          <LinkedIn />
        </Link>
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

  -webkit-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px 30px;
  }
`;

const Copyright = styled.div``;
const ContactIcon = styled.div`
  display: flex;
  gap: 20px;
  > * {
    cursor: pointer;
    text-decoration: none;
    color: none;
    transition: 0.5s;
    :hover {
      scale: 1.5;
    }
  }
`;
