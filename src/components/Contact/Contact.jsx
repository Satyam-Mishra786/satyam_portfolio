import { Email, LinkedIn, Phone } from "@mui/icons-material";
import { Link } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
const linkSytle = {
  color: "inherit",
  "text-decoration": "none",
};
const Contact = () => {
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("I'll reply ASAP.");
    setTimeout(() => {
      setInfo({ firstName: "", lastName: "", phone: "", email: "" });
      setMessage("");
    }, 2000);
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <ContactContainer id="contact">
      <LeftContainer>
        <ContactHead>LET'S CONNECT</ContactHead>
        <Form onSubmit={handleSubmit}>
          <InputArea>
            <InputContainer>
              <InputName htmlFor="firstNameInput">First Name</InputName>
              <InputFields
                name="firstName"
                value={info.firstName}
                onChange={handleChange}
                required
                id="firstNameInput"
              />
            </InputContainer>
            <InputContainer>
              <InputName htmlFor="lastNameInput">Last Name</InputName>
              <InputFields
                name="lastName"
                value={info.lastName}
                onChange={handleChange}
                id="lastNameInput"
              />
            </InputContainer>
            <InputContainer>
              <InputName htmlFor="phoneInput">Phone</InputName>
              <InputFields
                name="phone"
                id="phoneInput"
                value={info.phone}
                onChange={handleChange}
                type="tel"
              />
            </InputContainer>
            <InputContainer>
              <InputName htmlFor="emailInput">Email</InputName>
              <InputFields
                name="email"
                value={info.email}
                onChange={handleChange}
                required
                type="email"
                id="emailInput"
              />
            </InputContainer>
          </InputArea>
          <ButtonContainer>
            <SubmitButton type="submit" disabled={message.length >= 1}>
              Submit
            </SubmitButton>
          </ButtonContainer>
          <Message>{message}</Message>
        </Form>
      </LeftContainer>
      <RightContainer>
        <MyContact>
          <ContactHead>Contact Information</ContactHead>
          <ContactWrapper>
            <ContactDiv>
              <Phone />
              +91 8252323109
            </ContactDiv>
            <ContactDiv>
              <Email />
              satyam482002@gmail.com
            </ContactDiv>
            <Link
              style={linkSytle}
              href="https://www.linkedin.com/in/satyam-mishra-61258424b"
              target="_blank"
            >
              <ContactDiv>
                <LinkedIn />
                @Satyam Mishra
              </ContactDiv>
            </Link>
          </ContactWrapper>
        </MyContact>
      </RightContainer>
    </ContactContainer>
  );
};

export default Contact;

// STYLED COMPONENTS
export const ContactContainer = styled.div`
  width: 100%;
  padding: 50px;

  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  display: flex;

  @media (max-width: 1046px) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const LeftContainer = styled.div`
  flex: 3;
`;
export const RightContainer = styled.div`
  flex: 1;
  padding: 50px;
  height: 100%;
  @media (max-width: 450px) {
    padding: 10px;
  }
`;

export const MyContact = styled.div`
  border-radius: 10px;
  -webkit-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  box-shadow: 0px 1px 9px 1px rgba(0, 0, 0, 0.59);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 450px) {
    padding: 10px;
    width: 100%;
  }
`;

export const ContactHead = styled.div`
  width: 100%;
  height: 30px;
  font-size: 25px;
  text-align: center;
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContactDiv = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  color: ${(props) => props.theme.text};

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  width: 50%;
  gap: 10px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const InputName = styled.label`
  cursor: pointer;
`;
export const InputFields = styled.input`
  width: 80%;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  font-size: 19px;
  background: transparent;
  color: ${(props) => props.theme.text};
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div``;

export const SubmitButton = styled.button`
  width: 150px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.text};
  background: transparent;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.bg};
    background-color: ${(props) => props.theme.text};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Message = styled.div`
  text-align: center;
  font-size: 16px;
`;
