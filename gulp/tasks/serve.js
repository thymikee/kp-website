'use strict';

var serveTask = function (gulp, plugins, config) {
  gulp.task('serve', ['assets-build', 'templates-build', 'templates-watch', 'styles-build'], function() {
    plugins.browserSync.init({
      server: './'
    });

    gulp.watch(config.src.styles, ['styles-watch']);
    gulp.watch(config.src.templates, ['templates-watch']); // Build templates in front-end project
    gulp.watch(config.src.assets, ['assets-watch']);
    gulp.watch('*.php').on('change', plugins.browserSync.reload); // PHP files in WP projects
  });
};

module.exports = serveTask;
