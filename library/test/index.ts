import assert from 'node:assert/strict'

export function test(
  module: NodeModule,
  callback: (implementation: Function) => void
): void {
  callback(module.exports.default)
}

export function expect(actual: unknown) {
  return {
    deepEqual: (expected: unknown) => assert.deepEqual(actual, expected)
  }
}

// CHECK: https://marmelab.com/blog/2019/04/18/property-based-testing-js.html
