require! <[ gulp gulp-util gulp-livescript tiny-lr path gulp-livereload gulp-jade gulp-ruby-sass]>

server = tiny-lr!
build-path = 'public'


gulp.task \jade ->
  jade-options =
    require: \require
    lib:
      angular: true
      jquery: true
      semantic: true

  gulp.src 'views/**/*.jade'
    .pipe gulp-jade locals: jade-options
    .pipe gulp.dest "#build-path"

gulp.task \framework ->
  gulp.src 'framework/**/*.ls'
    .pipe gulp-livescript bare: true
    .pipe gulp.dest 'framework'

gulp.task \ls ->
  gulp.src 'livescript/**/*.ls'
    .pipe gulp-livescript!
    .pipe gulp.dest "#build-path/js"
    .pipe gulp-livereload server

gulp.task 'sass' ->
  gulp.src 'sass/**/*.sass'
  .pipe gulp-ruby-sass compass: true
  .pipe gulp.dest "#build-path/css"
  .pipe gulp-livereload server

gulp.task \express, ->
  require! express
  app = express!
  EXPRESSPORT = 3000
  app.use require('connect-livereload')!
  app.use express.static path.resolve "#build-path"
  app.listen EXPRESSPORT
  gulp-util.log "Server available at http://localhost:#EXPRESSPORT"

gulp.task \watch, ->
  LIVERELOADPORT = 35729
  server.listen LIVERELOADPORT, ->
    return gulp-util.log it if it
  gulp.watch \src/**/*.jade, <[jade]>
  gulp.watch \src/**/*.ls, <[ls]>
  gulp.watch \src/**/*.sass, <[styl]>

gulp.task \build <[ jade ls framework sass]>
gulp.task \default <[ build express ]>
gulp.task \dev <[ build express watch ]>