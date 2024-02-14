const { a, b } = require('../../src/advanced/swap.js')

describe('swap variables', () => {
  it("check variables were swapped'", () => {
    expect(a).toEqual(10)
    expect(b).toEqual(8)
  })
})
