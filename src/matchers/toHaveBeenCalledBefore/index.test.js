import matcher from './';

expect.extend(matcher);

const timeout = time => () => new Promise(res => setTimeout(() => res()), time);

describe('.toHaveBeenCalledBefore', () => {
  test('fails when given a first mock has not been called', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test('passes when given first mock that has been called and a second mock that has not been called', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    mock1();
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  test('passes when given first mock is called before second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock1();
    await mock2();
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  test('fails when given first mock is called after second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock2();
    await mock1();
    mock1.mock.timestamps[0] = 5000; // amend the value for the snapshot
    mock2.mock.timestamps[0] = 4000;
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test('passes when given first mock is called before multiple calls to second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock1();
    await mock2();
    await mock1();
    await mock2();
    await mock2();
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  test('fails when given first mock is called after several calls to second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock2();
    await mock1();
    await mock1();
    await mock1();
    mock1.mock.timestamps[0] = 5000; // amend the value for the snapshot
    mock1.mock.timestamps[1] = 6000;
    mock1.mock.timestamps[2] = 7000;
    mock2.mock.timestamps[0] = 4000;
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toHaveBeenCalledBefore', () => {
  test('passes when given a first mock has not been called', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });

  test('fails when given first mock that has been called and a second mock that has not been called', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    mock1();
    mock1.mock.timestamps[0] = 4000; // amend the value for the snapshot
    expect(() => expect(mock1).not.toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test('fails when given first mock is called before second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock1();
    await mock2();
    mock1.mock.timestamps[0] = 4000; // amend the value for the snapshot
    mock2.mock.timestamps[0] = 5000;
    expect(() => expect(mock1).not.toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test('passes when given first mock is called after second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock2();
    await mock1();
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });

  test('fails when given first mock is called before multiple calls to second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock1();
    await mock2();
    await mock1();
    await mock2();
    await mock2();

    mock1.mock.timestamps[0] = 4000; // amend the value for the snapshot
    mock1.mock.timestamps[1] = 6000;
    mock2.mock.timestamps[0] = 5000;
    mock2.mock.timestamps[1] = 7000;
    mock2.mock.timestamps[2] = 8000;
    expect(() => expect(mock1).not.toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test('passes when given first mock is called after several calls to second mock', async () => {
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    await mock2();
    await mock1();
    await mock1();
    await mock1();
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });
});
