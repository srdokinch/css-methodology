# head内に書くべきタグについて

今回BEMやアニメーションを勉強するにあたり自分でhtmlファイルやcssを用意して始めるときにhead内って何を書くべきなんだろうと思ったので備忘録的に勉強したことをメモ

## headにはメタタグやlinkタグを記載
復習も兼ねてちゃんと言語化。head内にはユーザーから見えない情報が入っていてそれは検索エンジンやブラウザに向けた指示や情報が記載されている。

## head内に書くもの一覧
head内に書くものは大まかに以下のように分けられる
- 必ず書くもの
- できれば書いておきたいもの
- SEO対策のもの

色々設定があるので、ここにまとめておきます。


## head内に必ず書くもの
1. **文字のエンコード**
   `<meta charset="utf-8" />` みたいな感じで文字コードを指定します。日本語のサイトであればutf-8を指定します。
   もしこの記述がないとブラウザが文字コードを勝手に推測し、誤った文字コードを設定し文字化けが発生する可能性ありです。

   ---
   
2. **viewportの設定**
   `<meta name="viewport" content="width=device-width,initial-scale=1" />`
   これは言わずもがなの設定。レスポンシブに対応したサイトを作成するのであれば必須の設定タグ

   ---

3. **タイトルタグ**
   `<title>ページのタイトル</title>` を設定することでSEO対策にもなります。検索結果やブラウザのタブに表示されるので必ず書いておく。

   ---

4. **OGPタグやXカード**
   ```
   <meta property="og:url" content="ページのURL" />
   <meta property="og:title" content="ページのタイトル" />
   <meta property="og:type" content="ページのタイプ">
   <meta property="og:description" content="記事の抜粋" />
   <meta property="og:image" content="画像のURL" />
   <meta name="twitter:card" content="カード種類" />
   <meta name="twitter:site" content="@Twitterユーザー名" />
   <meta property="og:site_name" content="サイト名" />
   <meta property="og:locale" content="ja_JP" />
   <meta property="fb:app_id" content="appIDを入力" />
   ```
   facebookやXでシェアされたときにリンクと一緒に画像を表示させ記事のイメージを膨らます設定。SNSからの流入を伸ばすためには必須ですね。

   ---

## できれば書いておきたいもの
1. **IEの設定**
   `<meta http-equiv="X-UA-Compatible" content="IE=edge" />` と設定すると互換モードをONにすることができず常に標準モードで表示できるみたい。

   ---

2. **meta description**
   `<meta name="description" content="ページの内容を表す文章" />`
   上記のようなdescriptionを記載すると検索結果ページのtitleタグの下に文章が表示される。ただこれが直接的な検索上昇効果はないとのことだが、ユーザーのことを考えるとほぼ必須の情報かなと思います。ちなみに100文字以下程度が書くと収まるらしい。
   適当に書いたり自動抽出するなら全く描かない方がマシらしい。Google様が自動で本文から抽出するって偉い人が言ってました。

   ---
まだまだたくさんあるけどここに書くよりは以下のサイトを見た方が早いと思うので、参考にしたサイトをここにメモ
https://saruwakakun.com/html-css/basic/head
