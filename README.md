# survival-typescript

### コンパイラ

- コンパイラは型に問題があれば教える
- 型注釈を書くと、細かくチェックをしてくれる
  - 型注釈がなくても自身で推論する
- tsc コマンドでコンパイル
  - ts ファイルから js ファイルを生成
- コンパイラがコンパイルして生成した js をデプロイして使う

### TSX ファイル

- 下記のような HTML に見える部分を `JSX(構文)` という

```
<>
    <h1>TypeScriptはいいぞ</h1>
</>
```

- `JSX` は JavaScript を拡張した構文
  - JavaScript の中に XML(≒ HTML)を直接かけるようにしたもの
- JS で XML(≒ HTML)を組み込みたければ拡張子を `.jsx`、TS で XML(≒ HTML)を組み込みたければ `.tsx`

### 関数コンポーネント

- 下記のような `JSXを戻り値にする関数`を React 用語で「関数コンポーネント」という

```
const LikeButton = () => {
  return <button>いいね！</button>;
};
```
