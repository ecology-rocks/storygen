
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js'); //custom functions
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup


//Our main character struggles to name and stand strong for their pacifism in the face of growing tensions. Our character is told to 'do or die' in terms of joining the fight. They are left unsettled and looking for a way out.



//could be expanded more
let title = pep.choice("Trouble in Paradise", "Heart Of Stone", "The Liar's Touch");

//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  
//p1

p1as1a: pep.seq('"Is ', names.eddie, ' ', dict.insane, '?" '),
p1as1b: pep.seq('"Do you think this whole ', names.eddie, ' stuff is ',dict.legit, '?" '),
p1as1c: pep.seq('"What do you think about our ', dict.impending, ' ', dict.doom, '?" '),

p1as2a: pep.seq(names.jerry, ' ', dict.asked, ', ', dict.gnawing, ' ', pronouns.their(names.jerry0), ' way through a piece of ', dict.overcooked, ' meat. '),
p1as2b: pep.seq(names.jerry, ' ', dict.wondered, ' as ', pronouns.they(names.jerry0), ' ', dict.gnawed, ' the final bites of ', pronouns.their(names.jerry0), ' meal. '),
p1as2c: pep.seq('The question hung in the air as ', names.jerry, ' took another bite. '),

p1as3a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' ', dict.looked, ' at ', pronouns.their(names.jerry0), ' friend, ', names.reed, ', for reassurance. '),
p1as3b: pep.seq(names.jerry, ' glanced at ',names.reed, ', weighing ', pronouns.their(names.reed0), ' expression. '),
p1as3c: pep.seq(names.reed, ' ', myPep.edIng(dict.cackling), '. '),

//p2
 
p2as1a: pep.seq('"', pep.capitalize(dict.perhaps), '." '),
p2as1b: pep.seq('"Does it matter?" '),
p2as1c: pep.seq('"You ', dict.always, ' ask the ', dict.tough, ' questions, ', names.jerry, '." '),

p2as2a: pep.seq(names.reed, ' ', dict.wondered, ', ', dict.pushing, ' the tray away. '),
p2as2b: pep.seq(names.reed, ' pushed ', pronouns.their(names.reed0), ' ', dict.tray, ' away and ', dict.crossed, ' ', pronouns.their(names.reed0), ' arms. '),
p2as2c: pep.seq(names.reed, ' ',dict.grinned, ' a ', dict.toothy, ' ', dict.grin, ' at ', names.jerry, '. '),

p2as3a: pep.seq('"But is anyone going to stop ',pronouns.them(names.eddie0),'?" '),
p2as3b: pep.seq(names.reed, ' was ', myPep.aAn(dict.intimidating), ' ', dict.sight, ', even with ', dict.grape, ' ', dict.jelly, ' ', dict.drippingFrom, ' ', pronouns.their(names.reed0), ' ', dict.chin, '. '),
p2as3c: pep.seq('"There’s ', dict.nothing, ' we can do about it." '),

  //p3

p3as1a: pep.seq('That was the ', dict.issue, ', after all. '),
p3as1b: pep.seq('It was the ', dict.issue, ' on every ', world.brethren(names.realm), '\'s mind. '),
p3as1c: pep.seq('It was what kept ', world.brethrens(names.realm), ' up at night. '),

p3as2a: pep.seq('Would anyone ', dict.stop, ' ', names.eddie, '’s ', dict.planned, ' ', dict.rebellion, ' against the ', world.boss(names.realm), '? '),
p3as2b: pep.seq('Would ', names.eddie, ' ', dict.retreat, ' before it was too late? '),
p3as2c: pep.seq('Would anyone put ', names.eddie, ' in ',pronouns.their(names.eddie0), ' place? '),

p3as3a: pep.seq('Or were ', world.brethrens(names.realm), ' really that ', dict.frustrated, ' with the current ', world.boss(names.realm), '\'s style of rule? '),
p3as3b: pep.seq('Or were ', world.brethrens(names.realm), ' really that ', dict.apathetic, ' to ', dict.impending, ' ', dict.war, '?'),
p3as3c: pep.seq('Was it even possible? '),

p3as4a: pep.seq('It was ', dict.tough, ' to ', dict.ascertain, ', because there was ', dict.always, ' a level of ', dict.trouble, ' in ', world.realm(names.realm), ' -- but ', dict.somehow, ', it ', dict.seemed, ' like this time was ', dict.serious, '. '),
p3as4b: pep.seq('There had ', dict.always, ' been a level of ', dict.trouble, ' in ', world.realm(names.realm), ', but this time seemed more ', dict.serious, '. '),
p3as4c: pep.seq('The entire ', dict.realm, ' of ', world.realm(names.realm), ' ', dict.teetered, ' on ', dict.uncertainty, ' and ', dict.impending, ' ', dict.war, '. '),

