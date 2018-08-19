
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var myCon = require('./constants.js');



//Our main character is presented with an opportunity to escape the realm that they're currently in and move onto the mortal realm. They take the opportunity and walk through the magic portal. Some of the portal lore may be introduced in this section. Supporting and/or recurring characters may also appear as helpers in this section.





//could be expanded more
let title = pep.choice("Temptation", "A New Life", "Just Jump");

//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  
//p1
  
p1as1a: pep.seq('The moon hung low in the sky as ', myCon.c0, ' walked across the courtyard and into the administrative building that led to freedom. '),
p1as1b: pep.seq(myCon.c0, ' crunched through the courtyard towards the ominous administrative building. '),
p1as1c: pep.seq('The moon hung ominously over the administration building as ', myCon.c0, ' made ', myPep.pronouns.their(myCon.c0g), ' way home. '),

p1as2a: pep.seq('It had been a long shift, but it was over and ', myCon.c0, ' could not wait to crawl into bed. '),
p1as2b: pep.seq(myCon.c0, ' was thankful that the arduous shift was over. '),
p1as2c: pep.seq(myCon.c0, '\'s thoughts drifted as ', myPep.pronouns.they(myCon.c0g), ' tried to shake off the long night. '),

p1as3a: pep.seq('Nothing, of course, had happened. '),
p1as3b: pep.seq('It had been an uneventful day of work. '),
p1as3c: pep.seq('The evening had been long and boring. '),

//p2

p2as1a: pep.seq('The hallway was dimly lit and sparsely populated. '),
p2as1b: pep.seq('The door opened with a creak as myCon.c0 stepped into the dimly lit hallway. '),
p2as1c: pep.seq(myCon.c0, ' always felt like ', myPep.pronouns.they(myCon.c0g), ' were part of some murder mystery when entering the gate building late at night. '),

p2as2a: pep.seq('Despite it being the literal changing of the guard, all of the day staff were gone. '),
p2as2b: pep.seq('It was amazing to ', myCon.c0, ' how empty the gate building was, despite the shift change at this hour. '),
p2as2c: pep.seq('The hallway smelled faintly of farm animal and gunpowder. '),

p2as3a: pep.seq('The preternatural quiet was harshly interrupted by ', myCon.c0, '\'s combat books clunking upon the stone floor. '),
p2as3b: pep.seq(myCon.c0, '\'s boots disrupted the quiet hallway as they clattered against the stone. '),
p2as3c: pep.seq('The hallway was quiet, punctuated only by ', myCon.c0, '\'s heavy breath and boots upon the floor. '),

  //p3
  
  p3as1a: pep.seq(myCon.c0, ' turned a corner and found ', myPep.pronouns.themself(myCon.c0g), ' in the midst of chaos. '),
  p3as1b: pep.seq(myCon.c0, ' abruptly found ', myPep.pronouns.themself(myCon.c0g), ' surrounded by activity as ', myPep.pronouns.they(myCon.c0g), ' rounded the corner. '),
  p3as1c: pep.seq(myCon.c0, ' heard voices just around the bend. '),

  p3as2a: pep.seq('The lights were much brighter here, and orange cones and caution tape blocked ', myPep.pronouns.their(myCon.c0g), ' path. '),
  p3as2b: pep.seq('The flood lights reflected off of the bright orange safety cones and caution tape fluttered in the wind. '),
  p3as2c: pep.seq(myCon.c0, ' saw several folks on the other side of orange cones and caution tape. '),
  
  p3as3a: pep.seq('A fellow guard, weapon loose in hands, nodded abruptly at ', myCon.c0, '. '),
  p3as3b: pep.seq('The guard closest to ', myCon.c0, ' grunted. '),
  p3as3c: pep.seq(myCon.c0, ' saw the nearest guard eyeing ', myPep.pronouns.them(myCon.c0g), '. '),
  
  //p4
  
p4as1a: pep.seq('"You\'ll have to go the long way, sorry, soldier." '),
p4as1b: pep.seq('"This here hallway is closed, soldier." '),
p4as1c: pep.seq('"Go on back the way you came." '),

