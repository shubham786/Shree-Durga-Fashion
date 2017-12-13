var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', [], function () {
    browserSync({
        server: {
            baseDir: './../'
        }
    })
    gulp.watch(['./**/*.js','./**/*.html','./**/*.css','./**/*.php'],['prompt']);
}
);

gulp.task('prompt', function () {
    browserSync.reload();
});

  

