// const gulp = require('gulp'), // Подключаем Gulp
// sass = require('gulp-sass')(require('sass')); // Подключаем Sass пакет
    
// gulp.task('sass', function() { // Создаем таск "sass"
//     return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
//         .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
//         .pipe(gulp.dest('css')) // Выгружаем результата в папку css
//     });
    
// gulp.task('watch', function() {
//     gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
// });
    
// gulp.task('default', ['watch']);

// const { src, dest, parallel, series, watch } = require('gulp');
// const browserSync = require('browser-sync').create();

// function browsersync() {
//     browserSync.init({ // Инициализация Browsersync
//         server: { baseDir: 'app/' }, // Указываем папку сервера
//         notify: false, // Отключаем уведомления
//         online: true // Режим работы: true или false
//     })
// }

// exports.browsersync = browsersync;

const gulp = require('gulp'); // Подключаем Gulp
const sass = require('gulp-sass')(require('sass')); // Подключаем Sass пакет
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', () => {
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})