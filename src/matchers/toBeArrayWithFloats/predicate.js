const isUndefined = function(obj) {
  return typeof obj === 'undefined';
};

const someUndefined = function(objects) {
  let check = false;
  objects.forEach(item => (check = check || isUndefined(item)));
  return check;
};

const areArrays = function(...objects) {
  if (someUndefined(objects)) {
    return false;
  }

  let allArrays = true;
  objects.forEach(item => (allArrays = allArrays && Array.isArray(item)));
  return allArrays;
};

const cutDecimals = function(num, precision) {
  return Number.parseFloat(Number.parseFloat(num).toFixed(precision));
};

const floatsEqual = function(float1, float2, precision) {
  let a = cutDecimals(float1, precision);
  let b = cutDecimals(float2, precision);

  if (a === 0 && b === 0) {
    return true;
  } else if (a !== 0 && b === 0) {
    return false;
  } else {
    return a / b === 1;
  }
};

const arrayWithFloatsEquals = function(array1, array2, precision) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (!floatsEqual(array1[i], array2[i], precision)) {
      return false;
    }
  }

  return true;
};

export default (actual, expected, precision = 4) => {
  return areArrays(actual, expected) && arrayWithFloatsEquals(actual, expected, precision);
};