p3as5a: pep.seq('Like they ', dict.could, ' ', dict.actually, ' mean it.'),
p3as5b: pep.seq('Like it ', dict.could, ' ', dict.actually, ' ', dict.happen, '. '),
p3as5c: pep.seq('This ', dict.time, ' was ', dict.dangerously, ' ', dict.different, '. '),

//p4 -- stopped here for words

p4as1a: pep.seq(names.jerry, ' ', dict.savored, ' ', pronouns.their(names.jerry0), ' ', dict.last, ' ', dict.morsel, '. '),
p4as1b: pep.seq(names.jerry, ' was ', dict.suddenly, ' no longer ', dict.hungry, '. '),
p4as1c: pep.seq('The ', dict.food, ' had ', dict.lost, ' its ', dict.appeal, '. '),

p4as2a: pep.seq('"I feel like this ', dict.impending, ' ', dict.war, ' spells trouble. '),
p4as2b: pep.seq('"I hate this ', pep.opt(pep.seq(dict.steaming, ' ', dict.pile, ' of ')), dict.shit, '. '),
p4as2c: pep.seq('"I ', pep.choice("hope", "wish"), ' they would all ', dict.selfImmolate, '. '),

p4as3a: pep.seq('We\'re all going to be ', dict.dragged, ' into this ', dict.steaming, ' ', dict.pile, ' of ', pep.choice(dict.dog, dict.animalList), '-', dict.shit, ' ', dict.war, '. '),
p4as3b: pep.seq('You know who ', dict.dies, ' when ', dict.rulers, ' fight? It\'s us, ', dict.damnIt, '.'),
p4as3c: pep.seq('Who cares who the ', world.boss(names.realm), ' is? '),

p4as4a: pep.seq('I don\'t ',pep.opt('particularly '),'care who ', dict.wipes, ' their ', dict.ass, ' at the top of the food chain -- it doesn’t really ', dict.affect, ' me from day to day." '),
p4as4b: pep.seq('The ', dict.rulers, ' don\'t ', dict.affect, ' our ', dict.shitty, ' lives one way or another." '),
p4as4c: pep.seq('I could go my ', dict.whole, ' ', dict.life, ' not ', dict.fretting, ' about ', dict.rulers, ', but then they ', dict.drag, ' us into their ', dict.war, '." '),

  //p5

p5as1a: pep.seq(names.reed, ' ', dict.barked, ' a ', dict.harsh, ' ', dict.laugh, pep.opt(' in response'), '. '),
p5as1b: pep.seq(names.reed, ' ', myPep.edIng(dict.cackling), ' at ', names.jerry, '\'s ', dict.bluntness, '. '),
p5as1c: pep.seq(names.reed, ' nodded ', dict.heartily, ' in ', dict.agreement, '. '),

p5as2a: pep.seq('"The ', dict.truest, ' thing that has ever been ', dict.spoken, '. '),
p5as2b: pep.seq('"How ', dict.correct, ' you are. '),
p5as2c: pep.seq('"Truer words have never been ', dict.spoken, '. '),

p5as3a: pep.seq('Break\'s ', dict.over, '. '),
p5as3b: pep.seq('I think our time is about ', dict.over, '. '),
p5as3c: pep.seq('Looks like it\'s about that time. '),

p5as4a: pep.seq('Come on -- let\'s go before ', names.kaden, ' gets ', dict.raging, ' ', dict.angry, '." '),
p5as4b: pep.seq('Let\'s get back before ', names.kaden,' notices." '),
p5as4c: pep.seq('At least it\'s only a ', dict.few, ' hours to midnight." '),

  //p6
  
p6as1a: pep.seq(pep.choice(pep.seq(names.reed, ' and ', names.jerry), 'They'), ' rose to place their trash in the bin and left the cafeteria to the dim skies outside. '),
p6as1b: pep.seq('Leaving their trash behind for the staff to clean, ',names.reed, ' and ', names.jerry, ' left the cafeteria for the barren outdoors. '),
p6as1c: pep.seq('Lingering as long as they could, they finally left the cafeteria behind and went outside. '),

p6as2a: pep.seq('It somehow seemed creepier than usual, glowing a putrid green in the dusk sky. '),
p6as2b: pep.seq('The sky was a putrid, off shade of green. '),
p6as2c: pep.seq('The sky looked ominous and strangely colored -- more so than usual. '),

