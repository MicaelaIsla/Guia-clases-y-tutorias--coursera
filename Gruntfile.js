module.exports = function (grunt){



	grunt.initConfig({

		sass: {

			dist: {

				files: [{

					expand: true,

					cwd: 'css',

					src: ['*.scss'],

					dest: 'css',

					ext :'.css'

				}]

			}

		}

	});



	grunt.loadNpmTasks('grunt-contrib-sass'); // Siempre cuando usamos grunt tenemos que cargar los paquetes. 

	grunt.registerTask('css', ['sass']);  // Agregarle las tareas.

};