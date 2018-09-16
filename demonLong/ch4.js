
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var fixed = require('./constants.js');

//This section will appear at least once, but may appear multiple times. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. No lessons are learned in this section.

//could be expanded more
let title = pep.choice("Chaos", "Blood Colored Glasses", "Mayhem and Murder");

//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
//p1
p1as1a: pep.seq('The sun was uncomfortably warm against ', fixed.c0, '\'s skin as ', myPep.pronouns.they(fixed.c0g), ' sat on a hot park bench, squinting in the brightness. '),
p1as1b: pep.seq(),
p1as1c: pep.seq(),

p1as2a: pep.seq('The air was buzzing with life around ', myPep.pronouns.them(fixed.c0g), ', full of cicadas whining and birds singing. '),
p1as2b: pep.seq(),
p1as2c: pep.seq(),

p1as3a: pep.seq('It was so unlike home, where the dull light was ever present. '),
p1as3b: pep.seq(),
p1as3c: pep.seq(),
  
p1as4a: pep.seq('Being here was like living in three dimensions for the first time. '),
p1as4b: pep.seq(),
p1as4c: pep.seq(),

//p2
p2as1a: pep.seq('Across the path, there were children playing on brightly colored metal swing sets under their parents\' watchful eyes. '),
p2as1b: pep.seq(),
p2as1c: pep.seq(),

p2as2a: pep.seq('Suddenly, ', fixed.c0, ' longed for a family of ', myPep.pronouns.their(fixed.c0g), ' own. '),
p2as2b: pep.seq(),
p2as2c: pep.seq(),

p2as3a: pep.seq(fixed.c0, '\'s parents were older and had never really made ', myPep.pronouns.them(fixed.c0g), ' feel wanted as a child, but these children, in contrast, seemed so happy. '),
p2as3b: pep.seq(),
p2as3c: pep.seq(),

p2as4a: pep.seq('They were giggling away as if they didn\'t have a care in the world. '),
p2as4b: pep.seq(),
p2as4c: pep.seq(),

  //p3
p3as1a: pep.seq('Along the path waddled a short and plump brown, white, and black patchy dog, well beyond its ideal body shape. '),
p3as1b: pep.seq(),
p3as1c: pep.seq(),

p3as2a: pep.seq('It was attached by the neck to a blue rope that was held by a human with many of the same characteristics. '),
p3as2b: pep.seq(),
p3as2c: pep.seq(),
  
  //p4
  
p4as1a: pep.seq('"Hey, how\'s it going?" '),
p4as1b: pep.seq(),
p4as1c: pep.seq(),

p4as2a: pep.seq('The human muffed at ', fixed.c0, ' as it passed by. '),
p4as2b: pep.seq(),
p4as2c: pep.seq(),

  //p5
p5as1a: pep.seq('"Great, thanks!" '),
p5as1b: pep.seq(),
p5as1c: pep.seq(),

p5as2a: pep.seq(fixed.c0, ' said. '),
p5as2b: pep.seq(),
p5as2c: pep.seq(),

p5as3a: pep.seq('The human seemed to wince at ', fixed.c0, '\'s words, and walked a little faster. '),
p5as3b: pep.seq(),
p5as3c: pep.seq(),

p5as4a: pep.seq(fixed.c0, ' frowned. '),
p5as4b: pep.seq(),
p5as4c: pep.seq(),

p5as5a: pep.seq('People were sure rude up here. '),
p5as5b: pep.seq(),
p5as5c: pep.seq(),
 
  //p6
p6as1a: pep.seq('The minutes passed and ', fixed.c0, ' tried ', myPep.pronouns.their(fixed.c0g), ' hardest to forget about what had just had happened in ', myPep.setting.realm(fixed.setVar), '. '),
p6as1b: pep.seq(),
p6as1c: pep.seq(),

p6as2a: pep.seq(pep.capitalize(myPep.pronouns.they(fixed.c0g)), ' had no choice after becoming trapped. '),
p6as2b: pep.seq(),
p6as2c: pep.seq(),

p6as3a: pep.seq('The punishment would\'ve been death or exile anyway -- and ', myPep.pronouns.they(fixed.c0g), ' preferred exile. '),
p6as3b: pep.seq(),
p6as3c: pep.seq(),


  //p7
