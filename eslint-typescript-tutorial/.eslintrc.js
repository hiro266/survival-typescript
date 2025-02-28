module.exports = {
  root: true,
  // 指定したパーサーを使って、ESLintはJavaScriptやTypeScriptの構文を解析
  parser: "@typescript-eslint/parser",
  // ESLintは公式が提供するルールに加えて、第三者が作成したルールを使うこともできます
  // 第三者が作成したルールはプラグインという形で公開
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // プロジェクトルートの絶対パスを指定
    tsconfigRootDir: __dirname,
    // ESLint実行時に使うコンパイラ設定ファイルをtsconfigRootDirからの相対パスで指定
    project: "./tsconfig.eslint.json",
  },
  // ESLintのチェック対象外にするファイルやディレクトリを指定するオプション
  ignorePatterns: ["dist"],
  // shareable configを使うための設定
  extends: [
    "airbnb-base", // JavaScript向けのルール
    "airbnb-typescript/base", // ↑ + TypeScript向けのルール
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // TypeScript ESLintが提供する推奨ルールセットで、型情報を要するルールを含みます。
  ],
  // shareable configで有効化されたルールを上書きするのに用いている
  // shareable config を使用しないなら独自ルールとなる
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "double"],
  },
};