p4as2a: pep.seq('The guard grunted. '),
p4as2b: pep.seq('The guard moved the orange cone between them, as if that would solve everything. '),
p4as2c: pep.seq('The guard smiled. '),

p4as3a: pep.seq('"Bit of an incident up ahead." '),
p4as3b: pep.seq('"Got a bit of a mess to clean up." '),
p4as3c: pep.seq('"Classified business, you see?" '),

  //p5
p5as1a: pep.seq('"Do you need help?" '),
p5as1b: pep.seq('"Oh, do you need me to assist?" '),
p5as1c: pep.seq('"I\'ve got hands if you need them." '),

p5as2a: pep.seq(myCon.c0, ' offered, surveying past the soldier to the fresh splats of blood on the wall. '),
p5as2b: pep.seq('myCon.c0 wondered what the story was. '),
p5as2c: pep.seq('myCon.c0 offered absentmindedly, immediately regretting the decision. '),

p5as3a: pep.seq(myPep.setting.brethrens(myCon.setVar), ' in hazmat suits were hard at work. '),
p5as3b: pep.seq('The hazmats buzzed around behind the guard like busy little bees. '),
p5as3c: pep.seq('Hazmatted ', myPep.setting.brethrens(myCon.setVar), ' were staring. '),

  //p6
p6as1a: pep.seq('"No, we\'ve got it handled. '),
p6as1b: pep.seq(''),
p6as1c: pep.seq(''),

p6as2a: pep.seq('Lousy traitors are just causing trouble for us in here. '),
p6as2b: pep.seq(''),
p6as2c: pep.seq(''),

p6as3a: pep.seq('Don\'t have to worry about that piece of scum any longer." '),
p6as3b: pep.seq(''),
p6as3c: pep.seq(''),

p6as4a: pep.seq('The soldier took a breath and ',myCon.c0, ' realized belatedly that there was fresh blood on the sword that the guard held. '),
p6as4b: pep.seq(''),
p6as4c: pep.seq(''),

p6as5a: pep.seq(pep.capitalize(myPep.pronouns.their(myCon.c0g)), ' stomach turned. '),
p6as5b: pep.seq(''),
p6as5c: pep.seq(''),

  //p7
p7as1a: pep.seq('"Just go left instead and keep to the south wall. '),
p7as1b: pep.seq(''),
p7as1c: pep.seq(''),

p7as2a: pep.seq('You\'ll pass the armory and the vault, then hang a right and you\'ll be in the front lobby to check out." '),
p7as2b: pep.seq(''),
p7as2c: pep.seq(''),

p7as3a: pep.seq('The soldier continued with a hearty smile. '),
p7as3b: pep.seq(''),
p7as3c: pep.seq(''),

  // p8
p8as1a: pep.seq('"Great, uh, thanks." '),
p8as1b: pep.seq(''),
p8as1c: pep.seq(''),

p8as2a: pep.seq(myCon.c0, ' did a small salute and turned to walk away. '),
p8as2b: pep.seq(''),
p8as2c: pep.seq(''),

  //p9
p9as1a: pep.seq('"Have a great evening!" '),
p9as1b: pep.seq(''),
p9as1c: pep.seq(''),

p9as2a: pep.seq('The soldier shouted as ', myCon.c0, ' departed. '),
p9as2b: pep.seq(''),
p9as2c: pep.seq(''),

p9as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' were unsure what to make of the scene, but bed still called ', myPep.pronouns.their(myCon.c0g), ' name. '),
p9as3b: pep.seq(''),
p9as3c: pep.seq(''),

  //p10
p10as1a: pep.seq('The armory was shut and locked as it should be, but the vault\'s door was wide open and the lights were beaming out into the otherwise dark hallway. '),
p10as1b: pep.seq(''),
p10as1c: pep.seq(''),

