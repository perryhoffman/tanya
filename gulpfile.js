'use strict';

var gulp = require('gulp'),
    path = require('path');

var $ = require('gulp-load-plugins')();


function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

/*------------------------------------*\
    # BOWER INSTALL
\*------------------------------------*/

gulp.task('bower', function () {
  return $.bower();
});

var wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
  return gulp.src('./index.html')
    .pipe(wiredep({

    }))
    .pipe(gulp.dest('./'));
});

/*------------------------------------*\
    # OPEN APP
\*------------------------------------*/

gulp.task('open', function(){
    return gulp.src('./index.html')
    .pipe($.open("", {url: 'http://localhost:8888/tanya'}));
});

/*------------------------------------*\
    # WATCH
\*------------------------------------*/

gulp.task('watch', function() {
    // Create LiveReload server
    $.livereload.listen();

    gulp.watch([
        './styles/**/*.css',
        './**/*.html',
        './scripts/**/*.js'
    ]).on('change', $.livereload.changed);
});

gulp.task('default', ['wiredep', 'open', 'watch']);


