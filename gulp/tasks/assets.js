'use strict';

var assetsTask = function (gulp, plugins, config) {
  gulp.task('assets-watch', function () {
    plugins.del([config.dest.assets]);

    return gulp.src([config.src.assets, '!**/.keep'], { base: config.src.base })
      .pipe(plugins.newer(config.dest.base))
      .pipe(gulp.dest(config.dest.base + '/assets', { overwrite: true }))
      .pipe(gulp.src(config.src.assets))
      .on('end', plugins.browserSync.reload);
  });

  gulp.task('assets-build', function () {
    gulp.src(config.src.assets)
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(config.src.base + '/assets'));

    return gulp.src(config.src.assets)
      .pipe(gulp.dest(config.dest.assets))
      .pipe(plugins.rev())
      .pipe(gulp.dest(config.dest.assets))
      .pipe(plugins.rev.manifest({
        path: config.dest.revManifest,
        base: config.dest.base,
        merge: true
      }))
      .pipe(gulp.dest(config.dest.base));
  });
};

module.exports = assetsTask;
