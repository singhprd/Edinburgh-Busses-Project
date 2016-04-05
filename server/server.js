var express = require('express');
var app = express();
var path = require('path');
var getJSON = require('./busses/bus.js');
// var MongoClient = require('mongodb').MongoClient;

getJSON( function( response ) {
  // console.log( response );
  app.get('/getjson', function (req, res) {
    var a = JSON.parse(response);
    res.json(a);
  });
} );


app.get('/', function (req, res) {
  res.sendFile('/Users/user/projects/busses/client/build/index.html');
  // res.send('batman')
});


app.use(express.static('/Users/user/projects/busses/client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});




