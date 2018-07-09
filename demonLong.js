//load our library and append the special needed ones
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./my-apep-fxns.js');
 

//define chapter titles
let ch1t = 'ch1 title';
let ch2t = 'ch2 title';
let ch3t = 'ch3 title';
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

//define constant title and author
let title = pep.store('title', pep.choice(pep.seq(myPep.frMat.intoTitle,
                                  " the ",myPep.frMat.darknessTitle),
                       pep.seq(myPep.frMat.intoTitle, " ", 
                               myPep.frMat.darknessTitle, " ", 
                               myPep.frMat.iTitle, " ", myPep.frMat.glowTitle)
                   ));

let author = pep.store('author', pep.seq(myPep.frMat.authorFirst, " ", 
                     pep.opt(pep.many1(myPep.frMat.authorMiddle, 0.3)), 
                     myPep.frMat.authorLast));

//choose the setting
let setVar = pep.store('setVar', pep.choice('e', 'f', 'h'));


//Define constant names and genders -- c0 is always the main character



//dictionary wouldn't work, have to do it this way.
var nameFn;
if(setVar == 'e'){
  nameFn = myPep.frMat.elfName;
}
else if(setVar == 'f'){
  nameFn = myPep.frMat.feyName;
}else{
  nameFn = myPep.frMat.demonName;
};

const c0 = pep.store('c0', nameFn); 
const c0g = pep.store('c0g', myPep.gender);
//archenemy
const c1 = pep.store('c1', nameFn);
const c1g = pep.store('c1g', myPep.gender);




//define looping chapters

let limitsClusterNoLearn = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch4t,
                         myPep.html.div('h1c'), 
                                'This section will appear at least once, but may appear multiple time. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. No lessons are learned in this section.', 
                         myPep.html.btt,myPep.html.div('c2'),), 0.45);

let limitsClusterStLearn = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch5t,
                         myPep.html.div('h1c'),   
                                'This section will appear at least once, but may appear multiple time. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. The main character begins to figure out that they are causing the next-day chaos by interacting with mortals. The main character may also feel guilt about being chased.',
                         myPep.html.btt,myPep.html.div('c2'),), 0.45);

let portalCluster = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch11t,
                         myPep.html.div('h1c'), 
                                'This section will appear at least once, but will probably appear multiple times. In it, our main character and their comrade will convince and/or shove other exiles through portals in order to destroy them. There may be varying levels of guilt or aftermath associated with these modules, but always a persistence to do it again.', 
                         myPep.html.btt,myPep.html.div('c2'),), 0.65);


//define title and author



//define chapters


//abstract
//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  p1as1a: pep.seq(pep.capitalize(myPep.dict.across), ' ',myPep.dict.depths, ' ', myPep.setting.realm(setVar), ', trouble is ',myPep.dict.stirring, '. '),
  p1as2a: pep.seq(c1, ' is raising an army to overthrow the ',myPep.setting.boss(setVar), ' and gain the freedom to visit the mortal realm. '),
  p1as3a: pep.seq('But for every three ',myPep.setting.brethrens(setVar), ' for the proposal, there is one who is not so sure that they should leave the safety of ',myPep.setting.realm(setVar), '. '),
