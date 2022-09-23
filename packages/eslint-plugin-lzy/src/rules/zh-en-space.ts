import { createRule } from '../utils'

export const RULE_NAME = 'zh-en-space'

export default createRule({
  name: RULE_NAME,
  meta: {
    fixable: 'code',
    docs: {
      description: 'zh en space',
      recommended: 'error',
    },
    messages: {
      zhEnSpace: 'Should have space between ZH and EN',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    return {
      // 注释

      // 字符串
      Literal (node) {
        const { value } = node
        let reportError = false
        let result = ''

        if (typeof value !== 'string') return
        if (value.length <= 1) return

        const charCode = (char: string) => char.charCodeAt(0)
        const typeNotSame = (left: string, right: string) => {
          return (charCode(left) > 255 && charCode(right) <= 255) ||
            (charCode(left) <= 255 && charCode(right) > 255)
        }
        const isQuote = (char: string) => ['\'', '"', '`'].includes(char)
        let pre = ''
        for (let i = 0; i < value.length; i++) {
          const cur = value[i]
          if (pre === '') {
            pre = cur
            result += cur
            continue
          }
          if (isQuote(cur) || isQuote(pre)) {
            pre = cur
            result += cur
            continue
          }
          if (cur === ' ') {
            pre = ''
            result += cur
            continue
          }
          if (typeNotSame(pre, cur)) {
            reportError = true
            result += ' '
          }
          pre = cur
          result += cur
        }
        if (reportError) {
          const sourceCode = context.getSourceCode()
          context.report({
            loc: {
              start: sourceCode.getLocFromIndex(node.range[0] + 1),
              end: sourceCode.getLocFromIndex(node.range[1] - 1),
              // start: node.range[0] + 1,
              // end: node.range[1] - 1,
            },
            messageId: 'zhEnSpace',
            fix (fixer) {
              return fixer.replaceTextRange([node.range[0] + 1, node.range[1] - 1], result)
            },
          })
        }
      },
    }
  },
})
