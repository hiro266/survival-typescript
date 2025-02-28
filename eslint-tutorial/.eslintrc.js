/**
 * root
 *  ESLint は eslintコマンドを実行したディレクトリを起点に、ディレクトリをさかのぼって設定ファイルを探す仕様
 *  ルートディレクトリまでの.eslintrc.jsを探す
 *      trueにしないとプロジェクト外まで見にいってしまう
 *      複数の設定ファイルが見つかった場合は設定内容がマージされていく
 *
 * env
 *  チェック対象のJavaScript/TypeScriptコードがどの実行環境で使われるかをESLintに伝えるためのオプション
 *      browser: window や alert などのグローバル変数が認識される
 *      es2021: ES2021までに導入されたグローバル変数が認識される
 *
 * parserOptions
 *  チェック対象のJavaScriptがどの構文を使っているかをESLintに伝えるためのオプション
 *      ecmaVersion: どのバージョンのECMAScriptの構文を使うかを指定
 *          デフォルトではECMAScript 5が指定(かなり古いverで実務で使用することはまずない)
 *      sourceType: JavaScriptにはスクリプトモードとモジュールモードがあり、JavaScriptコードがどちらのモードで書かれるかを指定するオプション
 *          module: import文やexport文といった追加の構文がサポートされる
 * rules
 *  ESLintのルールに設定するためのオプション
 *     - off
 *          - ルールを無効化、チェックなし
 *      - warn
 *          - 警告として報告、eslint コマンドの終了コードには影響なし
 *      - error
 *          - エラーとして報告、終了コードを 1 にする
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  //   rules: {
  //     "no-console": "error",
  //     // プロパティ名に限ってはcamelCase以外を許容
  //     camelcase: ["error", { properties: "never" }],
  //     // 文末セミコロンを必須
  //     semi: ["error", "always"],
  //   },
  extends: ["airbnb-base"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
  },
};
