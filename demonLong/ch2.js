
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

p1as1a: pep.seq('"Is ', myCon.c1, ' ', myPep.dict.insane, '?" '),
p1as1b: pep.seq('"Do you think this whole ', myCon.c1, ' stuff is ',myPep.dict.legit, '?" '),
p1as1c: pep.seq('"What do you think about our ', myPep.dict.impending, ' ', myPep.dict.doom, '?" '),

p1as2a: pep.seq(myCon.c0, ' ', myPep.dict.asked, ', ', myPep.dict.gnawing, ' ', myPep.pronouns.their(myCon.c0g), ' way through a piece of ', myPep.dict.overcooked, ' meat. '),
p1as2b: pep.seq(myCon.c0, ' ', myPep.dict.wondered, ' as ', myPep.pronouns.they(myCon.c0g), ' ', myPep.dict.gnawed, ' the final bites of ', myPep.pronouns.their(myCon.c0g), ' meal. '),
p1as2c: pep.seq('The question hung in the air as ', myCon.c0, ' took another bite. '),

p1as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' ', myPep.dict.looked, ' at ', myPep.pronouns.their(myCon.c0g), ' friend, ', myCon.c4, ', for reassurance. '),
p1as3b: pep.seq(myCon.c0, ' glanced at ',myCon.c4, ', weighing ', myPep.pronouns.their(myCon.c4g), ' expression. '),
p1as3c: pep.seq(myCon.c4, ' ', myPep.edIng(myPep.dict.cackling), '. '),

//p2
 
p2as1a: pep.seq('"', pep.capitalize(myPep.dict.perhaps), '." '),
p2as1b: pep.seq('"Does it matter?" '),
p2as1c: pep.seq('"You ', myPep.dict.always, ' ask the ', myPep.dict.tough, ' questions, ', myCon.c0, '." '),

p2as2a: pep.seq(myCon.c4, ' ', myPep.dict.wondered, ', ', myPep.dict.pushing, ' the tray away. '),
p2as2b: pep.seq(myCon.c4, ' pushed ', myPep.pronouns.their(myCon.c4g), ' ', myPep.dict.tray, ' away and ', myPep.dict.crossed, ' ', myPep.pronouns.their(myCon.c4g), ' arms. '),
p2as2c: pep.seq(myCon.c4, ' ',myPep.dict.grinned, ' a ', myPep.dict.toothy, ' ', myPep.dict.grin, ' at ', myCon.c0, '. '),

p2as3a: pep.seq('"But is anyone going to stop ',myPep.pronouns.them(myCon.c1g),'?" '),
p2as3b: pep.seq(myCon.c4, ' was ', myPep.aAn(myPep.dict.intimidating), ' ', myPep.dict.sight, ', even with ', myPep.dict.grape, ' ', myPep.dict.jelly, ' ', myPep.dict.drippingFrom, ' ', myPep.pronouns.their(myCon.c4g), ' ', myPep.dict.chin, '. '),
p2as3c: pep.seq('"There’s ', myPep.dict.nothing, ' we can do about it." '),

  //p3

p3as1a: pep.seq('That was the ', myPep.dict.issue, ', after all. '),
p3as1b: pep.seq('It was the ', myPep.dict.issue, ' on every ', myPep.setting.brethren(myCon.setVar), '\'s mind. '),
p3as1c: pep.seq('It was what kept ', myPep.setting.brethrens(myCon.setVar), ' up at night. '),

p3as2a: pep.seq('Would anyone ', myPep.dict.stop, ' ', myCon.c1, '’s ', myPep.dict.planned, ' ', myPep.dict.rebellion, ' against the ', myPep.setting.boss(myCon.setVar), '? '),
p3as2b: pep.seq('Would ', myCon.c1, ' ', myPep.dict.retreat, ' before it was too late? '),
p3as2c: pep.seq('Would anyone put ', myCon.c1, ' in ',myPep.pronouns.their(myCon.c1g), ' place? '),

p3as3a: pep.seq('Or were ', myPep.setting.brethrens(myCon.setVar), ' really that ', myPep.dict.frustrated, ' with the current ', myPep.setting.boss(myCon.setVar), '\'s style of rule? '),
p3as3b: pep.seq('Or were ', myPep.setting.brethrens(myCon.setVar), ' really that ', myPep.dict.apathetic, ' to ', myPep.dict.impending, ' ', myPep.dict.war, '?'),
p3as3c: pep.seq('Was it even possible? '),

p3as4a: pep.seq('It was ', myPep.dict.tough, ' to ', myPep.dict.ascertain, ', because there was ', myPep.dict.always, ' a level of ', myPep.dict.trouble, ' in ', myPep.setting.realm(myCon.setVar), ' -- but ', myPep.dict.somehow, ', it ', myPep.dict.seemed, ' like this time was ', myPep.dict.serious, '. '),
p3as4b: pep.seq('There had ', myPep.dict.always, ' been a level of ', myPep.dict.trouble, ' in ', myPep.setting.realm(myCon.setVar), ', but this time seemed more ', myPep.dict.serious, '. '),
p3as4c: pep.seq('The entire ', myPep.dict.realm, ' of ', myPep.setting.realm(myCon.setVar), ' ', myPep.dict.teetered, ' on ', myPep.dict.uncertainty, ' and ', myPep.dict.impending, ' ', myPep.dict.war, '. '),

p3as5a: pep.seq('Like they ', myPep.dict.could, ' ', myPep.dict.actually, ' mean it.'),
p3as5b: pep.seq('Like it ', myPep.dict.could, ' ', myPep.dict.actually, ' ', myPep.dict.happen, '. '),
p3as5c: pep.seq('This ', myPep.dict.time, ' was ', myPep.dict.dangerously, ' ', myPep.dict.different, '. '),

//p4 -- stopped here for words

p4as1a: pep.seq(myCon.c0, ' ', myPep.dict.savored, ' ', myPep.pronouns.their(myCon.c0g), ' ', myPep.dict.last, ' ', myPep.dict.morsel, '. '),
p4as1b: pep.seq(myCon.c0, ' was ', myPep.dict.suddenly, ' no longer ', myPep.dict.hungry, '. '),
p4as1c: pep.seq('The ', myPep.dict.food, ' had ', myPep.dict.lost, ' its ', myPep.dict.appeal, '. '),

p4as2a: pep.seq('"I feel like this ', myPep.dict.impending, ' ', myPep.dict.war, ' spells trouble. '),
p4as2b: pep.seq('"I hate this ', pep.opt(pep.seq(myPep.dict.steaming, ' ', myPep.dict.pile, ' of ')), myPep.dict.shit, '. '),
p4as2c: pep.seq('"I ', pep.choice("hope", "wish"), ' they would all ', myPep.dict.selfImmolate, '. '),

p4as3a: pep.seq('We\'re all going to be dragged into this steaming pile of dog-shit infighting. '),
p4as3b: pep.seq('You know who dies when rulers fight? It\'s us, damn it.'),
p4as3c: pep.seq('Who cares who the ', myPep.setting.boss(myCon.setVar), ' is? '),

p4as4a: pep.seq('I don\'t particularly care who wipes their ass at the top of the food chain -- it doesn’t really affect me from day to day." '),
p4as4b: pep.seq('The ruling class doesn\'t affect our shitty lives one way or another." '),
p4as4c: pep.seq('I could go my whole life not caring about them, but then they drag us into their infighting." '),

  //p5

