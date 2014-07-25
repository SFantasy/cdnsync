// Module dependencies
var Client = require('ftp'),
    c = new Client();

// Configuration of the local
var config = require('./config');

var traverse = require('./lib/traverse');

c.on('ready', function() {
    console.log('FTP is ready');
    // Test put method
    c.put('/Users/fantasy/work/svn-config.json', '/site/wap/svn-config.json', function(err) {
        if(err) {
            console.error(err);
        }
        c.end();
        console.log()
    });
});

// Connect to the remote FTP
c.connect(config['ftp-config']);
