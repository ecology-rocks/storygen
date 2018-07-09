
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);
var myPep = require('../my-apep-fxns.js');


let titleFxn = pep.choice(pep.seq(myPep.frMat.intoTitle,
                                  " the ",myPep.frMat.darknessTitle),
                       pep.seq(myPep.frMat.intoTitle, " ", 
                               myPep.frMat.darknessTitle, ", ", 
                               myPep.frMat.iTitle, " ", myPep.frMat.glowTitle)
                   );
let title = pep.store('title', titleFxn);

let author = pep.store('author', pep.seq(myPep.frMat.authorFirst, " ", 
                     pep.opt(pep.many1(myPep.frMat.authorMiddle, 0.3)), 
                     myPep.frMat.authorLast));

//choose the setting
let setVar = pep.store('setVar', pep.choice('e', 'f', 'h'));
var myArray = ['e', 'f', 'h'];
//setVar = myArray[Math.floor(Math.random() * myArray.length)];
var nameFn = myPep.frMat.demonName;
//let rawr = setVar.run(); 
//console.log(rawr);
//console.log(rawr === 'e');

//these aren't working right now for some reason. 
//I think it's doing that thing where it stays on the server until a code changes
/*if(pep.begin(setVar) == 'e'){
  console.log('chose e ' + setVar);
  
  nameFn = myPep.frMat.elfName;
  
}
else if(pep.begin(setVar) == 'f'){
  console.log('chose f ' + setVar);
  nameFn = myPep.frMat.feyName;
  
} else if (pep.begin(setVar) == 'h') {
  console.log('chose h ' + setVar);
  nameFn = myPep.frMat.demonName; 
  
} else {
  console.log('chose nothing ' + setVar.run()); //+  setVar.run() + setVar.run() + setVar.run());
 //nameFn = 'oops'; 
};
*/

//main character
const c0 = pep.store('c0', nameFn); 
const c0g = pep.store('c0g', myPep.gender);

//archenemy of the king
const c1 = pep.store('c1', nameFn);
const c1g = pep.store('c1g', myPep.gender);

//childhood tormentors
const c2 = pep.store('c2', nameFn);
const c2g = pep.store('c2g', nameFn);
const c3 = pep.store('c3', nameFn);
const c3g = pep.store('c3g', nameFn);

//DONT FORGET TO PUT IT IN MOD EXPORTS TOO

module.exports = {
  title: title,
  author:author,
  setVar: setVar,
  c0: c0,
  c0g: c0g,
  c1: c1,
  c1g: c1g,
  c2: c2,
  c2g: c2g,
  c3: c3,
  c3g: c3g,
};