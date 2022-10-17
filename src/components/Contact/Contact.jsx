import React from "react";
import { useState } from "react";
import styled from "styled-components";

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
    </ContactContainer>
  );
};

export default Contact;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactHead = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 30px;
  padding: 10px 0;
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
`;
export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  width: 50%;
  gap: 10px;
  margin-bottom: 30px;
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