p7as1a: pep.seq('In the distance, ', fixed.c0, ' heard the sounds of distress. '),
p7as1b: pep.seq(),
p7as1c: pep.seq(),

p7as2a: pep.seq('An ear-piercing scream cut across the park and straight into ', fixed.c0, '\'s heart. '),
p7as2b: pep.seq(),
p7as2c: pep.seq(),

p7as3a: pep.seq('What in god\'s name was happening? '),
p7as3b: pep.seq(),
p7as3c: pep.seq(),

p7as4a: pep.seq('Earth was supposed to be a fun and gentle place. '),
p7as4b: pep.seq(),
p7as4c: pep.seq(),
  
  

  // p8
p8as1a: pep.seq(fixed.c0, ' rose from ', myPep.pronouns.their(fixed.c0g), ' resting place and walked past the parents who were hurriedly gathering their children to move away from the potential danger. '),
p8as1b: pep.seq(),
p8as1c: pep.seq(),

p8as2a: pep.seq('The screams were still going, but they were shorter now, punctuated by the screamer\'s inhale. '),
p8as2b: pep.seq(),
p8as2c: pep.seq(),
  
p8as3a: pep.seq('Why would someone be screaming this much? '),
p8as3b: pep.seq(),
p8as3c: pep.seq(),

p8as4a: pep.seq('Was it some sort of weird human ritual? '),
p8as4b: pep.seq(),
p8as4c: pep.seq(),

  //p9
p9as1a: pep.seq('Cresting the hill in front of ', myPep.pronouns.them(fixed.c0g), ', ', fixed.c0, ' saw pure and unfiltered chaos on the edge of the park. '),
p9as1b: pep.seq(''),
p9as1c: pep.seq(''),

p9as2a: pep.seq('An almond brown smear spread across the earth beneath a mangled mess of bone, sinew, and meat. '),
p9as2b: pep.seq(''),
p9as2c: pep.seq(''),

p9as3a: pep.seq('It looked like something straight out of one of those pirated cult classic horror films that ', fixed.c0, '\'s parents had brought home from the mortal realm. '),
p9as3b: pep.seq(''),
p9as3c: pep.seq(''),

p9as4a: pep.seq('Is this what mortals did for fun? '),
p9as4b: pep.seq(),
p9as4c: pep.seq(),

  //p10
p10as1a: pep.seq('Above the sinewy mess was the plump, middle-aged human with round-rimmed glasses from before. '),
p10as1b: pep.seq(''),
p10as1c: pep.seq(''),

p10as2a: pep.seq('He was cackling maniacally above the mess, and there were no other humans in sight. '),
p10as2b: pep.seq(''),
p10as2c: pep.seq(''),

p10as3a: pep.seq('Off in the distance, a siren wailed. '),
p10as3b: pep.seq(''),
p10as3c: pep.seq(''),
  
p10as4a: pep.seq('Unsure of what to do, ', fixed.c0, ' stood there for a while, trying to piece things together. '),
p10as4b: pep.seq(),
p10as4c: pep.seq(),

p10as5a: pep.seq(pep.capitalize(myPep.pronouns.they(fixed.c0)), ' noticed the rope from earlier descending from the feet of the human and into the gory mess. '),
p10as5b: pep.seq(),
p10as5c: pep.seq(),
  
p10as6a: pep.seq(fixed.c0, ' realized with a start that the body was the human\'s plump, happy, stupid little mutt from not 10 minutes ago. '),
p10as6b: pep.seq(),
p10as6c: pep.seq(),

  //p11
p11as1a: pep.seq('How does a human even inflict that much damage? '),
p11as1b: pep.seq(''),
p11as1c: pep.seq(''),

p11as2a: pep.seq(fixed.c0, ' wondered as the sirens grew louder and louder. '),
p11as2b: pep.seq(''),
p11as2c: pep.seq(''),

p11as3a: pep.seq('The first flashing bright lights appeared on the roadway next to the park. '),
p11as3b: pep.seq(''),
p11as3c: pep.seq(''),