p5as1a: pep.seq(myCon.c4, ' barked a harsh laugh in response. '),
p5as1b: pep.seq(myCon.c4, ' laughed at myCon.c0\'s bluntness. '),
p5as1c: pep.seq(myCon.c4, ' nodded heartily in agreement. '),

p5as2a: pep.seq('"The truest thing that anyone has ever said. '),
p5as2b: pep.seq('"How right you are. '),
p5as2c: pep.seq('"Truer words have never been spoken. '),

p5as3a: pep.seq('Break\'s over. '),
p5as3b: pep.seq('I think our time\'s about up. '),
p5as3c: pep.seq('Looks like it\'s about that time. '),

p5as4a: pep.seq('Come on -- let\'s go before ', myCon.c5, ' gets raging mad." '),
p5as4b: pep.seq('Let\'s get back before ', myCon.c5,' notices." '),
p5as4c: pep.seq('At least it\'s only a few hours to midnight." '),

  //p6
  
p6as1a: pep.seq(pep.choice(pep.seq(myCon.c4, ' and ', myCon.c0), 'They'), ' rose to place their trash in the bin and left the cafeteria to the dim skies outside. '),
p6as1b: pep.seq('Leaving their trash behind for the staff to clean, ',myCon.c4, ' and ', myCon.c0, ' left the cafeteria for the barren outdoors. '),
p6as1c: pep.seq('Lingering as long as they could, they finally left the cafeteria behind and went outside. '),

p6as2a: pep.seq('It somehow seemed creepier than usual, glowing a putrid green in the dusk sky. '),
p6as2b: pep.seq('The sky was a putrid, off shade of green. '),
p6as2c: pep.seq('The sky looked ominous and strangely colored -- more so than usual. '),

p6as3a: pep.seq('"Catch you later." '),
p6as3b: pep.seq('"See you tomorrow." '),
p6as3c: pep.seq('"Peace be with you." '),

p6as4a: pep.seq(myCon.c4, ' said warmly to ', myCon.c0, ' as ', myPep.pronouns.they(myCon.c4g), ' strode off towards the west tower. '),
p6as4b: pep.seq(myCon.c4, ' left ', myCon.c0, ', veering right towards the west tower. '),
p6as4c: pep.seq(myCon.c4, ' put ', myPep.pronouns.they(myCon.c4g), ' cap on and strode off towards the west tower. '),

  //p7

p7as1a: pep.seq('Guard duty for the compound was not particularly hard -- even with tensions higher than normal. '),
p7as1b: pep.seq('Guard duty was really at the bottom of the barrel for military jobs. '),
p7as1c: pep.seq('Guard duty was a joke of a job. '),

p7as2a: pep.seq('The military were the only ', myPep.setting.brethrens(myCon.setVar), ' allowed to carry weapons, so that meant that there was a pretty big barrier between insurgents, rabble-rousers, and troublemakers, and the military. '),
p7as2b: pep.seq('Only soldiers could carry weapons, so even the biggest revolts could be put down easily. '),
p7as2c: pep.seq('But every member of the military received a weapon, and no one else had them -- which made ', myCon.c0, ' feel safe. '),

  //p8

p8as1a: pep.seq('But guard duty was worrying, given the potential for insurrection. '),
p8as1b: pep.seq('Guard duty became a lot more important when rebellion was on the horizon. '),
p8as1c: pep.seq('Guards were on the front lines of defense, and ', myCon.c0, ' knew it. '),

p8as2a: pep.seq(myCon.c0, ' was worried that ', myPep.pronouns.they(myCon.c0g),' might actually have to use ', myPep.pronouns.their(myCon.c0g),' weapons. '),
p8as2b: pep.seq(myCon.c0, ' worried about whether ', myPep.pronouns.they(myCon.c0g),' would actually be able to kill if needed. '),
p8as2c: pep.seq(myCon.c0, ' didn\'t want to fight if worse came to worse. '),

p8as3a: pep.seq('As a pacifist, that was exceptionally unnerving. '),
p8as3b: pep.seq(myCon.c0, 'didn\'t want to shed blood. '),
p8as3c: pep.seq(myCon.c0, ' abhorred violence. '),
 
p8as4a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' had only taken this job for the pay, and because ', myPep.pronouns.they(myCon.c0g), ' were pressured to do so by ', myPep.pronouns.their(myCon.c0g), ' parents. '),
p8as4b: pep.seq('Without pressure from ', myPep.pronouns.their(myCon.c0g), ' parents, ', myCon.c0, ' never would have enlisted. '),
p8as4c: pep.seq(myCon.c0, ' only enlisted because of the free housing. '),
  
p8as5a: pep.seq('But there was no way in ', myPep.setting.realm(myCon.setVar), ', that ',myCon.c0, ' would willingly attack fellow ', myPep.setting.brethrens(myCon.setVar), '. '),
p8as5b: pep.seq('A civil war was somehow far worse than fighting imagined invaders from other realms. '),
p8as5c: pep.seq(myCon.c0, ' just couldn\'t kill their fellow ', myPep.setting.brethrens(myCon.setVar), '. '),

p8as6a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' would rather die or be imprisoned for treason. '),
p8as6b: pep.seq(myCon.c0, ' wished that ', myPep.pronouns.they(myCon.c0g), ' could quit, although it would mean death or imprisonment at the hand of the court. '),
p8as6c: pep.seq(myCon.c0, ' thought death or imprisonment might be better than shedding ', myPep.setting.brethren(myCon.setVar), ' blood. '),

p8as7a: pep.seq('Given the pending war, it may be the former. '),
p8as7b: pep.seq('Either would be better than this current unease. '),
p8as7c: pep.seq('What would ', myCon.c0, '\'s parents think? '),

//p9

p9as1a: pep.seq('"', myCon.c0, '! I need to talk to you!" '),
p9as1b: pep.seq('"Oy! Get over here!" '),
p9as1c: pep.seq('"Hey, shit head! Come here a second." '),
 
p9as2a: pep.seq('The commander, ', myCon.c5, ', barked, as ', myCon.c0, ' ducked through the doorway to resume ', myPep.pronouns.their(myCon.c0g), ' post. '),
p9as2b: pep.seq(myCon.c5, ' shouted at ', myCon.c0, '. '),
p9as2c: pep.seq(myCon.c5, ' spotted ', myCon.c0, ' with a shout. '),

p9as3a: pep.seq(myCon.c0, ' looked up, surprised. '),
p9as3b: pep.seq('The noise startled ', myCon.c0, '. '),
p9as3c: pep.seq(myCon.c0, '\'s stomach churned with surprise and trepidation. '),

  //p10

p10as1a: pep.seq('"Sure, sarge, what\'s up?" '),
p10as1b: pep.seq('"How\'s it going, sarge?" '),
p10as1c: pep.seq('"How can I help you?" '),

p10as2a: pep.seq(myCon.c0, ' asked. '),
p10as2b: pep.seq(myCon.c0, ' looked genially at ', myCon.c5, '. '),
p10as2c: pep.seq(myCon.c5, ' shot ', myCon.c0, ' a dirty look. '),

p10as3a: pep.seq(pep.capitalize(myPep.pronouns.their(myCon.c0g)), ' stomach was letting ', myPep.pronouns.them(myCon.c0g), ' know that this may be ', myPep.pronouns.their(myCon.c0g), ' worst fear come to life. '),
p10as3b: pep.seq(myCon.c0, ' felt ', myPep.pronouns.their(myCon.c0g), ' courage waver. '),
p10as3c: pep.seq(myCon.c0, ' was suddenly hyper aware of ', myPep.pronouns.their(myCon.c0g), ' sweaty palms and inadequate stature. '),

  //p11

