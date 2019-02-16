const areArrays = function(...objects) {
  if (typeof objects === 'undefined') {
    return false;
  }
  let allArrays = true;
  objects.forEach(param => (allArrays = allArrays && Array.isArray(param)));
  return allArrays;
};

const cutDecimals = function(num, precision = 4) {
  return Number.parseFloat(Number.parseFloat(num).toFixed(precision));
};

const arrayWithFloatsEquals = function(current, other, precision = 4) {
  if (current.length !== other.length) {
    return false;
  }

  for (let i = 0; i < current.length; i++) {
    let first = cutDecimals(current[i], precision);
    let second = cutDecimals(other[i], precision);
    if (first / second !== 1) {
      return false;
    }
  }

  return true;
};

export default (actual, expected, precision = 4) => {
  return areArrays(actual, expected) && arrayWithFloatsEquals(actual, expected, precision);
};