p11as4a: pep.seq('The white police vehicle\'s doors shot open and humans got out, weapons pointed at the man attached to the mangled mess in the park. '),
p11as4b: pep.seq(''),
p11as4c: pep.seq(''),

//p12
p12as1a: pep.seq('"Hands up!" '),
p12as1b: pep.seq(''),
p12as1c: pep.seq(''),

p12as2a: pep.seq('He heard the cops shout, but the human just kept... laughing. '),
p12as2b: pep.seq(''),
p12as2c: pep.seq(''),

p12as3a: pep.seq('He did move his hands, however. '),
p12as3b: pep.seq(''),
p12as3c: pep.seq(''),

p12as4a: pep.seq('He moved the hand that was still attached to the leash, grabbing it and pulled it towards him. '),
p12as4b: pep.seq(''),
p12as4c: pep.seq(''),

p12as5a: pep.seq('The lump of meat and flesh moved awkwardly along the grass, leaving a smear of blood behind it, as the man giggled uncontrollably. '),
p12as5b: pep.seq(''),
p12as5c: pep.seq(''),

p12as6a: pep.seq('Shots rang out. '),
p12as6b: pep.seq(),
p12as6c: pep.seq(),
  
  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a),//, aText.p1as1b, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a),//, aText.p1as2b, aText.p1as2c),
  p1as3: pep.choice(aText.p1as3a),//, aText.p1as3b, aText.p1as3c),
  p1as4: pep.choice(aText.p1as4a),//, aText.p1as4b, aText.p1as4c),
  
  p2as1: pep.choice(aText.p2as1a),//, aText.p2as1b, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a),//, aText.p2as2b, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a),//, aText.p2as3b, aText.p2as3c),
  p2as4: pep.choice(aText.p2as4a),//, aText.p2as4b, aText.p2as4c),
  
  p3as1: pep.choice(aText.p3as1a),//, aText.p3as1b, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a),//, aText.p3as2b, aText.p3as2c),

  p4as1: pep.choice(aText.p4as1a),//, aText.p4as1b, aText.p4as1c),
  p4as2: pep.choice(aText.p4as2a),//, aText.p4as2b, aText.p4as2c),
  
  p5as1: pep.choice(aText.p5as1a),//, aText.p5as1b, aText.p5as1c),
  p5as2: pep.choice(aText.p5as2a),//, aText.p5as2b, aText.p5as2c),
  p5as3: pep.choice(aText.p5as3a),//, aText.p5as3b, aText.p5as3c),
  p5as4: pep.choice(aText.p5as4a),//, aText.p5as4b, aText.p5as4c),
  p5as5: pep.choice(aText.p5as5a),//, aText.p5as5b, aText.p5as5c),  

  p6as1: pep.choice(aText.p6as1a),//, aText.p6as1b, aText.p6as1c),
  p6as2: pep.choice(aText.p6as2a),//, aText.p6as2b, aText.p6as2c),
  p6as3: pep.choice(aText.p6as3a),//, aText.p6as3b, aText.p6as3c),

  // 4 4 4 6 4 6
  p7as1: pep.choice(aText.p7as1a),//, aText.p7as1b, aText.p7as1c),
  p7as2: pep.choice(aText.p7as2a),//, aText.p7as2b, aText.p7as2c),
  p7as3: pep.choice(aText.p7as3a),//, aText.p7as3b, aText.p7as3c),
  p7as4: pep.choice(aText.p7as4a),//, aText.p7as4b, aText.p7as4c),  

  p8as1: pep.choice(aText.p8as1a),//, aText.p8as1b, aText.p8as1c),
  p8as2: pep.choice(aText.p8as2a),//, aText.p8as2b, aText.p8as2c),
  p8as3: pep.choice(aText.p8as3a),//, aText.p8as3b, aText.p8as3c),
  p8as4: pep.choice(aText.p8as4a),//, aText.p8as4b, aText.p8as4c),
  
  p9as1: pep.choice(aText.p9as1a),//, aText.p9as1b, aText.p9as1c),
  p9as2: pep.choice(aText.p9as2a),//, aText.p9as2b, aText.p9as2c),
  p9as3: pep.choice(aText.p9as3a),//, aText.p9as3b, aText.p9as3c),
  p9as4: pep.choice(aText.p9as4a),//, aText.p9as4b, aText.p9as4c), 
  
  p10as1: pep.choice(aText.p10as1a),//, aText.p10as1b, aText.p10as1c),
  p10as2: pep.choice(aText.p10as2a),//, aText.p10as2b, aText.p10as2c),
  p10as3: pep.choice(aText.p10as3a),//, aText.p10as3b, aText.p10as3c),
  p10as4: pep.choice(aText.p10as4a),//, aText.p10as4b, aText.p10as4c),
  p10as5: pep.choice(aText.p10as5a),//, aText.p10as5b, aText.p10as5c), 
  p10as6: pep.choice(aText.p10as6a),//, aText.p10as6b, aText.p10as6c), 
  
  p11as1: pep.choice(aText.p11as1a),//, aText.p11as1b, aText.p11as1c),
  p11as2: pep.choice(aText.p11as2a),//, aText.p11as2b, aText.p11as2c),
  p11as3: pep.choice(aText.p11as3a),//, aText.p11as3b, aText.p11as3c),
  p11as4: pep.choice(aText.p11as4a),//, aText.p11as4b, aText.p11as4c),
   

  p12as1: pep.choice(aText.p12as1a),//, aText.p12as1b, aText.p12as1c),
  p12as2: pep.choice(aText.p12as2a),//, aText.p12as2b, aText.p12as2c),
  p12as3: pep.choice(aText.p12as3a),//, aText.p12as3b, aText.p12as3c),
  p12as4: pep.choice(aText.p12as4a),//, aText.p12as4b, aText.p12as4c),
  p12as5: pep.choice(aText.p12as5a),//, aText.p12as5b, aText.p12as5c), 
  p12as6: pep.choice(aText.p12as6a),//, aText.p12as6b, aText.p12as6c),   

};


