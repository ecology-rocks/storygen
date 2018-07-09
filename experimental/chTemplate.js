
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var myCon = require('./constants.js');



//'We are introduced to our character\'s sense of pacifism through some sort of interaction with another creature.'


//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  //
  p1as1a: pep.seq('"Momma, momma!" ', myCon.c0, ' cried as ',myPep.pronouns.they(myCon.c0g), ' ran from ', myPep.pronouns.their(myCon.c0g), ' tormentors.'),
  p1as1b: pep.seq(''),
  p1as1c: pep.seq(''),
  
  //
  p1as2a: pep.seq(myCon.c2, ' and ', myCon.c3, ' chased after ', myPep.pronouns.them(myCon.c0g), ', leaving hastily placed footprints behind them as they ran. '),
  p1as2b: pep.seq(''),
  p1as2c: pep.seq(''),
  
  //
  p1as3a: pep.seq(''),
  p1as3b: pep.seq(''),
  p1as3c: pep.seq(''),
  
  //
  p1as4a: pep.seq(''),
  p1as4b: pep.seq(''),
  p1as4c: pep.seq(''),
  
    //
  p2as1a: pep.seq(''),
  p2as1b: pep.seq(''),
  p2as1c: pep.seq(''),
  
  //
  p2as2a: pep.seq(''),
  p2as2b: pep.seq(''),
  p2as2c: pep.seq(''),
  
  //
  p2as3a: pep.seq(''),
  p2as3b: pep.seq(''),
  p2as3c: pep.seq(''),
  
  //
  p2as4a: pep.seq(''),
  p2as4b: pep.seq(''),
  p2as4c: pep.seq(''),
  
    //
  p3as1a: pep.seq(''),
  p3as1b: pep.seq(''),
  p3as1c: pep.seq(''),
  
  //
  p3as2a: pep.seq(''),
  p3as2b: pep.seq(''),
  p3as2c: pep.seq(''),
  
  //
  p3as3a: pep.seq(''),
  p3as3b: pep.seq(''),
  p3as3c: pep.seq(''),
  
  //
  p3as4a: pep.seq(''),
  p3as4b: pep.seq(''),
  p3as4c: pep.seq(''),
  
    //
  p4as1a: pep.seq(''),
  p4as1b: pep.seq(''),
  p4as1c: pep.seq(''),
  
  //
  p4as2a: pep.seq(''),
  p4as2b: pep.seq(''),
  p4as2c: pep.seq(''),
  
  //
  p4as3a: pep.seq(''),
  p4as3b: pep.seq(''),
  p4as3c: pep.seq(''),
  
  //
  p4as4a: pep.seq(''),
  p4as4b: pep.seq(''),
  p4as4c: pep.seq(''),
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a),//, aText.p1as1b, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a),// aText.p1as2b, aText.p1as2c),
  /*p1as3: pep.choice(aText.p1as3a, aText.p1as3b, aText.p1as3c),
  p1as4: pep.choice(aText.p1as4a, aText.p1as4b, aText.p1as4c),
  
  p2as1: pep.choice(aText.p2as1a, aText.p2as1b, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a, aText.p2as2b, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a, aText.p2as3b, aText.p2as3c),
  p2as4: pep.choice(aText.p2as4a, aText.p2as4b, aText.p2as4c),
  //p2as5: pep.choice(aText.p2as5a, aText.p2as5b, aText.p2as5c),
  
  p3as1: pep.choice(aText.p3as1a, aText.p3as1b, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a, aText.p3as2b, aText.p3as2c),
  p3as3: pep.choice(aText.p3as3a, aText.p3as3b, aText.p3as3c),
  p3as4: pep.choice(aText.p3as4a, aText.p3as4b, aText.p3as4c),
  
  p4as1: pep.choice(aText.p4as1a, aText.p4as1b, aText.p4as1c),*/

  
};



let abstract = pep.seq(myPep.html.p('o'),
                       
myPep.html.i('o'), aPar.p1as1, aPar.p1as2, /*aPar.p1as3 ,aPar.p1as4,
                       
                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p2as1, aPar.p2as2, aPar.p2as3, aPar.p2as4, aPar.p2as5,

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p3as1, aPar.p3as2, aPar.p3as3, aPar.p3as4,

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p4as1,*/


                      myPep.html.i('c'), myPep.html.p('c'), 

);

module.exports = {
  ch1: abstract,
  
};