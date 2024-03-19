module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  ignorePatterns: [
    '*.d.ts',
    'dist',
    'LICENSE*',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
  ],
  plugins: [
    'import',
    'lzy',
    '@stylistic/js',
  ],
  rules: {
    /**
     * 在打开数组括号之后和关闭数组括号之前强制换行
     */
    '@stylistic/js/array-bracket-newline': ['warn', 'consistent'],
    /**
     * 强制数组括号内的间距一致
     *
     * ✅`['foo', 'bar', 'baz']`
     */
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    /**
     * 在每个数组元素后强制换行
     */
    '@stylistic/js/array-element-newline': ['warn', 'consistent'],
    /**
     * 箭头函数参数周围需要括号
     */
    '@stylistic/js/arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    /**
     * 在箭头函数中强制箭头前后的间距一致
     */
    '@stylistic/js/arrow-spacing': ['error', { before: true, after: true }],
    /**
     * 在打开块之后和关闭块之前禁止或强制块内有空格
     */
    '@stylistic/js/block-spacing': ['error', 'always'],
    /**
     * 为块强制执行一致的支撑样式
     */
    '@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    /**
     * 需要或不允许尾随逗号
     */
    '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
    /**
     * 强制逗号前后的间距一致
     */
    '@stylistic/js/comma-spacing': ['error', { before: false, after: true }],
    /**
     * 强制使用一致的逗号风格
     */
    '@stylistic/js/comma-style': ['warn', 'last'],
    /**
     * 强制计算属性括号内的间距一致
     *
     * `let x = {[b]: a}`
     */
    '@stylistic/js/computed-property-spacing': ['error', 'never'],
    /**
     * 在点之前和之后强制执行一致的换行符
     *
     * 两种场景都需要，故关闭该规则
     */
    '@stylistic/js/dot-location': 'off',
    /**
     * 要求或禁止在文件末尾换行
     */
    '@stylistic/js/eol-last': ['error', 'always'],
    /**
     * 在函数调用的参数之间强制换行
     */
    '@stylistic/js/function-call-argument-newline': ['warn', 'consistent'],
    /**
     * 要求或禁止函数标识符及其调用之间有空格
     */
    '@stylistic/js/function-call-spacing': ['error', 'never'],
    /**
     * 在函数括号内强制执行一致的换行符
     */
    '@stylistic/js/function-paren-newline': ['never', 'multiline-arguments'],
    /**
     * 在生成器函数中强制执行“*”运算符周围的一致间距
     *
     * 不熟，先关闭
     */
    '@stylistic/js/generator-star-spacing': 'off',
    /**
     * 强制箭头函数体的位置
     */
    '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],
    /**
     * 强制缩进 2 空格
     */
    '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
    /**
     * 强制在 JSX 属性中一致使用双引号或单引号
     * 
     * 强制使用单引号
     */
    '@stylistic/js/jsx-quotes': ['error', 'prefer-single'],
    /**
     * 强制对象文字属性中的键和值之间的间距一致
     */
    '@stylistic/js/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    /**
     * 在关键字前后强制执行一致的间距
     *
     * 例：`} else {`
     */
    '@stylistic/js/keyword-spacing': ['error', { before: true, after: true }],
    /**
     * 强制执行一致的换行样式
     */
    '@stylistic/js/linebreak-style': ['error', 'unix'],
    /**
     * 注释周围需要空行
     */
    '@stylistic/js/lines-around-comment': ['error', { beforeBlockComment: true, allowBlockStart: true, allowBlockEnd: true }],
    /**
     * 要求或禁止类成员之间有空行
     */
    '@stylistic/js/lines-between-class-members': ['error', 'always'],
    /**
     * 强制执行最大行长度
     */
    '@stylistic/js/max-len': ['warn', { code: 80, ignoreComments: true }],
    /**
     * 强制每行允许的最大语句数
     */
    '@stylistic/js/max-statements-per-line': ["error", { max: 1 }],
    /**
     * 在三元表达式的操作数之间强制换行
     */
    '@stylistic/js/multiline-ternary': ['error', 'always-multiline'],
    /**
     * 调用不带参数的构造函数时强制或禁止使用括号
     */
    '@stylistic/js/new-parens': ['error', 'always'],
    /**
     * 方法链中的每次调用后都需要换行符
     */
    '@stylistic/js/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
    /**
     * 禁止使用可能与比较混淆的箭头函数
     */
    '@stylistic/js/no-confusing-arrow': ["error", { allowParens: true, onlyOneSimpleParam: false }],
    /**
     * 禁止使用不必要的括号
     */
    '@stylistic/js/no-extra-parens': ['error', 'all'],
    /**
     * 禁止使用不必要的分号
     */
    '@stylistic/js/no-extra-semi': 'error',
    /**
     * 不允许在数字文字中使用前导或尾随小数点
     */
    '@stylistic/js/no-floating-decimal': 'error',
    /**
     * 禁止混合二元运算符
     */
    '@stylistic/js/no-mixed-operators': ['error', {
      groups: [
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    }],
    /**
     * 禁止混合使用空格和制表符进行缩进
     */
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
    /**
     * 禁止多个空格
     */
    '@stylistic/js/no-multi-spaces': ['error'],
    /**
     * 禁止多个空行
     */
    '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1 }],
    /**
     * 禁止所有选项卡
     */
    '@stylistic/js/no-tabs': ['error', { allowIndentationTabs: false }],
    /**
     * 禁止行尾有尾随空格
     */
    '@stylistic/js/no-trailing-spaces': ['error'],
    /**
     * 禁止属性前有空格
     */
    '@stylistic/js/no-whitespace-before-property': 'error',
    /**
     * 强制单行语句的位置
     */
    '@stylistic/js/nonblock-statement-body-position': ['error'],
    /**
     * 在打开大括号之后和关闭大括号之前强制执行一致的换行符
     */
    '@stylistic/js/object-curly-newline': ['error'],
    /**
     * 强制大括号内的间距一致
     */
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    /**
     * 强制将对象属性放置在单独的行上
     */
    '@stylistic/js/object-property-newline': ['error'],
    /**
     * 要求或禁止变量声明周围换行
     */
    '@stylistic/js/one-var-declaration-per-line': ['error'],
    /**
     * 强制执行一致的换行样式
     */
    '@stylistic/js/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
    /**
     * 要求或禁止块内填充
     */
    '@stylistic/js/padded-blocks': ['error'],
    /**
     * 要求或禁止语句之间的填充行
     */
    '@stylistic/js/padding-line-between-statements': ['error'],
    /**
     * 需要在对象文字属性名称周围加上引号
     */
    '@stylistic/js/quote-props': ['error', 'as-needed'],
    /**
     * 强制一致使用反引号、双引号或单引号
     *
     * 必须使用 单引号
     */
    '@stylistic/js/quotes': ['error', 'single'],
    /**
     * 强制剩余和扩展运算符及其表达式之间的间距
     */
    '@stylistic/js/rest-spread-spacing': ['error'],
    /**
     * 需要或不允许使用分号代替 ASI
     *
     * ❗必加
     */
    '@stylistic/js/semi': ['error', 'always'],
    /**
     * 强制分号前后的间距一致
     */
    '@stylistic/js/semi-spacing': ['error'],
    /**
     * 强制分号的位置
     */
    '@stylistic/js/semi-style': ['error'],
    /**
     * 在块之前强制执行一致的间距
     */
    '@stylistic/js/space-before-blocks': ['error'],
    /**
     * 在“函数”定义左括号之前强制执行一致的间距
     */
    '@stylistic/js/space-before-function-paren': ['error', 'always'],
    /**
     * 强制括号内的间距一致
     */
    '@stylistic/js/space-in-parens': ['error'],
    /**
     * 要求中缀运算符周围有间距
     */
    '@stylistic/js/space-infix-ops': ['error'],
    /**
     * 在一元运算符之前或之后强制执行一致的间距
     */
    '@stylistic/js/space-unary-ops': ['error'],
    /**
     * 在注释中的“//”或“/*”之后强制执行一致的间距
     */
    '@stylistic/js/spaced-comment': ['error', 'always', { line: { exceptions: ['-', '+', '='] }, block: { exceptions: ['*'] } }],
    /**
     * 强制 switch 语句的冒号周围有空格
     */
    '@stylistic/js/switch-colon-spacing': ['error'],
    /**
     * 要求或禁止模板字符串的嵌入表达式周围有空格
     */
    '@stylistic/js/template-curly-spacing': ['error'],
    /**
     * 要求或禁止模板标签与其文字之间有空格
     */
    '@stylistic/js/template-tag-spacing': ['error'],
    /**
     * 需要在直接“function”调用周围使用括号
     */
    '@stylistic/js/wrap-iife': ['error'],
    /**
     * 正则表达式文字周围需要括号
     */
    '@stylistic/js/wrap-regex': ['error'],
    /**
     * 要求或禁止“yield*”表达式中“*”周围有空格
     * 
     * 不熟，先关闭
     */
    '@stylistic/js/yield-star-spacing': 'off',

    'no-var': 'error',
    'prefer-const': 'error',
    'no-undef': 'off',
    'no-const-assign': 'error',
    'no-new-object': 'error',
    'no-new-func': 'error',
    'no-array-constructor': 'error',
    'object-shorthand': 'error',
    'prefer-object-spread': 'error',
    'array-callback-return': 'error',
    'prefer-template': 'error',
    'no-eval': 'error',
    'no-useless-escape': 'error',
    'prefer-rest-params': 'error',
    'default-param-last': 'error',
    'prefer-spread': 'error',
    'prefer-arrow-callback': 'error',
    'no-useless-constructor': 'error',
    'dot-notation': ['error', { allowKeywords: true }],
    'one-var': ['error', { initialized: 'never' }],
    'no-unused-vars': 'error',
    'no-case-declarations': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: true }],
    'capitalized-comments': 'off',
    'multiline-comment-style': 'off',
    'no-inline-comments': 'off',
    'line-comment-position': 'off',
    'no-spaced-func': 'error',
    'no-redeclare': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-func-assign': 'error',

    // import
    'import/no-empty-named-blocks': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-absolute-path': 'error',
    'import/no-relative-packages': 'error',
    'import/no-useless-path-segments': 'error',
    'import/consistent-type-specifier-style': 'error',
    'import/no-mutable-exports': 'error',
    'import/first': 'error',
    'import/imports-first': 'error',
    'import/newline-after-import': ['warn', { count: 1, exactCount: true, considerComments: true }],
    'import/no-duplicates': 'error',
    /**
     * import * as xxx from 'xxx'
     *
     * 无需校验，关闭即可
     */
    'import/no-namespace': 'off',
    'import/order': ['warn', {
      'newlines-between': 'always',
    }],

    // lzy plugin
    'lzy/object-shorthand-top': 'error',
    'lzy/zh-en-space': ['error', { lintComments: true, lintTemplate: true, lintString: false }],
  },
};
