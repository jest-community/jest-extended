import type { CustomMatchers } from './types/matchers.js';
import type {} from 'vitest';

type VitestMatchers<R> = Omit<
  CustomMatchers<R, never>,
  'fail' | 'toBeOneOf' | 'toSatisfy' | 'toHaveBeenCalledBefore' | 'toHaveBeenCalledAfter' | 'toResolve' | 'toReject'
> & {
  toResolve(): Promise<void>;
  toReject(): Promise<void>;
};

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars
  interface Matchers<R, T> extends VitestMatchers<R> {}
}
