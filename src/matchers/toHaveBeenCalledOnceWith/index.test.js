import matcher from './';

expect.extend(matcher);

describe('.toHaveBeenCalledOnce', () => {
  test('should fail when given a mock that has not been called', () => {
    const mock = jest.fn();
    expect(() => expect(mock).toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });

  test('should fail when given a mock that has been called more than once', () => {
    const mock = jest.fn();
    mock(1);
    mock(2);
    expect(() => expect(mock).toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });

  test('should pass when given a mock that has been called exactly once', () => {
    const mock = jest.fn();
    mock(1);
    expect(mock).toHaveBeenCalledOnce();
  });
});

describe('.not.toHaveBeenCalledOnce', () => {
  test('should pass when given a mock that has not been called', () => {
    const mock = jest.fn();
    expect(mock).not.toHaveBeenCalledOnce();
  });

  test('should pass when given a mock that has been called more than once', () => {
    const mock = jest.fn();
    mock(1);
    mock(2);
    expect(mock).not.toHaveBeenCalledOnce();
  });

  test('should fail when given a mock that has been called exactly once', () => {
    const mock = jest.fn();
    mock(1);
    expect(() => expect(mock).not.toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });
});
