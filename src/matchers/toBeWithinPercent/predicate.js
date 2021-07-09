export default (number, target, percent) =>
  number <= target * (1 + percent / 100) && number >= target * (1 - percent / 100);
