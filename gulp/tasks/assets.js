'use strict';

var assetsTask = function (gulp, plugins, config) {
  gulp.task('assets', function () {

    plugins.del([config.dest.assets]);

    return gulp.src([config.src.assets, '!**/.keep'], { base: config.src.base })
      .pipe(plugins.newer(config.dest.base))
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(config.dest.base))
      .pipe(gulp.src(config.src.assets))
      .on('end', plugins.browserSync.reload);
  });
};

module.exports = assetsTask;
