module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['standard', 'prettier', 'prettier/@typescript-eslint'],
  parser: ['babel-eslint', '@typescript-eslint/parser'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
    camelcase: 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
