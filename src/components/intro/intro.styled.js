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
  justify-content: center;
  flex-direction: column;
  position: relative;
  
`;
export const Right = styled.div`
  flex: 1.2;
  -webkit-clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  background-image: ${(props) => `url(${props.Image})`};
  
`;

export const Small = styled.p`
  position: absolute;
  top:40%;
  font-size: 35px;
  font-weight: 400;
  color: ${(props) => props.theme.textSoft};
`;

export const Medium = styled.p`
  color: red;
  font-size: ${props=>props.mobile? '32px':'42px'};
  position: absolute;
  margin-left: 70px;
  top:60%;
  
`;

export const Large = styled.p`
  color: ${(props) => props.theme.text};
  font-size: ${props=>props.mobile? '40px':'50px'};
  font-weight: 500;
  position: absolute;
  margin-left: 30px;
  top:50%;
`;
