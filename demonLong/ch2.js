
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var myCon = require('./constants.js');



//Our main character struggles to name and stand strong for their pacifism in the face of growing tensions. Our character is told to 'do or die' in terms of joining the fight. They are left unsettled and looking for a way out.





//could be expanded more
let title = pep.choice("Trouble in Paradise", "Heart Of Stone", "The Liar's Touch");

//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  
//p1

//s1

//“Is C1 insane?”  
p1as1a: pep.seq('"Is ', myCon.c1, ' insane?" '),
//
p1as1b: pep.seq(),
//
p1as1c: pep.seq(),

//s2

//C0 asked, gnawing their way through a piece of overcooked meat. 
p1as2a: pep.seq(myCon.c0, ' asked, gnawing ', myPep.pronouns.their(myCon.c0g), ' way through a piece of overcooked meat. '),
//
p1as2b: pep.seq(),
//
p1as2c: pep.seq(),

//s3

//They looked at their friend, C4, for reassurance.
p1as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' looked at ', myPep.pronouns.their(myCon.c0g), ' friend, ', myCon.c4, ', for reassurance. '),
//
p1as3b: pep.seq(),
//
p1as3c: pep.seq(),

//p2

//s1

//“Perhaps.”  
p2as1a: pep.seq('"Perhaps." '),
//
p2as1b: pep.seq(),
//
p2as1c: pep.seq(),

//s2

//C4 mused, pushing the tray away. 
p2as2a: pep.seq(myCon.c4, ' mused, pushing the tray away. '),
//
p2as2b: pep.seq(),
//
p2as2c: pep.seq(),

//s3

//“But is anyone going to stop them?”
p2as3a: pep.seq('"But is anyone going to stop ',myPep.pronouns.them(myCon.c1g),'?" '),
//
p2as3b: pep.seq(),
//
p2as3c: pep.seq(),

  //p3

//s1

//That was the question, after all. 
p3as1a: pep.seq('That was the question, after all. '),
//
p3as1b: pep.seq(),
//
p3as1c: pep.seq(),

//s2

//Would anyone stop C1’s planned rebellion against the HIGH KING C5? 
p3as2a: pep.seq('Would anyone stop ', myCon.c1, '’s planned rebellion against the ', myPep.setting.boss(myCon.setVar), ' ',myCon.c5, '? '),
//
p3as2b: pep.seq(),
//
p3as2c: pep.seq(),

//s3

//Or were BRETHRENS really that fed up with their style of rule? 
p3as3a: pep.seq('Or were ', myPep.setting.brethrens(myCon.setVar), ' really that fed up with ', myPep.pronouns.their(myCon.c1g), ' style of rule? '),
//
p3as3b: pep.seq(),
//
p3as3c: pep.seq(),

//s4

//It was hard to tell, because there was always a level of unrest in REALM -- but somehow, it seemed like this time was worse. 
p3as4a: pep.seq('It was hard to tell, because there was always a level of unrest in ', myPep.setting.realm(myCon.setVar), ' -- but somehow, it seemed like this time was worse. '),
//
p3as4b: pep.seq(),
//
p3as4c: pep.seq(),

//s5

//Like they might actually mean it.
p3as5a: pep.seq('Like they might actually mean it.'),
//
p3as5b: pep.seq(),
//
p3as5c: pep.seq(),

//p4

//s1

//C0 savored their last bite. 
p4as1a: pep.seq(myCon.c0, ' savored ', myPep.pronouns.their(myCon.c0g), ' last bite. '),
//
p4as1b: pep.seq(),
//
p4as1c: pep.seq(),

//s2

//“I feel like this is going a bad direction. 
p4as2a: pep.seq('"I feel like this is going a bad direction. '),
//
p4as2b: pep.seq(),
//
p4as2c: pep.seq(),

//s3

//We’re all going to be dragged into this steaming pile of dog-shit infighting. 
p4as3a: pep.seq('We\'re all going to be dragged into this steaming pile of dog-shit infighting. '),
//
p4as3b: pep.seq(),
//
p4as3c: pep.seq(),

//s4

//I don’t particularly care who wipes their ass at the top of the food chain -- it doesn’t really affect me from day to day.”
p4as4a: pep.seq('I don\'t particularly care who wipes their ass at the top of the food chain -- it doesn’t really affect me from day to day." '),
//
p4as4b: pep.seq(),
//
p4as4c: pep.seq(),

  //p5

//s1

//C4 barked a harsh laugh in response. 
p5as1a: pep.seq(myCon.c4, ' barked a harsh laugh in response. '),
//
p5as1b: pep.seq(),
//
p5as1c: pep.seq(),

//s2

//“The truest thing that anyone’s ever said. 
p5as2a: pep.seq('"The truest thing that anyone has ever said. '),
//
p5as2b: pep.seq(),
//
p5as2c: pep.seq(),

//s3

//Break’s over. 
p5as3a: pep.seq('Break\'s over. '),
//
p5as3b: pep.seq(),
//
p5as3c: pep.seq(),

//s4

//Come on -- let’s go before C5 gets raging mad.”
p5as4a: pep.seq('Come on -- let\'s go before ', myCon.c5, ' gets raging mad."'),
//
p5as4b: pep.seq(),
//
p5as4c: pep.seq(),

  //p6

//s1

//C4 and C0 rose to place their trash in the bin and left the cafeteria to the dim skies outside. 

p6as1a: pep.seq(myCon.c4, ' and ', myCon.c0, ' rose to place their trash in the bin and left the cafeteria to the dim skies outside. '),
//
p6as1b: pep.seq(),
//
p6as1c: pep.seq(),

//s2

//They somehow seemed creepier than usual, glowing a putrid green in the dusk sky. 
p6as2a: pep.seq('They somehow seemed creepier than usual, glowing a putrid green in the dusk sky. '),
//
p6as2b: pep.seq(),
//
p6as2c: pep.seq(),

//s3

//“Catch you later.” 
p6as3a: pep.seq('"Catch you later." '),
//
p6as3b: pep.seq(),
//
p6as3c: pep.seq(),

//s4

//C4 said warmly to C0 as THEY strode off towards the west tower. 
p6as4a: pep.seq(myCon.c4, ' said warmly to ', myCon.c0, ' as ', myPep.pronouns.they(myCon.c4g), ' strode off towards the west tower. '),
//
p6as4b: pep.seq(),
//
p6as4c: pep.seq(),

  //p7

