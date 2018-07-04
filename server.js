// server.js
// where your node app starts

// init project
//express loading
var express = require('express');
var app = express();
//apep loading
var pep = require('apep');
pep = require('apep-std-transformations')(pep);
var bodyParser = require('body-parser');
const pug = require('pug');
var dS = require('./demonSolo.js');

app.set("view engine", "pug");
app.set("views", (__dirname + "/views"));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res){
 res.render("pug1", {
        user: 'rawr',
        story: dS.lineOne.run()
    });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});






