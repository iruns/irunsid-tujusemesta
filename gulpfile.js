const { src, series } = require('gulp')
const argv = require('yargs').argv
const git = require('gulp-git')

function commit() {
  return src('./')
    .pipe(git.add({ args: '-A' }))
    .pipe(git.commit(argv.m || '-'))
}

function push() {
  git.push('origin', function(err) {
    if (err) throw err
  })
}

exports.deploy = series(commit, push)
