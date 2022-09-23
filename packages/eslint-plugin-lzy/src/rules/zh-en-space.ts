import { createRule } from '../utils'

export const RULE_NAME = 'zh-en-space'

const charCode = (char: string) => char.charCodeAt(0)
const typeNotSame = (left: string, right: string) => {
  return (charCode(left) > 255 && charCode(right) <= 255) ||
    (charCode(left) <= 255 && charCode(right) > 255)
}
const isQuote = (char: string) => ['\'', '"', '`'].includes(char)
const validText = (text: string) => {
  let pre = ''
  let result = ''
  let reportError = false
  for (let i = 0; i < text.length; i++) {
    const cur = text[i]
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
    if (cur === ' ' || cur === '\n') {
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
  return { result, reportError }
}

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
      Program (node) {
        const sourceCode = context.getSourceCode()
        const comments = sourceCode.getAllComments()
        comments.forEach((comment) => {
          const { value, loc, range } = comment
          console.log(comment)
          const { result, reportError } = validText(value)
          if (reportError) {
            context.report({
              node,
              loc: {
                start: loc.start,
                end: loc.end,
              },
              messageId: 'zhEnSpace',
              fix (fixer) {
                console.log(`===========${result}==============`)
                return fixer.replaceTextRange([range[0], range[1]], result)
              },
            })
          }
        })
      },

      // 字符串
      Literal (node) {
        const { value, loc, range } = node

        if (typeof value !== 'string') return
        if (value.length <= 1) return

        const { result, reportError } = validText(value)
        if (reportError) {
          context.report({
            loc: {
              start: loc.start,
              end: loc.end,
            },
            messageId: 'zhEnSpace',
            fix (fixer) {
              return fixer.replaceTextRange([range[0] + 1, range[1] - 1], result)
            },
          })
        }
      },
    }
  },
})
