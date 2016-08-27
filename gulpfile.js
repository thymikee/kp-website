'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')({ pattern: '*' });
var config  = require('./package.json').chisel;
var helpers = require('./gulp/helpers')(gulp, plugins, config);

/**
 * Batch tasks loader
 */
plugins.glob.sync('gulp/tasks/*').forEach(function (path) {
  path = path.replace('gulp/', './gulp/');
  require(path)(gulp, plugins, config, helpers);
});

gulp.task('default', function() {
  runSequence('clean', ['serve', 'watchify']);
});
