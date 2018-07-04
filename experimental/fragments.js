/*
//a or an. Function is good, but implementation is a bit rough. 
//It only runs once when it compiles, not on refresh.
  const aWord = function(word){
    //define vowels
    var vowelArray = ['a', 'e', 'i', 'o', 'u'];
    //if there's no match in vowelArray, return "a"
    if(vowelArray.indexOf(word.charAt(0)) == -1){
       return "a " + word;
    //otherwise, return "an"
    } else{
       return "an " + word;
    }
  };*/

//console.log(aWord("ether"));


/*const aAn = pep.match()
    .case(/^[aeiou]/,   (_, x) => 'an ' + x)
    .case(/.asterisk/,       (x) => 'a ' + x);
//this is how to run this that doesn't work:
//aAn(myChoices.impressively).run()*/