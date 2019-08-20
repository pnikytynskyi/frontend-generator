import { selfapy } from './selfapy';
// Import partner themes here
// ex: import { dak } from './dak';
import { dak } from './dak';
import * as deepmerge from 'deepmerge';
import { getPartnerFromUrl } from 'src/utils/partner';

const partnersThemes = {
  // add imported themes here
  dak,
};

export const createTheme = () => {
  const partner = getPartnerFromUrl();

  let theme = selfapy;

  const staticTheme = partnersThemes[partner] || {};
  const dynamicTheme = window.THEME || {};

  return deepmerge.all([theme, staticTheme, dynamicTheme]);
};
