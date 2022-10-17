import React, { useEffect } from "react";
import { init } from "ityped";
import BgImage from "../../assets/img/Code.jpg";
import {
  IntroContianer,
  Left,
  Wrapper,
  Right,
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
      <Left>
        <Wrapper>
          <Small>I'm</Small>
          <Large>Satyam Mishra</Large>
          <Medium id="myElement"></Medium>
        </Wrapper>
      </Left>
      <Right Image={BgImage} />
    </IntroContianer>
  );
};

export default Intro;