//s1

//Guard duty for the compound was not particularly hard -- even with tensions higher than normal. 

p7as1a: pep.seq('Guard duty for the compound was not particularly hard -- even with tensions higher than normal. '),
//
p7as1b: pep.seq(),
//
p7as1c: pep.seq(),

//s2

//The military were the only BRETHRENS allowed to carry weapons, so that meant that there was a pretty big barrier between Insurgents, rabble-rousers, and troublemakers, and the military.
p7as2a: pep.seq('The military were the only ', myPep.setting.brethrens(myCon.setVar), ' allowed to carry weapons, so that meant that there was a pretty big barrier between insurgents, rabble-rousers, and troublemakers, and the military. '),
//
p7as2b: pep.seq(),
//
p7as2c: pep.seq(),



  //p8

//s1

//But guard duty was worrying, given the potential for insurrection. 
p8as1a: pep.seq('But guard duty was worrying, given the potential for insurrection. '),
//
p8as1b: pep.seq(),
//
p8as1c: pep.seq(),

//s2

//C0 was worried that they might actually have to use their weapons. 
p8as2a: pep.seq(myCon.c0, ' was worried that ', myPep.pronouns.they(myCon.c0g),' might actually have to use ', myPep.pronouns.their(myCon.c0g),' weapons. '),
//
p8as2b: pep.seq(),
//
p8as2c: pep.seq(),

//s3

//As a pacifist, that was exceptionally unnerving. 
p8as3a: pep.seq('As a pacifist, that was exceptionally unnerving. '),
//
p8as3b: pep.seq(),
//
p8as3c: pep.seq(),

//s4

//They had only taken this job for the pay, and because they were pressured to do so by their parents. 
p8as4a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' had only taken this job for the pay, and because ', myPep.pronouns.they(myCon.c0g), ' were pressured to do so by ', myPep.pronouns.their(myCon.c0g), ' parents. '),
//
p8as4b: pep.seq(),
//
p8as4c: pep.seq(),

//s5

//But there was no way in REALM, that C0 would willingly attack fellow brethrens. 
p8as5a: pep.seq('But there was no way in ', myPep.setting.realm(myCon.setVar), ', that ',myCon.c0, ' would willingly attack fellow brethrens. '),
//
p8as5b: pep.seq(),
//
p8as5c: pep.seq(),

  
//s6

//They would rather die or be imprisoned for treason. 
p8as6a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' would rather die or be imprisoned for treason. '),
//
p8as6b: pep.seq(),
//
p8as6c: pep.seq(),

//s7

//Given the pending war, it may be the former. 
p8as7a: pep.seq('Given the pending war, it may be the former. '),
//
p8as7b: pep.seq(),
//
p8as7c: pep.seq(),

//p9

//s1

//“C0! I need to talk to you!” 
  
  

p9as1a: pep.seq('"', myCon.c0, '! I need to talk to you!" '),
//
p9as1b: pep.seq(),
//
p9as1c: pep.seq(),

//s2

//The commander, C5, barked, as C0 ducked through the doorway to resume their post. 
p9as2a: pep.seq('The commander, ', myCon.c5, ', barked, as ', myCon.c0, ' ducked through the doorway to resume their post. '),
//
p9as2b: pep.seq(),
//
p9as2c: pep.seq(),

//s3

//C0 looked up, surprised.
p9as3a: pep.seq(myCon.c0, ' looked up, surprised. '),
//
p9as3b: pep.seq(),
//
p9as3c: pep.seq(),

  //p10

//s1

//“Sure, sarge, what’s up?” 

p10as1a: pep.seq('"Sure, sarge, what\'s up?" '),
//
p10as1b: pep.seq(),
//
p10as1c: pep.seq(),

//s2

//C0 asked. 
p10as2a: pep.seq(myCon.c0, ' asked. '),
//
p10as2b: pep.seq(),
//
p10as2c: pep.seq(),

//s3

//Their stomach was letting them know that this may be their worst fear come to life. 
p10as3a: pep.seq('Their stomach was letting them know that this may be their worst fear come to life. '),
//
p10as3b: pep.seq(),
//
p10as3c: pep.seq(),

  //p11

//s1

//“Have you heard all this nonsense about C1 recently?”  

p11as1a: pep.seq('"Have you heard all this nonsense about ',myCon.c1, ' recently?" '),
//
p11as1b: pep.seq(),
//
p11as1c: pep.seq(),

//s2

//C5 asked with a growl, and C0 shrugged noncommittally. 
p11as2a: pep.seq(myCon.c5, ' asked with a growl, and ', myCon.c0, ' shrugged noncommittally. '),
//
p11as2b: pep.seq(),
//
p11as2c: pep.seq(),

  //p12

//s1

//“A bit, here and there. 

p12as1a: pep.seq('"A bit, here and there. '),
//
p12as1b: pep.seq(),
//
p12as1c: pep.seq(),

//s2

//Not much. 
p12as2a: pep.seq('Not much. '),
//
p12as2b: pep.seq(),
//
p12as2c: pep.seq(),

//s3

//Why?”
p12as3a: pep.seq('Why?" '),
//
p12as3b: pep.seq(),
//
p12as3c: pep.seq(),

  //p13

//s1

//“Well, knowing your past…” 

p13as1a: pep.seq('"Well, knowing your past..." '),
//
p13as1b: pep.seq(),
//
p13as1c: pep.seq(),

//s2

//C5 trailed off as if trying to find a delicate way to state something offensive. 
p13as2a: pep.seq(myCon.c5, ' trailed off as if trying to find a delicate way to state something offensive. '),
//
p13as2b: pep.seq(),
//
p13as2c: pep.seq(),

//s3

//Though C5 had never been the polite sort. 
p13as3a: pep.seq('Though ', myCon.c5, ' had never been the polite sort. '),
//
p13as3b: pep.seq(),
//
p13as3c: pep.seq(),

//s4

//“No bullshit alright?” 
p13as4a: pep.seq('"No bullshit alright?" '),
//
p13as4b: pep.seq(),
//
p13as4c: pep.seq(),

//s5

