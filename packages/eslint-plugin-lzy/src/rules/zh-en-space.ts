import { RuleContext } from '@typescript-eslint/utils/dist/ts-eslint'
import { createRule } from '../utils'

export const RULE_NAME = 'zh-en-space'

const charCode = (char: string) => char.charCodeAt(0)
const typeNotSame = (left: string, right: string) => {
  return (charCode(left) > 255 && charCode(right) <= 255) ||
    (charCode(left) <= 255 && charCode(right) > 255)
}
const isQuote = (char: string) => ['\'', '"', '`'].includes(char)
const validText = (text: string) => {
  if (!text) return
  let pre = ''
  let result = ''
  let reportError = false
  for (let i = 0; i < text.length; i++) {
    const cur = text[i]
    if (cur === ' ' || cur === '\n') {
      pre = ''
      result += cur
      continue
    }
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
    if (typeNotSame(pre, cur)) {
      reportError = true
      result += ' '
    }
    pre = cur
    result += cur
  }
  return { result, reportError }
}
const validLint = (context: RuleContext<'zhEnSpace', unknown[]>, node, value, startOffset = 0, endOffset = 0) => {
  const { type, range, loc } = node
  if (typeof type !== 'string') return
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
        return fixer.replaceTextRange([range[0] + startOffset, range[1] - endOffset], result)
      },
    })
  }
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
    schema: [
      {
        type: 'object',
        properties: {
          lintComments: { type: 'boolean' },
          lintString: { type: 'boolean' },
          lintTemplate: { type: 'boolean' },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [],
  create: (context) => {
    const ruleOptions = context.options[0] || {}
    return {
      // 注释
      Program () {
        if (ruleOptions.lintComments === false) return
        const sourceCode = context.getSourceCode()
        const comments = sourceCode.getAllComments()
        comments.forEach((comment) => {
          validLint(context, comment, comment.value, 2, comment.type === 'Block' ? 2 : 0)
        })
      },

      // 字符串
      Literal (node) {
        if (ruleOptions.lintString === false) return
        validLint(context, node, node.value, 1, 1)
      },

      // 模板字符串
      TemplateElement (node) {
        if (ruleOptions.lintTemplate === false) return
        validLint(context, node, node.value.cooked, 1, 1)
      },
    }
  },
})
