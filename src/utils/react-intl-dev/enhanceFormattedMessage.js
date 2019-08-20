import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

function Message({ tagName, children, ...props }) {
  return React.createElement(tagName, props, children);
}

const StyledMessage = styled(Message)`
  white-space: pre-wrap;
  ${props =>
    props.highlight
      ? props.hasmessage
        ? 'outline: 2px solid red'
        : 'outline: 2px dotted red'
      : ''};
`;

export function enhanceFormattedMessage(FormattedMessage) {
  class EnhancedFormattedMessage extends React.PureComponent {
    static propTypes = {
      id: PropTypes.string,
      highlight: PropTypes.bool,
      tagName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      children: PropTypes.func,
      intl: PropTypes.object,
    };

    static defaultProps = {
      highlight: false,
      tagName: 'span',
    };

    defaultChildren = (...nodes) => {
      const {
        id,
        tagName,
        highlight,
        hasMessage,
      } = this.props;
      let title;

      if (highlight) {
        title = `${hasMessage ? '✔️' : '✘'} ${id}`;
      }

      return React.createElement(
        StyledMessage,
        { title, tagName, hasmessage: hasMessage ? 1 : 0, highlight: highlight ? 1 : 0 },
        ...nodes
      );
    };

    render() {
      const { intl, ...props } = this.props;
      const overrideProps = {};

      if (typeof props.children !== 'function') {
        overrideProps.children = this.defaultChildren;
      }

      return <FormattedMessage {...props} {...overrideProps} />;
    }
  }

  function mapStateToProps(state, ownProps) {
    const { id, intl } = ownProps;
    const highlight = state.debug && state.debug.highlightMessages;
    let hasMessage = highlight && id in intl.messages;

    return {
      highlight,
      hasMessage,
    };
  }

  return injectIntl(connect(mapStateToProps)(EnhancedFormattedMessage));
}
