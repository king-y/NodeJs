///import * as express from 'express'
var express = require('express');
var router = require('./controller/router.js');
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

//set engine
app.set('view engine', 'ejs');

//static files server
app.use(express.static('./public'));
app.use(express.static('./upload'));

//index page
app.get('/', router.showIndex);

//some on album
app.get('/:albumName', router.showAlbum);

// upload
app.get('/upload', router.showUpload);

//receive form
app.post('/upload', router.receiveForm);

//mkdir directory
app.get('/mkdir',router.mkdirPage)
app.post('/mkdir',router.mkdirAlbum)

//404 page
app.use(router.show404);

// listen port
app.listen(3000);