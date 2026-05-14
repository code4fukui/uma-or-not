# uma-or-not: 四字熟語クイズ 馬か否か

お正月をテーマにした四字熟語のウェブクイズゲームです。四字熟語の伏せられた動物を表す漢字が「馬」であるか否かを当てましょう！

## デモ

ゲームはこちらから遊べます: **https://github.com/code4fukui/uma-or-not

## 遊び方

1. 1文字が伏せられた四字熟語が表示されます（例: `□食虎皮`）。
2. 伏せられた文字には必ず動物が入ります。それが「馬」かどうかを当ててください。
3. 「馬」だと思ったら、**「馬」**ボタンをクリックします。
4. 違う動物だと思ったら、**「否」**ボタンをクリックします。
5. 正解とスコアを確認して、次の問題へ進みましょう！

## 特徴

- ビルド不要な、シンプルな単一ファイルのHTMLアプリケーション。
- 動物に関連する四字熟語のデータセットからランダムに出題。
- お正月をイメージしたおめでたいユーザーインターフェース。
- 正解、不正解、次の問題へ進む際の効果音。
- 正解時には紙吹雪（コンフェッティ）の楽しい演出。
- 合計スコアと現在の連勝数を記録。

## クレジットおよび帰属

本プロジェクトは、以下のオープンデータおよびリソースを活用して作成されました。

### データ

- **動物の四字熟語:** [horse-opendata](https://github.com/code4fukui/horse-opendata/) プロジェクトの [idiom4.csv](https://github.com/code4fukui/horse-opendata/blob/main/idiom4.csv)

### 効果音

- すべての効果音は [効果音ラボ](https://soundeffect-lab.info/) のものを使用しています。
    - 正解: [sound-ok.mp3](sound-ok.mp3) （「クイズ正解1.mp3」より）
    - 不正解: [sound-ng.mp3](sound-ng.mp3) （「クイズ不正解1.mp3」より）
    - 次の問題: [sound-next.mp3](sound-next.mp3) （「和太鼓でドドン.mp3」より）

### ライブラリ

- **紙吹雪（コンフェッティ）エフェクト:** [confetti-es](https://github.com/code4fukui/confetti-es)
- **CSVパースおよびユーティリティ:** [CSV.js](https://js.sabae.cc/CSV.js) および [shuffle.js](https://js.sabae.cc/shuffle.js)

## ライセンス

[MIT](LICENSE)
