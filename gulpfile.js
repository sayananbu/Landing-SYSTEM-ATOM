
const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const minify = require('gulp-css-minify');
const imagemin = require('gulp-imagemin');

gulp.task('prefixer',()=>{
	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			overrideBrowserslist:['last 5 versions']
		}))
		.pipe(minify())
		.pipe(gulp.dest('prod'))
})

gulp.task('minimages', ()=>{
	return gulp.src('/all_photo_jpg/*.jpg')
	.pipe(imagemin())
	.pipe(gulp.dest('/all_photo_jpg_min'))
})