p6as3a: pep.seq('"Catch you later." '),
p6as3b: pep.seq('"See you tomorrow." '),
p6as3c: pep.seq('"Peace be with you." '),

p6as4a: pep.seq(names.reed, ' said warmly to ', names.jerry, ' as ', pronouns.they(names.reed0), ' strode off towards the west tower. '),
p6as4b: pep.seq(names.reed, ' left ', names.jerry, ', veering right towards the west tower. '),
p6as4c: pep.seq(names.reed, ' put ', pronouns.they(names.reed0), ' cap on and strode off towards the west tower. '),

  //p7

p7as1a: pep.seq('Guard duty for the compound was not particularly hard -- even with tensions higher than normal. '),
p7as1b: pep.seq('Guard duty was really at the bottom of the barrel for military jobs. '),
p7as1c: pep.seq('Guard duty was a joke of a job. '),

p7as2a: pep.seq('The military were the only ', world.brethrens(names.realm), ' allowed to carry weapons, so that meant that there was a pretty big barrier between insurgents, rabble-rousers, and troublemakers, and the military. '),
p7as2b: pep.seq('Only soldiers could carry weapons, so even the biggest revolts could be put down easily. '),
p7as2c: pep.seq('But every member of the military received a weapon, and no one else had them -- which made ', names.jerry, ' feel safe. '),

  //p8

p8as1a: pep.seq('But guard duty was worrying, given the potential for insurrection. '),
p8as1b: pep.seq('Guard duty became a lot more important when rebellion was on the horizon. '),
p8as1c: pep.seq('Guards were on the front lines of defense, and ', names.jerry, ' knew it. '),

p8as2a: pep.seq(names.jerry, ' was worried that ', pronouns.they(names.jerry0),' might actually have to use ', pronouns.their(names.jerry0),' weapons. '),
p8as2b: pep.seq(names.jerry, ' worried about whether ', pronouns.they(names.jerry0),' would actually be able to kill if needed. '),
p8as2c: pep.seq(names.jerry, ' didn\'t want to fight if worse came to worse. '),

p8as3a: pep.seq('As a pacifist, that was exceptionally unnerving. '),
p8as3b: pep.seq(names.jerry, 'didn\'t want to shed blood. '),
p8as3c: pep.seq(names.jerry, ' abhorred violence. '),
 
p8as4a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' had only taken this job for the pay, and because ', pronouns.they(names.jerry0), ' were pressured to do so by ', pronouns.their(names.jerry0), ' parents. '),
p8as4b: pep.seq('Without pressure from ', pronouns.their(names.jerry0), ' parents, ', names.jerry, ' never would have enlisted. '),
p8as4c: pep.seq(names.jerry, ' only enlisted because of the free housing. '),
  
p8as5a: pep.seq('But there was no way in ', world.realm(names.realm), ', that ',names.jerry, ' would willingly attack fellow ', world.brethrens(names.realm), '. '),
p8as5b: pep.seq('A civil war was somehow far worse than fighting imagined invaders from other realms. '),
p8as5c: pep.seq(names.jerry, ' just couldn\'t kill their fellow ', world.brethrens(names.realm), '. '),

p8as6a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' would rather die or be imprisoned for treason. '),
p8as6b: pep.seq(names.jerry, ' wished that ', pronouns.they(names.jerry0), ' could quit, although it would mean death or imprisonment at the hand of the court. '),
p8as6c: pep.seq(names.jerry, ' thought death or imprisonment might be better than shedding ', world.brethren(names.realm), ' blood. '),

p8as7a: pep.seq('Given the pending war, it may be the former. '),
p8as7b: pep.seq('Either would be better than this current unease. '),
p8as7c: pep.seq('What would ', names.jerry, '\'s parents think? '),

//p9

p9as1a: pep.seq('"', names.jerry, '! I need to talk to you!" '),
p9as1b: pep.seq('"Oy! Get over here!" '),
p9as1c: pep.seq('"Hey, shit head! Come here a second." '),
 
p9as2a: pep.seq('The commander, ', names.kaden, ', barked, as ', names.jerry, ' ducked through the doorway to resume ', pronouns.their(names.jerry0), ' post. '),
p9as2b: pep.seq(names.kaden, ' shouted at ', names.jerry, '. '),
p9as2c: pep.seq(names.kaden, ' spotted ', names.jerry, ' with a shout. '),

p9as3a: pep.seq(names.jerry, ' looked up, surprised. '),
p9as3b: pep.seq('The noise startled ', names.jerry, '. '),
p9as3c: pep.seq(names.jerry, '\'s stomach churned with surprise and trepidation. '),

  //p10