p10as2a: pep.seq(myCon.c0, ' slowed ', myPep.pronouns.their(myCon.c0g), ' pace as ', myPep.pronouns.they(myCon.c0g), ' approached the door, wondering if the aftermath in the shortcut had anything to do with the vault seemingly being unsecured. '),
p10as2b: pep.seq(''),
p10as2c: pep.seq(''),

p10as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' unsheathed ', myPep.pronouns.their(myCon.c0g), ' own dagger, gripping it with a white-knuckled ferocity.'),
p10as3b: pep.seq(''),
p10as3c: pep.seq(''),

  //p11
p11as1a: pep.seq(myCon.c0, ' peered around the corner, filled with apprehension. '),
p11as1b: pep.seq(''),
p11as1c: pep.seq(''),

p11as2a: pep.seq('The portal in the center of the vaulted room glowed iridescent blue and purple, lighting the room up all by itself. '),
p11as2b: pep.seq(''),
p11as2c: pep.seq(''),

p11as3a: pep.seq('There was no sign of life. '),
p11as3b: pep.seq(''),
p11as3c: pep.seq(''),

p11as4a: pep.seq('Cautiously, ',myCon.c0, ' stepped across the threshold, dagger held at the ready. '),
p11as4b: pep.seq(''),
p11as4c: pep.seq(''),

p11as5a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' flipped ', myPep.pronouns.their(myCon.c0g), ' head left and right, scanning the walls for signs of an ambush. '),
p11as5b: pep.seq(''),
p11as5c: pep.seq(''),

//p12
p12as1a: pep.seq('There was nothing. '),
p12as1b: pep.seq(''),
p12as1c: pep.seq(''),

p12as2a: pep.seq(myCon.c0, ' had not spent a lot of time in the vault -- only during orientation -- but nothing seemed out of place. '),
p12as2b: pep.seq(''),
p12as2c: pep.seq(''),

p12as3a: pep.seq('There were no bodies, no signs of a scuffle. '),
p12as3b: pep.seq(''),
p12as3c: pep.seq(''),

p12as4a: pep.seq('Nothing seemed out of the ordinary, other than the fact that ', myCon.c6, ' had said just this past evening that the portals were all closed down. '),
p12as4b: pep.seq(''),
p12as4c: pep.seq(''),

p12as5a: pep.seq('And this was the opposite of "closed down."'),
p12as5b: pep.seq(''),
p12as5c: pep.seq(''),

  //p13
p13as1a: pep.seq('Heart racing, ', myCon.c0, ' sheathed ', myPep.pronouns.their(myCon.c0g), ' dagger and looked out into the abandoned hallway. '),
p13as1b: pep.seq(''),
p13as1c: pep.seq(''),

p13as2a: pep.seq('As if against ', myPep.pronouns.their(myCon.c0g), ' own will, ', myCon.c0, ' carefully pulled the vault door shut. '),
p13as2b: pep.seq(''),
p13as2c: pep.seq(''),

p13as3a: pep.seq('Other than one small squeak, it glided fluidly and closed quietly. '),
p13as3b: pep.seq(''),
p13as3c: pep.seq(''),

p13as4a: pep.seq(myCon.c0, ' heard a click as the door shut and ', myPep.pronouns.their(myCon.c0g), ' eyes went wide with panic. '),
p13as4b: pep.seq(''),
p13as4c: pep.seq(''),

p13as5a: pep.seq('Of course the door had an auto-lock. '),
p13as5b: pep.seq(''),
p13as5c: pep.seq(''),

  //p14
p14as1a: pep.seq(myCon.c0, ' pushed on the door, but it would not budge. '),
p14as1b: pep.seq(''),
p14as1c: pep.seq(''),

p14as2a: pep.seq('The panic became full blown. '),
p14as2b: pep.seq(''),
p14as2c: pep.seq(''),

p14as3a: pep.seq('How would ', myCon.c0, ' explain this in the morning when someone found ', myPep.pronouns.them(myCon.c0g), '? '),
p14as3b: pep.seq(''),
p14as3c: pep.seq(''),

  //p15
p15as1a: pep.seq('"Fuck, fuck, fuck." '),
p15as1b: pep.seq(''),
p15as1c: pep.seq(''),

