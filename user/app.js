var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var sql = require('./conf/mysql.js');
var app = express();


app.set('view engine','ejs');
app.set('views','./views/');

app.use(bodyParser.urlencoded({ extended: false }));

// display user
app.get('/',function(req,res){
        sql.query('select * from user',function(err,result){
          if (err) {
            res.render('index',{title:"用户列表",datas:[]});
          }else{
            res.render('index',{title:"用户列表",datas:result});
          }
        });
});

// add user
app.get('/add',function(req,res){
  res.render('add');
});

app.post('/add',function(req,res){
  var name = req.body.name;
  var age = req.body.age;
  sql.query('insert into user(name,age) values("'+name+'","'+ age +'")',function(err,result){
     if(err){
            res.send('新增失败'+err);
        }else {
            res.redirect('/');
        }
  });
});

// edit user
app.get('/edit/:id',function(req,res){
    var id = req.params.id;
    sql.query('select * from user where id = ' + id,function(err,result){
            res.render('edit',{datas:result});
    });
});

app.post('/edit',function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var age = req.body.age;
  sql.query('update user set name = "'+name+'"  , age = "'+age+'" where id = '+id,function(err,result){
    if (err) {
      res.send('更新失败'+err);
    }else{
      res.redirect('/');
    }
  })

});


// del user
app.get('/del/:id',function(req,res){
  var id = req.params.id;
  sql.query('delete from user where id = '+id,function(err,result){
     if(err){
            res.send('删除失败'+err);
        }else {
            res.redirect('/');
        }
  });
});

app.listen(3000);