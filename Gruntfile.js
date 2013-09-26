module.exports = function (grunt)
{

    config = {

        create_src: "mkdir -p src; cd src; if [ -d helter_skelter ]; then cd helter_skelter; git pull; else git clone https://github.com/enki-labs/helter_skelter.git; fi"

    };

    grunt.initConfig(
    {
        sshexec: {
            push: {
                command: config.create_src,
                options: { host: grunt.option('host'), username: grunt.option('username'), password: grunt.option('password') }
            }
        },
        
        gitcommit: {
            all: {
                options: { message: grunt.option('msg') },
                files: { src: ['Readme.md'] } /*grunt.config.get('git.changed') }*/
            }
        },

        shell: {
            gitpush: { command: "git push" },
            gitall: { command: 'git commit -am "test"' }
        }
    });

    //grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-git-changedfiles');
    grunt.loadNpmTasks('grunt-ssh');
    grunt.registerTask('default', ['shell:gitall', 'shell:gitpush', 'sshexec:push']);

};
