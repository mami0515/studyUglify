var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('uglify', function(){
  gulp.src(['./*.js', '!./*-min.js'])
      .pipe(uglify())
      .pipe(rename(function(path){
        if(path.extname === '.js' && !path.basename.match(/-min/)){
          path.basename += '-min';
        }
      }))
      .pipe(gulp.dest('./'));
});