p11as1a: pep.seq('"Have you heard all this nonsense about ',myCon.c1, ' recently?" '),
p11as1b: pep.seq('"Have you heard about this impending tomfoolery?" '),
p11as1c: pep.seq('"Have you heard about ', myCon.c1, '?" '),

p11as2a: pep.seq(myCon.c5, ' asked with a growl, and ', myCon.c0, ' shrugged noncommittally. '),
p11as2b: pep.seq(myCon.c5, ' growled. '),
p11as2c: pep.seq(myCon.c5, ' adjusted their glasses and fixed their stare on ', myCon.c0, '. '),

  //p12
p12as1a: pep.seq('"A bit, here and there. '),
p12as1b: pep.seq('"You mean about the rebellion? '),
p12as1c: pep.seq('"Another upstart? '),

p12as2a: pep.seq('Not much. '),
p12as2b: pep.seq('That\'s news to me.'),
p12as2c: pep.seq('I assumed it was just talk. '),

p12as3a: pep.seq('Why?" '),
p12as3b: pep.seq('Is it serious?" '),
p12as3c: pep.seq('Do you think we should worry?" '),

  //p13

p13as1a: pep.seq('"Well, knowing your past..." '),
p13as1b: pep.seq('"Listen, ',myCon.c0, '..." '),
p13as1c: pep.seq('"So, look..." '),

p13as2a: pep.seq(myCon.c5, ' trailed off as if trying to find a delicate way to state something offensive. '),
p13as2b: pep.seq(myCon.c5, ' paused as if gathering courage to say something. '),
p13as2c: pep.seq(myCon.c5, ' took a breath. '),

p13as3a: pep.seq('Though ', myCon.c5, ' had never been the polite sort. '),
p13as3b: pep.seq(myCon.c0, ' wondered what ', myCon.c5, ' was about to drop on ', myPep.pronouns.them(myCon.c0g), '. '),
p13as3c: pep.seq('The silence was awkward. '),

p13as4a: pep.seq('"No bullshit alright?" '),
p13as4b: pep.seq('"This is kinda hard to say, but..." '),
p13as4c: pep.seq('"I don\'t want to be that commander, but..." '),

p13as5a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c5g)), ' settled on cutting to the chase. '),
p13as5b: pep.seq(myCon.c5, ' continued. '),
p13as5c: pep.seq(myCon.c5, ' grinned sheepishly. '),

p13as6a: pep.seq('If this comes to blows, you know we’re on the front lines. '),
p13as6b: pep.seq('"You know we\'re the first line of defense, right?  '),
p13as6c: pep.seq('"If you spot something unusual on your shift... '),

p13as7a: pep.seq('You can’t hesitate. '),
p13as7b: pep.seq('You can\'t back down. '),
p13as7c: pep.seq('You can\'t run away. '),

p13as8a: pep.seq('Not like you did..." '),
p13as8b: pep.seq('You haven\'t exactly prove yourself in the past." '),
p13as8c: pep.seq('You don\'t even think about it." '),
  
  //p14

p14as1a: pep.seq('"No, commander. '),
p14as1b: pep.seq('"I would never, commander. '),
p14as1c: pep.seq('"You don\'t need to worry about me. '),

p14as2a: pep.seq('Of course not." '),
p14as2b: pep.seq('You can trust me." '), 
p14as2c: pep.seq('That was one time." '),
 
p14as3a: pep.seq(myCon.c0, ' cut ', myCon.c5, ' off before ', myPep.pronouns.they(myCon.c5g), ' could reiterate what ', myCon.c0, ' had failed to do. '),
p14as3b: pep.seq(myCon.c0, ' reassured the commander. '),
p14as3c: pep.seq(myCon.c0, ' blushed with embarrassment at being called out. '),

p14as4a: pep.seq(myCon.c0, ' felt the falseness of the words as they left ', myPep.pronouns.their(myCon.c0g), ' mouth. '),
p14as4b: pep.seq(myCon.c0, ' knew as soon as the words came out, that they were a lie.'),
p14as4c: pep.seq(myCon.c0, ' was lying, but it didn\'t matter.'),
  
  //p15

p15as1a: pep.seq('"No freezing. '),
p15as1b: pep.seq('"No thinking. '),
p15as1c: pep.seq('"Not a flinch from you. '),

p15as2a: pep.seq('No moral qualms. '),
p15as2b: pep.seq('I know you\'ve got those deep thoughts and all... '),
p15as2c: pep.seq('You might be the sensitive one, but... '),

p15as3a: pep.seq('You do what needs to be done and you put those halfwits in their place -- most likely, a grave. '),
p15as3b: pep.seq('You put this rebellion down if it comes to your front door. '),
p15as3c: pep.seq('Those rebels deserve everything they\'ve got coming to them. '),

p15as4a: pep.seq('You hear me? '),
p15as4b: pep.seq('You understand? '),
p15as4c: pep.seq('They\'re a waste of breath and space. '),

p15as5a: pep.seq('It’s us or them." '),
p15as5b: pep.seq('We are law and order." '),
p15as5c: pep.seq('This is what we were made for." '),
  
  //p16

p16as1a: pep.seq('"Yes, commander." '),
p16as1b: pep.seq('"Of course." '),
p16as1c: pep.seq('"I won\'t let you down." '),

p16as2a: pep.seq(myCon.c0, '\'s palms were itchy and a sheen of sweat was breaking out across ', myPep.pronouns.their(myCon.c0g), ' skin. '),
p16as2b: pep.seq(myCon.c0, ' was more than ready to get out of this conversation. '),
p16as2c: pep.seq(myCon.c0, '\'s mouth was full of ash. '),

p16as3a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' wondered if ', myCon.c5, ' noticed. '),
p16as3b: pep.seq('"Thank you for bringing this to my attention." '),
p16as3c: pep.seq(myCon.c0, ' felt their knees shaking just a little bit. '),
  
  //p17

p17as1a: pep.seq('"You have duties." '),
p17as1b: pep.seq('"Your duties are the most important." '),
p17as1c: pep.seq('"Our duties are above all else." '),

p17as2a: pep.seq(myCon.c5, ' finished. '),
p17as2b: pep.seq(myCon.c5, ' grunted at ', myCon.c0, '. '),
p17as2c: pep.seq(myCon.c0, ' nodded in agreement. '),

p17as3a: pep.seq('"And you will die either doing them or refusing them. '),
p17as3b: pep.seq('"If you shirk them, you will die. '),
p17as3c: pep.seq('"It is duty or death. '),

p17as4a: pep.seq('It\'s your choice." '),
p17as4b: pep.seq('You can choose." '),
p17as4c: pep.seq('You understand?" '),

  //p18

p18as1a: pep.seq('"I\'m sorry?" '),
p18as1b: pep.seq('"Excuse me?" '),
p18as1c: pep.seq('"Pardon?" '),

p18as2a: pep.seq(myCon.c0, ' asked. '),
p18as2b: pep.seq(myCon.c0, ' was confused. '),
p18as2c: pep.seq(myCon.c0, ' was unsure what ', myCon.c5, ' had just uttered. '),

