const gulp = require('gulp'); // Подключаем Gulp
const sass = require('gulp-sass')(require('sass')); // Подключаем Sass пакет
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', () => {
    return gulp.src('scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})