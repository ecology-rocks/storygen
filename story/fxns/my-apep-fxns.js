//this file needs some organization

var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);


module.exports = {//define your specialized functions here 

 pluralize: pep.match()
    .case(/(.*)y$/,   (_, x) => x + 'ies')
    .case(/(.*s)$/,   (_, x) => x + 'es')
    .case(/.*/,       (x) => x + 's'),

 doing: pep.match()
    .case(/(.*)e$/,   (_, x) => x + 'ing')
    //.case(/(.*s)$/,   (_, x) => x + 'es')
    .case(/.*/,       (x) => x + 'ing'),
  
aAn: pep.match()
    .case(/^[aeiou]/, (x) => 'an '+x)
    .case(/.*/, (x) => 'a '+x),

edIng: pep.match()
    .case(/(.*)ing$/, (_, x) => x + 'ed')
    .case(/(.*)ed$/, (_, x) => x + 'ing'),
 


  verbS: pep.dict({male: 's', female: 's'}, ''),
  
  
  //myPep.gender
  gender: pep.weightedChoice([[0.45, "male"], 
                             [0.45, "female"], 
                             [0.1, "enby"]]),
  
  //tl
  
  
}//end module.exports
