module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt, {requireResolution: true});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    ts: {
      options: require('./tsconfig.json').compilerOptions,
      default: {
        src: ['src/**/*.ts', 'src/**/*.tsx', '!node_modules/**'],
        outDir: './dist'
      }
    },

    watch: {
      ts: {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        tasks: ['ts']
      }
    },

    clean: ['dist']
  });

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['ts']);
  grunt.registerTask('w', ['default', 'watch']);
};
