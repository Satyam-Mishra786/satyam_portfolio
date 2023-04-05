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
  background-repeat:no-repeat;
  background-position:center;
  @media (max-width: 873px) {
    display: none;
  }
`;

export const Small = styled.div`
  font-size: 35px;
  height: 50px;
  font-weight: 400;
  color: ${(props) => props.theme.textSoft};

  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width:425px) {
    font-size: 27px;
  }
`;

export const Medium = styled.div`
  color: red;
  font-size: 42px;
  margin-left: 70px;
  height: 70px;
  @media (max-width: 600px) {
    margin-left: 50px;
  }
  @media (max-width:425px) {
    font-size: 34px;
  }
  
`;

export const Large = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 50px;
  font-weight: 500;
  height: 70px;
  margin-left: 30px;
  @media (max-width: 600px) {
    margin-left: 20px;
  }
  @media (max-width: 425px) {
    font-size: 40px;
  }
`;
