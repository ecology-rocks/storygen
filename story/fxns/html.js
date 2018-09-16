var pep = require("apep");
pep = require('apep-std-transformations')(pep);
//pep = require('apep-std-vars')(pep);
//var myPep = require('../my-apep-fxns.js');


module.exports = {
    pco: '</p><p>',
    btt: '<p><a href="#top"><i>Back To Top</i></a></p>',
    i: pep.dict({o: '<i>', c: '</i>'}),
    p: pep.dict({o: '<p>', c: '</p>', co: '</p><p>',}),
    div: pep.dict({row: '<div class="row mt-3">', 
                   sp: '<div class="col-md-1"></div>',
                   oCov: '<div class="col-md-3"></div><div class="col-md-6 rounded mt-2 darken box" style="background-image:url(',
                   //put in book cover url
                   oCovC: ')"><h1 class="text-light module text-center title">',
                   //put in title, end h1
                   oCovA: '<h1 class="text-light module text-center author">',
                   //end h1
                   oAbs: '<div class="col-md-5 rounded bg-info t-2 ml-2 mr-2 text-light">', 
                   oCh: '<div class="row mt-3"><div class="col-md-2"></div><div class="col-md-8 rounded bg-light pt-3 pl-3 pr-3 pb-3 text-dark">',
                   c: '</div>',
                   c2: '</div></div>',
                   h1: '<h1 class="text-center text-primary">',
                   h1c: '</h1>'}),
      
}