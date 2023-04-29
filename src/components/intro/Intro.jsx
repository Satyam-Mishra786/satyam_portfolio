import React, { useEffect } from "react";
import { init } from "ityped";
import developer from "../../assets/img/developer.png";
import {
  IntroContianer,
  Left,
  Wrapper,
  Right,
  RightWrapper,
  Small,
  Medium,
  Large,
} from "./IntroImports";
const Intro = ({ mobile }) => {
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Web Developer", "Freelancer"],
      typeSpeed: 150,
      backSpeed: 100,
      startDelay: 1000,
    });
  }, []);
  return (
    <IntroContianer id="home">
      <RightWrapper>
        <Right src={developer} />
      </RightWrapper>
      <Left>
        <Wrapper>
          <Small>I'm</Small>
          <Large>Satyam Mishra</Large>
          <Medium id="myElement"></Medium>
        </Wrapper>
      </Left>
    </IntroContianer>
  );
};

export default Intro;