p1as4a: pep.seq('After all, here, the gods leave them be -- but that could change if an all out war starts.'),
  
  
  p2as1a: pep.seq('With civil war is brewing in the ', myPep.setting.brethren(setVar), ' world, ', c0, ' is faced with a choice. '),
  p2as2a: pep.seq('Abandon ', myPep.pronouns.their(c0g), ' ideals of pacifism and face the horrors of war, or be imprisoned or killed for choosing not to fight. '),
  p2as3a: pep.seq('One day, however, ', myPep.pronouns.they(c0g), ' discover', myPep.verbS(c0g), ' a third option. '),
  p2as4a: pep.seq('During a skirmish, someone has left one of the closely guarded mortal portals open. '),
  p2as5a: pep.seq('Seizing upon ', myPep.pronouns.their(c0g), ' chance, ', myPep.pronouns.they(c0g), ' escape', myPep.verbS(c0g), ' into the mortal world to begin life anew. '
                 ),
  
  p3as1a: pep.seq('Yet, every time ', myPep.pronouns.they(c0g), ' interact', myPep.verbS(c0g), ' with mankind, chaos follows. '),
  p3as2a: pep.seq('Will ', myPep.pronouns.they(c0g), ' find a way to adapt to ', myPep.pronouns.their(c0g), ' new life without causing mass war, famine, or illness? '),
  p3as3a: pep.seq('Will ', myPep.pronouns.they(c0g), ' find a way to end the ',myPep.setting.brethren(setVar), ' war and prevent the collapse of humanity? '),
  p3as4a: pep.seq('Or will the ',myPep.setting.brethrens(setVar), ' hunting ', c0, ' find and drag ', myPep.pronouns.them(c0g), ' back to ',myPep.setting.realm(setVar), '? '),
  
  p4as1a: pep.seq('Join the author as they explore the collision of toxic nationalism and pacifism in a world where the wrong choice means eternal torment. '),
  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a),
  p1as2: pep.choice(aText.p1as2a),
  p1as3: pep.choice(aText.p1as3a),
  p1as4: pep.choice(aText.p1as4a),
  
  p2as1: pep.choice(aText.p2as1a),
  p2as2: pep.choice(aText.p2as2a),
  p2as3: pep.choice(aText.p2as3a),
  p2as4: pep.choice(aText.p2as4a),
  p2as5: pep.choice(aText.p2as5a),
  
  p3as1: pep.choice(aText.p3as1a),
  p3as2: pep.choice(aText.p3as2a),
  p3as3: pep.choice(aText.p3as3a),
  p3as4: pep.choice(aText.p3as4a),
  
  p4as1: pep.choice(aText.p4as1a),

  
};



let abstract = pep.seq(myPep.html.p('o'), myPep.html.i('o'),
                       
aPar.p1as1, aPar.p1as2, aPar.p1as3 ,aPar.p1as4,
                       
                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p2as1, aPar.p2as2, aPar.p2as3, aPar.p2as4, aPar.p2as5,

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p3as1, aPar.p3as2, aPar.p3as3, aPar.p3as4,

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p4as1,


                       myPep.html.i('c'),myPep.html.p('c'), myPep.html.btt,

);



let finalStory = pep.seq(
                         myPep.html.div('oCh'),
                               abstract, 
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch1t,
                         myPep.html.div('h1c'), 
                                'We are introduced to our character\'s sense of pacifism through some sort of interaction with another creature.', 
                         myPep.html.btt,myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch2t,
                         myPep.html.div('h1c'),   
                                'Our main character struggles to name and stand strong for their pacifism in the face of growing tensions. Our character is told to \'do or die\' in terms of joining the fight. They are left unsettled and looking for a way out.', 
                         myPep.html.btt,myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch3t,
                         myPep.html.div('h1c'), 
                                'Our main character is presented with an opportunity to escape the realm that they\'re currently in and move onto the mortal realm. They take the opportunity and walk through the magic portal. Some of the portal lore may be introduced in this section. Supporting and/or recurring characters may also appear as helpers in this section.', 
                         myPep.html.btt,myPep.html.div('c2'),
                               limitsClusterNoLearn,
                               limitsClusterStLearn,
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch6t,
                         myPep.html.div('h1c'), 
                                'This section will appear at least once, but may appear multiple time. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. The main character either agrees to go willingly or is captured and dragged back to their home realm.',
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

//let title = 'my title';
//let author = 'my author';

module.exports = {
  bookCover: myPep.frMat.bookCover,
  title: title,
  author: author,
  finalStory: finalStory,
};
