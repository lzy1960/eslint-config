import { describe, it } from 'vitest'
import rule, { RULE_NAME } from './zh-en-space'
import { ruleTester } from '../utils'

describe('zhEnSpace', () => {
  const valids = [
    /**
     * string
     */
    '\'\'',                         // blank
    '\'好\'',                       // one char
    '\'"好"\'',                     // string in string
    '\'OK\'',                       // multi chars
    '\' OK \'',                     // multi chars with start and end space
    '\'我会 jump 绳\'',              // standard
    'const text = \'是 this 的呢\'', // string in expression

    /**
     * comment
     */
    '// 中文',
    '/* 中文 */',
    '// // 注释里的注释',
    `
      // this is 对的
      /* this 也是
       right */
      /**
       * this is 文档注释
       */ 
    `,
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

    /**
     * comments
     */
    [
      `
        // 这是wrong
      `,
      `
        // 这是 wrong
      `,
    ],
    [
      `
        /* this也是wrong */
      `,
      `
        /* this 也是 wrong */
      `,
    ],
    [
      `
        /**
         * 这是wrong
         * 这也是wrong
         */
      `,
      `
        /**
         * 这是 wrong
         * 这也是 wrong
         */
      `,
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