//hey settled on cutting to the chase. 
p13as5a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c5g)), ' settled on cutting to the chase. '),
//
p13as5b: pep.seq(),
//
p13as5c: pep.seq(),

//s6

//“If this comes to blows, you know we’re on the front lines. 
p13as6a: pep.seq('If this comes to blows, you know we’re on the front lines. '),
//
p13as6b: pep.seq(),
//
p13as6c: pep.seq(),

//s7

//You can’t hesitate. 
p13as7a: pep.seq('You can’t hesitate. '),
//
p13as7b: pep.seq(),
//
p13as7c: pep.seq(),

//s8

//Not like you did…”
p13as8a: pep.seq('Not like you did..." '),
//
p13as8b: pep.seq(),
//
p13as8c: pep.seq(),
  
  //p14

//s1

//“No, commander. Of course not.” 
p14as1a: pep.seq('"No, commander. '),
//
p14as1b: pep.seq(),
//
p14as1c: pep.seq(),

//s2

//Of course not."
p14as2a: pep.seq('Of course not." '),
//
p14as2b: pep.seq(),
//
p14as2c: pep.seq(),

//s3

//C0 cut C5 off before they could reiterate what C0 had failed to do.  
p14as3a: pep.seq(myCon.c0, ' cut ', myCon.c5, ' off before ', myPep.pronouns.they(myCon.c5g), ' could reiterate what ', myCon.c0, ' had failed to do. '),
//
p14as3b: pep.seq(),
//
p14as3c: pep.seq(),

//s4

//C0 felt the falseness of the words as they left their mouth. 
p14as4a: pep.seq(myCon.c0, ' felt the falseness of the words as they left ', myPep.pronouns.their(myCon.c0g), ' mouth. '),
//
p14as4b: pep.seq(),
//
p14as4c: pep.seq(),

  
  //stopped here 
  
  //p15

//s1

//“No freezing. 
p15as1a: pep.seq('"No freezing. '),
//
p15as1b: pep.seq(),
//
p15as1c: pep.seq(),

//s2

//No moral qualms. 
p15as2a: pep.seq('No moral qualms. '),
//
p15as2b: pep.seq(),
//
p15as2c: pep.seq(),

//s3

//You do what needs to be done and you put those halfwits in their place -- most likely, a grave. 
p15as3a: pep.seq('You do what needs to be done and you put those halfwits in their place -- most likely, a grave. '),
//
p15as3b: pep.seq(),
//
p15as3c: pep.seq(),

//s4

//You hear me? 
p15as4a: pep.seq('You hear me? '),
//
p15as4b: pep.seq(),
//
p15as4c: pep.seq(),

//s5

//It’s us or them.”
p15as5a: pep.seq('It’s us or them." '),
//
p15as5b: pep.seq(),
//
p15as5c: pep.seq(),


  
  //p16

//s1

//“Yes, commander.” 
p16as1a: pep.seq('"Yes, commander." '),
//
p16as1b: pep.seq(),
//
p16as1c: pep.seq(),

//s2

//C0’s palms were itchy and a sheen of sweat was breaking out across their skin. 
p16as2a: pep.seq(myCon.c0, '\'s palms were itchy and a sheen of sweat was breaking out across ', myPep.pronouns.their(myCon.c0g), ' skin. '),
//
p16as2b: pep.seq(),
//
p16as2c: pep.seq(),

//s3

//They wondered if C5 noticed. 
p16as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' wondered if ', myCon.c5, ' noticed. '),
//
p16as3b: pep.seq(),
//
p16as3c: pep.seq(),

//p17

//s1

//“You have duties.” 
p17as1a: pep.seq('"You have duties." '),
//
p17as1b: pep.seq(),
//
p17as1c: pep.seq(),

//s2

//C5 finished. 
p17as2a: pep.seq(myCon.c5, ' finished. '),
//
p17as2b: pep.seq(),
//
p17as2c: pep.seq(),

//s3

//“And you will die either doing them or refusing them. 
p17as3a: pep.seq('"And you will die either doing them or refusing them. '),
//
p17as3b: pep.seq(),
//
p17as3c: pep.seq(),

//s4

//It’s your choice.”
p17as4a: pep.seq('It\'s your choice." '),
//
p17as4b: pep.seq(),
//
p17as4c: pep.seq(),

  //p18

//s1

//“I’m sorry?” 
p18as1a: pep.seq('"I\'m sorry?" '),
//
p18as1b: pep.seq(),
//
p18as1c: pep.seq(),

//s2

//C0 asked. 
p18as2a: pep.seq(myCon.c0, ' asked. '),
//
p18as2b: pep.seq(),
//
p18as2c: pep.seq(),

//s3

//Did the commander just say that they would die in battle?
p18as3a: pep.seq('Did the commander just say that ', myPep.pronouns.they(myCon.c0g), ' would die in battle? '),
//
p18as3b: pep.seq(),
//
p18as3c: pep.seq(),

  //p19

//s1

//“What I mean is, if you refuse, or stall, or fuck around when it’s time to fight, you’re dead. 
p19as1a: pep.seq('"What I mean is, if you refuse, or stall, or fuck around when it\'s time to fight, you\'re dead. '),
//
p19as1b: pep.seq(),
//
p19as1c: pep.seq(),

//s2

//Literally. 
p19as2a: pep.seq('Literally. '),
//
p19as2b: pep.seq(),
//
p19as2c: pep.seq(),

//s3

//I will kill you.”
p19as3a: pep.seq('I will kill you." '),
//
p19as3b: pep.seq(),
//
p19as3c: pep.seq(),

  //p20

//s1

//“We’re a team, commander.” 
p20as1a: pep.seq('"We\'re a team, commander." '),
//
p20as1b: pep.seq(),
//
p20as1c: pep.seq(),

//s2

//C0 mustered all of the courage they could to make it sound convincing. 
p20as2a: pep.seq(myCon.c0, ' mustered all of the courage ', myPep.pronouns.they(myCon.c0g), ' could to make it sound convincing. '),
//
p20as2b: pep.seq(),
//
p20as2c: pep.seq(),

//s3

//“I wouldn’t abandon my fellow soldiers in the field of war.”
p20as3a: pep.seq('"I wouldn\'t abandon my fellow soldiers in the field of war." '),
//
p20as3b: pep.seq(),
//
p20as3c: pep.seq(),

  //p21

//s1

