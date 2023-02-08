import * as matcher from 'src/matchers/toBeGeoLatitude';

expect.extend(matcher);

const ROME = { latitude: 41.902783, longitude: 12.496366 };

describe('.toBeGeoLatitude', () => {
  test('passes when given valid latitude number', () => {
    expect(ROME.latitude).toBeGeoLatitude();
  });

  test('passes when given valid latitude string', () => {
    expect(`${ROME.latitude}`).toBeGeoLatitude();
  });

  test('fails when not given a latitude string', () => {
    expect(() => expect('any_not_valid_latitude').toBeGeoLatitude()).toThrowErrorMatchingSnapshot();
  });

  test('fails when not given a latitude positive number', () => {
    expect(() => expect(90.1).toBeGeoLatitude()).toThrowErrorMatchingSnapshot();
  });

  test('fails when not given a latitude negative number', () => {
    expect(() => expect(-90.1).toBeGeoLatitude()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeGeoLatitude', () => {
  test.each([['true'], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    'passes when item is not of type latitude: %s',
    given => {
      expect(given).not.toBeGeoLatitude();
    },
  );

  test('fails when given a latitude number', () => {
    expect(() => expect(ROME.latitude).not.toBeGeoLatitude()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given a latitude string', () => {
    expect(() => expect(`${ROME.latitude}`).not.toBeGeoLatitude()).toThrowErrorMatchingSnapshot();
  });
});
