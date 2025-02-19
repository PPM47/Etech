const { rules } = require('eslint-config-prettier')

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/prefer-default-export': 'off',
    // 'import/extensions': 'off',
    // 'import/no-cycle': 'off',
  },
}
