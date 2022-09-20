import { ESLintUtils } from '@typescript-eslint/utils'
const createRule = ESLintUtils.RuleCreator(
  name => name,
)
export const RULE_NAME = 'object-shorthand-top'
export default createRule({
  name: RULE_NAME,
  meta: {
    fixable: 'code',
    docs: {
      description: 'Object shorthand to top',
      recommended: 'error',
    },
    messages: {
      objectShorthandTop: 'Shorthand attribute must be the top',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create (context) {
    return {
      ObjectExpression (node) {
        if (node.properties.length <= 1) {
          return
        }
        const shorthands = new Map<string, typeof node.loc>()
        const notShorthands = new Map<string, typeof node.loc>()
        for (let i = 1; i < node.properties.length; i++) {
          const item = node.properties[i]
          const preItem = node.properties[i - 1]
          const key = item.key.name
          let reportError = false
          if (!preItem.shorthand && item.shorthand) {
            reportError = true
          }
          if (item.shorthand) {
            shorthands.set(key, item.loc)
          } else {
            notShorthands.set(key, item.loc)
          }
          if (reportError) {
            context.report({
              loc: {
                start: node.loc.end,
                end: node.loc.start,
              },
              messageId: 'objectShorthandTop',
            })
          }
        }
      },
    }
  },
})
