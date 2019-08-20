import queryString from 'query-string';

const defaultState = {};

export default (state = defaultState, action) => {
  const messagesDebugMode = 'highlightMessages' in queryString.parse(window.location.search)
  state = { highlightMessages: messagesDebugMode };

  switch (action.type) {
  default:
    return state;
  }
};
