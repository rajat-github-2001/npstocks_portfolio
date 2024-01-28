module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'strict': 0,
    'linebreak-style': 0,
    'indent': ["off", 4, { "SwitchCase": 1 }],
    'react/jsx-indent': [0, 4],
    'react/sort-comp': [0],
    'react/jsx-no-target-blank': [0],
    'react/no-unused-prop-types': [0],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': ["error", {"extensions": [".js", ".jsx"] }],
    'react/no-unknown-property': [0, { "ignore": ["styleName"] }],
    'import/extensions': ["off", "never"],
    'import/no-extraneous-dependencies': ["error", {"devDependencies": true }],
    'react/forbid-prop-types': [1],
    'react/prop-types': [0, { "ignore": [], "customValidators": [], "skipUndeclared": false }],
    'no-unused-vars': [0, { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'no-console': 0,
    'no-mixed-operators': 0,
  }
};
