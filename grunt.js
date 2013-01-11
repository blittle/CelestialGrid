module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-requirejs');

    grunt.initConfig({
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'dist/build.js'
            }
        },

        qunit: {
            all: ['test/**/*.html']
        },

        min: {
            dist: {
                src: ['dist/build.js'],
                dest: 'dist/build.min.js'
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: "dist",
                    name:"build",
                    mainConfigFile: "config.js",
                    out: "dist/build-amd.js",
                    optimize: "none",
                    shim: {
                        "apod-scraper" : {
                            "deps": [],
                            "exports" : "someNameSpace"
                        }
                    }
                }
            }
        },

        lint: {
            all: ['dist/**/*.js', 'grunt.js']
        }
    });

    grunt.registerTask('default', 'typescript requirejs min');
    grunt.registerTask('amd', 'typescript requirejs');
    grunt.registerTask('test', 'typescript requirejs qunit');
};
