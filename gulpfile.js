
//const autoprefixer = require('autoprefixer');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss')
const gulp = require('gulp');

gulp.task('prefixer',()=>{
	return gulp.src('css/*.css')
		//.pipe(postcss([autoprefixer()]))
		.pipe(autoprefixer({
			browsers:['last 5 versions']
		}))
		.pipe(gulp.dest('dist'))
})