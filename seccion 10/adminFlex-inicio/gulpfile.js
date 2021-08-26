//Importar gulp, sass y autoprefixer
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer() )
        .pipe(sass({ outputStyle: "expanded" })) //nested, compressed, compact -- como se guarda el codigo
        .pipe(gulp.dest('css')) //donde se guarda el codigo
}
function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html')
}

// tasks
gulp.task('css', css); //nombre tarea, nombre funcion
gulp.task("watch", gulp.parallel(watchFiles));