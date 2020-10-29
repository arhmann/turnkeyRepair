'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    webpack = require('webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    webpackConfig = require('./webpack.config.js'),
    webpackRun = webpack(webpackConfig);
let paths = {
  css: ['src/scss/**/*.scss'],
  script: ['src/js/main.js', 'src/js/admin.js']
};

function styles() {
  return gulp.src(paths.css)
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: ['node_modules']
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./'))
}
gulp.task('styles', styles);

function scripts (done) {
  webpackRun.run(function (err, stats) {
    if (err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }
  });
  done();
}
gulp.task('scripts', scripts);

function watch() {
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch(paths.script, scripts);
}
gulp.task('watch', watch);

gulp.task('build', gulp.parallel(styles, scripts));
gulp.task('default', gulp.series('build', 'watch'));




