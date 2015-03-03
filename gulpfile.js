var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jade = require('gulp-jade');
    // sass = require('gulp-sass');

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
        .pipe(compass({
            css: 'production/css',
            sass: 'assets/scss',
            style: 'compressed'
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('production/css'));
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
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
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

  gulp.watch('assets/scripts/*.js',['js', reload]);

  gulp.watch('assets/images/**/*',['images', reload]);

  gulp.watch('assets/*.jade',['templates', reload]);

});


// Gulp production task

gulp.task('production',['compass-min','js-min','templates-prod', 'images-min'], function () {
  
});
