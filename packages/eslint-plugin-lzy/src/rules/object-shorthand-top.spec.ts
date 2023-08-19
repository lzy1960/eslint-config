import { describe, it } from 'vitest';
import rule, { RULE_NAME } from './object-shorthand-top';
import { ruleTester } from '../utils';

describe('objectShorthandTop', () => {
  const valids = [
    `
      const obj = {
        name,
        age,
      }
    `,
    'const obj = {name, hobby, age: 18, score: 90}',
  ];
  const invalids = [
    // formatted
    [
      `
        const obj = {
          score: 90,
          age: 19,
          name,
          hobby,
        }
      `,
      `
        const obj = {
          name,
          hobby,
          score: 90,
          age: 19,
        }
      `,
    ],
    // inline
    [
      'const obj = {score: 90, name, hobby, age: 18}',
      'const obj = {name, hobby, score: 90, age: 18}',
    ],
  ];
  it('run', () => {
    ruleTester.run(RULE_NAME, rule, {
      valid: valids,
      invalid: invalids.map(i => ({
        code: i[0],
        output: i[1],
        errors: [{ messageId: 'objectShorthandTop' }],
      })),
    });
  });
});
