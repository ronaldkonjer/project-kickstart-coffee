// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
//http://www.tech-step.net/?p=704
'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist'
        },
        watch: {
            compass: {
                files: ['<%= yeoman.app %>/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffielint','coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            //scripts :{
              //  files : ['<%= yeoman.app %>/js/{,*/}*.js'],
              //  tasks : ['requirejs']
            //},
            jade: {
                files: '<%= yeoman.app %>/views/{,*/}*.jade',
                tasks: ['jade']
            },
            handlebars: {
                files: ['<%= yeoman.app %>/templates/{,*/}*.hbs'],
                tasks: ['handlebars'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.scripts',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                        '.tmp',
                        'test',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>',
                    livereload: false
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: '<%= yeoman.app %>/views', // Src matches are relative to this path.
                    src: ['*.jade', '!*/*.jade'],
                    dest: '<%= yeoman.app %>', // Destination path prefix.
                    ext: '.html' // Dest filepaths will have this extension.
                }]
            }
        },
        jshint: {
            options: {
                camelcase: true,
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                ignores: [
                    '<%= yeoman.app %>/scripts/templates.js',
                ]
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        coffeelint: {
            options: {

            },
            all: [
                '<%= yeoman.app %>/scripts/{,*/}*.coffee',
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/scss',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components/foundation/scss',
                httpImagesPath: '../images',
                httpGeneratedImagesPath: '../images/generated',
                httpFontsPath: '../styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
                
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated',
                    imagesDir: '<%= yeoman.dist %>/images',
                    relativeAssets: false
                }
            },
            server: {
                options: {
                    debugInfo: true,
                    relativeAssets: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: [
                        '{,*/}*.css'
                       /* '../bower_components/font-awesome/css/font-awesome.css'*/
                    ],
                    dest: '.tmp/styles/'
                }]
            }
        },
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
                /*flow: { steps: { 'js': ['concat'], 'css': ['concat']}, post: {}}*/
            },
            html: '<%= yeoman.app %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
            },
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
        },
        dalek: {
            options: {
                htmlReporter: true,
                logLevel: 2,
                noColors: false,
                noSymbols: false
            },
            dist: {
                src: ['uat/dalekjs-tests.js']
            }
        },
        htmlmin: {
            dist: {
                options: {
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                        'templates/{,*/}*.hbs'
                        /*'bower_components/sass-bootstrap/fonts/*.*'*/
                    ]
                }]
            },
            styles: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/styles',
                    dest: '.tmp/styles/',
                    src: [
                        '{,*/}*.css',
                        '../bower_components/font-awesome/css/font-awesome.css'
                    ]
                },
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    dest: '.tmp/scripts/',
                    src: [
                        '{,*/}*.js'
                    ]
                }]
            }
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        modernizr: {
            devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
            extra: {
                'shiv' : true,
                'printshiv' : false,
                'load' : true,
                'mq' : false,
                'cssclasses' : true
            },
            extensibility: {
                'addtest': true,
                'prefixed': false,
                'teststyles': false,
                'testprops': false,
                'testallprops': false,
                'hasevents': false,
                'prefixes': false,
                'domprefixes': false
            },
            files: [
                '<%= yeoman.dist %>/scripts/{,*/}*.js',
                '<%= yeoman.dist %>/styles/{,*/}*.css',
                '!<%= yeoman.dist %>/scripts/vendor/*'
            ],
            uglify: true
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: '.tmp/scripts',
                    include: ['config'],
                    name: '../../<%= yeoman.app %>/bower_components/almond/almond',
                    optimize: 'none',
                    out: '<%= yeoman.dist %>/scripts/main.js',
                    //include: ['config'],
                    //name: '../../<%= yeoman.app %>/bower_components/almond/almond',
                   /* mainConfigFile: '.tmp/scripts/main.js',*/
                    paths: {
                        /* Handlebars */
                        'handlebars': '../../<%= yeoman.app %>/bower_components/handlebars/handlebars.runtime',
                        
                        /* Underscore */
                        'underscore': '../../<%= yeoman.app %>/bower_components/underscore/underscore',

                        /* ImagesLoaded */
                        'imagesloaded': '../../<%= yeoman.app %>/bower_components/imagesloaded/imagesloaded.pkgd',

                        /* Enquire */
                        'enquire': '../../<%= yeoman.app %>/bower_components/enquire/dist/enquire',

                        /* Skrollr */
                        'skrollr': '../../<%= yeoman.app %>/bower_components/bower-skrollr/skrollr',

                        /* Picturefill (polyfill for responsive images)*/
                        /*'picturefill': '../../<%= yeoman.app %>/bower_components/picturefill/dist/picturefill',*/

                         /* jQuery */
                        'jquery': '../../<%= yeoman.app %>/bower_components/jquery/dist/jquery',
                        /*'jquery': '../../<%= yeoman.app %>/bower_components/foundation/js/vendor/jquery',*/

                         /* REM-unit-polyfill */
                        'remfill': '../../<%= yeoman.app %>/bower_components/REM-unit-polyfill/js/rem',

                        /* OwlCarousel */
                        'owlCarousel': '../../<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel/owl.carousel',

                        /* Foundation total package */
                        'foundation': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation.min',

                        /* Foundation modules */
                        /*'foundation.core': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation',
                        'foundation.abide': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.abide',
                        'foundation.accordion': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.accordion',
                        'foundation.alert': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.alert',
                        'foundation.clearing': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.clearing',
                        'foundation.dropdown': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.dropdown',
                        'foundation.equalizer': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.equalizer',
                        'foundation.interchange': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.interchange',
                        'foundation.joyride': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.joyride',
                        'foundation.magellan': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.magellan',
                        'foundation.offcanvas': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.offcanvas',
                        'foundation.orbit': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.orbit',
                        'foundation.reveal': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.reveal',
                        'foundation.tab': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.tab',
                        'foundation.tooltip': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.tooltip',
                        'foundation.topbar': '../../<%= yeoman.app %>/bower_components/foundation/js/foundation/foundation.topbar',*/

                        /* Custom jQuery plugins*/

                        /* Vendor Scripts */
                        'jquery.cookie': '../../<%= yeoman.app %>/bower_components/foundation/js/vendor/jquery.cookie',
                        'fastclick': '../../<%= yeoman.app %>/bower_components/foundation/js/vendor/fastclick',
                        'modernizr': '../../<%= yeoman.app %>/bower_components/foundation/js/vendor/modernizr',
                        'placeholder': '../../<%= yeoman.app %>/bower_components/foundation/js/vendor/placeholder'
                    },
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        htmlrefs: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        //handlebars: {
            //options: {
                //amd: true
            //},
            //all: {
                //files: {
                    //'<%= yeoman.app %>/scripts/templates.js': '<%= yeoman.app %>/templates/**/*.hbs'
                //}
            //}
        //},
        'responsive_images': {
            carousel: {
                options: {
                    sizes: [{height:200, name:'small', width:400},
                            {height:400, name:'medium', width:800},
                            {height:600, name:'large', width:1000}]
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images/resimg',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= yeoman.app %>/images'
                }]
            }
        },
        concurrent: {
            server: [
                'compass:server',
                'coffee:server',
                'jade',
                /*'responsive_images',*/
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'compass:dist',
                'coffee:dist',
                'jade',
                /*'responsive_images',*/
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'handlebars',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function () {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'useminPrepare',
        'requirejs',
        /*'handlebars',*/
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'modernizr',
        'copy:dist',
        'htmlrefs:dist',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('dalekjs', [
        'clean:server',
        'compass',
        'connect:test',
        'dalek'
    ]);

    grunt.registerTask('default', [
        'jshint',
        /*'coffeelint',*/
        'test',
        'build'
    ]);
};

