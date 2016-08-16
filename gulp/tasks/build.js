'use strict';

var buildTask = function (gulp, plugins, config) {

  gulp.task('clean', function() {
    return plugins.del([config.dest.base]);
  });

  gulp.task('build-critical', ['critical']);
  gulp.task('build', ['build-critical']);
};

module.exports = buildTask;
