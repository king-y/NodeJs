var mysql = require('mysql');

var pool = mysql.createPool({
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 's79'
    });

exports.query = function(sql,data){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,result){
              data(err,result);
              connection.release();
        });
    });
}