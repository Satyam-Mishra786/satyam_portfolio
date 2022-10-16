import styled from "styled-components";

export const ProjectContainer = styled.div`
    border-top: 2px solid ${props => props.theme.text};
  background-color: ${props=>props.theme.bg};
  color: ${props=>props.theme.text};
  `;

export const ProjectType = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  border-bottom: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.textSoft};
  font-size: 20px;


  &>*{
    border: 2px solid black;
    cursor: pointer;
    height: min-content;
    padding: 4px;
  }
`
export const ReactProjects = styled.div``
export const SimpleProjects = styled.div``

export const CardsContianer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
  padding: 50px 50px 0 50px;

`;
