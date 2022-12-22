process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  plugins: ['tailwindcss'],
  extends: ['@antfu', 'plugin:tailwindcss/recommended'],
  rules: {
    'no-console': 'off',
    'curly': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/define-macros-order': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
}