p18as3a: pep.seq('Did the commander just say that ', myPep.pronouns.they(myCon.c0g), ' would die in battle? '),
p18as3b: pep.seq('Did the commander just threaten ', myPep.pronouns.them(myCon.c0), '? '),
p18as3c: pep.seq('Did the commander really just say that? '),

  //p19

p19as1a: pep.seq('"What I mean is, if you refuse, or stall, or fuck around when it\'s time to fight, you\'re dead. '),
p19as1b: pep.seq('"It\'s fight or die. '),
p19as1c: pep.seq('"Yeah, I didn\'t stutter. '),

  
p19as2a: pep.seq('Literally. '),
p19as2b: pep.seq('It\'s true. '),
p19as2c: pep.seq('I\'m not fucking around. '),

p19as3a: pep.seq('I will kill you." '),
p19as3b: pep.seq('You will be thrown into the pit quicker than I can say "Go!" if you refuse to fight." '),
p19as3c: pep.seq('Failing to fight is punishable by death." '),

  //p20

p20as1a: pep.seq('"We\'re a team, commander." '),
p20as1b: pep.seq('"We\'re all in this together." '),
p20as1c: pep.seq('"Understood." '),

p20as2a: pep.seq(myCon.c0, ' mustered all of the courage ', myPep.pronouns.they(myCon.c0g), ' could to make it sound convincing. '),
p20as2b: pep.seq(myCon.c0, ' knew that myCon.c5 was dead serious. '),
p20as2c: pep.seq(myCon.c0, ' felt the sweats come in ', myPep.pronouns.their(myCon.c0), ' fear. '),

p20as3a: pep.seq('"I wouldn\'t abandon my fellow soldiers in the field of war." '),
p20as3b: pep.seq('"I would never do anything to endanger my squad." '),
p20as3c: pep.seq('"I would give my life for our ', myPep.setting.boss(myCon.setVar), '." '),

  //p21

p21as1a: pep.seq(myCon.c5,'’s searching gaze seemed to invade ',myCon.c0, '’s soul. '),
p21as1b: pep.seq(myCon.c5, ' stared menacingly at ', myCon.c0, '. '),
p21as1c: pep.seq('There was a moment of silence as ', myCon.c5, ' evaluated the truth of ', myCon.c0, '\'s statement. '),

p21as2a: pep.seq('But they could not -- thank the dogs -- detect the lie in it. '),
p21as2b: pep.seq('Thankfully, ', myCon.c5, ' seemed blissfully unaware of ', myCon.c0, '\'s nervousness. '),
p21as2c: pep.seq(myCon.c5, ' seemed ready to kill ', myCon.c0, ' at the slightest hint of doubt. '),

p21as3a: pep.seq(myCon.c5, ' nodded approvingly. '),
p21as3b: pep.seq(myCon.c5, ' smiled warmly at ', myCon.c0, '. '),
p21as3c: pep.seq(myCon.c5, ' seemed satisfied, though, and smiled. '),

  //p22

p22as1a: pep.seq('"Knew I could count on you. '),
p22as1b: pep.seq('"I knew they were liars up in command. '),
p22as1c: pep.seq('"No reason to doubt, is there. '),
 
p22as2a: pep.seq('Carry on. '),
p22as2b: pep.seq('Go on back to your post. '),
p22as2c: pep.seq('Be gone now. '),

p22as3a: pep.seq('Look sharp." '),
p22as3b: pep.seq('Stay ready." '),
p22as3c: pep.seq('I\'ll be up in a while." ' ),

  //p23

p23as1a: pep.seq(myCon.c0, ' walked past the command desk and up the curling stairs to ', myPep.pronouns.their(myCon.c0g), ' post. '),
p23as1b: pep.seq(myCon.c0, ' carried onwards up the stairs. '),
p23as1c: pep.seq(myCon.c0, ' left the command post and headed upstairs to ', myPep.pronouns.their(myCon.c0), ' guard station. '),
 
p23as2a: pep.seq('The sweat was real. '),
p23as2b: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0)), ' felt hot and cold at the same time. '),
p23as2c: pep.seq('Sweat poured off of ', myCon.c0, '. ' ),

p23as3a: pep.seq(myCon.c0, ' was trembling. '),
p23as3b: pep.seq('Shaking with fear, ', myPep.pronouns.they(myCon.c0), ' finished the climb upwards. '),
p23as3c: pep.seq('Shaking like a leaf, ', myCon.c0, ' wondered if anything would come of the pending conflict. '),

p23as4a: pep.seq('Was war really that imminent? '),
p23as4b: pep.seq('Was ', myCon.c1, ' really about to take down the ', myPep.setting.boss(myCon.setVar), '? '),
p23as4c: pep.seq('Could war be on the horizon? '),
 
p23as5a: pep.seq('How could they get out of it? '),
p23as5b: pep.seq('How would ', myCon.c0, ' find a way to avoid fighting? '),
p23as5c: pep.seq('Would this particular town be safe from the horrors of war? '),

  //p24

p24as1a: pep.seq('Peering across the dusty landscape surrounding the compound, ', myCon.c0, ' idly wondered if ', myPep.pronouns.they(myCon.c0g), ' could fling ', myPep.pronouns.themself(myCon.c0g), ' from the ramparts. '),
p24as1b: pep.seq(myCon.c0, ' contemplated suicide by rampart as ', myPep.pronouns.they(myCon.c0), ' scanned the dusty landscape. '),
p24as1c: pep.seq(myCon.c0, ' briefly wondered if death was better than war. '),
  
p24as2a: pep.seq('After all, the hospitalized could not fight. '),
p24as2b: pep.seq('Even if ', myPep.pronouns.they(myCon.c0), ' didn\'t die, ', myCon.c0, ' could at least avoid the fighting. '),
p24as2c: pep.seq('But what if ', myPep.pronouns.they(myCon.c0), ' failed even at suicide? '),

p24as3a: pep.seq('Then again, ', myPep.pronouns.they(myCon.c0g), ' could end up dead, or worse, especially if the invading forces took control of the hospital. '),
p24as3b: pep.seq('Or maybe invading forces would not look kindly at prisoners of war. '),
p24as3c: pep.seq('Likely, ', myPep.pronouns.they(myCon.c0), ' would be killed anyway by invading forces. '),
 
p24as4a: pep.seq(myPep.setting.brethrens(myCon.setVar), ' were not kind in civil war. '),
p24as4b: pep.seq(myPep.setting.brethrens(myCon.setVar), ' did not fuck around in times of war. '),
p24as4c: pep.seq(myCon.c0, ' would not last long in the hands of ', myPep.pronouns.their(myCon.c0), ' enemies. '),

p24as5a: pep.seq('There were no rules to follow. '),
p24as5b: pep.seq('There was no Geneva Convention in ', myPep.setting.realm(myCon.setVar), '. '),
p24as5c: pep.seq('There were no rules in civil war. '),

p24as6a: pep.seq('Dead could be buried -- wounded needed care. '),
p24as6b: pep.seq('And the dead were much easier to deal with than the wounded. '),
p24as6c: pep.seq('Prisoners were more expensive than mass graves. '),
  
  //p25

p25as1a: pep.seq('Looking down the thirty foot drop though, ', myCon.c0, ' decided that perhaps suicide was not the best way. '),
p25as1b: pep.seq('Looking down into the chasm, ', myCon.c0, ' decided that suicide was not for ', myPep.pronouns.them(myCon.c0), '. '),
p25as1c: pep.seq(myCon.c0, ' shied away from thoughts of suicide. '),

