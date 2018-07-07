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



//Define constant names and genders -- c0 is always the main character
const c0 = pep.store('c0', myPep.frMat.demonName); 
const c0g = pep.store('c0g', myPep.gender);
//archenemy
const c1 = pep.store('c1', myPep.frMat.demonName);
const c1g = pep.store('c1g', myPep.gender);




//define looping chapters

let limitsClusterNoLearn = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch4t,
                         myPep.html.div('h1c'), 
                                'This section will appear at least once, but may appear multiple time. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. No lessons are learned in this section.', 
                         myPep.html.div('c2'),), 0.45);
let limitsClusterStLearn = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch5t,
                         myPep.html.div('h1c'),   
                                'his section will appear at least once, but may appear multiple time. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. The main character begins to figure out that they are causing the next-day chaos by interacting with mortals. The main character may also feel guilt about being chased.',
                         myPep.html.div('c2'),), 0.45);

let portalCluster = pep.many1(pep.seq(myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch11t,
                         myPep.html.div('h1c'), 
                                'portals arc many1', 
                         myPep.html.div('c2'),), 0.65);


//define title and author



//define chapters

let abstract = pep.seq(myPep.html.p('o'), myPep.html.i('o'),
'Across the depths of Hell, troubles are stirring. ', c1, ' is raising an army to overthrow the overlord and gain the freedom to visit the mortal realm. But for every three demons for the proposal, there is one who is not so sure that they should leave the safety of Hell. After all, here, the gods leave them be -- but that could change if an all out war starts.',
                       
                       myPep.html.p('c'), myPep.html.p('o'),

'With civil war is brewing in the demon world, ', c0, ' is faced with a choice. Abandon ', myPep.pronouns.their(c0g), ' ideals of pacifism and face the horrors of war, or be imprisoned or killed for choosing not to fight. One day, however, ', myPep.pronouns.they(c0g), ' discover a third option. During a skirmish, someone has left one of the closely guarded mortal portals open. Seizing upon ', myPep.pronouns.their(c0g), ' chance, ', myPep.pronouns.they(c0g), ' escape into the mortal world to begin life anew. ',

                       myPep.html.p('c'), myPep.html.p('o'),

'Yet, every time ', myPep.pronouns.they(c0g), ' try to connect with mankind, chaos follows. Will ', myPep.pronouns.they(c0g), ' find a way to adapt to their new life without causing mass war, famine, or illness? Will ', myPep.pronouns.they(c0g), ' find a way to end the demon war and prevent the collapse of humanity? Or will the demons hunting ', c0, ' find and drag ', myPep.pronouns.them(c0g), ' back to Hell? ',

                       myPep.html.p('c'), myPep.html.p('o'),

'Join the author as they explore the collision of toxic nationalism and pacifism in a world where the wrong choice means eternal torment. ',


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
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch2t,
                         myPep.html.div('h1c'),   
                                'Our main character struggles to name and stand strong for their pacifism in the face of growing tensions. Our character is told to \'do or die\' in terms of joining the fight. They are left unsettled and looking for a way out.', 
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch3t,
                         myPep.html.div('h1c'), 
                                'Our main character is presented with an opportunity to escape the realm that they\'re currently in and move onto the mortal realm. They take the opportunity and walk through the magic portal. Some of the portal lore may be introduced in this section. Supporting and/or recurring characters may also appear as helpers in this section.', 
                         myPep.html.div('c2'),
                               limitsClusterNoLearn,
                               limitsClusterStLearn,
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch6t,
                         myPep.html.div('h1c'), 
                                'This section will appear at least once, but may appear multiple time. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. The main character either agrees to go willingly or is captured and dragged back to their home realm.',
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch7t,
                         myPep.html.div('h1c'), 
                                'Our main character is tried for treason and found guilty. However, instead of being put to death, our main character is merely banished back to the mortal realm, because they are fully aware that they cannot interact with mortals without it causing them harm -- therefore, it is a form of subtle torture. On their way out, they are somehow informed that other exiles exist, and they may or may not receive instructions for finding them.',
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch8t,
                         myPep.html.div('h1c'), 
                                'Our main character goes through a melancholy phase where they vow to never interact with anyone or thing again. However, from a distance, they observe some sort of happy-human-thing that gives them pause and makes them re-evaluate their choice. In doing so, they decide to seek out the exiles and figure out if there\'s something they can do to help the humans before war spills over or the fellow creatures come and cause havoc.',
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch9t,
                         myPep.html.div('h1c'), 
                                'In meeting with the exiles, our main character realizes that most of them are trash and are responsible for random, terrible things happening to humans in the area. Our main character may or may not announce their plan, but on their way out, they meet another pacifist exile -- or one who used to be violent but is sick of it. This person becomes their friend and agrees to help them in their quest.', 
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch10t,
                         myPep.html.div('h1c'), 
                                'plotting', 
                         myPep.html.div('c2'),
                         portalCluster,
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch12t,
                         myPep.html.div('h1c'), 
                                'portals arc failure', 
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch13t,
                         myPep.html.div('h1c'), 
                                'self sacrifice', 
                         myPep.html.div('c2'),
                         myPep.html.div('oCh'),
                         myPep.html.div('h1'),
                               ch14t,
                         myPep.html.div('h1c'), 
                                'epilogue',
                        myPep.html.div('c2'), 
                         );

//let title = 'my title';
//let author = 'my author';

module.exports = {
  bookCover: myPep.frMat.bookCover,
  title: title,
  author: author,
  finalStory: finalStory,
};
