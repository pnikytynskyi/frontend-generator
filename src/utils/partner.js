import queryString from 'query-string';

export function getPartnerFromUrl() {
  return queryString.parse(window.location.search).partner;
}
