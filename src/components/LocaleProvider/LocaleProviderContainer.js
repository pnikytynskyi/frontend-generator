import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LocaleProvider from './LocaleProvider';

export function mapStateToProps(state) {
  return {
    locale: state.locale,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleProvider);
