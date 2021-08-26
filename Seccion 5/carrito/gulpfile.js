/*Importacions de las dependencias*/
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
    .src('scss/app.scss')
    .pipe(autoprefixer({
        browsers:['last 2 versions'],
        cascade:false
    }))
    .pipe(sass({
        outputStyle:'expanded'//nested, compact, compressed
    }))
    .pipe(gulp.dest(css));
}

//Registrar funciones como tareas

gulp.task('css',css) //tarea, function