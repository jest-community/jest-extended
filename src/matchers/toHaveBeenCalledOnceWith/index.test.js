import matcher from './';

expect.extend(matcher);

describe('.toHaveBeenCalledOnceWith', () => {
  test('should fail when given a mock that has not been called', () => {
    const mock = jest.fn();
    expect(() => expect(mock).toHaveBeenCalledOnceWith()).toThrowErrorMatchingSnapshot();
  });

  test('should fail when given a mock that has been called more than once', () => {
    const mock = jest.fn();
    mock(1);
    mock(2);
    expect(() => expect(mock).toHaveBeenCalledOnceWith()).toThrowErrorMatchingSnapshot();
  });

  test('should pass when given a mock that has been called exactly once with value matching call from mock', () => {
    const mock = jest.fn();
    mock(1);
    expect(mock).toHaveBeenCalledOnceWith(1);
  });

  test('should fail when given a mock that has been called exactly once with one argument but expected multiple', () => {
    const mock = jest.fn();
    mock(1);
    expect(() => expect(mock).toHaveBeenCalledOnceWith(1, 2)).toThrowErrorMatchingSnapshot();
  });

  test('should fail when given a mock that has been called exactly once with multiple arguments but expected one', () => {
    const mock = jest.fn();
    mock(1, 2);
    expect(() => expect(mock).toHaveBeenCalledOnceWith(1)).toThrowErrorMatchingSnapshot();
  });

  test('should pass when given a mock that has been called exactly once with multiple arguments', () => {
    const mock = jest.fn();
    mock(1, 2);
    expect(mock).toHaveBeenCalledOnceWith(1, 2);
  });

  test("should fail when given an expected value that isn't an array", () => {
    const mock = jest.fn();
    mock(1, 2);
    expect(() => expect(mock).toHaveBeenCalledOnceWith(1)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toHaveBeenCalledOnceWith', () => {
  test('should pass when given a mock that has not been called', () => {
    const mock = jest.fn();
    expect(mock).not.toHaveBeenCalledOnceWith();
  });

  test('should pass when given a mock that has been called more than once', () => {
    const mock = jest.fn();
    mock(1);
    mock(2);
    expect(mock).not.toHaveBeenCalledOnceWith();
  });

  test('should fail when given a mock that has been called exactly once', () => {
    const mock = jest.fn();
    mock(1);
    expect(() => expect(mock).not.toHaveBeenCalledOnceWith(1)).toThrowErrorMatchingSnapshot();
  });
});
