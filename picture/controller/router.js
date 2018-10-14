var files = require('../models/files.js');
var formidable = require('formidable');
var path = require('path');
var sillyDate = require('silly-datetime');
var fs = require('fs');

//index page
exports.showIndex = function (req, res) {
    files.getAllAlbums(function (err, albums) {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        res.render('index', {
            albums: albums
        });
    });
}

//show pictures in album
exports.showAlbum = function (req, res, next) {
    var albumName = req.params.albumName;
    files.showPictures(albumName, function (err, pictures) {
        if (err) {
            next();
            console.log(err + ' and go to next');
            return;
        }
        //console.log(pictures);
        res.render('album', {
            albumName: albumName,
            pictures: pictures
        });
    });
}

//upload
exports.showUpload = function (req, res) {
    files.getAllAlbums(function (err, albums) {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        res.render('upload', {
            albums: albums
        });
    });
}

//mkdir
exports.mkdirPage = function(req,res){
    res.render('mkdir');
}
exports.mkdirAlbum = function(req,res) {
      files.getAllAlbums(function (err, albums) {
        if (err) {
            console.log(err);
            return;
        }else{
            for (var i = 0; i < albums.length; i++) {
                if (albums[i] == req.body.album) {
                    res.send('相册已存在,请重新创建');
                    return;
                }else{
                  var path = './upload/'+req.body.album;
                  fs.mkdir(path,function(err){
                    if (err) {
                        console.log(err);
                        return;
                    }else{
                        return res.redirect('/');
                    }
                  });
                }
            }

        }
    });

}

//receive form
exports.receiveForm = function (req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = path.normalize(__dirname + '/../upload/');
    form.parse(req, function (err, fields, files, next) {
        if (err) {
            console.log(err + ' and go to next');
            next();
            return;
        }
        var size = files.picture.size;
        console.log('file size: ' + size);
        if (size > 1000 * 10240) {
            fs.unlink(files.picture.path, function (err) {

            });
            res.send('this picture is too big');
            return;
        }

        var oldPath = files.picture.path;
        var timestamp = sillyDate.format(new Date(), 'YYYYMMDDHHmmss');
        var newPath = path.normalize(__dirname + '/../upload/' + fields.albumName + '/' + timestamp + files.picture.name);

        fs.rename(oldPath, newPath, function (err) {
            if (err) {
                console.log('rename "' + files.picture + '" failed');
                res.send('rename "' + files.picture + '" failed');
                return;
            }
              return res.redirect(fields.albumName);
        });
    });
}

//page 404
exports.show404 = function (req, res) {
    res.render('page-404', {
        baseurl: req.pathname
    });
}