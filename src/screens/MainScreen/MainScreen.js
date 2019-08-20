import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;
  max-height: 100vh;
`;


export default class MainScreen extends React.Component {
  static propTypes = {
  };


  render() {
    return (
      <Container/>
    );
  }
}
