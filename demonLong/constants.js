
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

//main character - abstract
const c0 = pep.store('c0', nameFn); 
const c0g = pep.store('c0g', myPep.gender);

//archenemy of the king - abstract
const c1 = pep.store('c1', nameFn);
const c1g = pep.store('c1g', myPep.gender);

//childhood tormentors - ch1
const c2 = pep.store('c2', nameFn);
const c2g = pep.store('c2g', myPep.gender);
const c3 = pep.store('c3', nameFn);
const c3g = pep.store('c3g', myPep.gender);

//lunch buddy - ch2
const c4 = pep.store('c4', nameFn);
const c4g = pep.store('c4g', myPep.gender);

//commander - ch2
const c5 = pep.store('c5', nameFn);
const c5g = pep.store('c5g', myPep.gender);

//rampart colleague - ch2
const c6 = pep.store('c6', nameFn);
const c6g = pep.store('c6g', myPep.gender);

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
  c4: c4,
  c4g: c4g,
  c5: c5,
  c5g: c5g, 
  c6: c6,
  c6g: c6g,
};