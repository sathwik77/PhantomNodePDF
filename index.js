const express = require('express')
const ejs = require('ejs')
const app = express();
const bodyParser = require('body-parser')
const phantom = require('phantom');
var fs = require('fs');
var pdf = require('html-pdf');

const server = require('http').createServer(app);

app.get('/', (req, res)=>{
    res.render('template.ejs');
});


var html = fs.readFileSync('./views/template.ejs', 'utf8');
var options = { format: 'Letter'};
pdf.create(html, options).toFile('./report.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); 
  });

server.listen(9000)