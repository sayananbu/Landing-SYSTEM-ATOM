
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-css-minify')
const gulp = require('gulp');

gulp.task('prefixer',()=>{
	return gulp.src('css/*.css')
		.pipe(autoprefixer({
			overrideBrowserslist:['last 3 versions']
		}))
		.pipe(minify())
		.pipe(gulp.dest('prod'))
})