export interface MatcherHintOptions {
  secondArgument?: string;
}

export interface MatcherUtils {
  EXPECTED_COLOR: (str: string) => string;
  INVERTED_COLOR: (str: string) => string;
  RECEIVED_COLOR: (str: string) => string;
  iterableEquality?: (...args: any[]) => boolean | undefined;
  matcherHint: (matcherName: string, received?: string, expected?: string, options?: MatcherHintOptions) => string;
  printExpected: (value: unknown) => string;
  printReceived: (object: unknown) => string;
  printWithType: (name: string, value: unknown, print: (value: unknown) => string) => string;
}

export interface MatcherContext {
  readonly customTesters?: any[];
  readonly expand?: boolean;
  readonly isNot?: boolean;
  readonly promise?: string;
  equals: (a: unknown, b: unknown, customTesters?: any[]) => boolean;
  utils: MatcherUtils;
}

export const contains = (equals: (a: unknown, b: unknown) => boolean, list: any, value: any) => {
  return list.findIndex((item: any) => equals(item, value)) > -1;
};

export const determinePropertyMessage = (actual: any, property: any, message = 'Not Accessible') => {
  return actual != null && Object.hasOwn(actual, property) ? actual[property] : message;
};

export interface JestMockOrSpy {
  _isMockFunction?: boolean;
  mock: {
    calls: unknown[][];
    invocationCallOrder: number[];
  };
}

export const isJestMockOrSpy = (value: unknown): value is JestMockOrSpy => {
  return !!(
    value &&
    (value as { _isMockFunction?: unknown })._isMockFunction === true &&
    typeof (value as { mock?: unknown }).mock === 'object'
  );
};

export const containsEntry = (
  equals: (a: unknown, b: unknown) => boolean,
  obj: any,
  [key, value]: readonly [any, any],
) => obj != null && Object.hasOwn(obj, key) && equals(obj[key], value);
