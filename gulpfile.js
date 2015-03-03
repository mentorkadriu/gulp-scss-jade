var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass');

gulp.task('default', function() {
  // place code for your default task here
});

/*

var gulp            = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    sass        = require('gulp-sass');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('compass', function() {
    return gulp.src('./assets/stylesheets/*.scss')
        .pipe($.plumber())
        .pipe($.compass({
            config_file: 'config.rb',
            css: 'dist/stylesheets',
            sass: 'assets/stylesheets'
        }))
        .pipe(gulp.dest('dist/stylesheets'))
});

gulp.task('js', function() {
  return gulp.src('assets/scripts/*.js')
    .pipe( gulp.dest('dist/scripts/'));
});

gulp.task('images', function() {
  return gulp.src('./assets/images/*')
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('templates', function() {
  return gulp.src('assets/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe( gulp.dest('dist/') )
});

gulp.task('default',['compass','js','templates', 'images', 'browser-sync'], function () {
  
  gulp.watch('assets/stylesheets/*.scss',['compass', reload]);

  gulp.watch('assets/scripts/*.js',['js', reload]);

  gulp.watch('assets/*.jade',['templates', reload]);

});

*/