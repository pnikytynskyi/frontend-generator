import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'src/styles/global';

import { Container as MainScreen } from '../MainScreen';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default function App() {
  return (
    <Router>
      <Container>
        <Route exact path="/" component={MainScreen} />
      </Container>
    </Router>
  );
}
