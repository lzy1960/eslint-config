import { describe, it } from 'vitest'
import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint'
import rule, { RULE_NAME } from './object-shorthand-top'

describe('happy path', () => {
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
    const ruleTester: RuleTester = new RuleTester({
      parser: require.resolve('@typescript-eslint/parser'),
    })
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