p25as2a: pep.seq('There had to be another. '),
p25as2b: pep.seq('There had to be a way to stay out of war that didn\'t result in pain or death. '),
p25as2c: pep.seq('Like momma always said, there\'s a better way to do things. '),

p25as3a: pep.seq('Could ', myPep.pronouns.they(myCon.c0g), ' request a transfer to the medical or other nonviolent units? '),
p25as3b: pep.seq('Maybe ', myPep.pronouns.they(myCon.c0), ' could request a transfer. '),
p25as3c: pep.seq('Maybe ', myPep.pronouns.they(myCon.c0), ' could request a promotion. '),
  
p25as4a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' could -- but ', myPep.pronouns.they(myCon.c0g), ' would be laughed at, for ', myPep.pronouns.they(myCon.c0g), ' had no marketable skills. '),
p25as4b: pep.seq('The commander wouldn\'t go for it. ' ),
p25as4c: pep.seq('That plan was doomed to fail. '),

  //p26

p26as1a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' could join the revolution, although then ', myPep.pronouns.they(myCon.c0g), '’d just be fighting for the otherside, and ', myCon.c0, ' doubted that they were kinder. '),
p26as1b: pep.seq(myCon.c0, ' contemplated joining the rebellion. '),
p26as1c: pep.seq(myCon.c0, ' wondered if joining the rebellion would somehow be safer. '),

p26as2a: pep.seq('What about an extended vacation, perhaps to the mortal realm? '),
p26as2b: pep.seq('What about vacationing to the mortal realm? '),
p26as2c: pep.seq('What about sneaking away to the mortal realm? '),

p26as3a: pep.seq('Or joining a scouting mission to the other side? '),
p26as3b: pep.seq('Or joining an expedition to somewhere remote? '),
p26as3c: pep.seq('Or joining the fire crews instead? '),

p26as4a: pep.seq('Either could help ', myCon.c0, ' forego battle, although ', myCon.c0, ' had a feeling that no vacations were being approved in this particular moment in time. '),
p26as4b: pep.seq('Either would help ', myCon.c0, ' avoid battle, but they weren\'t exactly easy solutions. '),
p26as4c: pep.seq(myCon.c0, ' knew that these were just fantasies. '),

p26as5a: pep.seq('You know, pending civil war and all. '),
p26as5b: pep.seq('Pending civil war really narrowed the options for escape. '),
p26as5c: pep.seq('It was far too late to escape the situation.  '),

  //p27

p27as1a: pep.seq('"Did you hear they closed the portals down?" '),
p27as1b: pep.seq('"Did you hear about the portals?" '),
p27as1c: pep.seq('"Did you hear the mortal world\'s been cut off from us?" '),

p27as2a: pep.seq(myCon.c6, '\'s voice came from behind ', myCon.c0, ', startling them.'),
p27as2b: pep.seq(myCon.c6, ' spoke behind ', myCon.c0, '. '),
p27as2c: pep.seq(myCon.c6, ' blew cigar smoke in ', myCon.c0, '\'s face as ', myPep.pronouns.they(myCon.c6), ' approached. '),

  //p28

p28as1a: pep.seq('"What?" '),
p28as1b: pep.seq('"You\'re kidding." '),
p28as1c: pep.seq('"No way." '),

p28as2a: pep.seq(myCon.c0, ' said incredulously. '),
p28as2b: pep.seq(myCon.c0, ' was surprised. '),
p28as2c: pep.seq(myCon.c0, ' couldn\'t tell if ', myCon.c6, ' was kidding. '), 
  
//p29

p29as1a: pep.seq('"Yeah, no one is supposed to leave or enter until this whole mess with ', myCon.c1, ' is done." '),
p29as1b: pep.seq('"They\'ve got the portals under lock and key until ', myCon.c1, ' is dealt with." '),
p29as1c: pep.seq('"Yeah, portals are closed and there\'s a bounty on ', myCon.c1, ', too." '),

p29as2a: pep.seq(myCon.c6, ' huffed on a cigarette, releasing a long trail of white smoke. '),
p29as2b: pep.seq(myCon.c6, ' took another drag of ', myPep.pronouns.their(myCon.c6), ' cigar. '),
p29as2c: pep.seq(myCon.c6, ' nodded sagely. '),

  //p30

p30as1a: pep.seq('"Well, fuck me." '),
p30as1b: pep.seq('"Damn, that\'s crazy." '),
p30as1c: pep.seq('"Who would\'ve thought." ' ),

p30as2a: pep.seq(myCon.c0, ' said. '),
p30as2b: pep.seq(myCon.c0, ' chewed on the words for a moment. '),
p30as2c: pep.seq(myCon.c0, ' felt the unease grow inside ', myPep.pronouns.them(myCon.c0), '. ' ),

p30as3a: pep.seq('"This is serious then." '),
p30as3b: pep.seq('"That\'s unreal." '),
p30as3c: pep.seq('"I didn\'t think it was that serious." '),

  //p31

p31as1a: pep.seq('"Sure seems that way. '),
p31as1b: pep.seq('"War is imminent. '),
p31as1c: pep.seq('"Can\'t make this shit up. '),
 
p31as2a: pep.seq('It\'s a fucking shame, too. '),
p31as2b: pep.seq('It\'s so hard to imagine us at war. '),
p31as2c: pep.seq('I can\'t believe the ', myPep.setting.boss(myCon.setVar), ' let it get this far. '),

p31as3a: pep.seq('I\'d hate to get blood on my brand new dagger." '),
p31as3b: pep.seq('I didn\'t want to blood my new dagger on ', myPep.setting.brethrens(myCon.setVar), '." '),
p31as3c: pep.seq('I didn\'t actually want to use this dagger." '),

p31as4a: pep.seq(myCon.c6, ' hefted a shiny blade from ', myPep.pronouns.their(myCon.c6g), ' waist belt. '),
p31as4b: pep.seq(myCon.c6, ' displayed a bright new blade from ', myPep.pronouns.their(myCon.c6), ' belt. '),
p31as4c: pep.seq(myCon.c6, ' fingered a blade on ', myPep.pronouns.their(myCon.c6), ' belt. '),

p31as5a: pep.seq('"But I guess if traitor blood is the only way to whet it, count me in." '),
p31as5b: pep.seq('"I hope it does me good though, when the time comes." '),
p31as5c: pep.seq('"But that\'s what daggers are for, I guess." '),

  //p32

p32as1a: pep.seq(myCon.c0, ' paused a moment, weighing what to say to that ridiculously, flat toned desire to murder. '),
p32as1b: pep.seq(myCon.c0, ' gathered thoughts before speaking. '),
p32as1c: pep.seq(myCon.c0, ' wasn\'t sure how to respond. '),

p32as2a: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0g)), ' settled on an ambivalent nod and grunt. '),
p32as2b: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c0)), ' decided on a smile. '),
p32as2c: pep.seq('Smiling, ', myCon.c0, ' nodded at ', myCon.c6, '. ' ),

  //p33

p33as1a: pep.seq('"I\'m going to walk the ledge." '),
p33as1b: pep.seq('"I\'m off for a round." '),
p33as1c: pep.seq('"I will be back shortly." '),

