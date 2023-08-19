import { ESLintUtils } from '@typescript-eslint/utils';
import { RuleTester } from '@typescript-eslint/utils/dist/ts-eslint';
export const createRule = ESLintUtils.RuleCreator(
  name => name,
);
export const ruleTester: RuleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});