p10as1a: pep.seq('"Sure, sarge, what\'s up?" '),
p10as1b: pep.seq('"How\'s it going, sarge?" '),
p10as1c: pep.seq('"How can I help you?" '),

p10as2a: pep.seq(names.jerry, ' asked. '),
p10as2b: pep.seq(names.jerry, ' looked genially at ', names.kaden, '. '),
p10as2c: pep.seq(names.kaden, ' shot ', names.jerry, ' a dirty look. '),

p10as3a: pep.seq(pep.capitalize(pronouns.their(names.jerry0)), ' stomach was letting ', pronouns.them(names.jerry0), ' know that this may be ', pronouns.their(names.jerry0), ' worst fear come to life. '),
p10as3b: pep.seq(names.jerry, ' felt ', pronouns.their(names.jerry0), ' courage waver. '),
p10as3c: pep.seq(names.jerry, ' was suddenly hyper aware of ', pronouns.their(names.jerry0), ' sweaty palms and inadequate stature. '),

  //p11

p11as1a: pep.seq('"Have you heard all this nonsense about ',names.eddie, ' recently?" '),
p11as1b: pep.seq('"Have you heard about this impending tomfoolery?" '),
p11as1c: pep.seq('"Have you heard about ', names.eddie, '?" '),

p11as2a: pep.seq(names.kaden, ' asked with a growl, and ', names.jerry, ' shrugged noncommittally. '),
p11as2b: pep.seq(names.kaden, ' growled. '),
p11as2c: pep.seq(names.kaden, ' adjusted their glasses and names their stare on ', names.jerry, '. '),

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
p13as1b: pep.seq('"Listen, ',names.jerry, '..." '),
p13as1c: pep.seq('"So, look..." '),

p13as2a: pep.seq(names.kaden, ' trailed off as if trying to find a delicate way to state something offensive. '),
p13as2b: pep.seq(names.kaden, ' paused as if gathering courage to say something. '),
p13as2c: pep.seq(names.kaden, ' took a breath. '),

p13as3a: pep.seq('Though ', names.kaden, ' had never been the polite sort. '),
p13as3b: pep.seq(names.jerry, ' wondered what ', names.kaden, ' was about to drop on ', pronouns.them(names.jerry0), '. '),
p13as3c: pep.seq('The silence was awkward. '),

p13as4a: pep.seq('"No bullshit alright?" '),
p13as4b: pep.seq('"This is kinda hard to say, but..." '),
p13as4c: pep.seq('"I don\'t want to be that commander, but..." '),

p13as5a: pep.seq(pep.capitalize(pronouns.they(names.kaden0)), ' settled on cutting to the chase. '),
p13as5b: pep.seq(names.kaden, ' continued. '),
p13as5c: pep.seq(names.kaden, ' grinned sheepishly. '),

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
 
p14as3a: pep.seq(names.jerry, ' cut ', names.kaden, ' off before ', pronouns.they(names.kaden0), ' could reiterate what ', names.jerry, ' had failed to do. '),
p14as3b: pep.seq(names.jerry, ' reassured the commander. '),
p14as3c: pep.seq(names.jerry, ' blushed with embarrassment at being called out. '),

p14as4a: pep.seq(names.jerry, ' felt the falseness of the words as they left ', pronouns.their(names.jerry0), ' mouth. '),
p14as4b: pep.seq(names.jerry, ' knew as soon as the words came out, that they were a lie.'),
p14as4c: pep.seq(names.jerry, ' was lying, but it didn\'t matter.'),
  
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

p16as2a: pep.seq(names.jerry, '\'s palms were itchy and a sheen of sweat was breaking out across ', pronouns.their(names.jerry0), ' skin. '),
p16as2b: pep.seq(names.jerry, ' was more than ready to get out of this conversation. '),
p16as2c: pep.seq(names.jerry, '\'s mouth was full of ash. '),

p16as3a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' wondered if ', names.kaden, ' noticed. '),
p16as3b: pep.seq('"Thank you for bringing this to my attention." '),
p16as3c: pep.seq(names.jerry, ' felt their knees shaking just a little bit. '),
  
  //p17

p17as1a: pep.seq('"You have duties." '),
p17as1b: pep.seq('"Your duties are the most important." '),
p17as1c: pep.seq('"Our duties are above all else." '),

p17as2a: pep.seq(names.kaden, ' finished. '),
p17as2b: pep.seq(names.kaden, ' grunted at ', names.jerry, '. '),
p17as2c: pep.seq(names.jerry, ' nodded in agreement. '),

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

