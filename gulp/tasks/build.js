var runSequence = require('run-sequence');

'use strict';

var buildTask = function (gulp, plugins, config) {

  gulp.task('clean', function() {
    return plugins.del(config.dest.base);
  });

  plugins.del(config.dest.base);

  gulp.task('build-critical', ['critical']);

  gulp.task('build', function() {
    runSequence('clean', 'copy', 'assets-build', 'build-critical');
  })
};

module.exports = buildTask;
