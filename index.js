// Module dependencies
var Client = require('ftp'),
    c = new Client();

var config = require('./config.json');
var traverse = require('./lib/traverse');

module.exports = cdnsync;

function cdnsync () {
    var i,
        localDir = config['local-prefix'],
        remoteDir = config['remote-prefix'];

    /**
     * Get ready to sync files
     */
    c.on('ready', function() {
        console.log('FTP ' + config['ftp-config']['host'] + ' connected.');

        traverse(localDir, function(err, results) {
            if(err) throw err;
            for(i = 0; i < results.length; i++) {
                var currentFile = results[i];

                putFile(i, currentFile, results.length);
            }
        });
    });

    /**
     * Put file to the remote
     */
    function putFile(i, currentFile, n) {
        c.put(currentFile, (remoteDir + currentFile.replace(localDir, '')), function(err) {
            if (err) {
                throw err;
            } else {
                console.log('FILE: ' + currentFile.replace(localDir, '') + ' synchronized. ');
                console.log('PROCESS: ' + (i + 1) + '/' + n);
            }

            if (i === (n - 1)) {
                c.end();
            }
        });
    }

    c.connect(config['ftp-config']);
}
