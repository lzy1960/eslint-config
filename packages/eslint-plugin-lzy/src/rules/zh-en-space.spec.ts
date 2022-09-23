import { describe, it } from 'vitest'
import rule, { RULE_NAME } from './zh-en-space'
import { ruleTester } from '../utils'

describe('zhEnSpace', () => {
  const valids = [
    '\'\'',                         // blank
    '\'好\'',                       // one char
    '\'"好"\'',                     // string in string
    '\'OK\'',                       // multi chars
    '\' OK \'',                     // multi chars with start and end space
    '\'我会 jump 绳\'',              // standard
    'const text = \'是 this 的呢\'', // string in expression
  ]
  const invalids = [
    [
      /* eslint-disable-next-line */
      '\'我会jump绳\'',
      '\'我会 jump 绳\'',
    ],
    [
      /* eslint-disable-next-line */
      '\' OK好 \'',
      '\' OK 好 \'',
    ],
    [
      /* eslint-disable-next-line */
      '\'" OK好 "\'',
      '\'" OK 好 "\'',
    ],
    [
      /* eslint-disable-next-line */
      'const text = \'是this的呢\'',
      'const text = \'是 this 的呢\'',
    ],
  ]
  it('run', () => {
    ruleTester.run(RULE_NAME, rule, {
      valid: valids,
      invalid: invalids.map(i => ({
        code: i[0],
        output: i[1],
        errors: [{ messageId: 'zhEnSpace' }],
      })),
    })
  })
})
