/* global module:false */
module.exports = function (grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner:
				'/*!\n' +
				' * TinyMCE Emmet Plugin <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://github.e-sites.nl/tinymce-emmet-plugin\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2013 e-sites, http://www.e-sites.nl\n' +
				' */'
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: 'css/',
				src: ['*.css', '!*.min.css'],
				dest: 'css/',
				ext: '.min.css'
			}
		},

		jshint: {
			files: [ 'Gruntfile.js', 'plugin.js' ]
		},

		uglify: {
			plugin: {
				options: {
					banner: '<%= meta.banner %>\n'
				},
				files: {
					'plugin.min.js': ['plugin.js']
				}
			},
			resources: {			
				files: {
					'js/codemirror/codemirror.min.js': [
						'js/codemirror/src/codemirror.js',
						'js/codemirror/src/css.js',
						'js/codemirror/src/htmlmixed.js',
						'js/codemirror/src/javascript.js',
						'js/codemirror/src/xml.js'
					],
					'js/emmet/emmet-extras.min.js': ['js/emmet/src/editor.js', 'js/emmet/src/formatting.js', 'js/emmet/src/init.js']
				}
			}
		}

	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task
	grunt.registerTask('default', ['cssmin:minify', 'jshint', 'uglify']);

};