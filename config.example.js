var config = {
    // Local directory prefix
    "local-prefix": "/branch/site/",
    // Remote directory prefix
    "remote-prefix": "/site/",
    "ftp-config": {
        // The IP address or hostname of your FTP server
        "host": "localhost",
        // Username of your FTP account
        "user": "test",
        // Password of your FTP account
        "password": "abcdefg"
    }
};

module.exports = config;
module.exports.config = config;
