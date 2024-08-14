# sassの@useと@forwardの勉強
BEMで構築を始めるときにまずはどのようなsassのファイル構成にするか悩みました。
実際に今まで明確にBEMで構築をしたことがないのでイチから自分で色々考えてやるのは少し難しかったのでNDブログの[南葉さんの記事](https://www.northdetail.co.jp/blog/2109/)を読みながら参考にしてみることにしました。

## 【壁その1】 <br> いまだに@useと@forwardがしっかり理解できていない

<strong>まずはそもそも@importが何をしているかもう一度整理</strong>
 →@importは分割されたsassファイルを読み込む機能

例えばmoduleの中に`_header.scss`と`_footer.scss`がありそれを`_style.scss`に集約するイメージ。`

<strong>@useと@importantの違い</strong>