const express = require('express');
const app = express();

const http = require('http')
const fs = require('fs')

app.use(express.static(__dirname + 'public_html'));


//const server = http.createServer((req, res) => {
//  res.writeHead(200, { 'content-type': 'text/html' })
//  fs.createReadStream('homepage.html').pipe(res)
//})
//server.listen(80);
let server = app.listen(80);