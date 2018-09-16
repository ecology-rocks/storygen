var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./fxns/my-apep-fxns.js'); //custom functions
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup

module.exports = {

    title: pep.choice(pep.seq('My Title 1'),),
    text: pep.seq(html.p('o'),

        pep.choice( //p1as1
            pep.seq(),
            pep.seq(), 
            pep.seq(),
        ), //end pep.choice

        pep.choice( //p1as2
            pep.seq(), 
            pep.seq(), 
            pep.seq(), 
        ), //end pep.choice

 //new paragraph

        //p2 --   //p2as1
        html.pco,         pep.choice( //p1as1
            pep.seq(),
            pep.seq(), 
            pep.seq(),
        ), //end pep.choice

        pep.choice( //p1as2
            pep.seq(), 
            pep.seq(), 
            pep.seq(), 
        ), //end pep.choice
         html.p('c'), //chapter end tags
    ), //end pep.seq
}; //end module.exports