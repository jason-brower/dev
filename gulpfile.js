var gulp = require('gulp');
var open = require('gulp-open');
var gls = require('gulp-live-server');
var path = require('path');
var systemjs = require('systemjs-builder');

gulp.task('build-js', function() {
  var builder = new systemjs();
  return builder.loadConfig('./config.js')
    .then(function() {
      builder.config({ baseURL: 'file:' + path.resolve('./') });
      return builder.buildSFX('./app/app', './build.js', {
        minify: true,
        sourceMaps: true
      });
    });
});

gulp.task('webserver', function() {
  var server = gls.new('app.js');
	server.start();

	gulp.watch(['app/**/*.js'], server.notify);
  gulp.watch('app.js', server.start);
});

gulp.task('open', function() {
  var options = {
    url: 'http://localhost:8080'
  };
  gulp.src('./index.html')
  .pipe(open('', options));
});

// Start the tasks
gulp.task('default', ['webserver', 'open']);
