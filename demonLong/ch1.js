
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var myCon = require('./constants.js');



//'We are introduced to our character\'s sense of pacifism through some sort of interaction with another creature.'



/* ROAD MAP

1. Write the first version of text
2. Import the first version and get it running
3. Add two alternate sentence versions to each sentence -- working on now
4. Add in word variation 

*/



let title = pep.choice("Rosy Recollections", "Childhood", "The Cruel, Cruel World");

//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  
  //p1 
  
  //s1
  
  // “Momma, momma!” C0 cried as they ran from their tormentors. 
  p1as1a: pep.seq('"Momma, momma!" ', myCon.c0, ' ', myPep.dict.cried, ' as ',myPep.pronouns.they(myCon.c0g), ' ', myPep.dict.fled, ' from ', myPep.pronouns.their(myCon.c0g), ' ', myPep.dict.bullies, '. '),
  //"Leave me alone!" C0 shouted as  they fled in terror.
  p1as1b: pep.seq('"Leave me alone!" ', myCon.c0, ' ', myPep.dict.cried, ' as ', myPep.pronouns.they(myCon.c0g), ' ', myPep.dict.fled, ' in terror. '),
  //C0 ran at breakneck speed around the corner and towards the house. 
  p1as1c: pep.seq(myCon.c0, ' ', myPep.dict.fled, ' at ', myPep.dict.breakneck, ' ', myPep.dict.speed, ' around the ', myPep.dict.corner, ' and towards the ', myPep.dict.house, '. '),
  
  //s2
  
  //C2 and C3 chased after them, leaving hastily placed footprints behind them as they ran. 
  p1as2a: pep.seq(myCon.c2, ' and ', myCon.c3, ' ', myPep.dict.chased, ' after ', myPep.pronouns.them(myCon.c0g), ', leaving ', myPep.dict.hastily, ' placed ', myPep.dict.footprints, ' behind them as they ', myPep.dict.chased,'. '),
  //Their tormentors, C2 and C3, were chasing C0 and cackling as they went.
  p1as2b: pep.seq(pep.capitalize(myPep.pronouns.their(myCon.c0g)), ' ', myPep.dict.bullies, ', ', myCon.c2, ' and ', myCon.c3, ', were ',myPep.edIng(myPep.dict.chased),' ', myCon.c0, ' and ', myPep.dict.cackling, ' as they went. '),
  //A team of taller, stronger, faster children were chasing C0 at a supernaturally fast speed. 
  p1as2c: pep.seq('A ', myPep.dict.couple, ' of ', myPep.dict.taller, ', ', myPep.dict.stronger, ', ', myPep.dict.faster, ' ', myPep.dict.juveniles, ' were ', myPep.edIng(myPep.dict.chased), ' ', myCon.c0, ' at a ', myPep.dict.breakneck, ' ', myPep.dict.speed, '. '),
  
  
  //s3
  
  //C0 felt relief wash over them when they say their mother peeking out from behind the kitchen window curtains.
  p1as3a: pep.seq(myCon.c0, ' felt relief wash over ', myPep.pronouns.them(myCon.c0g), ' when ', myPep.pronouns.they(myCon.c0g), ' saw ', myPep.pronouns.their(myCon.c0g), ' mother peeking out from behind the kitchen window curtains. '),
  // C0 spotted their mother inside the window. 
  p1as3b: pep.seq(myCon.c0, ' spotted their mother inside the window. '),
  //Closing the distance to the house, C0 knew relief and safety were close.
  p1as3c: pep.seq('Closing the distance to the ', myPep.dict.house, ', ', myCon.c0, ' knew relief and safety were close. '),
  
  //s4
  
  //C0 scrambled up the front steps to the door and yanked on the handle.
  p1as4a: pep.seq(myCon.c0, ' ', myPep.dict.fled, ' up the front steps to the door and yanked on the handle. '),
  // C0 cleared the front steps on the way to the safety of the door, twisting the knob with ferocity.
  p1as4b: pep.seq(myCon.c0, ' cleared the front steps on the way to the safety of the door, twisting the knob with ferocity. '),
  // C0 grabbed the front door handle and pulled backwards, the sounds of bullies right behind them.
  p1as4c: pep.seq(myCon.c0, ' grabbed the front door handle and pulled backwards, the sounds of ', myPep.dict.bullies, ' right behind ', myPep.pronouns.them(myCon.c0g), '. '),
  
  
  //s5 
  
  //It didn't budge.
  p1as5a: pep.seq('It didn\'t budge. '),
  p1as5b: pep.seq('The door wouldn\'t move. '),
  p1as5c: pep.seq('The door was like iron in ', myPep.pronouns.their(myCon.c0g), ' hands. '),
  
  //p2
  
  //s1
  
    //“Momma!” 
  p2as1a: pep.seq('"Momma!" '),
  //"Are you home, momma?"
  p2as1b: pep.seq('"Are you home, momma?" '),
  //C0 jiggled the door handle again.
  p2as1c: pep.seq(myCon.c0, ' jiggled the door handle again. '),
  
  //s2
  
  //C0’s voice grew desperate.  
  p2as2a: pep.seq(myCon.c0, '\'s voice grew desperate. '),
  //C0's voice shook with fear. 
  p2as2b: pep.seq(myCon.c0, '\'s voice shook with fear. '),
  //The fear in C0's voice was obvious.
  p2as2c: pep.seq('The fear in ', myCon.c0, '\'s voice was obvious. '),
  
  //“Let me in!”
  p2as3a: pep.seq('"Let me in!" '),
  //"Please god."
  p2as3b: pep.seq('"Please ', myPep.dict.gods, '. "'),
  //"Momma..."
  p2as3c: pep.seq('"Momma..." '),
  
  //p3
  
    //“Play with your friends.” 
  p3as1a: pep.seq('"Play with your ', myPep.pluralize(myPep.dict.buddy), '." '),
  // "Don't you be running in here when you\'ve got friends outside."
  p3as1b: pep.seq('"Don\'t you be coming in here when you\'ve got ', myPep.pluralize(myPep.dict.buddy), ' outside." '),
  //"You know the rule. Stay outside until dinner. "
  p3as1c: pep.seq('"You know the rule. Stay outside until dinner." '),
  
  //A dull, flat voice came from behind the door. 
  p3as2a: pep.seq('A dull, flat voice came from behind the door. '),
  //Their mother's trill voice came from the other side.
  p3as2b: pep.seq(pep.capitalize(myPep.pronouns.their(myCon.c0g)),' mother\'s trill voice came from the other side. '),
  //A heartless monotone met C0's struggles
  p3as2c: pep.seq('A ', myPep.dict.heartless, ' monotone met ', myCon.c0, '\'s struggles. '),
  
  //C0 heard the door chain jingle. 
  p3as3a: pep.seq(myCon.c0, ' heard the door chain jingle. '),
  // C0 heard footsteps walking away.
  p3as3b: pep.seq(myCon.c0, ' heard footsteps walking away. '),
  // C0 knew their mother would be no help.
  p3as3c: pep.seq(myCon.c0, ' knew ', myPep.pronouns.their(myCon.c0g), ' mother would be no help. '),
  
  //“And don’t come home until sundown.”
  p3as4a: pep.seq('"And don\'t come home until sundown." '),
  // "I don't want to see you here again until night time."
  p3as4b: pep.seq('"I don\'t want to see you here again until night time." '),
  // "Be gone now, child."
  p3as4c: pep.seq('"Be gone now, child." '),
  
  //p4
  
    //C2 and C3 were upon C0, though the steps were a line in the sand they were not willing to cross. 
  p4as1a: pep.seq(myCon.c2, ' and ', myCon.c3, ' were upon ', myCon.c0, ', though the steps were a line in the sand they were not willing to cross. '),
  // C2 and C3 stood motionless in front of the house.
  p4as1b: pep.seq(myCon.c2, ' and ', myCon.c3, ' stood motionless in front of the house. '),
  //The children raced to the house but stopped short of the porch. 
  p4as1c: pep.seq('The children raced to the ', myPep.dict.house, ' but stopped short of the porch. '),
  
  //They crossed their arms in front of their chests like creepy twins.
  p4as2a: pep.seq('They crossed their arms in front of their chests like creepy twins. '),
  
  // C2/C3 grinned from ear to ear while the other stared, slack-jawed. 
  p4as2b: pep.seq(pep.choice(myCon.c2, myCon.c3),  ' grinned from ear to ear while the other stared, slack-jawed. '),
  // The freakishly tall bullies had patient looks on their faces.
  p4as2c: pep.seq('The freakishly tall ', myPep.dict.bullies, ' had patient looks on their faces. '),
  
  //p5 
  
  //“Come play with us!” 
  p5as1a: pep.seq('"Come play with us!" '),
  //"Come on, it'll only hurt a little." 
  p5as1b: pep.seq('"Come on, it\'ll only hurt a little." '),
  //"There\'s no escape now."
  p5as1c: pep.seq('"There\'s no escape now." '),
  
  //C2 cajoled, no hint of laughter in their voice.
  p5as2a: pep.seq(myCon.c2, ' cajoled, no hint of laughter in ', myPep.pronouns.their(myCon.c2g), ' voice. '),
  // C3 said seriously.
  p5as2b: pep.seq(myCon.c3, ' said seriously. '),
  //Their faces held no sunshine, only murder. 
  p5as2c: pep.seq('Their faces held no sunshine, only murder. '),
  
  //p6
  
  //“No thank you.” 
  p6as1a: pep.seq('"No thank you." '),
  //"I'd rather not."
  p6as1b: pep.seq('"I\'d rather not." '),
  //"Go fuck yourselves."
  p6as1c: pep.seq('"Go fuck yourselves." '),  
  
  //C0 said firmly, and leaned against their front door for support. 
  p6as2a: pep.seq(myCon.c0, ' said firmly, and leaned against ', myPep.pronouns.their(myCon.c0g), ' front door for support. '),
  // Their voice shook as they spoke.
  p6as2b: pep.seq(pep.capitalize(myPep.pronouns.their(myCon.c0g)), ' voice shook as ', myPep.pronouns.they(myCon.c0g), ' spoke. '),
  // It came as a whisper from C0's mouth.
  p6as2c: pep.seq('It came as a whisper from ', myCon.c0, '\'s mouth. '),  
  
  //“I’d like to play by myself for a while.” 
  p6as3a: pep.seq('"I\'d like to play by myself for a while." '),
  // "You need to leave."
  p6as3b: pep.seq('"You need to leave." '),
  // "Please go away. I don't want to play your stupid game."
  p6as3c: pep.seq('"Please go away. I don\'t want to play your stupid game." '),  
  
  //The three passed a long moment in silence, no one budging from their spot.
  p6as4a: pep.seq('The three passed a long moment in silence, no one budging from their spot. '),
  // It seemed that they were at a standstill.
  p6as4b: pep.seq('It seemed that they were at a standstill. '),
  // No one moved.
  p6as4c: pep.seq('No one moved. '),  
  
  
  //p7
  
  //“We’ll wait, then.” 
  p7as1a: pep.seq('"We\'ll wait, then." '),
  // "No worries. We\'ll be here." 
  p7as1b: pep.seq('"No worries. We\'ll be here." '),
  // "It\'ll be fun."
  p7as1c: pep.seq('"It\'ll be fun." '),  
  
  //C2 said, and together, they strode to the scraggly elm in the front yard. 
  p7as2a: pep.seq(myCon.c2, ' said, and together, they strode to the scraggly elm in the front yard. '),
  // C2 and C3 walked towards the shrubbery near the house.
  p7as2b: pep.seq(myCon.c2, ' and ', myCon.c3, ' walked towards the shrubbery near the ', myPep.dict.house, '. '),
  // The children backed away from the porch, taking up space near the ornamental tree out front. 
  p7as2c: pep.seq('The children backed away from the porch, taking up space near the ornamental tree out front. '),  
  
  //It gave no shade, but they were not there for the shade. 
  p7as3a: pep.seq('It gave no shade, but they were not there for the shade. '),
  // Even the greenery seemed cowed by their presence. 
  p7as3b: pep.seq('Even the greenery seemed cowed by their presence. '),
  // C0 breathed a sigh of relief.
  p7as3c: pep.seq(myCon.c0, ' breathed a sigh of relief. '),  
  
  //They sat down in front of the elm, and C3 produced a ball from their left pocket.  
  p7as4a: pep.seq('They sat down in front of the elm, and ', myCon.c3 ,' produced a ball from their left pocket. '),
  // Taking a seat, c2 began drawing a gruesome picture in the dirt.
  p7as4b: pep.seq('Taking a seat, ', myCon.c2, ' began drawing a gruesome picture in the dirt. '),
  // They settled in the dirt by the trees. 
  p7as4c: pep.seq('They settled in the dirt by the trees. '),  
  
  //They began to play ball, as if it was the most natural thing in the world.
  p7as5a: pep.seq('They began to play ball, as if it was the most natural thing in the world. '),
  // C3 idly threw a ball up in the air and caught it with their eyes closed.
  p7as5b: pep.seq(myCon.c3, ' idly threw a ball up in the air and caught it with ', myPep.pronouns.their(myCon.c3g), ' eyes closed. '),
  // C2 giggled with anticipation.
  p7as5c: pep.seq(myCon.c2, ' giggled with anticipation. '),  
  
  //As if three minutes ago, they had not just tried to beat C0 into a pulp.
  p7as6a: pep.seq('As if three minutes ago, they had not just tried to beat ', myCon.c0, ' into a pulp. '),
  // They seemed wholly unconcerned with C0, but c0 was not fooled.
  p7as6b: pep.seq('They seemed wholly unconcerned with ', myCon.c0, ', but ', myCon.c0, ' was not fooled. '),
  //It was as if nothing had happened. 
  p7as6c: pep.seq('It was as if nothing had happened. '),  
  
  
  //p8
  
  //Not knowing what else to do, C0 sat on the front porch, back against the door, and cried.
  p8as1a: pep.seq(pep.opt('Not knowing what else to do, ') ,myCon.c0, ' sat on the front porch, back against the door, and cried.'),
  // C0 wondered if a day would ever go without being harrassed by the neighbor kids.
  p8as1b: pep.seq(myCon.c0, ' wondered if a day would ever go without being harrassed by the neighbor kids. '),
  // C0 stifled back tears as they took a seat to wait for sunset.
  p8as1c: pep.seq(myCon.c0, ' stifled back tears as ', myPep.pronouns.they(myCon.c0), ' took a seat to wait for sunset. '),  
  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a, aText.p1as1b, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a, aText.p1as2b, aText.p1as2c),
  p1as3: pep.choice(aText.p1as3a, aText.p1as3b, aText.p1as3c),
  p1as4: pep.choice(aText.p1as4a, aText.p1as4b, aText.p1as4c),
  p1as5: pep.choice(aText.p1as5a, aText.p1as5b, aText.p1as5c),
  
  p2as1: pep.choice(aText.p2as1a, aText.p2as1b, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a, aText.p2as2b, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a, aText.p2as3b, aText.p2as3c),
   
  
  p3as1: pep.choice(aText.p3as1a, aText.p3as1b, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a, aText.p3as2b, aText.p3as2c),
  p3as3: pep.choice(aText.p3as3a, aText.p3as3b, aText.p3as3c),
  p3as4: pep.choice(aText.p3as4a, aText.p3as4b, aText.p3as4c),
  
  p4as1: pep.choice(aText.p4as1a, aText.p4as1b, aText.p4as1c),
  p4as2: pep.choice(aText.p4as2a, aText.p4as2b, aText.p4as2c),
  
  p5as1: pep.choice(aText.p5as1a, aText.p5as1b, aText.p5as1c), 
  p5as2: pep.choice(aText.p5as2a, aText.p5as2b, aText.p5as2c),
  
  p6as1: pep.choice(aText.p6as1a, aText.p6as1b, aText.p6as1c),
  p6as2: pep.choice(aText.p6as2a, aText.p6as2b, aText.p6as2c),
  p6as3: pep.choice(aText.p6as3a, aText.p6as3b, aText.p6as3c),
  p6as4: pep.choice(aText.p6as4a, aText.p6as4b, aText.p6as4c),

  p7as1: pep.choice(aText.p7as1a, aText.p7as1b, aText.p7as1c),
  p7as2: pep.choice(aText.p7as2a, aText.p7as2b, aText.p7as2c),
  p7as3: pep.choice(aText.p7as3a, aText.p7as3b, aText.p7as3c),
  p7as4: pep.choice(aText.p7as4a, aText.p7as4b, aText.p7as4c),
  p7as5: pep.choice(aText.p7as5a, aText.p7as5b, aText.p7as5c),
  p7as6: pep.choice(aText.p7as6a, aText.p7as6b, aText.p7as6c),

  p8as1: pep.choice(aText.p8as1a, aText.p8as1b, aText.p8as1c),
  
};



let abstract = pep.seq(myPep.html.p('o'),
                       
myPep.html.i('o'), 
          aPar.p1as1, aPar.p1as2, aPar.p1as3 ,aPar.p1as4, aPar.p1as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p2as1, aPar.p2as2, aPar.p2as3, 

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p3as1, aPar.p3as2, aPar.p3as3, aPar.p3as4,

                      myPep.html.p('c'), myPep.html.p('o'),

aPar.p4as1, aPar.p4as2, 
                       
                       myPep.html.p('c'), myPep.html.p('o'),
                       
aPar.p5as1, aPar.p5as2,
                       
                       myPep.html.p('c'), myPep.html.p('o'),
                       
aPar.p6as1, aPar.p6as2, aPar.p6as3, aPar.p6as4,

                       myPep.html.p('c'), myPep.html.p('o'),
                       
aPar.p7as1, aPar.p7as2, aPar.p7as3, aPar.p7as4, aPar.p7as5, aPar.p7as6,

                       myPep.html.p('c'), myPep.html.p('o'),
                       
aPar.p8as1,
                       
myPep.html.i('c'), 
                       myPep.html.p('c'), 

);

module.exports = {
  text: abstract,
  title: title,
  
};