p18as2a: pep.seq(names.jerry, ' asked. '),
p18as2b: pep.seq(names.jerry, ' was confused. '),
p18as2c: pep.seq(names.jerry, ' was unsure what ', names.kaden, ' had just uttered. '),

p18as3a: pep.seq('Did the commander just say that ', pronouns.they(names.jerry0), ' would die in battle? '),
p18as3b: pep.seq('Did the commander just threaten ', pronouns.them(names.jerry), '? '),
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

p20as2a: pep.seq(names.jerry, ' mustered all of the courage ', pronouns.they(names.jerry0), ' could to make it sound convincing. '),
p20as2b: pep.seq(names.jerry, ' knew that names.kaden was dead serious. '),
p20as2c: pep.seq(names.jerry, ' felt the sweats come in ', pronouns.their(names.jerry), ' fear. '),

p20as3a: pep.seq('"I wouldn\'t abandon my fellow soldiers in the field of war." '),
p20as3b: pep.seq('"I would never do anything to endanger my squad." '),
p20as3c: pep.seq('"I would give my life for our ', world.boss(names.realm), '." '),

  //p21

p21as1a: pep.seq(names.kaden,'’s searching gaze seemed to invade ',names.jerry, '’s soul. '),
p21as1b: pep.seq(names.kaden, ' stared menacingly at ', names.jerry, '. '),
p21as1c: pep.seq('There was a moment of silence as ', names.kaden, ' evaluated the truth of ', names.jerry, '\'s statement. '),

p21as2a: pep.seq('But they could not -- thank the dogs -- detect the lie in it. '),
p21as2b: pep.seq('Thankfully, ', names.kaden, ' seemed blissfully unaware of ', names.jerry, '\'s nervousness. '),
p21as2c: pep.seq(names.kaden, ' seemed ready to kill ', names.jerry, ' at the slightest hint of doubt. '),

p21as3a: pep.seq(names.kaden, ' nodded approvingly. '),
p21as3b: pep.seq(names.kaden, ' smiled warmly at ', names.jerry, '. '),
p21as3c: pep.seq(names.kaden, ' seemed satisfied, though, and smiled. '),

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

p23as1a: pep.seq(names.jerry, ' walked past the command desk and up the curling stairs to ', pronouns.their(names.jerry0), ' post. '),
p23as1b: pep.seq(names.jerry, ' carried onwards up the stairs. '),
p23as1c: pep.seq(names.jerry, ' left the command post and headed upstairs to ', pronouns.their(names.jerry), ' guard station. '),
 
p23as2a: pep.seq('The sweat was real. '),
p23as2b: pep.seq(pep.capitalize(pronouns.they(names.jerry)), ' felt hot and cold at the same time. '),
p23as2c: pep.seq('Sweat poured off of ', names.jerry, '. ' ),

p23as3a: pep.seq(names.jerry, ' was trembling. '),
p23as3b: pep.seq('Shaking with fear, ', pronouns.they(names.jerry), ' finished the climb upwards. '),
p23as3c: pep.seq('Shaking like a leaf, ', names.jerry, ' wondered if anything would come of the pending conflict. '),

p23as4a: pep.seq('Was war really that imminent? '),
p23as4b: pep.seq('Was ', names.eddie, ' really about to take down the ', world.boss(names.realm), '? '),
p23as4c: pep.seq('Could war be on the horizon? '),
 
p23as5a: pep.seq('How could they get out of it? '),
p23as5b: pep.seq('How would ', names.jerry, ' find a way to avoid fighting? '),
p23as5c: pep.seq('Would this particular town be safe from the horrors of war? '),

  //p24

p24as1a: pep.seq('Peering across the dusty landscape surrounding the compound, ', names.jerry, ' idly wondered if ', pronouns.they(names.jerry0), ' could fling ', pronouns.themself(names.jerry0), ' from the ramparts. '),
p24as1b: pep.seq(names.jerry, ' contemplated suicide by rampart as ', pronouns.they(names.jerry), ' scanned the dusty landscape. '),
p24as1c: pep.seq(names.jerry, ' briefly wondered if death was better than war. '),
  
p24as2a: pep.seq('After all, the hospitalized could not fight. '),
p24as2b: pep.seq('Even if ', pronouns.they(names.jerry), ' didn\'t die, ', names.jerry, ' could at least avoid the fighting. '),
p24as2c: pep.seq('But what if ', pronouns.they(names.jerry), ' failed even at suicide? '),

