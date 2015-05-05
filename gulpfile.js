var gulp = require('gulp');
var open = require('gulp-open');
var gls = require('gulp-live-server');

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
