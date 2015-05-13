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
var es = require('event-stream');

/**
 * SASS lint task.
 * Lints all sass files.
 */
gulp.task('lint-sass', function() {
  return gulp.src('./app/sass/**/*')
    .pipe(scsslint());
});

/**
* Clean task.
* Cleans previous distribution files.
 */
gulp.task('clean', function (cb) {
	del([
        'dist'
    ], cb);
});

/**
 * SASS process task.
 * Combines and minifies all sass files into a single stylesheet, and
 * copies over external font files.
 * The stylesheet and fonts are updated for previewing in the app folder,
 * but they are not automatically sent to the distribution folder. These items
 * get sent to the distribution folder in the copy-assets task.
 */
gulp.task('process-sass', function() {
  return es.merge(
    gulp.src(['jspm_packages/bower/bootstrap-sass@3.3.4/assets/fonts/**/*'])
      .pipe(gulp.dest('./app/assets/fonts')),
    gulp.src('./app/sass/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./app/css'))
  );
});

/**
 * Copy assets task.
 * Sends asset files, including css, to the distribution folder;
 */
gulp.task('copy-assets', ['clean', 'process-sass'], function() {
  return es.merge(
    gulp.src(['./app/css/**/*'])
      .pipe(gulp.dest('./dist/css')),
    gulp.src(['./app/assets/**/*'])
      .pipe(gulp.dest('./dist/assets'))
  );
});

/**
 * JavaScript build task.
 * Combines, transpiles and minifies all js modules into a single file.
 * Production ready file is sent to the distribution folder.
 */
gulp.task('build-js', ['clean'], function() {
  var builder = new systemjs();
  return builder.loadConfig('./app/config.js')
    .then(function() {
      var options = {
        minify: true,
        sourceMaps: true
      };
      builder.config({ baseURL: 'file:' + path.resolve('./app') });
      return builder.buildSFX('./app', './dist/js/bundle.min.js', options);
    });
});

/**
 * HTML build task.
 * Replaces references to development files with production ready files.
 * Production ready file is sent to the distribution folder.
 */
gulp.task('build-html', ['clean'], function() {
  return gulp.src('./app/index.html')
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

  gulp.watch(['app/sass/**/*.scss'], ['process-sass']);
  gulp.watch(['app/css/**/*.css', 'app/**/*.js', 'app/index.html'], server.notify);
  gulp.watch('app.js', server.start);
});

/**
 * Launch task.
 * Launches the application in the default browser.
 */
gulp.task('launch', function() {
  var options = {
    url: 'http://localhost:8080'
  };
  gulp.src('./app/index.html')
    .pipe(open('', options));
});

/**
 * Lint task.
 * Lint all source files for consistancy.
 */
gulp.task('lint', ['lint-sass']);

/**
 * Build task.
 * Build all source files into production ready files.
 */
gulp.task('build', ['clean', 'process-sass', 'copy-assets',
  'build-js', 'build-html']);

/**
 * Development task.
 * Process the SASS files, start the server, watch for changes to all files,
 * and launch the application.
 * SASS must be processed to preview changes, but the JavaScript can be loaded
 * and transpiled on the fly.
 */
gulp.task('default', ['process-sass', 'webserver', 'launch']);
