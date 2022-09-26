import { createRule } from '../utils'

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
  create: (context) => {
    return {
      ObjectExpression (node) {
        const len = node.properties.length
        if (len <= 1) {
          return
        }
        const shorthandArr = node.properties.filter(i => i.shorthand)
        const longhandArr = node.properties.filter(i => !i.shorthand)
        let reportError = false
        // 这个循环是为了检测出错误
        for (let i = 1; i < len; i++) {
          const item = node.properties[i]
          const preItem = node.properties[i - 1]
          if (!preItem.shorthand && item.shorthand) {
            reportError = true
          }
        }
        // 然后做处理
        if (reportError) {
          context.report({
            loc: {
              start: node.loc.end,
              end: node.loc.start,
            },
            messageId: 'objectShorthandTop',
            *fix (fixer) {
              const sourceCode = context.getSourceCode()
              const nodeArr = node.properties
              let i = 0
              for (const item of shorthandArr) {
                const { range } = item
                yield fixer.replaceText(nodeArr[i], sourceCode.getText().substring(range[0], range[1]))
                i += 1
              }
              for (const item of longhandArr) {
                const { range } = item
                yield fixer.replaceText(nodeArr[i], sourceCode.getText().substring(range[0], range[1]))
                i += 1
              }
            },
          })
        }
      },
    }
  },
})
