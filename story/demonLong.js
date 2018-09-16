//load our library and append the special needed ones
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');

//include constants and story content
var myCon = require('./fxns/constants.js');
var myA = require('./abstract.js');
var myCh1 = require('./ch1.js');
var myCh2 = require('./ch2.js');
var myCh3 = require('./ch3.js');
var myCh4 = require('./ch4.js');

 

//define chapter titles
let ch4t = 'ch4 title';
let ch5t = 'ch5 title';
let ch6t = 'ch6 title';
let ch7t = 'ch7 title';
let ch8t = 'ch8 title';
let ch9t = 'ch9 title';
let ch10t = 'ch10 title';
let ch11t = 'ch11 title';
let ch12t = 'ch12 title'; 
let ch13t = 'ch13 title';
let ch14t = 'ch14 title';
let ch15t = 'ch15 title';




//define looping chapters

let limitsClusterNoLearn = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               myCh4.title,
                         myPep.html.div('h1c'), 
                                myCh4.text, 
                         myPep.html.btt,myPep.html.div('c2'),), 0.45);

let limitsClusterStLearn = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch5t,
                         myPep.html.div('h1c'),   
                                'This section will appear at least once, but may appear multiple times. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. The main character begins to figure out that they are causing the next-day chaos by interacting with mortals. The main character may also feel guilt about being chased.',
                         myPep.html.btt,myPep.html.div('c2'),), 0.45);

let portalCluster = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch11t,
                         myPep.html.div('h1c'), 
                                'This section will appear at least once, but will probably appear multiple times. In it, our main character and their comrade will convince and/or shove other exiles through portals in order to destroy them. There may be varying levels of guilt or aftermath associated with these modules, but always a persistence to do it again.', 
                         myPep.html.btt,myPep.html.div('c2'),), 0.65);




//define chapters


let finalStory = pep.seq(myPep.html.div('row'), 
                         myPep.html.div('oCov'), myPep.frMat.bookCover, myPep.html.div('oCovC'), 
                         myCon.title, 
                         myPep.html.div('h1c'), myPep.html.div('oCovA'), 
                         myCon.author, 
                         myPep.html.div('h1c'), myPep.html.div('c2'),
  
                         myPep.html.div('oCh'),
                               myA.abstract, 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               myCh1.title,
                         myPep.html.div('h1c'), 
                                myCh1.text, 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               myCh2.title,
                         myPep.html.div('h1c'),   
                                myCh2.text, 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               myCh3.title,
                         myPep.html.div('h1c'), 
                                myCh3.text, 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         //ch4 repeater
                         
                         pep.many1(pep.seq(
                            myPep.html.div('oCh'),
                            myPep.html.div('h1'),
                                myCh4.title,
                            myPep.html.div('h1c'), 
                                myCh4.text, 
                            myPep.html.btt,myPep.html.div('c2'),
                         ), 0.45),
                         
                         //ch5
                               limitsClusterStLearn,
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch6t,
                         myPep.html.div('h1c'), 
                                'This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. The main character either agrees to go willingly or is captured and dragged back to their home realm.',
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch7t,
                         myPep.html.div('h1c'), 
                                'Our main character is tried for treason and found guilty. However, instead of being put to death, our main character is merely banished back to the mortal realm, because they are fully aware that they cannot interact with mortals without it causing them harm -- therefore, it is a form of subtle torture. On their way out, they are somehow informed that other exiles exist, and they may or may not receive instructions for finding them.',
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch8t,
                         myPep.html.div('h1c'), 
                                'Our main character goes through a melancholy phase where they vow to never interact with anyone or thing again. However, from a distance, they observe some sort of happy-human-thing that gives them pause and makes them re-evaluate their choice. In doing so, they decide to seek out the exiles and figure out if there\'s something they can do to help the humans before war spills over or the fellow creatures come and cause havoc.',
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch9t,
                         myPep.html.div('h1c'), 
                                'In meeting with the exiles, our main character realizes that most of them are trash and are responsible for random, terrible things happening to humans in the area. Our main character may or may not announce their plan, but on their way out, they meet another pacifist exile -- or one who used to be violent but is sick of it. This person becomes their friend and agrees to help them in their quest.', 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch10t,
                         myPep.html.div('h1c'), 
                                'In this chapter, our main character develops their idea to close the portals, either with or without their new comrade. This is the part where lore is introduced, mainly that exiled creatures cannot pass through the portals because both they and the portal will be destroyed. Our main character decides to find the suicidal exiles or the terrible ones and either convince or force them to jump through the portals to destroy them.', 
                         myPep.html.btt,myPep.html.div('c2'),                         
                      
                         portalCluster,
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch12t,
                         myPep.html.div('h1c'), 
                                'In this chapter, our main character and their comrade attempt to cajole and/or force the final demon through the portal, but they fail in some fashion. They are left wondering what to do.', 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch13t,
                         myPep.html.div('h1c'), 
                                'In this chapter, either the main character or the comrade will choose to go through the portal themselves, sealing off access between the realms permanently. The other will mourn the loss. Who knows. They may go together. ', 
                         myPep.html.btt,myPep.html.div('c2'),
                         
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch14t,
                         myPep.html.div('h1c'), 
                                'This is a happily ever after sort of epilogue. It could take a thousand different forms, and could be based on a surviving / dead variable set or just random endings. ',
                        myPep.html.btt,myPep.html.div('c2'), 
                         );

module.exports = {
  bookCover: myPep.frMat.bookCover,
  //title: myCon.title,
  //author: myCon.author,
  finalStory: finalStory,
};
