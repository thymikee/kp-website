'use strict';

var fs = require('fs');
var gutil = require('gulp-util');

var templatesTask = function (gulp, plugins, config, helpers) {

  function templates(manifest) {
    return gulp.src(config.src.templates)
      .pipe(plugins.plumber(helpers.onError))
      .pipe(plugins.twigUpToDate({
        functions: [
          {
            name: "assetPath",
            func: function (path) {
              if (manifest) {
                return manifest[path];
              } else {
                return path;
              }
            }
          }
        ],
        data: { __DEV__: gutil.env.dev },
        errorLogToConsole: true
      }))
      .pipe(plugins.prettify({ indent_size: 2, preserve_newlines: true }))
      .pipe(gulp.dest(config.dest.base))
      .on('end', plugins.browserSync.reload);
  }

  gulp.task('templates-watch', function() {
    return templates();
  });

  gulp.task('templates-build', ['scripts-build'], function() {
    var manifest = JSON.parse(fs.readFileSync(config.dest.revManifest, 'utf8'));
    return templates(manifest);
  });
};

module.exports = templatesTask;
