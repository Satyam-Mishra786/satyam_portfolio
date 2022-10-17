import styled from "styled-components";

export const IntroContianer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
`;

export const Left = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.bg};
  padding-left: 50px;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;
  
`;

export const Wrapper = styled.div`
  height: min-content;
  margin: auto 0;
  display: flex;
  gap: 20px;
  flex-direction: column;

`
export const Right = styled.div`
  flex: 1.2;
  -webkit-clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  background-image: ${(props) => `url(${props.Image})`};
  
  @media (max-width: 873px) {
    display: none;
  }
`;

export const Small = styled.div`
  /* position: absolute;
  top:43%; */
  font-size: 35px;
  font-weight: 400;
  color: ${(props) => props.theme.textSoft};

  @media (max-width: 600px) {
    font-size: 25px;
    /* top: 46%; */
  }
  @media (max-width:425px) {
    font-size: 30px;
  }
`;

export const Medium = styled.div`
  color: red;
  font-size: 42px;
  /* position: absolute; */
  margin-left: 70px;
  /* top:60%; */
  @media (max-width: 600px) {
    margin-left: 50px;
    /* top: 70%; */
  }
  @media (max-width:425px) {
    font-size: 36px;
  }
  
`;

export const Large = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 50px;
  font-weight: 500;
  /* height: 70px; */
  /* position: absolute; */
  margin-left: 30px;
  /* top:50%; */
  @media (max-width: 600px) {
    margin-left: 20px;
    /* top: 55%; */
  }
  @media (max-width: 425px) {
    font-size: 44px;
  }
`;
