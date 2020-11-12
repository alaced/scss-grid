import gulp from "gulp";
import del from "del";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

sass.compiler = require("node-sass");

const routes01 = {
  css: {
    watch: "project01/src/scss/*",
    src: "project01/src/scss/styles.scss",
    dest: "project01/dist/css",
  },
};

const routes02 = {
  css: {
    watch: "project02/src/scss/*",
    src: "project02/src/scss/styles.scss",
    dest: "project02/dist/css",
  },
};

const routes03 = {
  css: {
    watch: "project03/src/scss/*",
    src: "project03/src/scss/styles.scss",
    dest: "project03/dist/css",
  },
};

const routes04 = {
  css: {
    watch: "project04/src/scss/*",
    src: "project04/src/scss/styles.scss",
    dest: "project04/dist/css",
  },
};

const styles01 = () =>
  gulp
    .src(routes01.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes01.css.dest));

const styles02 = () =>
  gulp
    .src(routes02.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes02.css.dest));

const styles03 = () =>
  gulp
    .src(routes03.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes03.css.dest));

const styles04 = () =>
  gulp
    .src(routes04.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes04.css.dest));

const watch01 = () => {
  gulp.watch(routes01.css.watch, styles01);
};

const watch02 = () => {
  gulp.watch(routes02.css.watch, styles02);
};

const watch03 = () => {
  gulp.watch(routes03.css.watch, styles03);
};

const watch04 = () => {
  gulp.watch(routes04.css.watch, styles04);
};

const clean01 = () => del(["project01/dist/"]);
const clean02 = () => del(["project02/dist/"]);
const clean03 = () => del(["project03/dist/"]);
const clean04 = () => del(["project04/dist/"]);

const prepare01 = gulp.series([clean01]);
const prepare02 = gulp.series([clean02]);
const prepare03 = gulp.series([clean03]);
const prepare04 = gulp.series([clean04]);

const assets01 = gulp.series([styles01]);
const assets02 = gulp.series([styles02]);
const assets03 = gulp.series([styles03]);
const assets04 = gulp.series([styles04]);

const live01 = gulp.parallel([watch01]);
const live02 = gulp.parallel([watch02]);
const live03 = gulp.parallel([watch03]);
const live04 = gulp.parallel([watch04]);

export const dev = gulp.series(
  // [prepare01, assets01, live01]
  // [prepare02, assets02, live02]
  // [prepare03, assets03, live03]
  [prepare04, assets04, live04]
);
