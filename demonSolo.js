//load our library and append the special needed ones
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

 //define your specialized functions here   
const pluralize = pep.match()
    .case(/(.*)y$/,   (_, x) => x + 'ies')
    .case(/(.*s)$/,   (_, x) => x + 'es')
    .case(/.*/,       (x) => x + 's');

const aAn = pep.match()
    .case(/^[aeiou]/, (x) => 'an '+x)
    .case(/.*/, (x) => 'a '+x);

const edIng = pep.match()
    .case(/(.*)ing$/, (_, x) => x + 'ed')
    .case(/(.*)ed$/, (_, x) => x + 'ing');


//set dictionaries for generic lookup values
let myDicts = {
  
  they: pep.dict({ male: 'he', female: 'she',}, 'they'),
  them: pep.dict({ male: 'him', female: 'her',}, 'them'),
  their: pep.dict({ male: 'his', female: 'her',}, 'their'),
  theirs: pep.dict({ male: 'his', female: 'hers',}, 'theirs'),
  
};

//set title and author

let frMat = {
    
  darknessTitle: pep.choice("darkness", "night", "shadows", "depth", 
                            "deep", "twilight", "flame", "fire", "fury"),
  
  intoTitle: pep.choice("into", "towards", "for", "in"),
  
  iTitle: pep.choice("I", "We", "You", "They"),
  
  glowTitle: pep.choice("glow", "grow", "shine", "lurk", "go", "venture", "ride"),
  
  
  authorFirst: pep.choice("James", "John"," Robert", "Michael", "William",
                          "David", "Richard", "Joseph", "Thomas", "Charles",
                          "Christopher", "Daniel", "Matthew", "Anthony", "Donald",
                          "Mark", "Paul", "Steven", "Andrew", "Kenneth",
                          "George", "Joshua", "Kevin", "Brian", "Edward",
                          "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth",
                          "Barbara", "Susan", "Jessica", "Sarah", "Margaret",
                          "Karen", "Nancy", "Lisa", "Betty", "Dorothy",
                          "Sandra", "Ashley", "Kimberly", "Donna", "Emily",
                          "Carol", "Michelle", "Amanda", "Melissa", "Deborah"),
  
  authorMiddle: pep.choice("A.", "B.", "C. ", "D. ", "E. ", "F. ", "G. ",
                           "H. ", "I. ", "J. ", "K. ", "L. ", "M. ", "N. ",
                           "O. ", "P. ", "Q. ", "R. ", "S. ", "T. ", "U. ",
                           "V. ", "W. ", "X. ", "Y. ", "Z. "),
  authorLast: pep.choice("Smith","Johnson","Williams","Jones","Brown",
                          "Davis","Miller","Wilson","Moore","Taylor",
                          "Anderson","Thomas","Jackson","White","Harris",
                          "Martin","Thompson","Garcia","Martinez","Robinson",
                          "Clark","Rodriguez","Lewis","Lee","Walker",
                          "Hall","Allen","Young","Hernandez","King",
                          "Wright","Lopez","Hill","Scott","Green",
                          "Adams","Baker","Gonzalez","Nelson","Carter",
                          "Mitchell","Perez","Roberts","Turner","Phillips",
                          "Campbell","Parker","Evans","Edwards","Collins",
                          "Stewart","Sanchez","Morris","Rogers","Reed",
                          "Cook","Morgan","Bell","Murphy","Bailey",
                          "Rivera","Cooper","Richardson","Cox","Howard",
                          "Ward","Torres","Peterson","Gray","Ramirez",
                          "James","Watson","Brooks","Kelly","Sanders",
                          "Price","Bennett","Wood","Barnes","Ross",
                          "Henderson","Coleman","Jenkins","Perry","Powell",
                          "Long","Patterson","Hughes","Flores","Washington",
                          "Butler","Simmons","Foster","Gonzales","Bryant",
                          "Alexander","Russell","Griffin","Diaz","Hayes",
                          "Myers","Ford","Hamilton","Graham","Sullivan",
                          "Wallace","Woods","Cole","West","Jordan",
                          "Owens","Reynolds","Fisher","Ellis","Harrison",
                          "Gibson","Mcdonald","Cruz","Marshall","Ortiz",
                          "Gomez","Murray","Freeman","Wells","Webb",
                          "Simpson","Stevens","Tucker"),
  
  bookCover: pep.choice("https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-733475.jpeg?1530713663187", 
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-416920.jpeg?1530712948354",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-341114.jpeg?1530716859431",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-417070.jpeg?1530716859688",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fenergy-of-technology-consumption-light-159466.jpeg?1530712948143",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-941419.jpeg?1530716859861",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-735647.jpeg?1530716860178",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fdelicate-arch-night-stars-landscape.jpg?1530713663357",
                        "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-921284.png?1530712948507"
                       )
};