p33as2a: pep.seq(myCon.c6, ' said, pocketing the blade. '),
p33as2b: pep.seq(myCon.c6, ' sheathed the blade. '),
p33as2c: pep.seq(myCon.c6, ' grinned at myCon.c0. '),

p33as3a: pep.seq('"Commander thinks you’re going to break first. '),
p33as3b: pep.seq('"', myCon.c6, ' says you\'re our first and biggest coward." '),
p33as3c: pep.seq('"', myCon.c6, ' is saying you\'ll break rank and run when the time comes." '),

p33as4a: pep.seq('You aren’t, are you, ', myCon.c0, '? '),
p33as4b: pep.seq('You won\'t, will you? '),
p33as4c: pep.seq('You wouldn\'t do that to me, though. '),

p33as5a: pep.seq('We gotta have each other’s backs up here." '),
p33as5b: pep.seq('We\'re like family." '),
p33as5c: pep.seq('I believe in you." '),

  //p34

p34as1a: pep.seq('"Fuck ', myCon.c5, '." '),
p34as1b: pep.seq('"Fuck this place." '),
p34as1c: pep.seq('"This place could burn up for all I care." '),

p34as2a: pep.seq(myCon.c0, ' said rashly. '),
p34as2b: pep.seq(myCon.c0, ' spoke without a waver in ', myPep.pronouns.their(myCon.c0), ' voice. '),
p34as2c: pep.seq(myCon.c0, ' did not hesitate to speak rashly. '),

p34as3a: pep.seq('Boldly. '),
p34as3b: pep.seq(myCon.c0, ' felt reckless. '),
p34as3c: pep.seq('With fervor. '),

p34as4a: pep.seq('"They don\'t know shit about me. '),
p34as4b: pep.seq('"They don\'t know me from a brick in the wall. '),
p34as4c: pep.seq('"They\'re full of shit. '),

p34as5a: pep.seq('I got your back." '),
p34as5b: pep.seq('I would never leave you." ' ),
p34as5c: pep.seq('I would never fuck you over." ' ),

p34as6a: pep.seq(myCon.c0, ' felt the lie like a wet blanket. '),
p34as6b: pep.seq(myCon.c0, ' knew ', myPep.pronouns.they(myCon.c0), ' were veering into dangerous territory. '),
p34as6c: pep.seq(myCon.c0, ' was straight up lying. '),

p34as7a: pep.seq('But ', myCon.c6, ' had an unblooded knife, and ', myCon.c0, ' wasn\'t about to be its maiden voyage. '),
p34as7b: pep.seq('But ', myCon.c6, ' had a knife, so honesty wasn\'t an option. '),
p34as7c: pep.seq('Anything to keep ', myPep.pronouns.them(myCon.c0), ' alive another day. '),

  //p35

p35as1a: pep.seq(myCon.c6, '\'s eyes widened at the outright insult to the commander. '),
p35as1b: pep.seq(myCon.c6, ' flinched when ', myCon.c0, ' insulted the commander. '),
p35as1c: pep.seq(myCon.c6, ' looked perplexed at ', myCon.c0, '\'s resolve. '),

p35as2a: pep.seq('That, apparently, took courage to say out loud. '),
p35as2b: pep.seq(pep.capitalize(myPep.pronouns.they(myCon.c6)), ' had not expected such furor from ', myCon.c1, '. '),
p35as2c: pep.seq(myCon.c6, ' was utterly taken aback by ', myCon.c0, '\'s boldness. '),

p35as3a: pep.seq(myCon.c6, ' slapped ', myCon.c0, ' on the back. '),
p35as3b: pep.seq(myCon.c6, ' grinned. '),
p35as3c: pep.seq(myCon.c6, ' seemed satisfied. '),

p35as4a: pep.seq('"I knew they were full of shit. '),
p35as4b: pep.seq('"I knew it. '),
p35as4c: pep.seq('"Atta boy. '),

