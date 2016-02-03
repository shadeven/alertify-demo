var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');

gulp.task('clean', function() {
  return del(['*.txt']);
});

gulp.task('test', function() {
  return gulp.src('test/*.js', {read: false})
  .pipe(mocha({reporter: 'list'}));
});

gulp.task('default', ['clean', 'test']);
