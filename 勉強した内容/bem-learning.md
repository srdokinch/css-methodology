# BEMのお勉強
今回は(も)[コーディング練習場](https://webdesigner-go.com/coding-practice/)のサイトを自分で作ってみることにした。

BEMの練習と合わせてcssのアニメーションの練習もしたかったため今回は`【中級編２】ジムサイト`を使ってコーディングすることにした。

---
## BEMの壁その1
### scssのフォルダの構成どうしようかな問題🧐

### 以下やったことリスト
- BEMの公式サイトを確認、フォルダ構成については特に記載なし。
- Google先生（Gemini）に聞いてみる、一般的にはこうですよというフォルダ構成を教えてくれた
- ネットでサクッと調べてみる、[BEMとscssについて書いている記事](https://zenn.dev/goldsaya/articles/21c93d0f13576b)があった。


### 自分の考え
もちろんチームのルールやその時の作成ページのボリュームなど様々な状況を考慮してフォルダ構成を考える必要があるが一般的にこの形というものがあるらしい。
だが今回は作成予定ページが1ページであること、プロジェクトでBEMを使用する際は立ち上げのプロジェクトではない限りもうすでにフォルダ構成やルールが決まっていることが予想されるため好き勝手にやってみることにした。

### 壁その1の結果
CSSの設計をいう面で言うとフォルダ構成なども設計の一部に入ると思うが今回の目的はあくまでもBEMに慣れる。アニメーションを使ってみるということなので、余計なところでは立ち止まらずに行くことにした。

ブレイクポイントやvaliblesはgrobalフォルダを作成しリセットcssやサイトを通して使用される共通パーツはcommonディレクトリを作成した。

---

## BEMの壁その2

### @import廃止になったんだった....😫
@importの記述がサポート終了になってもうすでに2年近く経つが案件でいまだに@importを使っているし、個人で@importから@useに切り替えたりしたこともなかったので今回初めて@useと@forwardを使うことに

### こう言う時は動画を見て学ぼう
海外の人だけどこの人の動画が結構わかりやすくて他の動画も見ているので今回もお世話になることに。
動画は@useと@forwardについて詳しくと言うよりはどちらかと言うと基礎的なところで@importとは何をしているか、@useに置き換わるとどのように変化があるかなどの説明だった。
だが概要がつかめて結構スッキリしたので次の段階へ進むことへ（多分もっと応用的な使い方とかあると思うけどまずは進みます）
<iframe width="560" height="315" src="https://www.youtube.com/embed/CR-a8upNjJ0?si=FG1uWrlUlZu0X0T7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 諸々頑張ってみた結果...
@useと@forward勉強したりしてもっとこうしたいとかフォルダ構成もっと考えたいっていう気持ちがあるけど一旦その気持ちを抑えて次に進むことに・・・
フォルダ構成は一旦以下のようにFLOCSSみたいだけど完全にはFLOCSSではない気持ち悪い感じの構成で行く

---

## BEMについての基礎知識

### そもそもBEMってなに？🧐
BEMとは **B**lock **E**lement **M**odifier の頭文字をとったもの。
Blockは独立した一つのパーツを表しElementはBlockに含まれる要素でModifierは装飾や色の変化などを表すもの。

### クラスの付け方🖊️🗒️
Block__Element-Modifierとするのが一般的だが、ここはプロジェクトによって異なる場合がある。
また単語を組み合わせる時は「-」を使用する。
例）header__**menu-txt** など。

### BEMのルールなど🥸

#### Block
- Blockは必須要素であり機能的に独立しておりあらゆる場所で再利用が可能なものを示す
Block

#### Element
- Elementを使用する時はBlock__elementとする。Elementは必須要素ではないのでBlock単体のコードもOK

#### Modifier
- Modifierは見た目や状態を表すもの。BlockやElementが1つに対してModifierは複数付与することができる。
  - Block-Modifierと記載してもOK（Elementがない場合）

## BlockとElementの合わせ技のmix!?
```
<!-- `header` block -->
<div class="header">
    <!--
        The `search-form` block is mixed with the `search-form` element
        from the `header` block
    -->
    <div class="search-form header__search-form"></div>
</div>
```