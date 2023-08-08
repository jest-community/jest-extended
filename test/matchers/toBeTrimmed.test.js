import * as matcher from 'src/matchers/toBeTrimmed';

expect.extend(matcher);

const trimmedScenarios = [
  {
    description: 'empty string',
    value: '',
  },

  {
    description: 'string having no whitespace',
    value: 'Test',
  },

  {
    description: 'string having only internal whitespace',
    value: 'This is\ta test',
  },
];

const untrimmedScenarios = [
  {
    description: 'string having trailing space',
    value: 'Test        ',
  },

  {
    description: 'string having leading space',
    value: '      Test',
  },

  {
    description: 'string having space on both sides',
    value: '    Test     ',
  },

  {
    description: 'string having tabs on both sides',
    value: '\tTest\t',
  },

  {
    description: 'line ending with line feed',
    value: 'Line\n',
  },

  {
    description: 'line ending with carriage return and line feed',
    value: 'Line\r\n',
  },
];

describe('.toBeTrimmed', () => {
  test.each(trimmedScenarios)('passes when given $description', ({ value }) => {
    expect(value).toBeTrimmed();
  });

  test.each(untrimmedScenarios)('fails when given $description', ({ value }) => {
    expect(() => expect(value).toBeTrimmed()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeTrimmed', () => {
  test.each(trimmedScenarios)('fails when given $description', ({ value }) => {
    expect(() => expect(value).not.toBeTrimmed()).toThrowErrorMatchingSnapshot();
  });

  test.each(untrimmedScenarios)('passes when given $description', ({ value }) => {
    expect(value).not.toBeTrimmed();
  });
});
