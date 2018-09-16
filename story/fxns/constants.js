var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);
var myPep = require('../../my-apep-fxns.js');
var frmat = require('./frmat.js');

var nameFn = frmat.demonName;

module.exports = {

    title: pep.store('title', pep.choice(
        pep.seq(frmat.intoTitle, " the ", frmat.darknessTitle),
        pep.seq(frmat.intoTitle, " ", frmat.darknessTitle, ", ", frmat.iTitle,
            " ", frmat.glowTitle)
    )),

    author: pep.store('author', pep.seq(frmat.authorFirst, " ",
        pep.opt(pep.many1(frmat.authorMiddle, 0.3)),
        frmat.authorLast)),
    realm: pep.store('realm', pep.choice('e', 'f', 'h')),

    //main char
    jerry: pep.store('jerry', nameFn),
    jerry0: pep.store('jerry0', myPep.gender),

    //archenemy / rebellion leader
    eddie: pep.store('eddie', nameFn),
    eddie0: pep.store('eddie0', myPep.gender),

    //childhood tormentors
    adrian: pep.store('adrian', nameFn),
    adrian0: pep.store('adrian0', myPep.gender),

    max: pep.store('max', nameFn),
    max0: pep.store('max0', myPep.gender),

    //lunch buddy
    reed: pep.store('reed', nameFn),
    reed0: pep.store('reed0', myPep.gender),

    //boss
    kaden: pep.store('kaden', nameFn),
    kaden0: pep.store('kaden0', myPep.gender),

    //work buddy
    dorian: pep.store('dorian', nameFn),
    dorian0: pep.store('dorian0', myPep.gender),
};

/* gender neutral character names

Addison,Adrian,Aiden,Ainsley,Alex,Amari,Andy,Ari,Ash,Aspen
Aubrey,August,Avery,Bailey,Bay,Blaine,Blake,Bobbie,Brett,Brook
Brooklyn,Caelan,Cameron,Campbell,Carroll,Carson,Casey,Charlie,Chris,Clay
Corey,Dana,Dakota,Dale,Dallas,Daryl,Delta,Devin,Dorian,Drew
Dylan,Easton,Eddie,Eli,Elliott,Emerson,Emery,Finley,Frances,Frankie
Gabriel,Glenn,Gray,Harley,Harper,Hayden,Hudson,Hunter,James,Jamie
Jayden,Jean,Jesse,Jordan,Jules,Julian,Kaden,Kai,Karter,Kelly
Kelsey,Kendall,Kennedy,Kyle,Lake,Landry,Lincoln,Logan,London,Lou
Mackenzie,Mason,Max,Maxwell,Monroe,Morgan,Parker,Pat,Peyton,Phoenix
Quinn,Ray,Reagan,Reed,Reese,Remy,Riley,River,Roan,Rory
Rowan,Rudy,Ryan,Sage,Sam,Sawyer,Shawn,Sean,Skylar,Spencer
Stevie,Sydney,Tanner,Tatum,Taylor,Toby,Tyler,Val,West,Winter
 
 */


