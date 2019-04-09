var pep = require("apep");
pep = require('apep-std-transformations')(pep);
//pep = require('apep-std-vars')(pep);
//var myPep = require('../my-apep-fxns.js');

module.exports = { 

    realm: pep.dict({e: 'Ealionem', f: 'Astaran',  h: 'Hell'}),
    brethren: pep.dict({e: 'elf', f: 'faery', h: 'demon'}),
    brethrens: pep.dict({e: 'elves', f: 'faeries', h: 'demons'}),
    Brethren: pep.dict({e: 'Elf', f: 'Faery', h: 'Demon'}),
    Brethrens: pep.dict({e: 'Elves', f: 'Faeries', h: 'Demons'}),
    boss: pep.dict({e: 'Emperor', f: 'Archfey', h: 'Archdemon'}),
  
}