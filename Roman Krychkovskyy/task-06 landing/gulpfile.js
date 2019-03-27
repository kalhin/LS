const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssFilse = [
    './src/css/header.css',
    './src/css/slider.css',
    './src/css/content.css',
    './src/css/subscribe.css',
    './src/css/footer.css',    
];
const jsFiles = [
    './src/js/slider.js',
    './src/js/anchor.js'
]

// function styles() {
//     return gulp.src('./src/css/**/*.css')
//         .pipe(concat('all.css'))
//         .pipe(gulp.dest('./build/css'));
// }
function styles() {
    return gulp.src(cssFilse)            //можна як параметр передати масив(може включати бутстрап і т.д)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/css'));
}
function images() {
    return gulp.src('./src/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));

}
function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));

}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('images', images);