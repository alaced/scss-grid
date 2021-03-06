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

const routes05 = {
  css: {
    watch: "project05/src/scss/*",
    src: "project05/src/scss/styles.scss",
    dest: "project05/dist/css",
  },
};

const routes06 = {
  css: {
    watch: "project06/src/scss/*",
    src: "project06/src/scss/styles.scss",
    dest: "project06/dist/css",
  },
};

const routes07 = {
  css: {
    watch: "project07/src/scss/*",
    src: "project07/src/scss/styles.scss",
    dest: "project07/dist/css",
  },
};

const routes08 = {
  css: {
    watch: "project08/src/scss/*",
    src: "project08/src/scss/styles.scss",
    dest: "project08/dist/css",
  },
};

const routes09 = {
  css: {
    watch: "project09/src/scss/*",
    src: "project09/src/scss/styles.scss",
    dest: "project09/dist/css",
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

const styles05 = () =>
  gulp
    .src(routes05.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes05.css.dest));

const styles06 = () =>
  gulp
    .src(routes06.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes06.css.dest));

const styles07 = () =>
  gulp
    .src(routes07.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes07.css.dest));

const styles08 = () =>
  gulp
    .src(routes08.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes08.css.dest));

const styles09 = () =>
  gulp
    .src(routes09.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace",
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes09.css.dest));

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

const watch05 = () => {
  gulp.watch(routes05.css.watch, styles05);
};

const watch06 = () => {
  gulp.watch(routes06.css.watch, styles06);
};

const watch07 = () => {
  gulp.watch(routes07.css.watch, styles07);
};

const watch08 = () => {
  gulp.watch(routes08.css.watch, styles08);
};
const watch09 = () => {
  gulp.watch(routes09.css.watch, styles09);
};

const clean01 = () => del(["project01/dist/"]);
const clean02 = () => del(["project02/dist/"]);
const clean03 = () => del(["project03/dist/"]);
const clean04 = () => del(["project04/dist/"]);
const clean05 = () => del(["project05/dist/"]);
const clean06 = () => del(["project06/dist/"]);
const clean07 = () => del(["project07/dist/"]);
const clean08 = () => del(["project08/dist/"]);
const clean09 = () => del(["project09/dist/"]);

const prepare01 = gulp.series([clean01]);
const prepare02 = gulp.series([clean02]);
const prepare03 = gulp.series([clean03]);
const prepare04 = gulp.series([clean04]);
const prepare05 = gulp.series([clean05]);
const prepare06 = gulp.series([clean06]);
const prepare07 = gulp.series([clean07]);
const prepare08 = gulp.series([clean08]);
const prepare09 = gulp.series([clean09]);

const assets01 = gulp.series([styles01]);
const assets02 = gulp.series([styles02]);
const assets03 = gulp.series([styles03]);
const assets04 = gulp.series([styles04]);
const assets05 = gulp.series([styles05]);
const assets06 = gulp.series([styles06]);
const assets07 = gulp.series([styles07]);
const assets08 = gulp.series([styles08]);
const assets09 = gulp.series([styles09]);

const live01 = gulp.parallel([watch01]);
const live02 = gulp.parallel([watch02]);
const live03 = gulp.parallel([watch03]);
const live04 = gulp.parallel([watch04]);
const live05 = gulp.parallel([watch05]);
const live06 = gulp.parallel([watch06]);
const live07 = gulp.parallel([watch07]);
const live08 = gulp.parallel([watch08]);
const live09 = gulp.parallel([watch09]);

export const dev = gulp.series(
  // [prepare01, assets01, live01]
  // [prepare02, assets02, live02]
  // [prepare03, assets03, live03]
  // [prepare04, assets04, live04]
  // [prepare05, assets05, live05]
  [prepare06, assets06, live06]
  // [prepare07, assets07, live07]
  // [prepare08, assets08, live08]
  // [prepare09, assets09, live09]
);
