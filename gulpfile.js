'use strict';
// generated on 2014-06-15 using generator-gulp-webapp 0.1.0

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

var PORT = 5000,
    OUTPUT = 'dist',
    TMP = 'tmp';

gulp.task('jade', function () {
    // render jade files excepts includee
    return gulp.src(['app/**/*.jade', '!app/**/_*.jade', '!app/includes/**/*.jade', '!app/partial/**/*.jade'])
        .pipe($.jade())
        .pipe(gulp.dest(TMP + '/'));
});

gulp.task('templates', function () {
    return gulp.src('app/templates/**/*.html')
        .pipe($.angularTemplatecache({
            module: "donTemplates",
            standalone: true,
        }))
        .pipe($.size())
        .pipe(gulp.dest('app/scripts/'));
});

gulp.task('styles', function () {
    return gulp.src(['app/styles/*.scss'])
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest(TMP + '/styles'))
        .pipe($.size());
});

gulp.task('scripts', function () {
    return gulp.src(['app/scripts/**/*.js', '!app/scripts/templates.js'])
        .pipe($.jshint())
        .pipe($.jshint.reporter(require('jshint-stylish')))
        .pipe($.size());
});

gulp.task('config', [], function () {
    // throw error if the config.js does not exists.
    return gulp.src(['config.js'])
        .pipe($.expectFile({ errorOnFailure: true}, ['config.js']))
        .pipe(gulp.dest('app/scripts/'));
});

gulp.task('html', ['templates', 'jade', 'styles', 'scripts'], function () {
    var jsFilter = $.filter('**/*.js');
    var cssFilter = $.filter('**/*.css');

    return gulp.src(['app/*.html', TMP + '/**/*.html'])
        .pipe($.useref.assets({searchPath: '{' + TMP + ',app}'}))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe($.rev())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(OUTPUT))
        .pipe($.size());
});

gulp.task('images', function () {
    return gulp.src('app/img/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(OUTPUT + '/img'))
        .pipe($.size());
});

gulp.task('fonts', function () {
    return $.bowerFiles()
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe($.flatten())
        .pipe(gulp.dest(OUTPUT + '/fonts'))
        .pipe($.size());
});

gulp.task('extras', function () {
    return gulp.src(['app/*.*', '!app/*.html', '!app/**/*.jade'], { dot: true })
        .pipe(gulp.dest(OUTPUT));
});

gulp.task('clean', function () {
    return gulp.src([TMP, OUTPUT], { read: false }).pipe($.clean());
});

gulp.task('build', ['config', 'html', 'images', 'fonts', 'extras']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('connect', ['html'], function () {
    var connect = require('connect');
    var app = connect()
        .use(connect.static('app'))
        .use(connect.static(TMP))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(PORT)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:' + PORT);
        });
});

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep({
            directory: 'app/bower_components'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            exclude: ['bootstrap-sass-official']
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['config', 'connect'], function () {
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/**/*.jade', ['jade']);
    gulp.watch('app/templates/**/*.html', ['templates']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
