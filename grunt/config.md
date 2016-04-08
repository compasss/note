##版本管理
-----
#####tips: 执行以下操作之前需要先安装node
-----
###grunt
安装：
1. 打开命令行工具，执行<code>npm install grunt-cli -g</code>
使用:
1. 在项目的跟目录新建两个文件,package.json和Gruntfile.js，json文件为工具包管理配置文件，js文件为编译配置
2. package.json示例<code>{
  "name": "projectName",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}</code>
3. gruntfile.js示例<code>module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};</code>
4. 两个文件的详细配置方法和各个命令的作用请查看官方文档

###针对公司业务系统的配置
1. 将两个配置文件放在webapp>frame目录下面
2. 在frame目录打开命令行工具，执行<code>npm install</code>安装编译需要的插件
3. 在命令行中执行<code>grunt</code>
4. 执行完以后所有的js业务代码都会压缩成相应的目录。
5. 可以改变其它的配置执行js/css合并，压缩等功能。
