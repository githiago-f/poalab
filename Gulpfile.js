import gulp from 'gulp';
import minify from 'gulp-minify';
import uglify from 'gulp-uglify';
import useref from 'gulp-useref';
import cleanAll from 'gulp-clean';
import minifyCss from 'gulp-clean-css';
import cleanHtml from 'gulp-cleanhtml';
import imagemin from 'gulp-imagemin';
import gulpIf from 'gulp-if';
import minifyJSON from 'gulp-json-minify';
import inlineSource from 'gulp-inline-source';

const { src, dest, task, series } = gulp;

function html() {
  return src('./*.html')
    .pipe(minify())
    .pipe(useref())
    .pipe(cleanHtml())
    .pipe(
      gulpIf('*.html', inlineSource())
    )
    .pipe(
      gulpIf('*.js', minify().pipe(uglify()))
    )
    .pipe(
      gulpIf('*.css', minifyCss())
    )
    .pipe(dest('dest/'));
}

function script() {
  return src('assets/js/*.js')
    .pipe(uglify())
    .pipe(minify())
    .pipe(dest('dest/js/bundle.js'));
}

function css() {
  return src('assets/css/*.css')
    .pipe(minifyCss())
    .pipe(dest('dest/css/bundle.css'));
}

function image() {
  return src('assets/img/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        { removeViewBox: false },
        { cleanupIDs: false }
      ]
    }))
    .pipe(dest('dest/assets/img'));
}

function copyData() {
  return src('assets/data/*')
    .pipe(minifyJSON())
    .pipe(dest('dest/assets/data'));
}

function clean() {
  return src('dest', { read: false, allowEmpty: true })
    .pipe(cleanAll());
}

task('html', html);
task('clean', clean);
task('script', script);
task('css', css);
task('image', image);
task('copyData', copyData);

task('default', series('clean', 'html', 'image', 'copyData'));