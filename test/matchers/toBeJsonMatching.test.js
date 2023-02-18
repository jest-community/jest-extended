import * as matcher from 'src/matchers/toBeJsonMatching';

expect.extend(matcher);

const string = JSON.stringify({ a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, { g: 'bar', h: 'baz' }] });

const matches = [
  {},
  { a: 42 },
  { a: 42, b: 'foo' },
  { a: 42, b: 'foo', c: {} },
  { a: 42, b: 'foo', c: { d: 'hello' } },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' } },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, {}] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, { g: 'bar' }] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, { g: 'bar', h: 'baz' }] },
];

const nonMatches = [
  null,
  [],
  { a: '42' },
  { a: 41 },
  { a: [] },
  { a: {} },
  { a: null },
  { a: 42, b: 'bar' },
  { a: 42, b: 'foo', c: 7 },
  { a: 42, b: 'foo', c: [] },
  { a: 42, b: 'foo', c: { d: 'bonjour' } },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'dolly' } },
  { a: 42, b: 'foo', c: { d: 'hello', e: 7 } },
  { a: 42, b: 'foo', c: { d: 'hello', e: [] } },
  { a: 42, b: 'foo', c: { d: 'hello', e: {} } },
  { a: 42, b: 'foo', c: { d: 'hello', e: null } },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: 7 },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: {} },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [8] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, []] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, { g: 'baz' }] },
  { a: 42, b: 'foo', c: { d: 'hello', e: 'world' }, f: [7, { g: 'bar', h: 'baz', i: 'buzz' }] },
];

describe('.toBeJsonMatching', () => {
  test.each(matches)('passes when given JSON string matches expectation', expectation => {
    expect(string).toBeJsonMatching(expectation);
  });

  test.each(nonMatches)('fails when given JSON string does not match expectation', expectation => {
    expect(() => expect(string).toBeJsonMatching(expectation)).toThrowErrorMatchingSnapshot();
  });

  test('fails when the given string is not valid JSON', () => {
    const invalid = 'This is not a valid JSON string';
    expect(() => expect(invalid).toBeJsonMatching(invalid)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeJsonMatching', () => {
  test.each(nonMatches)('passes when given JSON string does not match expectation', expectation => {
    expect(string).not.toBeJsonMatching(expectation);
  });

  test.each(matches)('fails when given JSON string matches expectation', expectation => {
    expect(() => expect(string).not.toBeJsonMatching(expectation)).toThrowErrorMatchingSnapshot();
  });

  test('passes when the given string is not valid JSON', () => {
    const invalid = 'This is not a valid JSON string';
    expect(invalid).not.toBeJsonMatching(invalid);
  });
});
