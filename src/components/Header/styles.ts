import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 8vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  z-index: 1;
`;

export const LinksSection = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

export const ALink = styled.a`
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: 800;
  font-size: 17px;

  :hover {
    border-bottom: 2px solid black;
  }
`;
