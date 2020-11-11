export default (number, mid, percent) => number <= mid * (1 + percent / 100) && number >= mid * (1 - percent / 100);
