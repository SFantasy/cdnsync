cdnsync
---

Synchronize the files on CDN with FTP.

## Install

### Git

```
git clone git@github.com:SFantasy/cdnsync.git
cd cdnsync
[sudo] npm install . [-g]
```

### NPM

```
[sudo] npm install cdnsync [-g]
```

## Usage

- Write your own config file.

```
mv config.example.json config.json
```

you have to change these items (if necessary):

```
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
```

- Synchronize all the files according to your configuration

```
cdnsync
```

## License

The MIT License
