// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var pep = require('apep');
pep = require('apep-std-transformations')(pep);
var bodyParser = require('body-parser');
app.set("view engine", "pug");
app.set("views", (__dirname + "/views"));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var tHQ = require('./tvHackerQuip.js');
var dQ = require('./demonQuip.js');
var dS = require('./demonSolo.js');

const tvHackerQuip = pep.declare(() =>
    pep.seq(tHQ.exclaimation, ' <br />',
        pep.choice(
            pep.seq('The ' , tHQ.subject, " is ", tHQ.somethingBad, "!"),
            pep.seq(tHQ.evilDoer, ' ', tHQ.doingSomthingBad, " the ", tHQ.target, "!"))));

app.get('/story', function(req, res){
  res.send(tvHackerQuip.run());
});

//define main character name
const mcName = dQ.mcName.run();
//define empty string for boss name
const acName = dQ.mcName.run();

//check name and make sure it's different
/*const pickDifName = function(){
  theName = dQ.mcName;
  while(theName == mcName){
    theName = dQ.mcName;
  }
  return theName;
};

let acName = pickDifName();*/

app.get('/demonStory', function(req, res){
  res.sendFile(__dirname + '/views/demonStory.html');
});

app.get('/demonSolo', function(req, res){
  //console.log(dS.exportMe.flatVar);
  res.send(dS.lineOne.run());
});


const pug = require('pug');
const compiledFunction = pug.compileFile('./views/storytemplate.pug');
console.log(compiledFunction({
  name: 'Timothy'
}));

console.log(pug.renderFile('./views/storytemplate.pug', {
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

app.get('/template', function(req, res){
 res.render("pug1", {
        user: 'rawr',
        story: dS.lineOne.run()
    });
});

