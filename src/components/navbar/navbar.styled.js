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

export const NavigationListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const ListItem1 = styled.li`
  &:hover {
    color: ${(props) => props.theme.textSoft};
  }
  cursor: pointer;
`;
export const ListItem2 = styled.li`
  &:hover {
    color: ${(props) => props.theme.textSoft};
    cursor: pointer;
  }
`;
export const ListItem3 = styled.li`
  &:hover {
    color: ${(props) => props.theme.textSoft};
    cursor: pointer;
  }
`;

export const ModeTogglerContainer = styled.div`
  z-index: 1;
  width: 40px;
  height: 22px;
  border-radius: 42%;
  background-color: ${(props) => (props.darkMode ? "white" : "black")};
  color: ${(props) => (props.darkMode ? "black" : "white")};
  padding: 3px;
  display: flex;
  transition: all 0.5s ease-out;
  cursor: pointer;
`;
export const ModeToggler = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  width: 50%;
  height: 100%;
  border-radius: 50%;

  transform-origin: left;
  transform: ${(props) => (props.darkMode ? "translateX(17px)" : "")};
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
