var gulp = require('gulp');
var sass = require('gulp-sass');
var open = require('gulp-open');
var sourcemaps = require('gulp-sourcemaps');
var gls = require('gulp-live-server');
var scsslint = require('gulp-scss-lint');
var path = require('path');
var systemjs = require('systemjs-builder');
var htmlreplace = require('gulp-html-replace');
var del = require('del');

/**
 * CSS lint task.
 * Lints all sass files.
 */
gulp.task('lint-css', function() {
  return gulp.src('./sass/**/*')
    .pipe(scsslint());
});

/**
* JavaScript build task.
* Combines and minifies all packages into a single file.
 */
gulp.task('clean', function (cb) {
	del([
        'dist'
    ], cb);
});

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
      return builder.buildSFX('./app/app', './dist/js/bundle.min.js', options);
    });
});

/**
 * CSS build task.
 * Combines and minifies all sass files into a single stylesheet.
 */
gulp.task('process-css', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

/**
 * CSS build task.
 * Combines and minifies all sass files into a single stylesheet.
 */
gulp.task('build-css', function() {
  gulp.src(['jspm_packages/bower/bootstrap-sass@3.3.4/assets/fonts/**/*'])
    .pipe(gulp.dest('./dist/fonts'));

  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

/**
 * HTML build task.
 * Replaces references to development files with production ready files.
 */
gulp.task('build-html', function() {
  return gulp.src('index.html')
    .pipe(htmlreplace({
        'js': 'js/bundle.min.js'
    }))
    .pipe(gulp.dest('./dist'));
});

/**
 * WebServer task.
 * Starts a web server and watchs for file changes.
 */
gulp.task('webserver', function() {
  var server = gls.new('app.js');
  server.start();

  gulp.watch(['sass/**/*.scss'], ['process-css']);
  gulp.watch(['css/**/*.css', 'app/**/*.js', 'index.html'], server.notify);
  gulp.watch('app.js', server.start);
});

/**
 * Launch application task.
 * Launches the application in the default browser.
 */
gulp.task('launch', function() {
  var options = {
    url: 'http://localhost:8080'
  };
  gulp.src('./index.html')
    .pipe(open('', options));
});

/**
 * Lint task.
 * Lint all source files for consistancy.
 */
gulp.task('lint', ['lint-css']);

/**
 * Build task.
 * Build all source files into production ready files.
 */
gulp.task('build', ['clean', 'process-css', 'build-css', 'build-js', 'build-html']);

/**
 * Development task.
 * Build the CSS, start the server, watch for changes to all files, and launch
 * the application.
 *
 * CSS must be processed to preview changes, but the JavaScript can be loaded
 * and transpiled on the fly.
 */
gulp.task('default', ['process-css', 'webserver', 'launch']);
