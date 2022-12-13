import * as matcher from 'src/matchers/toBeGeoLongitude';

expect.extend(matcher);

const ROME = { latitude: 41.902783, longitude: 12.496366 };

describe('.toBeGeoLongitude', () => {
  test('passes when given valid longitude number', () => {
    expect(ROME.longitude).toBeGeoLongitude();
  });

  test('passes when given valid longitude string', () => {
    expect(`${ROME.longitude}`).toBeGeoLongitude();
  });

  test('fails when not given a longitude string', () => {
    expect(() => expect('any_not_valid_longitude').toBeGeoLongitude()).toThrowErrorMatchingSnapshot();
  });

  test('fails when not given a longitude positive number', () => {
    expect(() => expect(180.1).toBeGeoLongitude()).toThrowErrorMatchingSnapshot();
  });

  test('fails when not given a longitude negative number', () => {
    expect(() => expect(-180.1).toBeGeoLongitude()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeGeoLongitude', () => {
  test.each([['true'], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    'passes when item is not of type longitude: %s',
    given => {
      expect(given).not.toBeGeoLongitude();
    },
  );

  test('fails when given a longitude number', () => {
    expect(() => expect(ROME.longitude).not.toBeGeoLongitude()).toThrowErrorMatchingSnapshot();
  });

  test('fails when given a longitude string', () => {
    expect(() => expect(`${ROME.longitude}`).not.toBeGeoLongitude()).toThrowErrorMatchingSnapshot();
  });
});
