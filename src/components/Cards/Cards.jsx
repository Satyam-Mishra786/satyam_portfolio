import React from "react";
import styled from "styled-components";
import { data } from "../../assets/Index";
import { Link } from "@mui/material";

const Cards = () => {
  return (
    <>
      {data.map((item, index) => (
        <ProjectCards key={index}>
          {/* <CardDetails>{item.Name}</CardDetails> */}
          <CardImageContainer>
            <Link href={item.Link} target="_blank">
              <CardImage src={item.Image} />
            </Link>
            <CardTitle className="hidenTitle">{item.Name}</CardTitle>
          </CardImageContainer>
        </ProjectCards>
      ))}
    </>
  );
};

export default Cards;

const CardTitle = styled.div`
  opacity: 0;
  color: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in;
  font-size: 20px;
  cursor: pointer;
`;

const ProjectCards = styled.div`
  width: 354px;
  height: 200px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.43);
  position: relative;
  border-radius: 10px;
  @media (max-width: 425px) {
    width: 290px;
    height: 150px;
  }

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;
const CardImageContainer = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    ${CardTitle} {
      opacity: 1;
    }
  }

  &:hover ${CardImage} {
    opacity: 0.2;
  }
`;