p24as3a: pep.seq('Then again, ', pronouns.they(names.jerry0), ' could end up dead, or worse, especially if the invading forces took control of the hospital. '),
p24as3b: pep.seq('Or maybe invading forces would not look kindly at prisoners of war. '),
p24as3c: pep.seq('Likely, ', pronouns.they(names.jerry), ' would be killed anyway by invading forces. '),
 
p24as4a: pep.seq(world.brethrens(names.realm), ' were not kind in civil war. '),
p24as4b: pep.seq(world.brethrens(names.realm), ' did not fuck around in times of war. '),
p24as4c: pep.seq(names.jerry, ' would not last long in the hands of ', pronouns.their(names.jerry), ' enemies. '),

p24as5a: pep.seq('There were no rules to follow. '),
p24as5b: pep.seq('There was no Geneva Convention in ', world.realm(names.realm), '. '),
p24as5c: pep.seq('There were no rules in civil war. '),

p24as6a: pep.seq('Dead could be buried -- wounded needed care. '),
p24as6b: pep.seq('And the dead were much easier to deal with than the wounded. '),
p24as6c: pep.seq('Prisoners were more expensive than mass graves. '),
  
  //p25

p25as1a: pep.seq('Looking down the thirty foot drop though, ', names.jerry, ' decided that perhaps suicide was not the best way. '),
p25as1b: pep.seq('Looking down into the chasm, ', names.jerry, ' decided that suicide was not for ', pronouns.them(names.jerry), '. '),
p25as1c: pep.seq(names.jerry, ' shied away from thoughts of suicide. '),

p25as2a: pep.seq('There had to be another. '),
p25as2b: pep.seq('There had to be a way to stay out of war that didn\'t result in pain or death. '),
p25as2c: pep.seq('Like momma always said, there\'s a better way to do things. '),

p25as3a: pep.seq('Could ', pronouns.they(names.jerry0), ' request a transfer to the medical or other nonviolent units? '),
p25as3b: pep.seq('Maybe ', pronouns.they(names.jerry), ' could request a transfer. '),
p25as3c: pep.seq('Maybe ', pronouns.they(names.jerry), ' could request a promotion. '),
  
p25as4a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' could -- but ', pronouns.they(names.jerry0), ' would be laughed at, for ', pronouns.they(names.jerry0), ' had no marketable skills. '),
p25as4b: pep.seq('The commander wouldn\'t go for it. ' ),
p25as4c: pep.seq('That plan was doomed to fail. '),

  //p26

p26as1a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' could join the revolution, although then ', pronouns.they(names.jerry0), '’d just be fighting for the otherside, and ', names.jerry, ' doubted that they were kinder. '),
p26as1b: pep.seq(names.jerry, ' contemplated joining the rebellion. '),
p26as1c: pep.seq(names.jerry, ' wondered if joining the rebellion would somehow be safer. '),

p26as2a: pep.seq('What about an extended vacation, perhaps to the mortal realm? '),
p26as2b: pep.seq('What about vacationing to the mortal realm? '),
p26as2c: pep.seq('What about sneaking away to the mortal realm? '),

p26as3a: pep.seq('Or joining a scouting mission to the other side? '),
p26as3b: pep.seq('Or joining an expedition to somewhere remote? '),
p26as3c: pep.seq('Or joining the fire crews instead? '),

p26as4a: pep.seq('Either could help ', names.jerry, ' forego battle, although ', names.jerry, ' had a feeling that no vacations were being approved in this particular moment in time. '),
p26as4b: pep.seq('Either would help ', names.jerry, ' avoid battle, but they weren\'t exactly easy solutions. '),
p26as4c: pep.seq(names.jerry, ' knew that these were just fantasies. '),

p26as5a: pep.seq('You know, pending civil war and all. '),
p26as5b: pep.seq('Pending civil war really narrowed the options for escape. '),
p26as5c: pep.seq('It was far too late to escape the situation.  '),

  //p27

p27as1a: pep.seq('"Did you hear they closed the portals down?" '),
p27as1b: pep.seq('"Did you hear about the portals?" '),
p27as1c: pep.seq('"Did you hear the mortal world\'s been cut off from us?" '),

p27as2a: pep.seq(names.dorian, '\'s voice came from behind ', names.jerry, ', startling them.'),
p27as2b: pep.seq(names.dorian, ' spoke behind ', names.jerry, '. '),
p27as2c: pep.seq(names.dorian, ' blew cigar smoke in ', names.jerry, '\'s face as ', pronouns.they(names.dorian), ' approached. '),

  //p28

p28as1a: pep.seq('"What?" '),
p28as1b: pep.seq('"You\'re kidding." '),
p28as1c: pep.seq('"No way." '),

