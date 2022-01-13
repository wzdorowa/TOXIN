const convertNumToWordform = (amount, textForms) => {
  const [one, two, many] = textForms;

  const isMatchingValue = amount => Number(amount) > 1 && Number(amount) < 5;

  if (String(amount).includes('1')) {
    if (amount === 1) {
      return one;
    }
    if (String(amount)[1] === '1' && amount !== 11) {
      return one;
    }
  } else if (String(amount).length === 1 && isMatchingValue(amount)) {
    return two;
  } else if (String(amount).length > 1 && isMatchingValue(String(amount)[1])) {
    return two;
  }
  return many;
};

export default convertNumToWordform;
