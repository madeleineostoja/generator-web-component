/*eslint one-var: 0 */

// Core deps
// Use require() because of rollup babel preset
const gulp = require('gulp');
const notify = require('gulp-notify');
const gulpif = require('gulp-if');
const size = require('gulp-size');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const gulprun = require('run-sequence');
const yargs = require('yargs');
const browserSync = require('browser-sync');
const wct = require('web-component-tester');

// HTML
const inline = require('gulp-inline-source');
const processInline = require('gulp-process-inline');
const minify = require('gulp-htmlmin');

// JS
const eslint = require('gulp-eslint');
const rollup = require('gulp-rollup-file');
const resolve = require('rollup-plugin-node-resolve');
const commonJs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

// CSS
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const bs = browserSync.create(),
      argv = yargs.boolean(['debug']).argv,
      errorNotifier = () => plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }),
      OPTIONS = {
        rollup: {
          plugins: [
            resolve({ main: true }),
            commonJs(),
            babel()
          ],
          format: 'iife'
        },
        postcss: [
          autoprefixer()
        ],
        inline: {
          compress: false,
          swallowErrors: true
        },
        HTMLmin: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          caseSensitive: true,
          keepClosingSlash: true,
          customAttrAssign: [/\$=/],
          minifyCSS: true,
          minifyJS: true
        },
        browserSync: {
          server: {
            baseDir: './',
            index: 'index.html',
            routes: {
              '/': './bower_components'
            }
          },
          open: false,
          notify: false
        }
      };

gulp.task('build', () => {
  let styles = processInline(),
      scripts = processInline();

  return gulp.src(['src/*.html'])
          .pipe(errorNotifier())

          // Inline assets
          .pipe(inline(OPTIONS.inline))

          // JS
          .pipe(scripts.extract('script'))
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(gulpif(!argv.debug, eslint.failAfterError()))
            .pipe(rollup(OPTIONS.rollup))
          .pipe(scripts.restore())

          // CSS
          .pipe(styles.extract('style'))
            .pipe(postcss(OPTIONS.postcss))
          .pipe(styles.restore())

          .pipe(gulpif(!argv.debug, minify(OPTIONS.HTMLmin)))

          .pipe(size({ gzip: true }))
        .pipe(gulp.dest('.'))
});

wct.gulp.init(gulp);

gulp.task('serve', (callback) => bs.init(OPTIONS.browserSync));
gulp.task('refresh', () => bs.reload());

gulp.task('test', ['build', 'test:local']);

gulp.task('watch', () => gulp.watch(['src/**/*'], () => gulprun('build', 'refresh')));

gulp.task('default', ['build', 'serve', 'watch']);
