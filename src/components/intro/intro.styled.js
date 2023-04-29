import styled from "styled-components";

export const IntroContianer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
  overflow: hidden;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1.5;
  background-color: ${(props) => props.theme.bg};
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Wrapper = styled.div`
 
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 900px) {
    gap: 20px;
  }
  @media (max-width:425px) {
    gap: 10px;
  }

`

export const Small = styled.div`
  font-size: 2rem;
  height: clamp(30px, 50px , 70px);
  font-weight: 400;
  color: ${(props) => props.theme.textSoft};

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width:425px) {
    font-size: 1.2rem;
  }
`;

export const Medium = styled.div`
  color: red;
  font-size: 2.7rem;
  height: clamp(30px, 70px , 70px);
  transform: translateX(25%);
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width:425px) {
    font-size: 1.5rem;
  }
  
`;

export const Large = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 3rem;
  font-weight: 500;
  height: clamp(30px, 70px , 70px);
  transform: translateX(10%);
  @media (max-width: 900px) {
    font-size: 2.3rem;
  }
  @media (max-width:425px) {
    font-size: 1.8rem;
  }
`;



export const RightWrapper = styled.div`
flex: 1.2;
-webkit-clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(14% 0, 100% 0, 100% 100%, 0 100%);
  background-image: ${(props) => `url(${props.Image})`};
  background-repeat:no-repeat;
  background-position:center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:2rem;

`
export const Right = styled.img`
  width: 100%;
  height: 100%;
  object-fit:contain;
`;
