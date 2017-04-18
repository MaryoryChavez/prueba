var gulp = require('gulp');

gulp.task('jq',function(){
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('flexboxgrid',function(){
   gulp.src('./node_modules/flexboxgrid/dist/flexboxgrid.min.css')
   .pipe(gulp.dest('./dist/css'));
});

gulp.task('mainjs',function(){
   gulp.src('./src/js/main.js')
   .pipe(gulp.dest('./dist/js'))
});

gulp.task('images', function() {
    gulp.src('./src/img/*.*')
    .pipe(gulp.dest('./dist/images'));
	// tarea images
});

gulp.task('default', ['jq','flexboxgrid','mainjs','images']);