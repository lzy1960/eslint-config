module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@lzy1960/basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
}
