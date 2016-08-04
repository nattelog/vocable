module.exports = function(grunt) {
  require('grunt-task-loader')(grunt, {
    mapping: {
      css_import: 'grunt-css-import',
      merge_data: 'grunt-merge-data'
    }
  });

  grunt.initConfig({
    browserify: {
      build: {
        files: {
          'build/client.js': ['js/ui.js']
        }
      }
    },

    css_import: {
      build: {
        files: {
          'build/style.css': ['css/style.css']
        }
      }
    },

    merge_data: {
      build: {
        src: ['exercises/*.json'],
        dest: 'js/exercises.json'
      }
    },

    watch: {
      build: {
        files: ['Gruntfile.js',
                'js/*.js',
                'css/*.css',
                'exercises/*.json',
                'index.html'],
        tasks: ['css_import:build', 'merge_data:build', 'browserify:build']
      },
      options: {
        atBegin: true,
        livereload: true
      }
    }
  });

  grunt.registerTask('dev', ['watch:build']);
};
