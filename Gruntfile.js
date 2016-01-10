// Generated on 2016-01-09 using generator-angular-ui-router 0.5.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        ben: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },
        watch: {
            compass: {
                files: ['<%= ben.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= ben.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= ben.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= ben.app %>}/scripts/{,*/}*.js',
                    '<%= ben.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        autoprefixer: {
            options: ['last 1 version'],
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= ben.app %>'
                    ]
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '.tmp',
                        'test',
                        '<%= ben.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= ben.dist %>'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= ben.dist %>/*',
                        '!<%= ben.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= ben.app %>/scripts/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '<%= ben.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= ben.app %>/images',
                javascriptsDir: '<%= ben.app %>/scripts',
                fontsDir: '<%= ben.app %>/styles/fonts',
                importPath: '<%= ben.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
         dist: {}
         },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= ben.dist %>/scripts/{,*/}*.js',
                        '<%= ben.dist %>/styles/{,*/}*.css',
                        '<%= ben.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= ben.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= ben.app %>/index.html',
            options: {
                dest: '<%= ben.dist %>'
            }
        },
        usemin: {
            html: ['<%= ben.dist %>/{,*/}*.html'],
            css: ['<%= ben.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= ben.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= ben.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= ben.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= ben.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= ben.dist %>/images'
                }]
            }
        },
        cssmin: {
            // By default, your `index.html` <!-- Usemin Block --> will take care of
            // minification. This option is pre-configured if you do not wish to use
            // Usemin blocks.
            // dist: {
            //   files: {
            //     '<%= ben.dist %>/styles/main.css': [
            //       '.tmp/styles/{,*/}*.css',
            //       '<%= ben.app %>/styles/{,*/}*.css'
            //     ]
            //   }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/ben/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= ben.app %>',
                    src: ['*.html', 'views/*.html'],
                    dest: '<%= ben.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= ben.app %>',
                    dest: '<%= ben.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'bower_components/**/*',
                        'images/{,*/}*.{gif,webp}',
                        'styles/fonts/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= ben.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= ben.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: [
                'compass:server',
                'copy:styles'
            ],
            test: [
                'compass',
                'copy:styles'
            ],
            dist: [
                'compass:dist',
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        cdnify: {
            dist: {
                html: ['<%= ben.dist %>/*.html']
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= ben.dist %>/scripts',
                    src: '*.js',
                    dest: '<%= ben.dist %>/scripts'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= ben.dist %>/scripts/scripts.js': [
                        '<%= ben.dist %>/scripts/scripts.js'
                    ]
                }
            }
        },
        tags: {
                scripts: {
                    options: {
                        scriptTemplate: '<script src="{{ path }}"></script>',
                        openTag: '<!-- start script tags -->',
                        closeTag: '<!-- end script tags -->'
                    },
                    src: [
                        '<%= ben.app %>/scripts/**/*.js'
                    ],
                    dest: '<%= ben.app %>/index.html'
                },
                stylesheets: {
                    options: {
                        openTag: '<!-- start stylesheet tags -->',
                        closeTag: '<!-- end stylesheet tags -->'
                    },
                    src: [
                        '<%= ben.app %>/**/*.js'
                    ],
                    dest: '<%= ben.app %>/index.html'
                }

        },
        wiredep: {
            task: {
                src: [
                    '<%= ben.app %>/index.html'
                ]
            }
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'copy:dist',
        'cdnify',
        'ngmin',
        'cssmin',
        'uglify',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