//C5’s searching gaze seemed to invade C0’s soul. 

p21as1a: pep.seq(myCon.c5,'’s searching gaze seemed to invade ',myCon.c0, '’s soul. '),
//
p21as1b: pep.seq(),
//
p21as1c: pep.seq(),

//s2

//But they could not -- thank the dogs -- detect the lie in it. 
p21as2a: pep.seq('But they could not -- thank the dogs -- detect the lie in it. '),
//
p21as2b: pep.seq(),
//
p21as2c: pep.seq(),

//s3

//C5 nodded approvingly.
p21as3a: pep.seq(myCon.c5, ' nodded approvingly. '),
//
p21as3b: pep.seq(),
//
p21as3c: pep.seq(),

  //p22

//s1

//“Knew I could count on you. 

p22as1a: pep.seq('"Knew I could count on you. '),
//
p22as1b: pep.seq(),
//
p22as1c: pep.seq(),

//s2

//Carry on. 
p22as2a: pep.seq('Carry on. '),
//
p22as2b: pep.seq(),
//
p22as2c: pep.seq(),

//s3

//Look sharp.”
p22as3a: pep.seq('Look sharp." '),
//
p22as3b: pep.seq(),
//
p22as3c: pep.seq(),

  //p23

//s1

//C0 walked past the command desk and up the curling stairs to their post. 

p23as1a: pep.seq(myCon.c0, ' walked past the command desk and up the curling stairs to ', myPep.pronouns.their(myCon.c0g), ' post. '),
//
p23as1b: pep.seq(),
//
p23as1c: pep.seq(),

//s2

//The sweat was real. 
p23as2a: pep.seq('The sweat was real. '),
//
p23as2b: pep.seq(),
//
p23as2c: pep.seq(),

//s3

//They were trembling. 
p23as3a: pep.seq(myCon.c0, ' was trembling. '),
//
p23as3b: pep.seq(),
//
p23as3c: pep.seq(),

//s4

//Was war really that imminent? 
p23as4a: pep.seq('Was war really that imminent? '),
//
p23as4b: pep.seq(),
//
p23as4c: pep.seq(),

//s5

//How could they get out of it? 
p23as5a: pep.seq('How could they get out of it? '),
//
p23as5b: pep.seq(),
//
p23as5c: pep.seq(),


  //p24

//s1

//Peering across the dusty landscape surrounding the compound, C0 idly wondered if they could fling themselves from the ramparts. 
p24as1a: pep.seq('Peering across the dusty landscape surrounding the compound, ', myCon.c0, ' idly wondered if ', myPep.pronouns.they(myCon.c0g), ' could fling ', myPep.pronouns.themself(myCon.c0g), ' from the ramparts. '),
//
p24as1b: pep.seq(),
//
p24as1c: pep.seq(),

//s2

//After all, the hospitalized could not fight.  
p24as2a: pep.seq('After all, the hospitalized could not fight. '),
//
p24as2b: pep.seq(),
//
p24as2c: pep.seq(),

//s3

//Then again, they could end up dead, or worse, especially if the invading forces took control of the hospital. 
p24as3a: pep.seq('Then again, ', myPep.pronouns.they(myCon.c0g), ' could end up dead, or worse, especially if the invading forces took control of the hospital. '),
//
p24as3b: pep.seq(),
//
p24as3c: pep.seq(),

//s4

//BRETHRENS were not kind in civil war. 
p24as4a: pep.seq(myPep.setting.brethrens(myCon.setVar), ' were not kind in civil war. '),
//
p24as4b: pep.seq(),
//
p24as4c: pep.seq(),

//s5

//There were no rules to follow. 
p24as5a: pep.seq('There were no rules to follow. '),
//
p24as5b: pep.seq(),
//
p24as5c: pep.seq(),

//s6

//Dead could be buried -- wounded needed care.
p24as6a: pep.seq('Dead could be buried -- wounded needed care. '),
//
p24as6b: pep.seq(),
//
p24as6c: pep.seq(),
  
  //p25

//s1

//Looking down the thirty foot drop though, C0 decided that perhaps suicide was not the best way. 
p25as1a: pep.seq('Looking down the thirty foot drop though, ', myCon.c0, ' decided that perhaps suicide was not the best way. '),
//
p25as1b: pep.seq(),
//
p25as1c: pep.seq(),

//s2

//There had to be another. 
p25as2a: pep.seq('There had to be another. '),
//
p25as2b: pep.seq(),
//
p25as2c: pep.seq(),

//s3

//Could they request a transfer to the medical or other nonviolent units? 
p25as3a: pep.seq('Could ', myPep.pronouns.they(myCon.c0g), ' request a transfer to the medical or other nonviolent units? '),
//
p25as3b: pep.seq(),
//
p25as3c: pep.seq(),

//s4

//They could -- but they would be laughed at, for they had no marketable skills.
p25as4a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' could -- but ', myPep.pronouns.they(myCon.c0g), ' would be laughed at, for ', myPep.pronouns.they(myCon.c0g), ' had no marketable skills. '),
//
p25as4b: pep.seq(),
//
p25as4c: pep.seq(),

  //p26

//s1

//They could join the revolution, although then they’d just be fighting for the otherside, and C0 doubted that they were kinder. 
p26as1a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' could join the revolution, although then ', myPep.pronouns.they(myCon.c0g), '’d just be fighting for the otherside, and ', myCon.c0, ' doubted that they were kinder. '),
//
p26as1b: pep.seq(),
//
p26as1c: pep.seq(),

//s2

//What about an extended vacation, perhaps to the mortal realm? 
p26as2a: pep.seq('What about an extended vacation, perhaps to the mortal realm? '),
//
p26as2b: pep.seq(),
//
p26as2c: pep.seq(),

//s3

//Or joining a scouting mission to the other side? 
p26as3a: pep.seq('Or joining a scouting mission to the other side? '),
//
p26as3b: pep.seq(),
//
p26as3c: pep.seq(),

//s4

//Either could help C0 forego battle, although C0 had a feeling that no vacations were being approved in this particular moment in time. 
p26as4a: pep.seq('Either could help ', myCon.c0, ' forego battle, although ', myCon.c0, ' had a feeling that no vacations were being approved in this particular moment in time. '),
//
p26as4b: pep.seq(),
//
p26as4c: pep.seq(),

