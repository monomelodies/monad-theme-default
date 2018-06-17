
module.exports = function (grunt) {

    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({pkg});

    grunt.loadNpmTasks('node-spritesheet');
    grunt.config('spritesheet', {
        compile: {
            options: {
                outputImage: 'dist/assets/i18n.png',
                outputCss: 'dist/sass/partials/_flags.scss',
                selector: '.flag'
            },
            files: {'': 'assets/i18n/**/*.png'}
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.config('sass', {
        monad: {
            options: {
                style: 'compressed',
                compass: true,
                sourcemap: 'none'
            },
            files: {'tmp/monad.css': 'sass/style.scss'}
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.config('postcss', {
        monad: {
            options: {
                processors: [
                    require('autoprefixer')(),
                    require('postcss-preset-env')(),
                    require('precss')()
                ]
            },
            files: {
                'dist/monad.css': 'tmp/monad.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.config('copy', {
        logo: {expand: true, cwd: 'assets', src: 'logo.png', dest: 'dist/assets'},
        bootstrap: {expand: true, cwd: 'node_modules/bootstrap-sass/assets', src: 'fonts/**', dest: 'dist'},
        css: {expand: true, cwd: 'src', src: '**/*.scss', dest: 'dist/sass'}
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.config('shell', {
        clean: { command: 'rm -rf dist/*' }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.config('watch', {
        spritesheet: {
            files: ['assets/i18n/**/*.png'],
            tasks: ['spritesheet']
        },
        sass: {
            files: ['sass/**/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['spritesheet', 'sass', 'postcss', 'copy']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('prod', ['shell:clean', 'build']);
};

