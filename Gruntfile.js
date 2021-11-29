var logfile = require('logfile-grunt');
const sass = require('node-sass');

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		pug: {
		  compile: {
		    options: {	    	
		      data: {
		        debug: false
		      }
		    },
		    files: [
				{
				expand: true,
				cwd: "src/pug/",
				src: ["*.pug"],
				dest: "dist/",
				ext: ".html"
				}
			]
		  }
		},

		prettify: {
		    options: {
		      config: '.prettifyrc'
		    },
		    all: {
			    expand: true,
			    cwd: 'dist/',
			    ext: '.html',
			    src: ['*.html'],
			    dest: 'dist/'
			  },
		  },


		stylus: {
		  compile: {
		    options: {
		      paths: ['src/stylus'],
		      relativeDest: '../css',
		    },
		    files: [
				{
				expand: true,
				cwd: "src/stylus/",
				src: ["*.styl"],
				dest: "src/css",
				ext: ".css"
				}
			]
		  }
		},

		sass: {
	        options: {
	            implementation: sass,
	            sourceMap: true
	        },
	        dist: {
	            files: [
					{
					expand: true,
					cwd: "src/scss/",
					src: ["*.scss"],
					dest: "src/css",
					ext: ".css"
					}
				]
	        }
	    },

		autoprefixer: {
			options: {
			  browsers: ['last 4 versions', 'ie 8', 'ie 9']
			},
	      	your_target: {
		      files: {
		        'src/css/main.css': ['src/css/main.css'],
		        'src/css/home.css': ['src/css/home.css']
		      }
		    }
	    },


		cmq: {
		    options: {
		      log: false
		    },
		    your_target: {
		      files: {
		        'src/css/main.css': ['src/css/main.css']
		      }
		    }
		},

		cssmin: {
			minifycss: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css',
				}]
			}
		},

		imagemin: {
	        dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'src/images',
	                src: ['*.{png,jpg,gif,svg}'],
	                dest: 'dist/images'
	            }]
	        }
	    },

	    copy: {
	    	main: {
	    		expand: true,
	    		cwd: 'src/plugins',
	    		src: '**',
	    		dest: 'dist/plugins',
	    	},
		},

		watch: {
			scripts: {
				files: ['src/pug/*.pug', 'dist/*.html', 'src/stylus/*.styl', 'src/sass/*.sass', 'src/scss/*.scss'],
				tasks: ['pug', 'prettify', 'stylus', 'sass', 'autoprefixer', 'cmq', 'minifycss', 'imagemin', 'copy'],
			},
		},

		kss: {
			options: {
	        	title: 'Shojeesh Style Guide',
	        	verbose: false,
	        	css: [
	        		"../dist/css/styleguide.min.css"
	        	]
	        },
	        dist: {
	        	src: "src/stylus/", // path to the sass files to watch for comments
	        	dest: "styleguide/", // path to where the style guide should live. Add this path to your .gitignore
	        }
	    },

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.registerTask('default', ['sass']);
  	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.registerTask('minifycss','cssmin:minifycss');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-kss');
};

