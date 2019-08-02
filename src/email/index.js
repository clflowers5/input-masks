/* eslint-disable import/prefer-default-export */
function maskEmail(email = '') {
  return email.replace(/^(.).*(.@.*)$/g, (_, start, end) => `${start}****${end}`);
}

export {
  maskEmail,
};
