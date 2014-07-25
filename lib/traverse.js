// Module dependencies
var fs = require('fs'),
    path = require('path');

module.exports = function(dir) {
    var i = 0,
        dirPath = dir;

    fs.readdir(dirPath, function(err, files) {
        if (err) {
            console.error(err);
        }

        for(; i < files.length; i++) {
            if(files[i]) {

            }
        }
    });
}