p15as2a: pep.seq(myCon.c0, ' muttered as ', myPep.pronouns.they(myCon.c0g), ' paced in front of the locked the door. '),
p15as2b: pep.seq(''),
p15as2c: pep.seq(''),

p15as3a: pep.seq(myPep.html.i('o'), 'I was going home when I noticed the door open. '),
p15as3b: pep.seq(''),
p15as3c: pep.seq(''),

p15as4a: pep.seq('I came in to survey and make sure that nothing was out of place when somehow the door shut. ', myPep.html.i('c'), ),
p15as4b: pep.seq(''),
p15as4c: pep.seq(''),

  //p16
p16as1a: pep.seq(myCon.c0, ' had a feeling that they would see through those flimsy excuses. '),
p16as1b: pep.seq(''),
p16as1c: pep.seq(''),

p16as2a: pep.seq(myCon.c0, ' knew why ', myPep.pronouns.they(myCon.c0g), ' had closed the door. '),
p16as2b: pep.seq(''),
p16as2c: pep.seq(''),

p16as3a: pep.seq('Even if ', myPep.pronouns.they(myCon.c0g), ' didn\'t want to admit it. '),
p16as3b: pep.seq(''),
p16as3c: pep.seq(''),

p16as4a: pep.seq(myPep.html.i('o'), 'Freedom from fighting is right through that portal. ', myPep.html.i('c'),),
p16as4b: pep.seq(''),
p16as4c: pep.seq(''),

p16as5a: pep.seq(myCon.c0, ' heard the traitorous self-voice in the silence of the vault. '),
p16as5b: pep.seq(''),
p16as5c: pep.seq(''),

p16as6a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' hadn\'t closed the door to prevent escapes. '),
p16as6b: pep.seq(''),
p16as6c: pep.seq(''),

p16as7a: pep.seq('No one shut the door on ', myPep.pronouns.them(myCon.c0g), '. '),
p16as7b: pep.seq(''),
p16as7c: pep.seq(''),

p16as8a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' shut the door to escape -- and knew it. '),
p16as8b: pep.seq(''),
p16as8c: pep.seq(''),

  //p17
p17as1a: pep.seq('The time was now or never. '),
p17as1b: pep.seq(''),
p17as1c: pep.seq(''),

p17as2a: pep.seq('Try to spin a story about why ', myPep.pronouns.they(myCon.c0g), ' were locked in the vault room by ', myPep.pronouns.themself(myCon.c0g), ', with the guard missing, or just go ahead and walk through the portal to freedom. '),
p17as2b: pep.seq(''),
p17as2c: pep.seq(''),

p17as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' stepped away from the door and looked at the portal. '),
p17as3b: pep.seq(''),
p17as3c: pep.seq(''),

p17as4a: pep.seq('It was now a blue-ish orange, and it seemed to be calling to ', myPep.pronouns.them(myCon.c0g), '. '),
p17as4b: pep.seq(''),
p17as4c: pep.seq(''),

p17as5a: pep.seq('Unlike many, ', myPep.pronouns.they(myCon.c0g), ' had never actually been through the portal. '),
p17as5b: pep.seq(''),
p17as5c: pep.seq(''),

p17as6a: pep.seq('By some small miracle, ', myPep.pronouns.they(myCon.c0g), ' had missed most of the hazing that occurred in basic training. '),
p17as6b: pep.seq(''),
p17as6c: pep.seq(''),

//p18
p18as1a: pep.seq('But ', myPep.pronouns.they(myCon.c0g), ' had heard the stories. '),
p18as1b: pep.seq(''),
p18as1c: pep.seq(''),

p18as2a: pep.seq('How the mortal realm was much like the ', myPep.setting.realm(myCon.setVar), ' realm, just devoid of magic and immortality. '),
p18as2b: pep.seq(''),
p18as2c: pep.seq(''),

p18as3a: pep.seq('How there was a rush in not-belonging, and a peacefulness to the mortal realm that was unlike anything ever experienced in ', myPep.setting.realm(myCon.setVar), '. '),
p18as3b: pep.seq(''),
p18as3c: pep.seq(''),

