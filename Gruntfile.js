module.exports = function (grunt)
{

    grunt.initConfig(
    {
        sshexec: {
            push: {
                command: 'uptime',
                options: { host: grunt.option('host'), username: grunt.option('username'), password: grunt.option('password') }
            }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-ssh');
    grunt.registerTask('default', ['sshexec:push']);

};
