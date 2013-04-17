module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['src/**/*.ts', 'app.ts'],
                options: {
                    module: 'commonjs', //or commonjs
                    sourcemap: true
                }
            }
        },
        jasmine_node: {
            specNameMatcher: "./spec", // load only specs containing specNameMatcher
            projectRoot: ["."],
            requirejs: false,
            forceExit: true,
            isVerbose: true,
            jUnit: {
                report: false,
                savePath : "./build/reports/jasmine/",
                useDotNotation: true,
                consolidate: true
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-jasmine-node');

    // Register tasks
    grunt.registerTask('default', ['typescript']);
    grunt.registerTask('test', ['jasmine_node'])

};