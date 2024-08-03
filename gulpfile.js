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
const copy = require('gulp-copy');

// scssの処理
const cssSass = () => {
  return src('src/scss/*.scss') //コンパイル元
  .pipe(plumber({ errorHandler: notify.onError({ message: "<%= error.message %>" })}))
  .pipe(postcss([mqpacker()]))
  .pipe(sass({ outputStyle: 'expanded'}))
  .pipe(dest('dist/css'));   //コンパイル先
}

// 画像コピータスク
function copyImages() {
  return src('src/img/**/*', {encoding: false})
    .pipe(dest('dist/img'));
}

// jsをコピー
function copyJavascript() {
  return src('src/js/**/*')
    .pipe(dest('dist/js'));
}

// タスクをまとめて実行
exports.default = series(cssSass, copyImages, copyJavascript);

exports.watch = function() {
  watch('src/scss/*.scss', series(cssSass));
  watch(['src/img/**/*'], series(copyImages));
  watch(['src/js/**/*'], series(copyJavascript));
};