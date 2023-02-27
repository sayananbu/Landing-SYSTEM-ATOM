
// const autoprefixer = require('gulp-autoprefixer');
// const gulp = require('gulp');
// const minify = require('gulp-css-minify');
// const imagemin = require('gulp-imagemin');

import gulp from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import minify from 'gulp-css-minify'
import imagemin from 'gulp-imagemin'
import minsvg from 'gulp-svgmin'
let autoprefixBrowsers = ['> 1%', 'last 3 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
gulp.task('prefixer',()=>{
	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers:autoprefixBrowsers
		}))
		//.pipe(minify())
		.pipe(gulp.dest('prod'))
})

gulp.task('minimages', ()=>{
	return gulp.src('all_photo_png/*.png')
	.pipe(imagemin())
	.pipe(gulp.dest('all_photo_png_min'))
})

gulp.task('minsvg', ()=>{
	return gulp.src('all_photo_svg/*.svg')
	.pipe(minsvg())
	.pipe(gulp.dest('all_photo_svg_min'))
})
