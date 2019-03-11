import { equals } from 'expect/build/jasmine_utils';

export default (fn, expected, consoleMethod) => {
  const spy = jest.spyOn(console, consoleMethod);
  spy.mockImplementation(() => {});
  fn();
  spy.mockRestore();
  if (spy.mock.calls.length === 0) {
    return { pass: false };
  }
  const actual = spy.mock.calls;
  let pass = false;
  actual.forEach(call => {
    call.forEach(arg => {
      if (equals(arg, expected)) {
        pass = true;
      }
    });
  });
  return { actual, pass };
};
