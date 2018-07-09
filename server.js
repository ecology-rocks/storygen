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
var dL = require('./demonLong.js');

app.set("view engine", "pug");
app.set("views", (__dirname + "/views"));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/old', function(req, res){
 res.render("pug1", {
      title: pep.capitalize(dS.title).run(),
      author: dS.author.run(),
   
      lineOne: dS.lineOne.run(),
      lineTwo: dS.lineTwo.run(),
      lineThree: dS.lineThree.run(),
      lineFour: dS.lineFour.run(),
   
      bookCover: dS.bookCover.run(),
   acName: dS.acName.run(),
   mcName: dS.mcName.run()
    });
});


app.get('/', function(req, res){
 res.render("pugLongStory", {
      title: dL.title.run(),
      author: dL.author.run(),
      bookCover: dL.bookCover.run(),
      finalStory: dL.finalStory.run(),
    });
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});






