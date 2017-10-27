import matcher from './';

expect.extend(matcher);

const data = 'hello world';

describe('.toInclude', () => {
  it('passes when a string has a given substring', () => {
    expect(data).toInclude('ell');
  });

  it('fails when a string does not have a given substring', () => {
    expect(() => expect(data).toInclude('bob')).toThrowErrorMatchingSnapshot();
  });

  describe('.not.toInclude', () => {
    it('passes when a string does not have a given substring', () => {
      expect(data).not.toInclude('bob');
    });

    it('fails when a string does have a given substring', () => {
      expect(() => expect(data).not.toInclude('ell')).toThrowErrorMatchingSnapshot();
    });
  });
});
