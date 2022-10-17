import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.bg};
  /* background: transparent; */
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 9px -1px rgba(0, 0, 0, 0.75);
`; 

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
`;

export const LogoContainer = styled.div`
  object-fit: cover;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const NavContact = styled.div`
  text-align: left;
  display: flex;
  gap: 30px;

  @media (max-width: 1046px) {
    display: none;
  }
`;
export const Email = styled.div`
  font-weight: 300;
`;
export const Phone = styled.div`
  font-weight: 300;
`;
export const SpanBold = styled.span`
  font-weight: 500;
`;

export const Hamburger = styled.div`
  width: 50px;
  height: 40px;
  padding: 4px;
  text-align: center;
  color: black;
  border: 3px solid ${props=>props.theme.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    width: 100%;
    background-color: ${props=>props.theme.text};
    border-radius: 3px;
    height: 5px;
  } 

`;
export const Line1 = styled.div``;
export const Line2 = styled.div``;
export const Line3 = styled.div``;