p18as4a: pep.seq('How there were no laws for those ', myPep.setting.brethrens(myCon.setVar), ' that walks on the other side. '),
p18as4b: pep.seq(''),
p18as4c: pep.seq(''),

p18as5a: pep.seq('No consequences. '),
p18as5b: pep.seq(''),
p18as5c: pep.seq(''),

p18as6a: pep.seq('How one could disappear without a trace in the vast wilderness of the mortal realm. '),
p18as6b: pep.seq(''),
p18as6c: pep.seq(''),

  //p19
p19as1a: pep.seq(myPep.html.i('o'), 'You can never come back, ', myCon.c0, '. '),
p19as1b: pep.seq(''),
p19as1c: pep.seq(''),

p19as2a: pep.seq('No more mother, or father. '),
p19as2b: pep.seq(''),
p19as2c: pep.seq(''),

p19as3a: pep.seq('No more hanging out with ', myCon.c4, ' or bantering with ', myCon.c6, '. '),
p19as3b: pep.seq(''),
p19as3c: pep.seq(''),

p19as4a: pep.seq('You will be a traitor and a coward if you jump through that portal. ', myPep.html.i('c'), ),
p19as4b: pep.seq(''),
p19as4c: pep.seq(''),

  //p20
p20as1a: pep.seq('"I am already." '),
p20as1b: pep.seq(''),
p20as1c: pep.seq(''),

p20as2a: pep.seq(myCon.c0, ' answered their silent musings out loud. '),
p20as2b: pep.seq(''),
p20as2c: pep.seq(''),

p20as3a: pep.seq('"I am the one in a locked room with the portal, with the guard missing. '),
p20as3b: pep.seq(''),
p20as3c: pep.seq(''),

p20as4a: pep.seq(myCon.c5, ' has it out for me. '),
p20as4b: pep.seq(''),
p20as4c: pep.seq(''),

p20as5a: pep.seq('No one will come to my defense. '),
p20as5b: pep.seq(''),
p20as5c: pep.seq(''),

p20as6a: pep.seq('It is either die here, or run there." '),
p20as6b: pep.seq(''),
p20as6c: pep.seq(''),

  //p21
p21as1a: pep.seq(myCon.c0, ' drew closer to the portal. '),
p21as1b: pep.seq(''),
p21as1c: pep.seq(''),

p21as2a: pep.seq('It emitted a soft hum, barely perceptible to the ears. '),
p21as2b: pep.seq(''),
p21as2c: pep.seq(''),

p21as3a: pep.seq('It called to ', myCon.c0, ', the promise of a new life awaiting. '),
p21as3b: pep.seq(''),
p21as3c: pep.seq(''),

