

var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var myCon = require('./constants.js');



//'We are introduced to our character\'s sense of pacifism through some sort of interaction with another creature.'


//p1as1a = par 1 ver a sen 1 ver a
let aText = {

//p1
  
  p1as1a: pep.seq(''),
  p1as1b: pep.seq(''),
  p1as1c: pep.seq(''),

  p1as2a: pep.seq(''),
  p1as2b: pep.seq(''),
  p1as2c: pep.seq(''),
  
  p1as3a: pep.seq(''),
  p1as3b: pep.seq(''),
  p1as3c: pep.seq(''),
  
  p1as4a: pep.seq(''),
  p1as4b: pep.seq(''),
  p1as4c: pep.seq(''),
  
  p1as5a: pep.seq(''),
  p1as5b: pep.seq(''),
  p1as5c: pep.seq(''),
  
  p1as6a: pep.seq(''),
  p1as6b: pep.seq(''),
  p1as6c: pep.seq(''),

  p1as7a: pep.seq(''),
  p1as7b: pep.seq(''),
  p1as7c: pep.seq(''),

  p1as8a: pep.seq(''),
  p1as8b: pep.seq(''),
  p1as8c: pep.seq(''),
  
//p2 
  
  p2as1a: pep.seq(''),
  p2as1b: pep.seq(''),
  p2as1c: pep.seq(''),

  p2as2a: pep.seq(''),
  p2as2b: pep.seq(''),
  p2as2c: pep.seq(''),
  
  p2as3a: pep.seq(''),
  p2as3b: pep.seq(''),
  p2as3c: pep.seq(''),
  
  p2as4a: pep.seq(''),
  p2as4b: pep.seq(''),
  p2as4c: pep.seq(''),
  
  p2as5a: pep.seq(''),
  p2as5b: pep.seq(''),
  p2as5c: pep.seq(''),
  
  p2as6a: pep.seq(''),
  p2as6b: pep.seq(''),
  p2as6c: pep.seq(''),

  p2as7a: pep.seq(''),
  p2as7b: pep.seq(''),
  p2as7c: pep.seq(''),

  p2as8a: pep.seq(''),
  p2as8b: pep.seq(''),
  p2as8c: pep.seq(''),

//p3
  
  p3as1a: pep.seq(''),
  p3as1b: pep.seq(''),
  p3as1c: pep.seq(''),

  p3as2a: pep.seq(''),
  p3as2b: pep.seq(''),
  p3as2c: pep.seq(''),
  
  p3as3a: pep.seq(''),
  p3as3b: pep.seq(''),
  p3as3c: pep.seq(''),
  
  p3as4a: pep.seq(''),
  p3as4b: pep.seq(''),
  p3as4c: pep.seq(''),
  
  p3as5a: pep.seq(''),
  p3as5b: pep.seq(''),
  p3as5c: pep.seq(''),
  
  p3as6a: pep.seq(''),
  p3as6b: pep.seq(''),
  p3as6c: pep.seq(''),

  p3as7a: pep.seq(''),
  p3as7b: pep.seq(''),
  p3as7c: pep.seq(''),

  p3as8a: pep.seq(''),
  p3as8b: pep.seq(''),
  p3as8c: pep.seq(''),

//p4

  p4as1a: pep.seq(''),
  p4as1b: pep.seq(''),
  p4as1c: pep.seq(''),

  p4as2a: pep.seq(''),
  p4as2b: pep.seq(''),
  p4as2c: pep.seq(''),
  
  p4as3a: pep.seq(''),
  p4as3b: pep.seq(''),
  p4as3c: pep.seq(''),
  
  p4as4a: pep.seq(''),
  p4as4b: pep.seq(''),
  p4as4c: pep.seq(''),
  
  p4as5a: pep.seq(''),
  p4as5b: pep.seq(''),
  p4as5c: pep.seq(''),
  
  p4as6a: pep.seq(''),
  p4as6b: pep.seq(''),
  p4as6c: pep.seq(''),

  p4as7a: pep.seq(''),
  p4as7b: pep.seq(''),
  p4as7c: pep.seq(''),

  p4as8a: pep.seq(''),
  p4as8b: pep.seq(''),
  p4as8c: pep.seq(''),

//p5

  p5as1a: pep.seq(''),
  p5as1b: pep.seq(''),
  p5as1c: pep.seq(''),

  p5as2a: pep.seq(''),
  p5as2b: pep.seq(''),
  p5as2c: pep.seq(''),
  
  p5as3a: pep.seq(''),
  p5as3b: pep.seq(''),
  p5as3c: pep.seq(''),
  
  p5as4a: pep.seq(''),
  p5as4b: pep.seq(''),
  p5as4c: pep.seq(''),
  
  p5as5a: pep.seq(''),
  p5as5b: pep.seq(''),
  p5as5c: pep.seq(''),
  
  p5as6a: pep.seq(''),
  p5as6b: pep.seq(''),
  p5as6c: pep.seq(''),

  p5as7a: pep.seq(''),
  p5as7b: pep.seq(''),
  p5as7c: pep.seq(''),

  p5as8a: pep.seq(''),
  p5as8b: pep.seq(''),
  p5as8c: pep.seq(''),

//p6
  
  p6as1a: pep.seq(''),
  p6as1b: pep.seq(''),
  p6as1c: pep.seq(''),

  p6as2a: pep.seq(''),
  p6as2b: pep.seq(''),
  p6as2c: pep.seq(''),
  
  p6as3a: pep.seq(''),
  p6as3b: pep.seq(''),
  p6as3c: pep.seq(''),
  
  p6as4a: pep.seq(''),
  p6as4b: pep.seq(''),
  p6as4c: pep.seq(''),
  
  p6as5a: pep.seq(''),
  p6as5b: pep.seq(''),
  p6as5c: pep.seq(''),
  
  p6as6a: pep.seq(''),
  p6as6b: pep.seq(''),
  p6as6c: pep.seq(''),

  p6as7a: pep.seq(''),
  p6as7b: pep.seq(''),
  p6as7c: pep.seq(''),

  p6as8a: pep.seq(''),
  p6as8b: pep.seq(''),
  p6as8c: pep.seq(''),



 
  
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


let aBlock = {
  p1a: pep.seq(aPar.p1as1, aPar.p1as2, aPar.p1as3),
  
  
};


let abstract = pep.seq(myPep.html.p('o'),
                       
               aBlock.p1a, myPep.html.p('co'), /*
                       
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