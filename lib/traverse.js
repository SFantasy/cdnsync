// Module dependencies
var fs = require('fs'),
    path = require('path');

var walk = function(dir, done) {
    var i,
        dirPath = dir,
        results = [];

    fs.readdir(dir, function(err, list) {
        i = 0;
        if (err) { return done(err); }
        (function next() {
            var file = list[i++];
            // No files in the dir
            if (!file) { return done(null, results); }
            file = path.resolve(dirPath, file);

            fs.stat(file, function(err, stat) {
                // Directory
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};

module.exports = walk;
