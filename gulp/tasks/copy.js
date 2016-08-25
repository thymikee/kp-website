'use strict';

var copyTask = function (gulp, plugins, config) {

  gulp.task('copy', function() {
    gulp.src(config.src.base + '/*.*')
    .pipe(gulp.dest(config.dest.base));
  });
};

module.exports = copyTask;
