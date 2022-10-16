import React from "react";
import styled from "styled-components";
import CodeImage from "../../assets/img/Code.jpg";
import { data } from "../../assets/Index";

const Cards = () => {
  return (
    <>
      {data.map((item, index) => (
        <ProjectCards key={index}>
          <CardDetails>{item.Name}</CardDetails>
          <CardImageContainer>
            <LinkWebsite href={item.Link} target="_blank">
              <CardImage src={item.Image} />
            </LinkWebsite>
          </CardImageContainer>
        </ProjectCards>
      ))}
    </>
  );
};

export default Cards;

const ProjectCards = styled.div`
  margin-bottom: 30px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.43);
  position: relative;
  border-radius: 10px;

  background-image: ${(props) => (CodeImage ? `url(${props.CodeImage})` : "")};
  /* background-color: ${(props) => props.theme.bg}; */

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const CardImageContainer = styled.div`
  width: 354px;
  height: 200px;
`;
const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;

const CardDetails = styled.div`
  padding: 3px 5px;
  font-size: 20px;
  background: transparent;
`;

const LinkWebsite = styled.a``;