p35as5a: pep.seq('Be back in a bit." '),
p35as5b: pep.seq('Be back soon." ' ),
p35as5c: pep.seq('Gonna go make my rounds." '),
  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a, aText.p1as1b, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a, aText.p1as2b, aText.p1as2c),
  p1as3: pep.choice(aText.p1as3a, aText.p1as3b, aText.p1as3c),
  
  p2as1: pep.choice(aText.p2as1a, aText.p2as1b, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a, aText.p2as2b, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a, aText.p2as3b, aText.p2as3c),
  
  p3as1: pep.choice(aText.p3as1a, aText.p3as1b, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a, aText.p3as2b, aText.p3as2c),
  p3as3: pep.choice(aText.p3as3a, aText.p3as3b, aText.p3as3c),
  p3as4: pep.choice(aText.p3as4a, aText.p3as4b, aText.p3as4c),
  p3as5: pep.choice(aText.p3as5a, aText.p3as5b, aText.p3as5c),

  p4as1: pep.choice(aText.p4as1a, aText.p4as1b, aText.p4as1c),
  p4as2: pep.choice(aText.p4as2a, aText.p4as2b, aText.p4as2c),
  p4as3: pep.choice(aText.p4as3a, aText.p4as3b, aText.p4as3c),
  p4as4: pep.choice(aText.p4as4a, aText.p4as4b, aText.p4as4c),
  
  p5as1: pep.choice(aText.p5as1a, aText.p5as1b, aText.p5as1c),
  p5as2: pep.choice(aText.p5as2a, aText.p5as2b, aText.p5as2c),
  p5as3: pep.choice(aText.p5as3a, aText.p5as3b, aText.p5as3c),
  p5as4: pep.choice(aText.p5as4a, aText.p5as4b, aText.p5as4c),

  p6as1: pep.choice(aText.p6as1a, aText.p6as1b, aText.p6as1c),
  p6as2: pep.choice(aText.p6as2a, aText.p6as2b, aText.p6as2c),
  p6as3: pep.choice(aText.p6as3a, aText.p6as3b, aText.p6as3c),
  p6as4: pep.choice(aText.p6as4a, aText.p6as4b, aText.p6as4c),

  p7as1: pep.choice(aText.p7as1a, aText.p7as1b, aText.p7as1c),
  p7as2: pep.choice(aText.p7as2a, aText.p7as2b, aText.p7as2c),

  p8as1: pep.choice(aText.p8as1a, aText.p8as1b, aText.p8as1c),
  p8as2: pep.choice(aText.p8as2a, aText.p8as2b, aText.p8as2c),
  p8as3: pep.choice(aText.p8as3a, aText.p8as3b, aText.p8as3c),
  p8as4: pep.choice(aText.p8as4a, aText.p8as4b, aText.p8as4c),
  p8as5: pep.choice(aText.p8as5a, aText.p8as5b, aText.p8as5c),
  p8as6: pep.choice(aText.p8as6a, aText.p8as6b, aText.p8as6c),
  p8as7: pep.choice(aText.p8as7a, aText.p8as7b, aText.p8as7c),
  
  p9as1: pep.choice(aText.p9as1a, aText.p9as1b, aText.p9as1c),
  p9as2: pep.choice(aText.p9as2a, aText.p9as2b, aText.p9as2c),
  p9as3: pep.choice(aText.p9as3a, aText.p9as3b, aText.p9as3c),
  
  p10as1: pep.choice(aText.p10as1a, aText.p10as1b, aText.p10as1c),
  p10as2: pep.choice(aText.p10as2a, aText.p10as2b, aText.p10as2c),
  p10as3: pep.choice(aText.p10as3a, aText.p10as3b, aText.p10as3c),

  p11as1: pep.choice(aText.p11as1a, aText.p11as1b, aText.p11as1c),
  p11as2: pep.choice(aText.p11as2a, aText.p11as2b, aText.p11as2c),

  p12as1: pep.choice(aText.p12as1a, aText.p12as1b, aText.p12as1c),
  p12as2: pep.choice(aText.p12as2a, aText.p12as2b, aText.p12as2c),
  p12as3: pep.choice(aText.p12as3a, aText.p12as3b, aText.p12as3c),

  p13as1: pep.choice(aText.p13as1a, aText.p13as1b, aText.p13as1c),
  p13as2: pep.choice(aText.p13as2a, aText.p13as2b, aText.p13as2c),
  p13as3: pep.choice(aText.p13as3a, aText.p13as3b, aText.p13as3c),
  p13as4: pep.choice(aText.p13as4a, aText.p13as4b, aText.p13as4c),
  p13as5: pep.choice(aText.p13as5a, aText.p13as5b, aText.p13as5c),
  p13as6: pep.choice(aText.p13as6a, aText.p13as6b, aText.p13as6c),
  p13as7: pep.choice(aText.p13as7a, aText.p13as7b, aText.p13as7c),
  p13as8: pep.choice(aText.p13as8a, aText.p13as8b, aText.p13as8c),

  p14as1: pep.choice(aText.p14as1a, aText.p14as1b, aText.p14as1c),
  p14as2: pep.choice(aText.p14as2a, aText.p14as2b, aText.p14as2c),
  p14as3: pep.choice(aText.p14as3a, aText.p14as3b, aText.p14as3c),
  p14as4: pep.choice(aText.p14as4a, aText.p14as4b, aText.p14as4c),

  p15as1: pep.choice(aText.p15as1a, aText.p15as1b, aText.p15as1c),
  p15as2: pep.choice(aText.p15as2a, aText.p15as2b, aText.p15as2c),
  p15as3: pep.choice(aText.p15as3a, aText.p15as3b, aText.p15as3c),
  p15as4: pep.choice(aText.p15as4a, aText.p15as4b, aText.p15as4c),
  p15as5: pep.choice(aText.p15as5a, aText.p15as5b, aText.p15as5c),

  p16as1: pep.choice(aText.p16as1a, aText.p16as1b, aText.p16as1c),
  p16as2: pep.choice(aText.p16as2a, aText.p16as2b, aText.p16as2c),
  p16as3: pep.choice(aText.p16as3a, aText.p16as3b, aText.p16as3c),

  p17as1: pep.choice(aText.p17as1a, aText.p17as1b, aText.p17as1c),
  p17as2: pep.choice(aText.p17as2a, aText.p17as2b, aText.p17as2c),
  p17as3: pep.choice(aText.p17as3a, aText.p17as3b, aText.p17as3c),
  p17as4: pep.choice(aText.p17as4a, aText.p17as4b, aText.p17as4c),

  p18as1: pep.choice(aText.p18as1a, aText.p18as1b, aText.p18as1c),
  p18as2: pep.choice(aText.p18as2a, aText.p18as2b, aText.p18as2c),
  p18as3: pep.choice(aText.p18as3a, aText.p18as3b, aText.p18as3c),

  p19as1: pep.choice(aText.p19as1a, aText.p19as1b, aText.p19as1c),
  p19as2: pep.choice(aText.p19as2a, aText.p19as2b, aText.p19as2c),
  p19as3: pep.choice(aText.p19as3a, aText.p19as3b, aText.p19as3c),

  p20as1: pep.choice(aText.p20as1a, aText.p20as1b, aText.p20as1c),
  p20as2: pep.choice(aText.p20as2a, aText.p20as2b, aText.p20as2c),
  p20as3: pep.choice(aText.p20as3a, aText.p20as3b, aText.p20as3c),

  p21as1: pep.choice(aText.p21as1a, aText.p21as1b, aText.p21as1c),
  p21as2: pep.choice(aText.p21as2a, aText.p21as2b, aText.p21as2c),
  p21as3: pep.choice(aText.p21as3a, aText.p21as3b, aText.p21as3c),

  p22as1: pep.choice(aText.p22as1a, aText.p22as1b, aText.p22as1c),
  p22as2: pep.choice(aText.p22as2a, aText.p22as2b, aText.p22as2c),
  p22as3: pep.choice(aText.p22as3a, aText.p22as3b, aText.p22as3c),

  p23as1: pep.choice(aText.p23as1a, aText.p23as1b, aText.p23as1c),
  p23as2: pep.choice(aText.p23as2a, aText.p23as2b, aText.p23as2c),
  p23as3: pep.choice(aText.p23as3a, aText.p23as3b, aText.p23as3c),
  p23as4: pep.choice(aText.p23as4a, aText.p23as4b, aText.p23as4c),
  p23as5: pep.choice(aText.p23as5a, aText.p23as5b, aText.p23as5c),

  p24as1: pep.choice(aText.p24as1a, aText.p24as1b, aText.p24as1c),
  p24as2: pep.choice(aText.p24as2a, aText.p24as2b, aText.p24as2c),
  p24as3: pep.choice(aText.p24as3a, aText.p24as3b, aText.p24as3c),
  p24as4: pep.choice(aText.p24as4a, aText.p24as4b, aText.p24as4c),
  p24as5: pep.choice(aText.p24as5a, aText.p24as5b, aText.p24as5c),
  p24as6: pep.choice(aText.p24as6a, aText.p24as6b, aText.p24as6c),

  p25as1: pep.choice(aText.p25as1a, aText.p25as1b, aText.p25as1c),
  p25as2: pep.choice(aText.p25as2a, aText.p25as2b, aText.p25as2c),
  p25as3: pep.choice(aText.p25as3a, aText.p25as3b, aText.p25as3c),
  p25as4: pep.choice(aText.p25as4a, aText.p25as4b, aText.p25as4c),

  p26as1: pep.choice(aText.p26as1a, aText.p26as1b, aText.p26as1c),
  p26as2: pep.choice(aText.p26as2a, aText.p26as2b, aText.p26as2c),
  p26as3: pep.choice(aText.p26as3a, aText.p26as3b, aText.p26as3c),
  p26as4: pep.choice(aText.p26as4a, aText.p26as4b, aText.p26as4c),
  p26as5: pep.choice(aText.p26as5a, aText.p26as5b, aText.p26as5c),

  p27as1: pep.choice(aText.p27as1a, aText.p27as1b, aText.p27as1c),
  p27as2: pep.choice(aText.p27as2a, aText.p27as2b, aText.p27as2c),

  p28as1: pep.choice(aText.p28as1a, aText.p28as1b, aText.p28as1c),
  p28as2: pep.choice(aText.p28as2a, aText.p28as2b, aText.p28as2c),

  p29as1: pep.choice(aText.p29as1a, aText.p29as1b, aText.p29as1c),
  p29as2: pep.choice(aText.p29as2a, aText.p29as2b, aText.p29as2c),

  p30as1: pep.choice(aText.p30as1a, aText.p30as1b, aText.p30as1c),
  p30as2: pep.choice(aText.p30as2a, aText.p30as2b, aText.p30as2c),
  p30as3: pep.choice(aText.p30as3a, aText.p30as3b, aText.p30as3c),

  p31as1: pep.choice(aText.p31as1a, aText.p31as1b, aText.p31as1c),
  p31as2: pep.choice(aText.p31as2a, aText.p31as2b, aText.p31as2c),
  p31as3: pep.choice(aText.p31as3a, aText.p31as3b, aText.p31as3c),
  p31as4: pep.choice(aText.p31as4a, aText.p31as4b, aText.p31as4c),
  p31as5: pep.choice(aText.p31as5a, aText.p31as5b, aText.p31as5c),

  p32as1: pep.choice(aText.p32as1a, aText.p32as1b, aText.p32as1c),
  p32as2: pep.choice(aText.p32as2a, aText.p32as2b, aText.p32as2c),

  p33as1: pep.choice(aText.p33as1a, aText.p33as1b, aText.p33as1c),
  p33as2: pep.choice(aText.p33as2a, aText.p33as2b, aText.p33as2c),
  p33as3: pep.choice(aText.p33as3a, aText.p33as3b, aText.p33as3c),
  p33as4: pep.choice(aText.p33as4a, aText.p33as4b, aText.p33as4c),
  p33as5: pep.choice(aText.p33as5a, aText.p33as5b, aText.p33as5c),
 
  p34as1: pep.choice(aText.p34as1a, aText.p34as1b, aText.p34as1c),
  p34as2: pep.choice(aText.p34as2a, aText.p34as2b, aText.p34as2c),
  p34as3: pep.choice(aText.p34as3a, aText.p34as3b, aText.p34as3c),
  p34as4: pep.choice(aText.p34as4a, aText.p34as4b, aText.p34as4c),
  p34as5: pep.choice(aText.p34as5a, aText.p34as5b, aText.p34as5c),
  p34as6: pep.choice(aText.p34as6a, aText.p34as6b, aText.p34as6c),
  p34as7: pep.choice(aText.p34as7a, aText.p34as7b, aText.p34as7c),

  p35as1: pep.choice(aText.p35as1a, aText.p35as1b, aText.p35as1c),
  p35as2: pep.choice(aText.p35as2a, aText.p35as2b, aText.p35as2c),
  p35as3: pep.choice(aText.p35as3a, aText.p35as3b, aText.p35as3c),
  p35as4: pep.choice(aText.p35as4a, aText.p35as4b, aText.p35as4c),
  p35as5: pep.choice(aText.p35as5a, aText.p35as5b, aText.p35as5c),

  
};


