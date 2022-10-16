import React, { useEffect } from "react";
import { init } from "ityped";
import BgImage from "../../assets/img/Code.jpg";
import {
  IntroContianer,
  Left,
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
    <IntroContianer>
      <Left>
        <Small mobile={mobile}>I'm</Small>
        <Large mobile={mobile}>Satyam Mishra</Large>
        <Medium mobile={mobile} id="myElement"></Medium>
      </Left>
      {!mobile && <Right Image={BgImage} />}
    </IntroContianer>
  );
};

export default Intro;
