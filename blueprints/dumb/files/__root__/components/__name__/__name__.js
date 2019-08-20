import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

export default class <%= pascalEntityName %> extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Container>
        <%= pascalEntityName %>
      </Container>
    );
  }
}
