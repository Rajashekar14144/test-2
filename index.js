// import express from 'express'
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World Raaajshekar1 !!!!sdsds!');
   
    res.end();
}).listen(3000);
