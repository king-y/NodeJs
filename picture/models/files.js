
var fs = require('fs');

// get all albums
exports.getAllAlbums = function (callback) {
    var albums = [];
    fs.readdir('./upload', function (err, files) {
        if (err) {
            return callback('read "./upload" error', null);
        }
        (function iterator(i) {
            if (i == files.length) {
                return callback (null, albums);
            }
            fs.stat('./upload/' + files[i], function (err, stats) {
                if (err) {
                    return callback('read "' + files[i] + '" error', null);
                }
                if (stats.isDirectory()) {
                    albums.push(files[i]);
                }
                iterator(i +1);
            });
        })(0);
    });
}

//get pictures by albumName
exports.showPictures = function(albumName, callback) {
    var pictures = [];
    fs.readdir('./upload/' + albumName, function (err, files) {
        if (err) {
            return callback('read "' + albumName + '" error', null);
        }
        (function iterator(i) {
            if (i == files.length) {
                return callback(null, pictures);
            }
            fs.stat('./upload/' + albumName + '/' + files[i], function (err, stats) {
                if (err) {
                   return callback('read files "' + files[i] + '" error', null);
                }
                if (stats.isFile()) {
                    pictures.push(files[i]);
                }
                iterator(i +1);
            });
        })(0);
    });
}

