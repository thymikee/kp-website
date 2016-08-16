'use strict';
var critical = require('critical');

var criticalTask = function (gulp, plugins, config) {
  // Generate & Inline Critical-path CSS
  gulp.task('critical', ['templates-build'], function () {
    critical.generate({
      inline: true,
      minify: true,
      base: config.dest.base + '/',
      src: 'index.html',
      dest: config.dest.base + '/index.html'
    });
  });
}

module.exports = criticalTask;
