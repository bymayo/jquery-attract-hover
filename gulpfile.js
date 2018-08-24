// ===============================
//
// Dependencies
//
// ===============================

var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
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