p21as4a: pep.seq('With nothing to lose, ', myPep.pronouns.they(myCon.c0g), ' jumped. '),
p21as4b: pep.seq(''),
p21as4c: pep.seq(''),

  
  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a),//, aText.p1as1b, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a),//, aText.p1as2b, aText.p1as2c),
  p1as3: pep.choice(aText.p1as3a),//, aText.p1as3b, aText.p1as3c),
  
  p2as1: pep.choice(aText.p2as1a),//, aText.p2as1b, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a),//, aText.p2as2b, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a),//, aText.p2as3b, aText.p2as3c),
  
  p3as1: pep.choice(aText.p3as1a),//, aText.p3as1b, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a),//, aText.p3as2b, aText.p3as2c),
  p3as3: pep.choice(aText.p3as3a),//, aText.p3as3b, aText.p3as3c),

  p4as1: pep.choice(aText.p4as1a),//, aText.p4as1b, aText.p4as1c),
  p4as2: pep.choice(aText.p4as2a),//, aText.p4as2b, aText.p4as2c),
  p4as3: pep.choice(aText.p4as3a),//, aText.p4as3b, aText.p4as3c),
  
  p5as1: pep.choice(aText.p5as1a),//, aText.p5as1b, aText.p5as1c),
  p5as2: pep.choice(aText.p5as2a),//, aText.p5as2b, aText.p5as2c),
  p5as3: pep.choice(aText.p5as3a),//, aText.p5as3b, aText.p5as3c),


  p6as1: pep.choice(aText.p6as1a),//, aText.p6as1b),//, aText.p6as1c),
  p6as2: pep.choice(aText.p6as2a),//, aText.p6as2b),//, aText.p6as2c),
  p6as3: pep.choice(aText.p6as3a),//, aText.p6as3b),//, aText.p6as3c),
  p6as4: pep.choice(aText.p6as4a),//, aText.p6as4b),//, aText.p6as4c),
  p6as5: pep.choice(aText.p6as5a),//, aText.p6as5b),//, aText.p6as5c),  

  
  p7as1: pep.choice(aText.p7as1a),//, aText.p7as1b),//, aText.p7as1c),
  p7as2: pep.choice(aText.p7as2a),//, aText.p7as2b),//, aText.p7as2c),
  p7as3: pep.choice(aText.p7as3a),//, aText.p8as3b),//, aText.p8as3c),

  p8as1: pep.choice(aText.p8as1a),//, aText.p8as1b),//, aText.p8as1c),
  p8as2: pep.choice(aText.p8as2a),//, aText.p8as2b),//, aText.p8as2c),

  
  p9as1: pep.choice(aText.p9as1a),//, aText.p9as1b),//, aText.p9as1c),
  p9as2: pep.choice(aText.p9as2a),//, aText.p9as2b),//, aText.p9as2c),
  p9as3: pep.choice(aText.p9as3a),//, aText.p9as3b),//, aText.p9as3c),
  
  p10as1: pep.choice(aText.p10as1a),//, aText.p10as1b),//, aText.p10as1c),
  p10as2: pep.choice(aText.p10as2a),//, aText.p10as2b),//, aText.p10as2c),
  p10as3: pep.choice(aText.p10as3a),//, aText.p10as3b),//, aText.p10as3c),

  p11as1: pep.choice(aText.p11as1a),//, aText.p11as1b),//, aText.p11as1c),
  p11as2: pep.choice(aText.p11as2a),//, aText.p11as2b),//, aText.p11as2c),
  p11as3: pep.choice(aText.p11as3a),//, aText.p11as3b),//, aText.p11as3c),
  p11as4: pep.choice(aText.p11as4a),//, aText.p11as4b),//, aText.p11as4c),
  p11as5: pep.choice(aText.p11as5a),//, aText.p11as5b),//, aText.p11as5c),   

  p12as1: pep.choice(aText.p12as1a),//, aText.p12as1b),//, aText.p12as1c),
  p12as2: pep.choice(aText.p12as2a),//, aText.p12as2b),//, aText.p12as2c),
  p12as3: pep.choice(aText.p12as3a),//, aText.p12as3b),//, aText.p12as3c),
  p12as4: pep.choice(aText.p12as4a),//, aText.p12as4b),//, aText.p12as4c),
  p12as5: pep.choice(aText.p12as5a),//, aText.p12as5b),//, aText.p12as5c), 
  
  
  p13as1: pep.choice(aText.p13as1a),//, aText.p13as1b),//, aText.p13as1c),
  p13as2: pep.choice(aText.p13as2a),//, aText.p13as2b),//, aText.p13as2c),
  p13as3: pep.choice(aText.p13as3a),//, aText.p13as3b),//, aText.p13as3c),
  p13as4: pep.choice(aText.p13as4a),//, aText.p13as4b),//, aText.p13as4c),
  p13as5: pep.choice(aText.p13as5a),//, aText.p13as5b),//, aText.p13as5c),

  p14as1: pep.choice(aText.p14as1a),//, aText.p14as1b, aText.p14as1c),
  p14as2: pep.choice(aText.p14as2a),//, aText.p14as2b, aText.p14as2c),
  p14as3: pep.choice(aText.p14as3a),//, aText.p14as3b, aText.p14as3c),


  p15as1: pep.choice(aText.p15as1a),//, aText.p15as1b, aText.p15as1c),
  p15as2: pep.choice(aText.p15as2a),//, aText.p15as2b, aText.p15as2c),
  p15as3: pep.choice(aText.p15as3a),//, aText.p15as3b, aText.p15as3c),
  p15as4: pep.choice(aText.p15as4a),//, aText.p15as4b, aText.p15as4c),

  p16as1: pep.choice(aText.p16as1a),//, aText.p16as1b, aText.p16as1c),
  p16as2: pep.choice(aText.p16as2a),//, aText.p16as2b, aText.p16as2c),
  p16as3: pep.choice(aText.p16as3a),//, aText.p16as3b, aText.p16as3c),
  p16as4: pep.choice(aText.p16as4a),//, aText.p16as4b, aText.p16as4c),
  p16as5: pep.choice(aText.p16as5a),//, aText.p16as5b, aText.p16as5c),
  p16as6: pep.choice(aText.p16as6a),//, aText.p16as6b, aText.p16as6c),
  p16as7: pep.choice(aText.p16as7a),//, aText.p16as7b, aText.p16as7c),
  p16as8: pep.choice(aText.p16as8a),//, aText.p16as8b, aText.p16as8c),

  p17as1: pep.choice(aText.p17as1a),//, aText.p17as1b, aText.p17as1c),
  p17as2: pep.choice(aText.p17as2a),//, aText.p17as2b, aText.p17as2c),
  p17as3: pep.choice(aText.p17as3a),//, aText.p17as3b, aText.p17as3c),
  p17as4: pep.choice(aText.p17as4a),//, aText.p17as4b, aText.p17as4c),
  p17as5: pep.choice(aText.p17as5a),//, aText.p17as5b, aText.p17as5c),
  p17as6: pep.choice(aText.p17as6a),//, aText.p17as6b, aText.p17as6c),  

  p18as1: pep.choice(aText.p18as1a),//, aText.p18as1b, aText.p18as1c),
  p18as2: pep.choice(aText.p18as2a),//, aText.p18as2b, aText.p18as2c),
  p18as3: pep.choice(aText.p18as3a),//, aText.p18as3b, aText.p18as3c),
  p18as4: pep.choice(aText.p18as4a),//, aText.p18as4b, aText.p18as4c),
  p18as5: pep.choice(aText.p18as5a),//, aText.p18as5b, aText.p18as5c),
  p18as6: pep.choice(aText.p18as6a),//, aText.p18as6b, aText.p18as6c),  

  p19as1: pep.choice(aText.p19as1a),//, aText.p19as1b, aText.p19as1c),
  p19as2: pep.choice(aText.p19as2a),//, aText.p19as2b, aText.p19as2c),
  p19as3: pep.choice(aText.p19as3a),//, aText.p19as3b, aText.p19as3c),
  p19as4: pep.choice(aText.p19as4a),//, aText.p19as4b, aText.p19as4c),

  p20as1: pep.choice(aText.p20as1a),//, aText.p20as1b, aText.p20as1c),
  p20as2: pep.choice(aText.p20as2a),//, aText.p20as2b, aText.p20as2c),
  p20as3: pep.choice(aText.p20as3a),//, aText.p20as3b, aText.p20as3c),
  p20as4: pep.choice(aText.p20as4a),//, aText.p20as4b, aText.p20as4c),
  p20as5: pep.choice(aText.p20as5a),//, aText.p20as5b, aText.p20as5c),
  p20as6: pep.choice(aText.p20as6a),//, aText.p20as6b, aText.p20as6c), 
  
  p21as1: pep.choice(aText.p21as1a),//, aText.p21as1b, aText.p21as1c),
  p21as2: pep.choice(aText.p21as2a),//, aText.p21as2b, aText.p21as2c),
  p21as3: pep.choice(aText.p21as3a),//, aText.p21as3b, aText.p21as3c),
  p21as4: pep.choice(aText.p21as4a),//, aText.p21as4b, aText.p21as4c),

};