//s5

//You know, pending civil war and all. 
p26as5a: pep.seq('You know, pending civil war and all. '),
//
p26as5b: pep.seq(),
//
p26as5c: pep.seq(),


  //p27

//s1

//“Did you hear they closed the portals down?”  
p27as1a: pep.seq('"Did you hear they closed the portals down?" '),
//
p27as1b: pep.seq(),
//
p27as1c: pep.seq(),

//s2

//C6’s voice came from behind C0, startling them.
p27as2a: pep.seq(myCon.c6, '\'s voice came from behind ', myCon.c0, ', startling them.'),
//
p27as2b: pep.seq(),
//
p27as2c: pep.seq(),

  //p28

//s1

//“What?” 
p28as1a: pep.seq('"What?" '),
//
p28as1b: pep.seq(),
//
p28as1c: pep.seq(),

//s2

//C0 said incredulously. 
p28as2a: pep.seq(myCon.c0, ' said incredulously. '),
//
p28as2b: pep.seq(),
//
p28as2c: pep.seq(),
  
  
//p29

//s1

//“Yeah, no one is supposed to leave or enter until this whole mess with C1 is done.” 
p29as1a: pep.seq('"Yeah, no one is supposed to leave or enter until this whole mess with ', myCon.c1, ' is done." '),
//
p29as1b: pep.seq(),
//
p29as1c: pep.seq(),

//s2

//C6 huffed on a cigarette, releasing a long trail of white smoke. 
p29as2a: pep.seq(myCon.c6, ' huffed on a cigarette, releasing a long trail of white smoke. '),
//
p29as2b: pep.seq(),
//
p29as2c: pep.seq(),

  //p30

//s1

//“Well, fuck me.” 
p30as1a: pep.seq('"Well, fuck me." '),
//
p30as1b: pep.seq(),
//
p30as1c: pep.seq(),

//s2

//C0 said. 
p30as2a: pep.seq(myCon.c0, ' said. '),
//
p30as2b: pep.seq(),
//
p30as2c: pep.seq(),

//s3

//“This is serious then.”
p30as3a: pep.seq('"This is serious then." '),
//
p30as3b: pep.seq(),
//
p30as3c: pep.seq(),

  //p31

//s1

//“Sure seems that way. 
p31as1a: pep.seq('"Sure seems that way. '),
//
p31as1b: pep.seq(),
//
p31as1c: pep.seq(),

//s2

//It’s a fucking shame, too. 
p31as2a: pep.seq('It\'s a fucking shame, too. '),
//
p31as2b: pep.seq(),
//
p31as2c: pep.seq(),

//s3

//I’d hate to get blood on my brand new dagger.” 
p31as3a: pep.seq('I\'d hate to get blood on my brand new dagger." '),
//
p31as3b: pep.seq(),
//
p31as3c: pep.seq(),

//s4

//C6 hefted a shiny blade from their waist belt. 
p31as4a: pep.seq(myCon.c6, ' hefted a shiny blade from their waist belt. '),
//
p31as4b: pep.seq(),
//
p31as4c: pep.seq(),

//s5

//“But I guess if traitor blood is the only way to whet it, count me in.”
p31as5a: pep.seq('"But I guess if traitor blood is the only way to whet it, count me in."'),
//
p31as5b: pep.seq(),
//
p31as5c: pep.seq(),


  //p32

//s1

//C0 paused a moment, weighing what to say to that ridiculously, flat toned desire to murder. 

p32as1a: pep.seq(myCon.c0, ' paused a moment, weighing what to say to that ridiculously, flat toned desire to murder. '),
//
p32as1b: pep.seq(),
//
p32as1c: pep.seq(),

//s2

//They settled on an ambivalent nod and grunt.
p32as2a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' settled on an ambivalent nod and grunt. '),
//
p32as2b: pep.seq(),
//
p32as2c: pep.seq(),

  //p33

//s1

//“I’m going to walk the ledge.” 

p33as1a: pep.seq('"I\'m going to walk the ledge." '),
//
p33as1b: pep.seq(),
//
p33as1c: pep.seq(),

//s2

//C6 said, pocketing the blade. 
p33as2a: pep.seq(myCon.c6, ' said, pocketing the blade. '),
//
p33as2b: pep.seq(),
//
p33as2c: pep.seq(),

//s3

//“Commander thinks you’re going to break first. 
p33as3a: pep.seq('"Commander thinks you’re going to break first. '),
//
p33as3b: pep.seq(),
//
p33as3c: pep.seq(),

//s4

//You aren’t, are you, C0? 
p33as4a: pep.seq('You aren’t, are you, ', myCon.c0, '? '),
//
p33as4b: pep.seq(),
//
p33as4c: pep.seq(),

//s5

//We gotta have each other’s backs up here."
p33as5a: pep.seq('We gotta have each other’s backs up here." '),
//
p33as5b: pep.seq(),
//
p33as5c: pep.seq(),


  //p34

//s1

//“Fuck C5.” 
p34as1a: pep.seq('"Fuck ', myCon.c5, '." '),
//
p34as1b: pep.seq(),
//
p34as1c: pep.seq(),

//s2

//C0 said rashly. 
p34as2a: pep.seq(myCon.c0, ' said rashly. '),
//
p34as2b: pep.seq(),
//
p34as2c: pep.seq(),

//s3

//Boldly.  
p34as3a: pep.seq('Boldly. '),
//
p34as3b: pep.seq(),
//
p34as3c: pep.seq(),

//s4

//“They don't know shit about me. 
p34as4a: pep.seq('"They don\'t know shit about me. '),
//
p34as4b: pep.seq(),
//
p34as4c: pep.seq(),

//s5

//I got your back.” 
p34as5a: pep.seq('I got your back." '),
//
p34as5b: pep.seq(),
//
p34as5c: pep.seq(),

  //s6

//C0 felt the lie like a wet blanket. 
p34as6a: pep.seq(myCon.c0, ' felt the lie like a wet blanket. '),
//
p34as6b: pep.seq(),
//
p34as6c: pep.seq(),

//s7

//But C6 had an unblooded knife, and C0 wasn’t about to be its maiden voyage.
p34as7a: pep.seq('But ', myCon.c6, ' had an unblooded knife, and ', myCon.c0, ' wasn\'t about to be its maiden voyage. '),
//
p34as7b: pep.seq(),
//
p34as7c: pep.seq(),

  //p35

