const answers = require('../../src/extensions/types.js')

describe('variable types', () => {
  it('pickMe', () => {
    expect(answers.pickMe).toBe('Pick me!')
  })
  it('imTrue', () => {
    expect(answers.imTrue).toBe(true)
  })
  it('aReal', () => {
    expect(answers.aReal).toBe(3.14)
  })
  it('aString', () => {
    expect(answers.aString).toBe('hey')
  })
  it('anArray', () => {
    expect(answers.anArray).toEqual([1, 2, 3])
  })
  it('aNumber', () => {
    expect(answers.aNumber).toBe(-12)
  })
  it('anObject', () => {
    expect(answers.anObject).toEqual({ i: 'object!' })
  })
  it('imFalse', () => {
    expect(answers.imFalse).toBe(false)
  })
  it('imBigInt', () => {
    expect(answers.imBigInt).toBe(10000000n)
  })
  it('imUndefined', () => {
    expect(answers.imUndefined).toBe(undefined)
  })
  it('imNull', () => {
    expect(answers.imNull).toBe(null)
  })
})
