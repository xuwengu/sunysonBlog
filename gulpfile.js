var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss =  require('gulp-minify-css');
var cssmin = require('gulp-cssmin');
var rev = require('gulp-rev');
var minify = require('gulp-minify');
gulp.task('fontend-js-lib',function(){
	gulp.src(['./bower_components/jquery/dist/jquery.js'
		,'./bower_components/pace/pace.js'
		,'./bower_components/uikit/js/uikit.js'
		,'./bower_components/uikit/js/components/sticky.js'
		,'./bower_components/angular/angular.js'
		,'./bower_components/angular-route/angular-route.js'
		,'./bower_components/angular-resource/angular-resource.js'])
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('./public/dist/ui/js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist/ui/js'));
});

gulp.task('fontend-js-app',function(){
	gulp.src(['./public/app/js/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./public/dist/ui/js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist/ui/js'));
});
gulp.task('fontend-css',function(){
	gulp.src(['./public/css/uikit.css'])
		.pipe(cssmin())
		.pipe(gulp.dest('./public/dist/ui/css'));
});

gulp.task('sys-js-lib',function(){
	gulp.src(['./bower_components/angular/angular.js'
		,'./bower_components/angular-route/angular-route.js'
		,'./bower_components/angular-resource/angular-resource.js'])
		.pipe(concat('lib.min.js'))
		.pipe(gulp.dest('./public/dist/sys/js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist/sys/js'));
});

gulp.task('default',function(){

});