let aBlock = {
  p1a:  pep.seq(aPar.p1as1,  aPar.p1as2,  aPar.p1as3, aPar.p1as4, ), 
  p2a:  pep.seq(aPar.p2as1,  aPar.p2as2,  aPar.p2as3, aPar.p2as4, ),
  p3a:  pep.seq(aPar.p3as1,  aPar.p3as2,  ),
  p4a:  pep.seq(aPar.p4as1,  aPar.p4as2,  ),
  p5a:  pep.seq(aPar.p5as1,  aPar.p5as2,  aPar.p5as3, aPar.p5as4, aPar.p5as5, ),
  p6a:  pep.seq(aPar.p6as1,  aPar.p6as2,  aPar.p6as3, ),
  p7a:  pep.seq(aPar.p7as1,  aPar.p7as2,  aPar.p7as3, aPar.p7as4, ),
  p8a:  pep.seq(aPar.p8as1,  aPar.p8as2,  aPar.p8as3, aPar.p8as4, ), 
  p9a:  pep.seq(aPar.p9as1,  aPar.p9as2,  aPar.p9as3, aPar.p9as4, ),
  p10a: pep.seq(aPar.p10as1, aPar.p10as2, aPar.p10as3, aPar.p10as4, aPar.p10as5, aPar.p10as6, ), 
  p11a: pep.seq(aPar.p11as1, aPar.p11as2, aPar.p11as3, aPar.p11as4, ),
  p12a: pep.seq(aPar.p12as1, aPar.p12as2, aPar.p12as3, aPar.p12as4, aPar.p12as5, aPar.p12as6),
};

let content = pep.seq(myPep.html.p('o'),                        
           aBlock.p1a, myPep.html.p('co'), aBlock.p2a, myPep.html.p('co'),                      
           aBlock.p3a, myPep.html.p('co'), aBlock.p4a, myPep.html.p('co'), 
           aBlock.p5a, myPep.html.p('co'), aBlock.p6a, myPep.html.p('co'), 
           aBlock.p7a, myPep.html.p('co'), aBlock.p8a, myPep.html.p('co'), 
           aBlock.p9a, myPep.html.p('co'), aBlock.p10a, myPep.html.p('co'), 
          aBlock.p11a, myPep.html.p('co'), aBlock.p12a, myPep.html.p('co'), 
           myPep.html.p('c'), 
);

module.exports = {
  text: content,
  title: title,
  
};