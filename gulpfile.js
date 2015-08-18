var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

    // spritesmith = require('gulp.spritesmith');

gulp.task('server', function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});
//Компиляция шаблона
gulp.task('jade', function() {
   gulp.src('app/templates/pages/*.jade')
    .pipe(plumber())
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream:true}))
    .on('error',console.log)
    .pipe(plumber.stop());
});

gulp.task('scss', function() {
  gulp.src('app/scss/*.scss')
    .pipe(sass({
      noCache: true,
      style: "expanded",
      lineNumbers: true,
      errLogToConsole: true
    }))
    .on('error', console.log)
    .pipe(gulp.dest('app/css/'));
});

gulp.task('watch', function () {
  gulp.watch(['app/templates/pages/*.jade'], ['jade']);
  gulp.watch('app/scss/*.scss', ['scss']);
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

// gulp.task('sprite', function() {
//     var spriteData =
//         gulp.src('app/sprite/*.*') // путь, откуда берем картинки для спрайта
//             .pipe(spritesmith({
//                 imgName: 'sprite.png',
//                 cssName: 'sprite.css',
//             }));

//     spriteData.img.pipe(gulp.dest('app/img/')); // путь, куда сохраняем картинку
//     spriteData.css.pipe(gulp.dest('app/css/')); // путь, куда сохраняем стили
// });

gulp.task('default', ['server', 'watch', 'jade', 'scss']);
