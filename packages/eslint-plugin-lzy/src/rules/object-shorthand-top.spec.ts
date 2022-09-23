import { describe, it } from 'vitest'
import rule, { RULE_NAME } from './object-shorthand-top'
import { ruleTester } from '../utils'

describe('objectShorthandTop', () => {
  const valids = [
    `
      const obj = {
        name,
        age,
      }
    `,
  ]
  const invalids = [
    [
      `
        const obj = {
          age: 19,
          name,
          hobby,
        }
      `,
    ],
  ]
  it('run', () => {
    ruleTester.run(RULE_NAME, rule, {
      valid: valids,
      invalid: invalids.map(i => ({
        code: i[0],
        // output: i[1],
        errors: [{ messageId: 'objectShorthandTop' }],
      })),
    })
  })
})
