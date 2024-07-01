const gulp = require("gulp");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

// Tâche pour minifier le CSS
gulp.task("minify-css", function () {
  return gulp
    .src("./assets/style.css")
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets"));
});

// Tâche pour minifier le JavaScript
gulp.task("minify-js", function () {
  return gulp
    .src("./assets/scripts.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./assets"));
});

// Tâche par défaut
gulp.task("default", gulp.series("minify-css", "minify-js"));
