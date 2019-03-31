import matcher from '.';

expect.extend(matcher);

const expectedError = new Error('expected error');
const rejectsWithExpected = Promise.reject(expectedError);
const rejectsWithUnexpected = Promise.reject(new Error('unexpected error'));
const resolvedPromise = Promise.resolve('resolved value');

describe('.toRejectWith', () => {
  it('fails when passed a promise which resolves', async () => {
    await expect(expect(resolvedPromise).toRejectWith(expectedError)).rejects.toThrowErrorMatchingSnapshot();
  });

  describe('when passed a promise which rejects', () => {
    it('fails if error was not expected', async () => {
      await expect(expect(rejectsWithUnexpected).toRejectWith(expectedError)).rejects.toThrowErrorMatchingSnapshot();
    });

    it('fails if error was not expected according to custom comparer', async () => {
      const comparer = (error, caught) => false;
      await expect(
        expect(rejectsWithExpected).toRejectWith(expectedError, comparer)
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    it('passes if error was expected', () => {
      expect(rejectsWithExpected).toRejectWith(expectedError);
    });

    it('passes if error was expected according to custom comparer', () => {
      const comparer = (error, caught) => true;
      expect(rejectsWithUnexpected).toRejectWith(expectedError, comparer);
    });
  });
});

describe('not.toRejectWith', () => {
  it('passes when passed a promise which resolves', () => {
    expect(resolvedPromise).not.toRejectWith(expectedError);
  });

  describe('when passed a promise which rejects', () => {
    it('passes if error was not expected', () => {
      expect(rejectsWithUnexpected).not.toRejectWith(expectedError);
    });

    it('passes if error was not expected according to custom comparer', () => {
      const comparer = (error, caught) => false;
      expect(rejectsWithExpected).not.toRejectWith(expectedError, comparer);
    });

    it('fails if error was expected', async () => {
      await expect(expect(rejectsWithExpected).not.toRejectWith(expectedError)).rejects.toThrowErrorMatchingSnapshot();
    });

    it('fails if error was expected according to custom comparer', async () => {
      const comparer = (error, caught) => true;
      await expect(
        expect(rejectsWithUnexpected).not.toRejectWith(expectedError, comparer)
      ).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});
