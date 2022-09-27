import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f1f1;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;

export const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 240px 240px 240px;
  gap: 40px 70px;
`;
