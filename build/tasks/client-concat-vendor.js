(function () {

    const gulp = require('gulp'),
        concat = require('gulp-concat'),
        copy = require('gulp-contrib-copy');

    module.exports = function () {
        return [
            gulp.src([
                this.opts.config.path.devClient + 'assets/js/vendor/system.js',
                this.opts.config.path.devClient + 'assets/js/vendor/config.js'
            ]).pipe(concat('vendor.min.js')).pipe(gulp.dest(this.opts.config.path.buildClient + '/assets/js/')),
            gulp.src(this.opts.config.path.devClient + 'assets/js/vendor/aurelia.min.js').pipe(copy()).pipe(gulp.dest(this.opts.config.path.buildClient + 'assets/js/'))
        ];
    };
}());
