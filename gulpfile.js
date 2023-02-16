
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss')
const gulp = require('gulp');

gulp.task('prefixer',()=>{
	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			overrideBrowserslist:['last 3 versions']
		}))
		.pipe(gulp.dest('css'))
})