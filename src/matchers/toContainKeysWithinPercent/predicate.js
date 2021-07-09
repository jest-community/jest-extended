export default (valueObj, keys) =>
  keys.every(keyObj => {
    return (
      valueObj[keyObj.key] &&
      valueObj[keyObj.key] <= keyObj.target * (1 + keyObj.percent / 100) &&
      valueObj[keyObj.key] >= keyObj.target * (1 - keyObj.percent / 100)
    );
  });
