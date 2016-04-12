"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            ">2%"
          ]})
        ]
      },
      style: {
        src: "css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    watch: {
      files: ["sass/**/*.{scss,sass}"],
      tasks: ["sass", "postcss"],
      options: {
        spawn: false
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
};
