# survival-typescript

## コンパイラ(tsc)

- コンパイラは型に問題があれば教える
- 型注釈を書くと、細かくチェックをしてくれる
  - 型注釈がなくても自身で推論する
- tsc コマンドでコンパイル
  - ts ファイルから js ファイルを生成
- コンパイラがコンパイルして生成した js をデプロイして使う

## TSX ファイル

- 下記のような HTML に見える部分を `JSX(構文)` という

```
<>
    <h1>TypeScriptはいいぞ</h1>
</>
```

- `JSX` は JavaScript を拡張した構文
  - JavaScript の中に XML(≒ HTML)を直接かけるようにしたもの
- JS で XML(≒ HTML)を組み込みたければ拡張子を `.jsx`、TS で XML(≒ HTML)を組み込みたければ `.tsx`

## 関数コンポーネント

- 下記のような `JSXを戻り値にする関数`を React 用語で「関数コンポーネント」という

```
const LikeButton = () => {
  return <button>いいね！</button>;
};
```

## Next.js

- React をベースにしたフロントエンドフレームワーク
  - 他には Remix など

### メリット

- バンドラ(webpack)の設定があらかじめされた状態で開発ができる
  - React のみで開発する場合
    - webpack のようなモジュールバンドラを用いるのが普通
    - webpack の設定(チャンク分割や CSS モジュール設定など)が複雑
- ルーティング(App Router)、データ取得が API として用意されている
  - React のみで開発する場合
    - 用意が必要
    - ルーティング
      - Tanstack Router
      - React Router
    - データ取得
      - Tanstack Query
- ページ単位で SSR や SSG 機能

### デメリット

- too much
  - SPA で充分な場合は軽量な React + ルーティング、データ取得を選定した方がパフォーマンス良い

## バンドラ

- バンドル=まとめる
- 複数ファイルを一つのファイル(bundle.js)にバンドルする
  - tsc で TS から JS ファイルを生成 → 生成した複数の JS ファイルを一つにまとめる
  - JS 以外にもモジュールやその他リソース(CSS や画像)を一つにファイルにまとめる

### 主なツール

- webpack
- vite
- Rollup
- esbuild
