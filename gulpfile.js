/* Require
*******************************************/
var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload, 

    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass');


/* Script task
*******************************************/
gulp.task('scripts', function(){
  return gulp.src(['js/*.js', '!js/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('js/'));
})

/* Sass task
*******************************************/
gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('css/'))
  .pipe(reload({stream:true}));
})


/* html task
*******************************************/
gulp.task('html', function(){
  return gulp.src('*.html')
})


/* browserSync task
*******************************************/
gulp.task('browserSync', function(){
  browserSync({
    server:{
      baseDir: ''
    }
  });
})



/* Watch task
*******************************************/
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('*.html', ['html']);
});


/* Default task
*******************************************/
gulp.task('default', ['browserSync', 'watch']);