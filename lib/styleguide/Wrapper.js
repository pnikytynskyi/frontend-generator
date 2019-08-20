import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { MemoryRouter } = require('react-router-dom');

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return <MemoryRouter>{this.props.children}</MemoryRouter>;
  }
}
