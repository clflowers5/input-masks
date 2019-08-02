function unmaskCurrency(value) {
  const result = value.toString();
  return result.replace(/\D/g, '');
}

function maskCurrency(value, delimiter = ',') {
  const result = value.toString();
  return unmaskCurrency(result).replace(/\B(?=(\d{3})+$)/g, delimiter);
}

export {
  maskCurrency,
  unmaskCurrency,
};
