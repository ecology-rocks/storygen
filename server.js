// server.js
// where your node app starts

// init project
//express loading
var express = require('express');
var app = express();

//apep loading
var pep = require('apep');
pep = require('apep-std-transformations')(pep);

//other middleware
var bodyParser = require('body-parser');

//html templating
const pug = require('pug');



//my script
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
      title: pep.capitalize(dS.title).run(),
      author: dS.author.run(),
      lineOne: dS.lineOne.run(),
      bookCover: dS.bookCover.run()
    });
});






// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});






