const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

const dist = './dist';

// const dist = 'D:/apps/web/OSPanel/domains/delivery';


gulp.task('server', function() {

    browserSync({
        server: {
            // baseDir: "dist"
            baseDir: dist
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('styles', function() {

    return gulp.src("src/sass/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist + "/css"))
        .pipe(browserSync.stream());

});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', {delay: 700}, gulp.parallel('styles'));
    gulp.watch('src/*.html').on('change', gulp.parallel('html-min'));
    gulp.watch('src/fonts/**/*').on('all', gulp.parallel('fonts'));
    gulp.watch('src/images/**/*').on('all', gulp.parallel('img-min'));
    gulp.watch('src/icons/**/*').on('all', gulp.parallel('icons'));
    // gulp.watch('src/js/**/*').on('all', gulp.parallel('scripts'));
    
});


gulp.task("html-min", function() {
    return gulp.src("src/*html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(dist));
});

gulp.task("img-min", function() {
    return gulp.src("src/images/**/*")
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest(dist + "/images"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest(dist + "/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest(dist + '/icons'))
        .pipe(browserSync.stream());
});


gulp.task("scripts", function() {
    return gulp.src("src/js/**/*")
        .pipe(gulp.dest(dist + '/js'))
        .pipe(browserSync.stream());
});


gulp.task("mailer", function() {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest(dist + '/mailer'))
        .pipe(browserSync.stream());
});


gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html-min', 'img-min', 'fonts', 'icons', 'mailer'));

// 'scripts'