//s1

//C6’s eyes widened at the outright insult to the commander. 
p35as1a: pep.seq(myCon.c6, '\'s eyes widened at the outright insult to the commander. '),
//
p35as1b: pep.seq(),
//
p35as1c: pep.seq(),

//s2

//That, apparently, took courage to say out loud. 
p35as2a: pep.seq('That, apparently, took courage to say out loud. '),
//
p35as2b: pep.seq(),
//
p35as2c: pep.seq(),

//s3

//C6 slapped C0 on the back. 
p35as3a: pep.seq(myCon.c6, ' slapped ', myCon.c0, ' on the back. '),
//
p35as3b: pep.seq(),
//
p35as3c: pep.seq(),

//s4

//“I knew they were full of shit. 
p35as4a: pep.seq('"I knew they were full of shit. '),
//
p35as4b: pep.seq(),
//
p35as4c: pep.seq(),

//s5

//Be back in a bit.” 
p35as5a: pep.seq('Be back in a bit." '),
//
p35as5b: pep.seq(),
//
p35as5c: pep.seq(),



  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a),//, aText.p1as1b),//, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a),//, aText.p1as2b),//, aText.p1as2c),
  p1as3: pep.choice(aText.p1as3a),//, aText.p1as3b),//, aText.p1as3c),
  
  p2as1: pep.choice(aText.p2as1a),//, aText.p2as1b),//, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a),//, aText.p2as2b),//, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a),//, aText.p2as3b),//, aText.p2as3c),
  
  p3as1: pep.choice(aText.p3as1a),//, aText.p3as1b),//, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a),//, aText.p3as2b),//, aText.p3as2c),
  p3as3: pep.choice(aText.p3as3a),//, aText.p3as3b),//, aText.p3as3c),
  p3as4: pep.choice(aText.p3as4a),//, aText.p3as4b),//, aText.p3as4c),
  p3as5: pep.choice(aText.p3as5a),//, aText.p3as5b),//, aText.p3as5c),

  p4as1: pep.choice(aText.p4as1a),//, aText.p4as1b),//, aText.p4as1c),
  p4as2: pep.choice(aText.p4as2a),//, aText.p4as2b),//, aText.p4as2c),
  p4as3: pep.choice(aText.p4as3a),//, aText.p4as3b),//, aText.p4as3c),
  p4as4: pep.choice(aText.p4as4a),//, aText.p4as4b),//, aText.p4as4c),
  
  p5as1: pep.choice(aText.p5as1a),//, aText.p5as1b),//, aText.p5as1c),
  p5as2: pep.choice(aText.p5as2a),//, aText.p5as2b),//, aText.p5as2c),
  p5as3: pep.choice(aText.p5as3a),//, aText.p5as3b),//, aText.p5as3c),
  p5as4: pep.choice(aText.p5as4a),//, aText.p5as4b),//, aText.p5as4c),

  p6as1: pep.choice(aText.p6as1a),//, aText.p6as1b),//, aText.p6as1c),
  p6as2: pep.choice(aText.p6as2a),//, aText.p6as2b),//, aText.p6as2c),
  p6as3: pep.choice(aText.p6as3a),//, aText.p6as3b),//, aText.p6as3c),
  p6as4: pep.choice(aText.p6as4a),//, aText.p6as4b),//, aText.p6as4c),

  p7as1: pep.choice(aText.p7as1a),//, aText.p7as1b),//, aText.p7as1c),
  p7as2: pep.choice(aText.p7as2a),//, aText.p7as2b),//, aText.p7as2c),

  p8as1: pep.choice(aText.p8as1a),//, aText.p8as1b),//, aText.p8as1c),
  p8as2: pep.choice(aText.p8as2a),//, aText.p8as2b),//, aText.p8as2c),
  p8as3: pep.choice(aText.p8as3a),//, aText.p8as3b),//, aText.p8as3c),
  p8as4: pep.choice(aText.p8as4a),//, aText.p8as4b),//, aText.p8as4c),
  p8as5: pep.choice(aText.p8as5a),//, aText.p8as5b),//, aText.p8as5c),
  p8as6: pep.choice(aText.p8as6a),//, aText.p8as6b),//, aText.p8as6c),
  p8as7: pep.choice(aText.p8as7a),//, aText.p8as7b),//, aText.p8as7c),
  
  p9as1: pep.choice(aText.p9as1a),//, aText.p9as1b),//, aText.p9as1c),
  p9as2: pep.choice(aText.p9as2a),//, aText.p9as2b),//, aText.p9as2c),
  p9as3: pep.choice(aText.p9as3a),//, aText.p9as3b),//, aText.p9as3c),
  
  p10as1: pep.choice(aText.p10as1a),//, aText.p10as1b),//, aText.p10as1c),
  p10as2: pep.choice(aText.p10as2a),//, aText.p10as2b),//, aText.p10as2c),
  p10as3: pep.choice(aText.p10as3a),//, aText.p10as3b),//, aText.p10as3c),

  p11as1: pep.choice(aText.p11as1a),//, aText.p11as1b),//, aText.p11as1c),
  p11as2: pep.choice(aText.p11as2a),//, aText.p11as2b),//, aText.p11as2c),

  p12as1: pep.choice(aText.p12as1a),//, aText.p12as1b),//, aText.p12as1c),
  p12as2: pep.choice(aText.p12as2a),//, aText.p12as2b),//, aText.p12as2c),
  p12as3: pep.choice(aText.p12as3a),//, aText.p12as3b),//, aText.p12as3c),

  p13as1: pep.choice(aText.p13as1a),//, aText.p13as1b),//, aText.p13as1c),
  p13as2: pep.choice(aText.p13as2a),//, aText.p13as2b),//, aText.p13as2c),
  p13as3: pep.choice(aText.p13as3a),//, aText.p13as3b),//, aText.p13as3c),
  p13as4: pep.choice(aText.p13as4a),//, aText.p13as4b),//, aText.p13as4c),
  p13as5: pep.choice(aText.p13as5a),//, aText.p13as5b),//, aText.p13as5c),
  p13as6: pep.choice(aText.p13as6a),//, aText.p13as6b),//, aText.p13as6c),
  p13as7: pep.choice(aText.p13as7a),//, aText.p13as7b),//, aText.p13as7c),
  p13as8: pep.choice(aText.p13as8a),//, aText.p13as8b),//, aText.p13as8c),

  p14as1: pep.choice(aText.p14as1a),//, aText.p14as1b),//, aText.p14as1c),
  p14as2: pep.choice(aText.p14as2a),//, aText.p14as2b),//, aText.p14as2c),
  p14as3: pep.choice(aText.p14as3a),//, aText.p14as3b),//, aText.p14as3c),
  p14as4: pep.choice(aText.p14as4a),//, aText.p14as4b),//, aText.p14as4c),

  p15as1: pep.choice(aText.p15as1a),//, aText.p15as1b),//, aText.p15as1c),
  p15as2: pep.choice(aText.p15as2a),//, aText.p15as2b),//, aText.p15as2c),
  p15as3: pep.choice(aText.p15as3a),//, aText.p15as3b),//, aText.p15as3c),
  p15as4: pep.choice(aText.p15as4a),//, aText.p15as4b),//, aText.p15as4c),
  p15as5: pep.choice(aText.p15as5a),//, aText.p15as5b),//, aText.p15as5c),

  p16as1: pep.choice(aText.p16as1a),//, aText.p16as1b),//, aText.p16as1c),
  p16as2: pep.choice(aText.p16as2a),//, aText.p16as2b),//, aText.p16as2c),
  p16as3: pep.choice(aText.p16as3a),//, aText.p16as3b),//, aText.p16as3c),

  p17as1: pep.choice(aText.p17as1a),//, aText.p17as1b),//, aText.p17as1c),
  p17as2: pep.choice(aText.p17as2a),//, aText.p17as2b),//, aText.p17as2c),
  p17as3: pep.choice(aText.p17as3a),//, aText.p17as3b),//, aText.p17as3c),
  p17as4: pep.choice(aText.p17as4a),//, aText.p17as4b),//, aText.p17as4c),

  p18as1: pep.choice(aText.p18as1a),//, aText.p18as1b),//, aText.p18as1c),
  p18as2: pep.choice(aText.p18as2a),//, aText.p18as2b),//, aText.p18as2c),
  p18as3: pep.choice(aText.p18as3a),//, aText.p18as3b),//, aText.p18as3c),

  p19as1: pep.choice(aText.p19as1a),//, aText.p19as1b),//, aText.p19as1c),
  p19as2: pep.choice(aText.p19as2a),//, aText.p19as2b),//, aText.p19as2c),
  p19as3: pep.choice(aText.p19as3a),//, aText.p19as3b),//, aText.p19as3c),

  p20as1: pep.choice(aText.p20as1a),//, aText.p20as1b),//, aText.p20as1c),
  p20as2: pep.choice(aText.p20as2a),//, aText.p20as2b),//, aText.p20as2c),
  p20as3: pep.choice(aText.p20as3a),//, aText.p20as3b),//, aText.p20as3c),

  p21as1: pep.choice(aText.p21as1a),//, aText.p21as1b),//, aText.p21as1c),
  p21as2: pep.choice(aText.p21as2a),//, aText.p21as2b),//, aText.p21as2c),
  p21as3: pep.choice(aText.p21as3a),//, aText.p21as3b),//, aText.p21as3c),

  p22as1: pep.choice(aText.p22as1a),//, aText.p22as1b),//, aText.p22as1c),
  p22as2: pep.choice(aText.p22as2a),//, aText.p22as2b),//, aText.p22as2c),
  p22as3: pep.choice(aText.p22as3a),//, aText.p22as3b),//, aText.p22as3c),

  p23as1: pep.choice(aText.p23as1a),//, aText.p23as1b),//, aText.p23as1c),
  p23as2: pep.choice(aText.p23as2a),//, aText.p23as2b),//, aText.p23as2c),
  p23as3: pep.choice(aText.p23as3a),//, aText.p23as3b),//, aText.p23as3c),
  p23as4: pep.choice(aText.p23as4a),//, aText.p23as4b),//, aText.p23as4c),
  p23as5: pep.choice(aText.p23as5a),//, aText.p23as5b),//, aText.p23as5c),

  p24as1: pep.choice(aText.p24as1a),//, aText.p24as1b),//, aText.p24as1c),
  p24as2: pep.choice(aText.p24as2a),//, aText.p24as2b),//, aText.p24as2c),
  p24as3: pep.choice(aText.p24as3a),//, aText.p24as3b),//, aText.p24as3c),
  p24as4: pep.choice(aText.p24as4a),//, aText.p24as4b),//, aText.p24as4c),
  p24as5: pep.choice(aText.p24as5a),//, aText.p24as5b),//, aText.p24as5c),
  p24as6: pep.choice(aText.p24as6a),//, aText.p24as6b),//, aText.p24as6c),

  p25as1: pep.choice(aText.p25as1a),//, aText.p25as1b),//, aText.p25as1c),
  p25as2: pep.choice(aText.p25as2a),//, aText.p25as2b),//, aText.p25as2c),
  p25as3: pep.choice(aText.p25as3a),//, aText.p25as3b),//, aText.p25as3c),
  p25as4: pep.choice(aText.p25as4a),//, aText.p25as4b),//, aText.p25as4c),

  p26as1: pep.choice(aText.p26as1a),//, aText.p26as1b),//, aText.p26as1c),
  p26as2: pep.choice(aText.p26as2a),//, aText.p26as2b),//, aText.p26as2c),
  p26as3: pep.choice(aText.p26as3a),//, aText.p26as3b),//, aText.p26as3c),
  p26as4: pep.choice(aText.p26as4a),//, aText.p26as4b),//, aText.p26as4c),
  p26as5: pep.choice(aText.p26as5a),//, aText.p26as5b),//, aText.p26as5c),

  p27as1: pep.choice(aText.p27as1a),//, aText.p27as1b),//, aText.p27as1c),
  p27as2: pep.choice(aText.p27as2a),//, aText.p27as2b),//, aText.p27as2c),

  p28as1: pep.choice(aText.p28as1a),//, aText.p28as1b),//, aText.p28as1c),
  p28as2: pep.choice(aText.p28as2a),//, aText.p28as2b),//, aText.p28as2c),

  p29as1: pep.choice(aText.p29as1a),//, aText.p29as1b),//, aText.p29as1c),
  p29as2: pep.choice(aText.p29as2a),//, aText.p29as2b),//, aText.p29as2c),

  p30as1: pep.choice(aText.p30as1a),//, aText.p30as1b),//, aText.p30as1c),
  p30as2: pep.choice(aText.p30as2a),//, aText.p30as2b),//, aText.p30as2c),
  p30as3: pep.choice(aText.p30as3a),//, aText.p30as3b),//, aText.p30as3c),

  p31as1: pep.choice(aText.p31as1a),//, aText.p31as1b),//, aText.p31as1c),
  p31as2: pep.choice(aText.p31as2a),//, aText.p31as2b),//, aText.p31as2c),
  p31as3: pep.choice(aText.p31as3a),//, aText.p31as3b),//, aText.p31as3c),
  p31as4: pep.choice(aText.p31as4a),//, aText.p31as4b),//, aText.p31as4c),
  p31as5: pep.choice(aText.p31as5a),//, aText.p31as5b),//, aText.p31as5c),

  p32as1: pep.choice(aText.p32as1a),//, aText.p32as1b),//, aText.p32as1c),
  p32as2: pep.choice(aText.p32as2a),//, aText.p32as2b),//, aText.p32as2c),

  p33as1: pep.choice(aText.p33as1a),//, aText.p33as1b),//, aText.p33as1c),
  p33as2: pep.choice(aText.p33as2a),//, aText.p33as2b),//, aText.p33as2c),
  p33as3: pep.choice(aText.p33as3a),//, aText.p33as3b),//, aText.p33as3c),
  p33as4: pep.choice(aText.p33as4a),//, aText.p33as4b),//, aText.p33as4c),
  p33as5: pep.choice(aText.p33as5a),//, aText.p33as5b),//, aText.p33as5c),
 
  p34as1: pep.choice(aText.p34as1a),//, aText.p34as1b),//, aText.p34as1c),
  p34as2: pep.choice(aText.p34as2a),//, aText.p34as2b),//, aText.p34as2c),
  p34as3: pep.choice(aText.p34as3a),//, aText.p34as3b),//, aText.p34as3c),
  p34as4: pep.choice(aText.p34as4a),//, aText.p34as4b),//, aText.p34as4c),
  p34as5: pep.choice(aText.p34as5a),//, aText.p34as5b),//, aText.p34as5c),
  p34as6: pep.choice(aText.p34as6a),//, aText.p34as6b),//, aText.p34as6c),
  p34as7: pep.choice(aText.p34as7a),//, aText.p34as7b),//, aText.p34as7c),

  p35as1: pep.choice(aText.p35as1a),//, aText.p35as1b),//, aText.p35as1c),
  p35as2: pep.choice(aText.p35as2a),//, aText.p35as2b),//, aText.p35as2c),
  p35as3: pep.choice(aText.p35as3a),//, aText.p35as3b),//, aText.p35as3c),
  p35as4: pep.choice(aText.p35as4a),//, aText.p35as4b),//, aText.p35as4c),
  p35as5: pep.choice(aText.p35as5a),//, aText.p35as5b),//, aText.p35as5c),

  
};



