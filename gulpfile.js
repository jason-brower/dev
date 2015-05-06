var gulp = require('gulp');
var sass = require('gulp-sass');
var open = require('gulp-open');
var sourcemaps = require('gulp-sourcemaps');
var gls = require('gulp-live-server');
var path = require('path');
var systemjs = require('systemjs-builder');

/**
 * JavaScript build task.
 * Combines and minifies all packages into a single file.
 */
gulp.task('build-js', function() {
  var builder = new systemjs();
  return builder.loadConfig('./config.js')
    .then(function() {
      var options = {
        minify: true,
        sourceMaps: true
      };
      builder.config({ baseURL: 'file:' + path.resolve('./') });
      return builder.buildSFX('./app/app', './build.js', options);
    });
});

/**
 * CSS build task.
 * Combines and minifies all sass files into a single stylesheet.
 */
gulp.task('build-css', function() {

  gulp.src(['jspm_packages/bower/bootstrap-sass@3.3.4/assets/fonts/**/*'])
    .pipe(gulp.dest('fonts'));

  return gulp.src('./sass/*')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

/**
 * WebServer task.
 * Starts a web server and watchs for file changes.
 */
gulp.task('webserver', function() {
  var server = gls.new('app.js');
  server.start();

  gulp.watch(['sass/**/*.scss'], ['build-css']);
  gulp.watch(['css/**/*.css', 'app/**/*.js', 'index.html'], server.notify);
  gulp.watch('app.js', server.start);
});

/**
 * Open application task.
 * Opens the application in the default browser.
 */
gulp.task('open', function() {
  var options = {
    url: 'http://localhost:8080'
  };
  gulp.src('./index.html')
    .pipe(open('', options));
});

/**
 * Build task.
 * Builds all source files into production ready files.
 */
gulp.task('build', ['build-js', 'build-css']);

/**
 * Development task.
 * Starts a server, watches for changes, and launches the application.
 */
gulp.task('default', ['webserver', 'open']);
