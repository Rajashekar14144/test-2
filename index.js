// import express from 'express'
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World Raaajshekar4 !!!!sdsds!');
    res.write('Hello World Raaajshekar007 !!!!sdsds!');
    res.write('Hello World2 Raaajshekar007 !!!!sdsds!');
    
    // From different developer

    res.write('Hello World1 Raaajshekar14 !!!!sdsds!');

    res.write('Hello World2 Raaajshekar14 !!!!sdsds!');

    
    res.end();
}).listen(3000);
