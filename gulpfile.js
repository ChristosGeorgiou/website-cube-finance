const gulp = require('gulp')
const pkg = require('./package.json')
require('gulp-cg-toolkit')(gulp, {
  name: pkg.name,
  version: pkg.version
})