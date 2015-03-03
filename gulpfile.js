var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    jade = require('gulp-jade');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('compass', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(compass({
            css: 'dist/stylesheets',
            sass: 'assets/scss',
            style: 'nested'
        }))
        .pipe(gulp.dest('dist/css'))
});


gulp.task('compass-min', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(compass({
            css: 'production/css',
            sass: 'assets/scss',
            style: 'compressed'
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('production/css'));
});


// Gulp default task for fonts

gulp.task('fonts', function(){
  return gulp.src('assets/fonts/**/*')
    .pipe( gulp.dest('dist/fonts/'));
});

// Gulp production task for javascript 

gulp.task('fonts-min', function(){
  return gulp.src('assets/fonts/**/*')
    .pipe( gulp.dest('production/fonts/'));
});

// Gulp default task for javascript

gulp.task('js', function() {
  return gulp.src('assets/js/*.js')
    .pipe( gulp.dest('dist/js/'));
});

// Gulp production task for javascript 

gulp.task('js-min', function() {
  return gulp.src('assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe( gulp.dest('production/js/'));
});

// Gulp default task for images

gulp.task('images', function() {
  return gulp.src('./assets/images/*')
    .pipe(gulp.dest('./dist/images'));
})


// Gulp production task for images

gulp.task('images-min', function() {
  return gulp.src('./assets/images/*')
    .pipe(gulp.dest('./production/images'))
})

// Gulp default task for templates

gulp.task('templates', function() {
  return gulp.src('assets/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe( gulp.dest('dist/') );
});

// Gulp production task for templates

gulp.task('templates-prod', function() {
  return gulp.src('assets/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe( gulp.dest('production/') );
});



// Gulp default task

gulp.task('default',['compass','js','templates', 'images', 'browser-sync'], function () {
  
  gulp.watch('assets/scss/*.scss',['compass', reload]);

  gulp.watch('assets/fonts/**/*',['fonts', reload]);

  gulp.watch('assets/scripts/*.js',['js', reload]);

  gulp.watch('assets/images/**/*',['images', reload]);

  gulp.watch('assets/*.jade',['templates', reload]);

});


// Gulp production task

gulp.task('production',['compass-min','fonts-min','js-min','templates-prod', 'images-min'], function () {
  
});
