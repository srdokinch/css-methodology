/*
src 参照元を指定
dest 出力先を指定
watch ファイル監視
series(直列処理)とparallel(並列処理)
*/

const { src, dest, watch, series, parallel } = require('gulp');

// プラグインを呼び出し
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const postcss = require("gulp-postcss");
const mqpacker = require('css-mqpacker');

// プラグインの処理をまとめる
const cssSass = () => {
  return src('src/scss/*.scss') //コンパイル元
  .pipe(plumber({ errorHandler: notify.onError({ message: "<%= error.message %>" })}))
  .pipe(postcss([mqpacker()]))
  .pipe(sass({ outputStyle: 'expanded'}))
  .pipe(dest('dist/css'));   //コンパイル先
}

// タスクをまとめて実行
exports.default = series(cssSass);

exports.watch = function() {
  watch('src/scss/*.scss', cssSass);
}