// ===============================
//
// Dependencies
//
// ===============================

var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   notify = require("gulp-notify"),
   plumber = require('gulp-plumber');

// ===============================
//
// JSON Files
//
// ===============================

const package = require('./package.json');

// ===============================
//
// Tasks - Individual
//
// ===============================

/* Minify Javascript */

gulp.task(
   'minify_javascript',
   function() {

      return gulp
         .src(
            package.files.uncompressed
         )
         .pipe(
            plumber({
               errorHandler: notify.onError({
                  title: 'Error',
                  message: 'Error Minifying Javascript'
               })
            })
         )
         .pipe(
            uglify()
         )
         .pipe(
            gulp.dest(package.paths.dist)
         )
         .pipe(
            notify({
               message: 'Minified Javascript'
            })
         );

   }
);

/* ******************************************************************************************************** */
