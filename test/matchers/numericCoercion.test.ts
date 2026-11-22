import { toBeEven, toBeNegative, toBeOdd, toBePositive, toBeWithin } from 'src/matchers';

expect.extend({ toBeEven, toBeNegative, toBeOdd, toBePositive, toBeWithin });

test('numeric property matchers reject strings without coercion', () => {
  expect('').not.toBeWithin(0, 1);
  expect('4').not.toBeWithin(0, 10);
  expect('1').not.toBePositive();
  expect('-1').not.toBeNegative();
  expect('2').not.toBeEven();
  expect('3').not.toBeOdd();
});
