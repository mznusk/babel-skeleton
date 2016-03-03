var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("babel", function () {
    browserify( { debug: true } )
        .transform(babelify, {presets: ["es2015"]})
        .require("./src/app.js", { entry: true })
        .bundle()
        .on("error", function (err) { console.log("Error: " + err.messsage); })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});
