function maskDateOfBirth(value, delimiter = '/') {
  const match = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);

  let result = '';

  result += match[2] || match[1].length === 2
    ? `${match[1]}${delimiter}${match[2]}`
    : match[1];

  result += match[3] || match[2].length === 2
    ? `${delimiter}${match[3]}`
    : '';

  return result;
}

function unmaskDateOfBirth(value) {
  return value.replace(/\D/g, '');
}

export {
  maskDateOfBirth,
  unmaskDateOfBirth,
};
