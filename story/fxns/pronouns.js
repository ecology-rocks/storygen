var pep = require("apep");
pep = require('apep-std-transformations')(pep);
//pep = require('apep-std-vars')(pep);
//var myPep = require('../my-apep-fxns.js');

module.exports = { 

    they: pep.dict({ male: 'he', female: 'she',}, 'they'),
    them: pep.dict({ male: 'him', female: 'her',}, 'them'),
    their: pep.dict({ male: 'his', female: 'her',}, 'their'),
    theirs: pep.dict({ male: 'his', female: 'hers',}, 'theirs'),
    They: pep.dict({male: 'He', female: 'She',}, 'They'),
    Them: pep.dict({ male: 'Him', female: 'Her',}, 'Them'),
    Their: pep.dict({ male: 'His', female: 'Her',}, 'Their'),
    Theirs: pep.dict({ male: 'His', female: 'Hers',}, 'Theirs'),
    themself: pep.dict({male: 'himself', female: 'herself',}, 'themself'),
    Themself: pep.dict({male: 'Himself', female: 'Herself',}, 'Themself'),
    were: pep.dict({male: 'was', female: 'was', }, 'were'),
    are: pep.dict({male: 'is', female: 'is', }, 'are'),
    Were: pep.dict({male: 'Was', female: 'Was', }, 'Were'),
    Are: pep.dict({male: 'Is', female: 'Is', }, 'Are'),  
  
}