let aBlock = {
  p1a: pep.seq(aPar.p1as1, aPar.p1as2, aPar.p1as3,), 
  p2a: pep.seq(aPar.p2as1, aPar.p2as2, aPar.p2as3,),
  p3a: pep.seq(aPar.p3as1, aPar.p3as2, aPar.p3as3, aPar.p3as4, aPar.p3as5,),
  p4a: pep.seq(aPar.p4as1, aPar.p4as2, aPar.p4as3, aPar.p4as4,),
  p5a: pep.seq(aPar.p5as1, aPar.p5as2, aPar.p5as3, aPar.p5as4, ),
  p6a: pep.seq(aPar.p6as1, aPar.p6as2, aPar.p6as3, aPar.p6as4, ),
  p7a: pep.seq(aPar.p7as1, aPar.p7as2, ),
  p8a: pep.seq(aPar.p8as1, aPar.p8as2, aPar.p8as3, aPar.p8as4, aPar.p8as5, aPar.p8as6, aPar.p8as7,),
  p9a: pep.seq(aPar.p9as1, aPar.p9as2, aPar.p9as3, ),
  p10a: pep.seq(aPar.p10as1, aPar.p10as2, aPar.p10as3,), 
  p11a: pep.seq(aPar.p11as1, aPar.p11as2, ),
  p12a: pep.seq(aPar.p12as1, aPar.p12as2, aPar.p12as3, ),
  p13a: pep.seq(aPar.p13as1, aPar.p13as2, aPar.p13as3, aPar.p13as4, aPar.p13as5, aPar.p13as6, aPar.p13as7, aPar.p13as8,),
  p14a: pep.seq(aPar.p14as1, aPar.p14as2, aPar.p14as3, aPar.p14as4, ),
  p15a: pep.seq(aPar.p15as1, aPar.p15as2, aPar.p15as3, aPar.p15as4, aPar.p15as5,),
  p16a: pep.seq(aPar.p16as1, aPar.p16as2, aPar.p16as3, ),
  p17a: pep.seq(aPar.p17as1, aPar.p17as2, aPar.p17as3, aPar.p17as4,),
  p18a: pep.seq(aPar.p18as1, aPar.p18as2, aPar.p18as3, ),
  p19a: pep.seq(aPar.p19as1, aPar.p19as2, aPar.p19as3,),
  p20a: pep.seq(aPar.p20as1, aPar.p20as2, aPar.p20as3, ),
  p21a: pep.seq(aPar.p21as1, aPar.p21as2, aPar.p21as3, ),
  p22a: pep.seq(aPar.p22as1, aPar.p22as2, aPar.p22as3,),
  p23a: pep.seq(aPar.p23as1, aPar.p23as2, aPar.p23as3, aPar.p23as4, aPar.p23as5,),
  p24a: pep.seq(aPar.p24as1, aPar.p24as2, aPar.p24as3, aPar.p24as4, aPar.p24as5, aPar.p24as6,),
  p25a: pep.seq(aPar.p25as1, aPar.p25as2, aPar.p25as3, aPar.p25as4, ),
  p26a: pep.seq(aPar.p26as1, aPar.p26as2, aPar.p26as3, aPar.p26as4, aPar.p26as5, ),
  p27a: pep.seq(aPar.p27as1, aPar.p27as2,),
  p28a: pep.seq(aPar.p28as1, aPar.p28as2,),
  p29a: pep.seq(aPar.p29as1, aPar.p29as2,),
  p30a: pep.seq(aPar.p30as1, aPar.p30as2, aPar.p30as3,),
  p31a: pep.seq(aPar.p31as1, aPar.p31as2, aPar.p31as3, aPar.p31as4, aPar.p31as5,),
  p32a: pep.seq(aPar.p32as1, aPar.p32as2,),
  p33a: pep.seq(aPar.p33as1, aPar.p33as2, aPar.p33as3, aPar.p33as4, aPar.p33as5,),
  p34a: pep.seq(aPar.p34as1, aPar.p34as2, aPar.p34as3, aPar.p34as4, aPar.p34as5, aPar.p34as6, aPar.p34as7,),
  p35a: pep.seq(aPar.p35as1, aPar.p35as2, aPar.p35as3, aPar.p35as4, aPar.p35as5,),
  
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
          aBlock.p21a, myPep.html.p('co'), aBlock.p22a, myPep.html.p('co'), 
          aBlock.p23a, myPep.html.p('co'), aBlock.p24a, myPep.html.p('co'), 
          aBlock.p25a, myPep.html.p('co'), aBlock.p26a, myPep.html.p('co'), 
          aBlock.p27a, myPep.html.p('co'), aBlock.p28a, myPep.html.p('co'), 
          aBlock.p29a, myPep.html.p('co'), aBlock.p30a, myPep.html.p('co'), 
          aBlock.p31a, myPep.html.p('co'), aBlock.p32a, myPep.html.p('co'), 
          aBlock.p33a, myPep.html.p('co'), aBlock.p34a, myPep.html.p('co'), 
          aBlock.p35a, myPep.html.p('co'), myPep.html.p('c'), 
);

module.exports = {
  text: content,
  title: title,
  
};