//set simple word choices -- should only be .choice or .weightedChoice
let myChoices = {
  
  must: pep.weightedChoice([[0.5, "must"], [0.25, "have to"], [0.25, "need to"]]),
  
  demonName: pep.choice("Urnuthun", "Tralroloth", "Unorez", "Sinoth", 
                     "Vog'thun", "Bag'thanniud", "Onnoch", "Geglod", 
                        "Toth'tekis", "Anez","Tastraniz","Thol'gith",
                        "Sigrok","Vizreruth","Uzomud","Jurkadal",
                        "Thelgen","Bagoneth","Orkodath","Urkomaud"),

  said: pep.weightedChoice([
    [0.6, "said"], 
    [0.1, "voiced"],
    [0.1, "spoke"],
    [0.1, "pronounced"],
    [0.1, "stated"]]),
  
  gender: pep.choice("male", "female", "enby", "xe"),
  
  bladedWeapon: pep.choice("battle axe", "sword", "scythe", "scimitar", "knife", "dagger"),
  
  impressively: pep.choice("impressively", "intimidating", "extravagantly", 
                           "obnoxiously", "remarkably", "fiercely", "grotesque"),
  
  colors: pep.choice("red", "yellow", "green", "orange", "brown", "amber", "azure"),
  
  shaking: pep.choice("shaking", "trembling", "quivering", "shivering", "convulsing"),
  
  shook: pep.choice("shook", "trembled", "quivered", "shivered"),
  
  fear: pep.choice("fear", "terror", "horror", "dismay", "distress"),
  
  gems: pep.choice("quartz", "ruby", "gold", "silver", "bronze", "diamond", 
                   "emerald", "iron", "platinum"),
  
  stone: pep.choice("stone", "boulder", "wall", "rock"),
  
  shone: pep.choice("shone", "glowed", "shimmered", "exploded", "glinted", 
                    "glistened", "flashed", "gleamed", "glowed", "glittered"),
  
  swept: pep.choice("swept", "swung", "moved", "sailed"),
  
  backAndForth: pep.choice("back and forth", "to and fro", 
                           "from side to side", "from front to back"),
  
  rhythmically: pep.choice("rhythmically", "steadily", "unwaveringly", 
                           "continuously", "continually"),
  
  failDuty: pep.choice(" won't do your duty", " will shirk your duty", 
                       " will fail the family", " will fail us", " will run instead of fight" )
};


//set names and genders and other story constants

//boss
const acName = pep.store('acName', myChoices.demonName); 
const acGender = pep.store('acGender', myChoices.gender);

//main character
const mcName = pep.store('mcName', myChoices.demonName);
const mcGender = pep.store('mcGender', myChoices.gender);


//run choices for paragraph1
let par1 = {
  youMustFight: pep.choice('<p>"You ' + myChoices.must.run() + ' fight." ', 
                           '<p>"I\'m worried that you ' + myChoices.failDuty.run() + '." '),
  acSaid: pep.seq(' ', myChoices.said),
  
  optSharpen: pep.choice('. ', 
                         pep.seq(', sharpening ', aAn(myChoices.impressively), ' large ',
                   myChoices.bladedWeapon,' against ',aAn(myChoices.gems), 
                   '-like ', myChoices.stone, '. ', pep.opt(pep.seq('The sparks ',myChoices.shone, ' ', myChoices.colors, ' as it ', myChoices.swept, ' ',
                   myChoices.backAndForth, ' ', myChoices.rhythmically, '. '))))
};

let myStory = {
  //myName: myChoices.demonName,
  title: pep.choice(pep.seq(frMat.intoTitle,
                                       " the ",frMat.darknessTitle),
                               pep.seq(frMat.intoTitle, " ", 
                                       frMat.darknessTitle, " ", 
                                       frMat.iTitle, " ", frMat.glowTitle)
                   ),
  
  author: pep.seq(frMat.authorFirst, " ", pep.opt(frMat.authorMiddle), frMat.authorLast),
  
  lineOne: pep.seq(par1.youMustFight),  
  lineTwo: pep.seq(par1.acSaid, par1.optSharpen, '</p>',
                   '<p>"I don’t want to." '),
  lineThree: pep.seq(' ', myChoices.said, 
                   '. ', pep.capitalize(myDicts.they(acGender)), ' stood before ', 
                   myDicts.their(acGender), ' master, '),
  lineFour: pep.seq(', naked and unarmed. ',mcName, ' ',
                   pep.choice(pep.str("was " + myChoices.shaking.run() + " with " + myChoices.fear.run()), myChoices.shook), '.  ',
                   '"I want none of this war and the death and destruction it will bring. ',
                   'We are immortal. Why can we not stay that way?"</p>')//,
  
  //lineTwo: pep.seq(acNameDos)
  
};

//console.log(myStory.abstract.run());
console.log(myStory.lineOne.run());
//console.log(myStory.lineTwo.run());

module.exports = {
  mcName: mcName,
  acName: acName,
  
  title: myStory.title,
  author: myStory.author,
  
  lineOne: myStory.lineOne, 
  lineTwo: myStory.lineTwo,
  lineThree: myStory.lineThree,
  lineFour: myStory.lineFour,
  
  bookCover: frMat.bookCover
};
