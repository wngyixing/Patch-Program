 var gulp = require('gulp'),
     webserver = require("gulp-webserver"),
     less = require('gulp-less'),
     scss = require('gulp-sass');


 //css
 var concat = require("gulp-concat"), //合并文件
     minifycss = require('gulp-minify-css'); //css压缩
 gulp.task('css', function() {
     return gulp.src(["./**/*.scss", "./**/*.css", "!node_modules/**/*.{css,scss}",
             "!demo/**/iconfont.css"
         ])
         .pipe(scss())
         .pipe(concat("all.css"))
         .pipe(minifycss())
         .pipe(gulp.dest('test/css'))
 })

 //js
 var Uglify = require('gulp-uglify');
 gulp.task('js', function() {
     gulp.src(['./shujuxuanran/js/*'])
         .pipe(Uglify())
         .pipe(concat("all.js"))
         .pipe(gulp.dest('test/js'))
 })


 //html
 var Html = require('gulp-minify-html');
 gulp.task('html', function() {
     gulp.src(['./shujuxuanran/index.html'])
         .pipe(Html())
         .pipe(gulp.dest('test'))
 })

 //img
 var Images = require('gulp-imagemin');
 gulp.task('img', function() {
     gulp.src(['./shujuxuanran/img/.jpg'])
         .pipe(Images())
         .pipe(gulp.dest('test/img'))
 })
 gulp.task('watch', function() {
     gulp.watch("./shujuxuanran/css/*.css", ["css"])
     gulp.watch("./shujuxuanran/js/*.js", ["js"])
     gulp.watch("./shujuxuanran/img/*.jpg", ["img"])
     gulp.watch("./shujuxuanran/*.html", ["html"])
 });
 gulp.task('default', ["js", "html", "css", "img", "watch"], function() {

     console.log('asdfgh')
 })