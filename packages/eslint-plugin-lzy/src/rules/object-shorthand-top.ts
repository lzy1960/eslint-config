import { createRule } from '../utils';

export const RULE_NAME = 'object-shorthand-top';
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
        const { properties, loc } = node;
        const len = properties.length;
        if (len <= 1) return;

        const shorthandArr = properties.filter(i => i.shorthand);
        const longhandArr = properties.filter(i => !i.shorthand);
        let reportError = false;

        // 这个循环是为了检测出错误
        for (let i = 1; i < len; i++) {
          const item = properties[i];
          const preItem = properties[i - 1];
          if (!preItem.shorthand && item.shorthand) {
            reportError = true;
          }
        }

        // 然后做处理
        if (reportError) {
          context.report({
            loc: {
              start: loc.end,
              end: loc.start,
            },
            messageId: 'objectShorthandTop',
            *fix (fixer) {
              const sourceCode = context.getSourceCode();
              const sourceText = sourceCode.getText();
              const nodeArr = properties;
              let i = 0;
              for (const _ of [shorthandArr, longhandArr]) {
                for (const item of _) {
                  const { range } = item;
                  const text = sourceText.substring(range[0], range[1]);
                  yield fixer.replaceText(nodeArr[i], text);
                  i += 1;
                }
              }
            },
          });
        }
      },
    };
  },
});