let content = pep.seq(myPep.html.p('o'),
                       
 
          aPar.p1as1, aPar.p1as2, aPar.p1as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p2as1, aPar.p2as2, aPar.p2as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),
                      
          aPar.p3as1, aPar.p3as2, aPar.p3as3, aPar.p3as4, aPar.p3as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p4as1, aPar.p4as2, aPar.p4as3, aPar.p4as4,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p5as1, aPar.p5as2, aPar.p5as3, aPar.p5as4, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p6as1, aPar.p6as2, aPar.p6as3, aPar.p6as4, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p7as1, aPar.p7as2, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p8as1, aPar.p8as2, aPar.p8as3, aPar.p8as4, aPar.p8as5, aPar.p8as6, aPar.p8as7,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p9as1, aPar.p9as2, aPar.p9as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),
                      
          aPar.p10as1, aPar.p10as2, aPar.p10as3,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p11as1, aPar.p11as2, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p12as1, aPar.p12as2, aPar.p12as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p13as1, aPar.p13as2, aPar.p13as3, aPar.p13as4, aPar.p13as5, aPar.p13as6, aPar.p13as7, aPar.p13as8,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p14as1, aPar.p14as2, aPar.p14as3, aPar.p14as4, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p15as1, aPar.p15as2, aPar.p15as3, aPar.p15as4, aPar.p15as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p16as1, aPar.p16as2, aPar.p16as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p17as1, aPar.p17as2, aPar.p17as3, aPar.p17as4,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p18as1, aPar.p18as2, aPar.p18as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p19as1, aPar.p19as2, aPar.p19as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p20as1, aPar.p20as2, aPar.p20as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p21as1, aPar.p21as2, aPar.p21as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p22as1, aPar.p22as2, aPar.p22as3,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p23as1, aPar.p23as2, aPar.p23as3, aPar.p23as4, aPar.p23as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p24as1, aPar.p24as2, aPar.p24as3, aPar.p24as4, aPar.p24as5, aPar.p24as6,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p25as1, aPar.p25as2, aPar.p25as3, aPar.p25as4, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p26as1, aPar.p26as2, aPar.p26as3, aPar.p26as4, aPar.p26as5, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p27as1, aPar.p27as2, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p28as1, aPar.p28as2,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p29as1, aPar.p29as2, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p30as1, aPar.p30as2, aPar.p30as3, 
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p31as1, aPar.p31as2, aPar.p31as3, aPar.p31as4, aPar.p31as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p32as1, aPar.p32as2,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p33as1, aPar.p33as2, aPar.p33as3, aPar.p33as4, aPar.p33as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),
                      
          aPar.p34as1, aPar.p34as2, aPar.p34as3, aPar.p34as4, aPar.p34as5, aPar.p34as6, aPar.p34as7,
                       
          myPep.html.p('c'), myPep.html.p('o'),

          aPar.p35as1, aPar.p35as2, aPar.p35as3, aPar.p35as4, aPar.p35as5,
                       
          myPep.html.p('c'), myPep.html.p('o'),

                       myPep.html.p('c'), 
);

module.exports = {
  text: content,
  title: title,
  
};