# アニメーションについて

## transitionプロパティとanimationプロパティの違い
1. transitionプロパティは@keyframesの設定はなし
   1. animationでcssアニメーションを実装する際は、別途@keyframesで変化していく形状などを記述しておく必要がある
   2. transitionでは@keyframesの設定は必要なし
2. transitionはトリガーが必要
   1. transitionは:hoverや:activeなど要素が変化するときに実行される。
   2. 言い換えれば:hoverなどの要素の変化をシームレスに行うのがtransitionになる
3. transitionは詳細設定ができない
   1. animmationは@keyframesで変化中の状態を細かく設定したりアニメーション終了後の状態など詳細設定できるが、transitionは詳細設定はできない
   2. transitionは工数をかけずに:hoverなどの変化前と変化後を滑らかに繋ぎたい時などに使用するのが一般的