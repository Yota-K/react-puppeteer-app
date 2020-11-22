module.exports = {
  // 適用する環境
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // extendsプロパティを使うことでESLintおすすめのルールを読み込むことができる
  // 基本的にルールは recommended に従う
  // prettier 関連は配列の最後尾に書く
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  // 使用するプラグインを読み込む
  plugins: ['react-hooks', 'react', '@typescript-eslint'],
  // パーサー
  parser: '@typescript-eslint/parser',
  // jsx を使います
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // TypeScirpt なので prop-types は要らない
    'react/prop-types': 'off',
    'no-var-requires': 'false',
  },
};
