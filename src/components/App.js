import React from 'react';
import styled from 'styled-components';
import Router from '../routes';

const Rooter = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
`;

const Header = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const Footer = styled.div`

`;

export default () => (
  <Rooter>
    <Header>
      <h1>React App Header</h1>
    </Header>
    <Router />
    <Footer />
  </Rooter>
);