let aBlock = {
  p1a:  pep.seq(aPar.p1as1,  aPar.p1as2,  aPar.p1as3,), 
  p2a:  pep.seq(aPar.p2as1,  aPar.p2as2,  aPar.p2as3,),
  p3a:  pep.seq(aPar.p3as1,  aPar.p3as2,  aPar.p3as3, ),
  p4a:  pep.seq(aPar.p4as1,  aPar.p4as2,  aPar.p4as3, ),
  p5a:  pep.seq(aPar.p5as1,  aPar.p5as2,  aPar.p5as3, ),
  p6a:  pep.seq(aPar.p6as1,  aPar.p6as2,  aPar.p6as3, aPar.p6as4, aPar.p6as5, ),
  p7a:  pep.seq(aPar.p7as1,  aPar.p7as2,  aPar.p7as3,),
  p8a:  pep.seq(aPar.p8as1,  aPar.p8as2), 
  p9a:  pep.seq(aPar.p9as1,  aPar.p9as2,  aPar.p9as3, ),
  p10a: pep.seq(aPar.p10as1, aPar.p10as2, aPar.p10as3,), 
  p11a: pep.seq(aPar.p11as1, aPar.p11as2, aPar.p11as3, aPar.p11as4, aPar.p11as5, ),
  p12a: pep.seq(aPar.p12as1, aPar.p12as2, aPar.p12as3, aPar.p12as4, aPar.p12as5, ),
  p13a: pep.seq(aPar.p13as1, aPar.p13as2, aPar.p13as3, aPar.p13as4, aPar.p13as5, ),
  p14a: pep.seq(aPar.p14as1, aPar.p14as2, aPar.p14as3, ),
  p15a: pep.seq(aPar.p15as1, aPar.p15as2, aPar.p15as3, aPar.p15as4, ),
  p16a: pep.seq(aPar.p16as1, aPar.p16as2, aPar.p16as3, aPar.p16as4, aPar.p16as5, aPar.p16as6, aPar.p16as7, aPar.p16as8, ),
  p17a: pep.seq(aPar.p17as1, aPar.p17as2, aPar.p17as3, aPar.p17as4, aPar.p17as5, aPar.p17as6),
  p18a: pep.seq(aPar.p18as1, aPar.p18as2, aPar.p18as3, aPar.p18as4, aPar.p18as5, aPar.p18as6),
  p19a: pep.seq(aPar.p19as1, aPar.p19as2, aPar.p19as3, aPar.p19as4,),
  p20a: pep.seq(aPar.p20as1, aPar.p20as2, aPar.p20as3, aPar.p20as4, aPar.p20as5, aPar.p20as6),
  p21a: pep.seq(aPar.p21as1, aPar.p21as2, aPar.p21as3, aPar.p21as4,),
};

let content = pep.seq(myPep.html.p('o'),                        
           aBlock.p1a, myPep.html.p('co'), aBlock.p2a, myPep.html.p('co'),                      
           aBlock.p3a, myPep.html.p('co'), aBlock.p4a, myPep.html.p('co'), 
           aBlock.p5a, myPep.html.p('co'), aBlock.p6a, myPep.html.p('co'), 
           aBlock.p7a, myPep.html.p('co'), aBlock.p8a, myPep.html.p('co'), 
           aBlock.p9a, myPep.html.p('co'), aBlock.p10a, myPep.html.p('co'), 
          aBlock.p11a, myPep.html.p('co'), aBlock.p12a, myPep.html.p('co'), 
          aBlock.p13a, myPep.html.p('co'), aBlock.p14a, myPep.html.p('co'), 
          aBlock.p15a, myPep.html.p('co'), aBlock.p16a, myPep.html.p('co'), 
          aBlock.p17a, myPep.html.p('co'), aBlock.p18a, myPep.html.p('co'), 
          aBlock.p19a, myPep.html.p('co'), aBlock.p20a, myPep.html.p('co'),
          aBlock.p21a, myPep.html.p('c'), 
);

module.exports = {
  text: content,
  title: title,
  
};