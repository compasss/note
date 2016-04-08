// 包装函数
module.exports = function(grunt) {

    // 任务配置,所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                sourceMap: false,
                banner: '/*! eye-web - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            check: {
                files: [{
                    expand: true,
                    cwd: "check/",
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: "check/",
                    ext: ".min.js"
                }]
            },
            common: {
                files: [{
                    expand: true,
                    cwd: "common/",
                    src: ['*.js', '!*.min.js'],
                    dest: "common/",
                    ext: ".min.js"
                }]
            },
            doctor: {
                files: [{
                    expand: true,
                    cwd: "doctor/",
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: "doctor/",
                    ext: ".min.js"
                }]
            },
            member: {
                files: [{
                    expand: true,
                    cwd: "member/",
                    src: ['*.js', '!*.min.js'],
                    dest: "member/",
                    ext: ".min.js"
                }]
            },
            shaicha: {
                files: [{
                    expand: true,
                    cwd: "shaicha/",
                    src: ['**/*.js', '!**/*.min.js'],
                    dest: "shaicha/",
                    ext: ".min.js"
                }]
            },
        },
        watch: {
            files: ['**/**/*.js', '!**/**/*.min.js'],
            tasks: ['uglify'],
        }
    });

    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['uglify', 'watch']);

};
