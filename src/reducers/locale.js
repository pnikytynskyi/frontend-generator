import { getInitialLocale } from 'src/utils/browser';

const defaultState = getInitialLocale();

export default (state = defaultState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};