p28as2a: pep.seq(names.jerry, ' said incredulously. '),
p28as2b: pep.seq(names.jerry, ' was surprised. '),
p28as2c: pep.seq(names.jerry, ' couldn\'t tell if ', names.dorian, ' was kidding. '), 
  
//p29

p29as1a: pep.seq('"Yeah, no one is supposed to leave or enter until this whole mess with ', names.eddie, ' is done." '),
p29as1b: pep.seq('"They\'ve got the portals under lock and key until ', names.eddie, ' is dealt with." '),
p29as1c: pep.seq('"Yeah, portals are closed and there\'s a bounty on ', names.eddie, ', too." '),

p29as2a: pep.seq(names.dorian, ' huffed on a cigarette, releasing a long trail of white smoke. '),
p29as2b: pep.seq(names.dorian, ' took another drag of ', pronouns.their(names.dorian), ' cigar. '),
p29as2c: pep.seq(names.dorian, ' nodded sagely. '),

  //p30

p30as1a: pep.seq('"Well, fuck me." '),
p30as1b: pep.seq('"Damn, that\'s crazy." '),
p30as1c: pep.seq('"Who would\'ve thought." ' ),

p30as2a: pep.seq(names.jerry, ' said. '),
p30as2b: pep.seq(names.jerry, ' chewed on the words for a moment. '),
p30as2c: pep.seq(names.jerry, ' felt the unease grow inside ', pronouns.them(names.jerry), '. ' ),

p30as3a: pep.seq('"This is serious then." '),
p30as3b: pep.seq('"That\'s unreal." '),
p30as3c: pep.seq('"I didn\'t think it was that serious." '),

  //p31

p31as1a: pep.seq('"Sure seems that way. '),
p31as1b: pep.seq('"War is imminent. '),
p31as1c: pep.seq('"Can\'t make this shit up. '),
 
p31as2a: pep.seq('It\'s a fucking shame, too. '),
p31as2b: pep.seq('It\'s so hard to imagine us at war. '),
p31as2c: pep.seq('I can\'t believe the ', world.boss(names.realm), ' let it get this far. '),

p31as3a: pep.seq('I\'d hate to get blood on my brand new dagger." '),
p31as3b: pep.seq('I didn\'t want to blood my new dagger on ', world.brethrens(names.realm), '." '),
p31as3c: pep.seq('I didn\'t actually want to use this dagger." '),

p31as4a: pep.seq(names.dorian, ' hefted a shiny blade from ', pronouns.their(names.dorian0), ' waist belt. '),
p31as4b: pep.seq(names.dorian, ' displayed a bright new blade from ', pronouns.their(names.dorian), ' belt. '),
p31as4c: pep.seq(names.dorian, ' fingered a blade on ', pronouns.their(names.dorian), ' belt. '),

p31as5a: pep.seq('"But I guess if traitor blood is the only way to whet it, count me in." '),
p31as5b: pep.seq('"I hope it does me good though, when the time comes." '),
p31as5c: pep.seq('"But that\'s what daggers are for, I guess." '),

  //p32

p32as1a: pep.seq(names.jerry, ' paused a moment, weighing what to say to that ridiculously, flat toned desire to murder. '),
p32as1b: pep.seq(names.jerry, ' gathered thoughts before speaking. '),
p32as1c: pep.seq(names.jerry, ' wasn\'t sure how to respond. '),

p32as2a: pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' settled on an ambivalent nod and grunt. '),
p32as2b: pep.seq(pep.capitalize(pronouns.they(names.jerry)), ' decided on a smile. '),
p32as2c: pep.seq('Smiling, ', names.jerry, ' nodded at ', names.dorian, '. ' ),

  //p33

p33as1a: pep.seq('"I\'m going to walk the ledge." '),
p33as1b: pep.seq('"I\'m off for a round." '),
p33as1c: pep.seq('"I will be back shortly." '),

p33as2a: pep.seq(names.dorian, ' said, pocketing the blade. '),
p33as2b: pep.seq(names.dorian, ' sheathed the blade. '),
p33as2c: pep.seq(names.dorian, ' grinned at names.jerry. '),

p33as3a: pep.seq('"Commander thinks you’re going to break first. '),
p33as3b: pep.seq('"', names.dorian, ' says you\'re our first and biggest coward." '),
p33as3c: pep.seq('"', names.dorian, ' is saying you\'ll break rank and run when the time comes." '),

p33as4a: pep.seq('You aren’t, are you, ', names.jerry, '? '),
p33as4b: pep.seq('You won\'t, will you? '),
p33as4c: pep.seq('You wouldn\'t do that to me, though. '),

