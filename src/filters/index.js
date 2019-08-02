/* eslint-disable import/prefer-default-export */
function filterNumeric(value) {
  return value.replace(/\D/g, '');
}

export {
  filterNumeric,
};
