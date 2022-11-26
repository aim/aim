import { test, expect } from './library/test'

export default function (a: number, b: number): number {
  return a + b
}

test(module, (implementation) => {
  const actual = implementation(2, 3)
  const expected = 5
  expect(actual).deepEqual(expected)
})