p33as5a: pep.seq('We gotta have each other’s backs up here." '),
p33as5b: pep.seq('We\'re like family." '),
p33as5c: pep.seq('I believe in you." '),

  //p34

p34as1a: pep.seq('"Fuck ', names.kaden, '." '),
p34as1b: pep.seq('"Fuck this place." '),
p34as1c: pep.seq('"This place could burn up for all I care." '),

p34as2a: pep.seq(names.jerry, ' said rashly. '),
p34as2b: pep.seq(names.jerry, ' spoke without a waver in ', pronouns.their(names.jerry), ' voice. '),
p34as2c: pep.seq(names.jerry, ' did not hesitate to speak rashly. '),

p34as3a: pep.seq('Boldly. '),
p34as3b: pep.seq(names.jerry, ' felt reckless. '),
p34as3c: pep.seq('With fervor. '),

p34as4a: pep.seq('"They don\'t know shit about me. '),
p34as4b: pep.seq('"They don\'t know me from a brick in the wall. '),
p34as4c: pep.seq('"They\'re full of shit. '),

p34as5a: pep.seq('I got your back." '),
p34as5b: pep.seq('I would never leave you." ' ),
p34as5c: pep.seq('I would never fuck you over." ' ),

p34as6a: pep.seq(names.jerry, ' felt the lie like a wet blanket. '),
p34as6b: pep.seq(names.jerry, ' knew ', pronouns.they(names.jerry), ' were veering into dangerous territory. '),
p34as6c: pep.seq(names.jerry, ' was straight up lying. '),

p34as7a: pep.seq('But ', names.dorian, ' had an unblooded knife, and ', names.jerry, ' wasn\'t about to be its maiden voyage. '),
p34as7b: pep.seq('But ', names.dorian, ' had a knife, so honesty wasn\'t an option. '),
p34as7c: pep.seq('Anything to keep ', pronouns.them(names.jerry), ' alive another day. '),

  //p35

p35as1a: pep.seq(names.dorian, '\'s eyes widened at the outright insult to the commander. '),
p35as1b: pep.seq(names.dorian, ' flinched when ', names.jerry, ' insulted the commander. '),
p35as1c: pep.seq(names.dorian, ' looked perplexed at ', names.jerry, '\'s resolve. '),

p35as2a: pep.seq('That, apparently, took courage to say out loud. '),
p35as2b: pep.seq(pep.capitalize(pronouns.they(names.dorian)), ' had not expected such furor from ', names.eddie, '. '),
p35as2c: pep.seq(names.dorian, ' was utterly taken aback by ', names.jerry, '\'s boldness. '),

p35as3a: pep.seq(names.dorian, ' slapped ', names.jerry, ' on the back. '),
p35as3b: pep.seq(names.dorian, ' grinned. '),
p35as3c: pep.seq(names.dorian, ' seemed satisfied. '),

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

let content = pep.seq(html.p('o'),                        
           aBlock.p1a, html.p('co'), aBlock.p2a, html.p('co'),                      
           aBlock.p3a, html.p('co'), aBlock.p4a, html.p('co'), 
           aBlock.p5a, html.p('co'), aBlock.p6a, html.p('co'), 
           aBlock.p7a, html.p('co'), aBlock.p8a, html.p('co'), 
           aBlock.p9a, html.p('co'), aBlock.p10a, html.p('co'), 
          aBlock.p11a, html.p('co'), aBlock.p12a, html.p('co'), 
          aBlock.p13a, html.p('co'), aBlock.p14a, html.p('co'), 
          aBlock.p15a, html.p('co'), aBlock.p16a, html.p('co'), 
          aBlock.p17a, html.p('co'), aBlock.p18a, html.p('co'), 
          aBlock.p19a, html.p('co'), aBlock.p20a, html.p('co'), 
          aBlock.p21a, html.p('co'), aBlock.p22a, html.p('co'), 
          aBlock.p23a, html.p('co'), aBlock.p24a, html.p('co'), 
          aBlock.p25a, html.p('co'), aBlock.p26a, html.p('co'), 
          aBlock.p27a, html.p('co'), aBlock.p28a, html.p('co'), 
          aBlock.p29a, html.p('co'), aBlock.p30a, html.p('co'), 
          aBlock.p31a, html.p('co'), aBlock.p32a, html.p('co'), 
          aBlock.p33a, html.p('co'), aBlock.p34a, html.p('co'), 
          aBlock.p35a, html.p('co'), html.p('c'), 
);

module.exports = {
  text: content,
  title: title,
  
};




