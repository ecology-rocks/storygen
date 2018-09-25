var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./fxns/my-apep-fxns.js'); //custom functions
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup

//Our main character struggles to name and stand strong for their pacifism in the face of growing tensions. Our character is told to 'do or die' in terms of joining the fight. They are left unsettled and looking for a way out.

module.exports = {
    //could be expanded more
    title: pep.choice("Trouble in Paradise", "Heart Of Stone",
        "The Liar's Touch"),
    text: pep.seq(html.p('o'),
        //p1
        pep.choice(
            pep.seq('"Is ', names.eddie, ' ', dict.insane, '?" '),
            pep.seq('"Do you think this whole ', names.eddie,
                ' stuff is ', dict.legit, '?" '),
            pep.seq('"What do you think about our ', dict.impending,
                ' ', dict.doom, '?" '),
        ), pep.choice(
            pep.seq(names.jerry, ' ', dict.asked, ', ', dict.gnawing,
                ' ', pronouns.their(names.jerry0),
                ' way through a piece of ', dict.overcooked, ' meat. '),
            pep.seq(names.jerry, ' ', dict.wondered, ' as ', pronouns.they(
                    names.jerry0), ' ', dict.gnawed,
                ' the final bites of ', pronouns.their(names.jerry0),
                ' meal. '),
            pep.seq('The question hung in the air as ', names.jerry,
                ' took another bite. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' ',
                dict.looked, ' at ', pronouns.their(
                    names.jerry0), ' ', dict.buddy, ', ', names.reed,
                ', for reassurance. '),
            pep.seq(names.jerry, ' ', dict.looked, ' at ', names.reed,
                ', weighing ', pronouns.their(names.reed0),
                ' expression. '),
            pep.seq(names.reed, ' ', myPep.edIng(dict.cackling), '. '),
        ), html.pco,
        //p2          
        pep.choice(
            pep.seq('"', pep.capitalize(dict.perhaps), '." '),
            pep.seq('"Does it matter?" '),
            pep.seq('"You ', dict.always, ' ask the ', dict.tough,
                ' questions, ', names.jerry, '." '),
        ), pep.choice(
            pep.seq(names.reed, ' ', dict.wondered, ', ', dict.pushing,
                ' the tray away. '),
            pep.seq(names.reed, ' pushed ', pronouns.their(names.reed0),
                ' ', dict.tray, ' away and ',
                dict.crossed, ' ', pronouns.their(names.reed0),
                ' arms. '),
            pep.seq(names.reed, ' ', dict.grinned, ' a ', dict.toothy,
                ' ', dict.grin, ' at ', names.jerry,
                '. '),
        ), pep.choice(
            pep.seq('"Is anyone going to stop ', pronouns.them(
                names.eddie0), '?" '),
            pep.seq(names.reed, ' was ', myPep.aAn(dict.intimidating),
                ' ', dict.sight,
                ', even with ', dict.grape, ' ', dict.jelly, ' ', dict.drippingFrom,
                ' ', pronouns.their(
                    names.reed0), ' ', dict.chin, '. '),
            pep.seq('"There’s ', dict.nothing, ' we can do about it." '),
        ), html.pco,
        //p3       
        pep.choice(pep.seq('That was the ', dict.issue, ', after all. '),
            pep.seq('It was the ', dict.issue, ' on every ', world.brethren(
                    names.realm),
                '\'s mind. '),
            pep.seq('It was what kept ', world.brethrens(names.realm),
                ' up at night. '),
        ), pep.choice(
            pep.seq('Would anyone ', dict.stop, ' ', names.eddie, '’s ',
                dict.planned, ' ', dict.rebellion,
                ' against the ', world.boss(names.realm), '? '),
            pep.seq('Would ', names.eddie, ' ', dict.retreat,
                ' before it was too late? '),
            pep.seq('Would anyone put ', names.eddie, ' in ', pronouns.their(
                    names.eddie0),
                ' place? '),
        ), pep.choice(
            pep.seq('Or were ', world.brethrens(names.realm),
                ' really that ', dict.frustrated,
                ' with the current ', world.boss(names.realm),
                '\'s style of rule? '),
            pep.seq('Or were ', world.brethrens(names.realm),
                ' really that ', dict.apathetic, ' to ',
                dict.impending, ' ', dict.war, '?'),
            pep.seq('Was it even possible? '),
        ), pep.choice(
            pep.seq('It was ', dict.tough, ' to ', dict.ascertain,
                ', because there was ', dict.always,
                ' a level of ', dict.trouble, ' in ', world.realm(names
                    .realm), ' -- but ', dict.somehow,
                ', it ', dict.seemed, ' like this time was ', dict.serious,
                '. '),
            pep.seq('There had ', dict.always, ' been a level of ',
                dict.trouble, ' in ', world.realm(
                    names.realm), ', but this time seemed more ', dict.serious,
                '. '),
            pep.seq('The entire ', dict.realm, ' of ', world.realm(
                    names.realm), ' ', dict.teetered,
                ' on ', dict.uncertainty, ' and ', dict.impending, ' ',
                dict.war, '. '),
        ), pep.choice(
            pep.seq('Like they ', dict.could, ' ', dict.actually,
                ' mean it. '),
            pep.seq('Like it ', dict.could, ' ', dict.actually, ' ',
                dict.happen, '. '),
            pep.seq('This ', dict.time, ' was ', dict.dangerously, ' ',
                dict.different, '. '),
        ), html.pco,
        //p4     
        pep.choice(
            pep.seq(names.jerry, ' ', dict.savored, ' ', pronouns.their(
                    names.jerry0), ' ', dict.last,
                ' ', dict.morsel, '. '),
            pep.seq(names.jerry, ' was ', dict.suddenly, ' no longer ',
                dict.hungry, '. '),
            pep.seq('The ', dict.food, ' had ', dict.lost, ' its ',
                dict.appeal, '. '),
        ), pep.choice(
            pep.seq('"I feel like this ', dict.impending, ' ', dict.war,
                ' spells trouble. '),
            pep.seq('"I hate this ', pep.opt(pep.seq(dict.steaming, ' ',
                    dict.pile, ' of ')), dict.shit,
                '. '),
            pep.seq('"I ', pep.choice("hope", "wish"),
                ' they would all ', dict.selfImmolate, '. '),
        ), pep.choice(
            pep.seq('We\'re all going to be ', dict.dragged,
                ' into this ', dict.steaming, ' ', dict.pile,
                ' of ', pep.choice(dict.dog, dict.animalList), '-',
                dict.shit, ' ', dict.war, '. '),
            pep.seq('You know who ', dict.dies, ' when ', dict.rulers,
                ' fight? It\'s us, ', dict.damnIt,
                '.'),
            pep.seq('Who cares who the ', world.boss(names.realm),
                ' is? '),
        ), pep.choice(
            pep.seq('I don\'t ', pep.opt('particularly '), 'care who ',
                dict.wipes, ' their ', dict.ass,
                ' at the top of the food chain -- it doesn’t really ',
                dict.affect,
                ' me from day to day." '),
            pep.seq('The ', dict.rulers, ' don\'t ', dict.affect,
                ' our ', dict.shitty,
                ' lives one way or another." '),
            pep.seq('I could go my ', dict.whole, ' ', dict.life,
                ' not ', dict.fretting, ' about ',
                dict.rulers, ', but then they ', dict.drag,
                ' us into their ', dict.war, '." '),
        ), html.pco,
        //p5    
        pep.choice(
            pep.seq(names.reed, ' ', dict.barked, ' a ', dict.harsh,
                ' ', dict.laugh, pep.opt(
                    ' in response'), '. '),
            pep.seq(names.reed, ' ', myPep.edIng(dict.cackling), ' at ',
                names.jerry, '\'s ', dict.bluntness,
                '. '),
            pep.seq(names.reed, ' nodded ', dict.heartily, ' in ', dict
                .agreement, '. '),
        ), pep.choice(
            pep.seq('"The ', dict.truest, ' thing that has ever been ',
                dict.spoken, '. '),
            pep.seq('"How ', dict.correct, ' you are. '),
            pep.seq('"Truer words have never been ', dict.spoken, '. '),
        ), pep.choice(
            pep.seq('Break\'s ', dict.over, '. '),
            pep.seq('I think our time is about ', dict.over, '. '),
            pep.seq('Looks like it\'s about that time. '),
        ), pep.choice(
            pep.seq('Come on -- let\'s go before ', names.kaden,
                ' gets ', dict.raging, ' ', dict.angry,
                '." '),
            pep.seq('Let\'s get back before ', names.kaden,
                ' notices." '),
            pep.seq('At least it\'s only a ', dict.few,
                ' hours to midnight." '),
        ), html.pco,
        //p6     
        pep.choice(
            pep.seq(pep.choice(pep.seq(names.reed, ' and ', names.jerry),
                    'They'),
                ' ', dict.rose, ' to ', dict.place, ' their ', dict.trash,
                ' in the ', dict.bin,
                ' and ', dict.left, ' the ', dict.cafeteria, ' to the ',
                dict.dim, ' ', dict.skies,
                ' ', dict.outside, '. '
            ),
            pep.seq('Leaving their ', dict.trash, ' ', pep.opt(
                    'behind '), 'for the staff to ', dict.clean,
                ', ', names.reed, ' and ', names
                .jerry, ' left the ', dict.cafeteria, ' for the ', dict
                .dim, ' ', dict.outdoors, '. '
            ),
            pep.seq(
                'Lingering as long as they could, they ', dict.finally,
                ' ', dict.left, ' the ', dict
                .cafeteria, ' behind and went ', dict.outdoors, '. '
            ),
        ), pep.choice(
            pep.seq('It ', pep.opt('somehow '), 'seemed more ', dict.creepy,
                ' than ', dict.usual,
                ',  a ', dict.putrid, ' ', dict.green, ' ', dict.glowing,
                ' in the ', dict.dim,
                ' sky. '),
            pep.seq('The sky was a ', dict.putrid, ', off-shade of ',
                dict.green, '. '),
            pep.seq('The sky ', dict.appeared, ' ', dict.creepy,
                ' and ', dict.strangely, ' colored ', dict.green,
                ' -- more so than ', dict.usual, '. '),
        ), pep.choice(
            pep.seq('"Catch you ', dict.tomorrow, '." '),
            pep.seq('"See you ', dict.tomorrow, '." '),
            pep.seq('"Peace be with you." '),
        ), pep.choice(
            pep.seq(names.reed, ' said ', dict.warmly, ' to ', names.jerry,
                ' as ', pronouns.they(
                    names.reed0),
                ' ', dict.strode, ' off towards the ', dict.cardinal,
                ' tower. '),
            pep.seq(names.reed, ' left ', names.jerry,
                ', veering right towards the ', dict.cardinal,
                ' tower. '),
            pep.seq(names.reed, ' put ', pronouns.their(names.reed0),
                ' ', dict.hat, ' on and ', dict.strode,
                ' off towards the ', dict.cardinal,
                ' tower. '),
        ), html.pco,
        //p7          
        pep.choice(
            pep.seq(
                dict.Guard, ' duty for the ', dict.compound,
                ' was not particularly ', dict.challenging,
                ' -- even with tensions higher than normal. '
            ),
            pep.seq(dict.Guard, ' duty was really at the ', dict.bottom,
                ' ', pep.opt('of the barrel'), ' for ', dict.military,
                ' jobs. '),
            pep.seq(dict.Guard, ' duty was a ', dict.joke,
                ' of a job. '),
        ), pep.choice(
            pep.seq('The ', dict.military, ' were the only ', world.brethrens(
                    names.realm),
                ' allowed to ', dict.wield,
                ' weapons, so there was a big barrier between ', dict.revolts,
                ', and the ', dict.military, '. '
            ),
            pep.seq(
                'Only soldiers could ', dict.wield,
                ' weapons, so even the ', dict.biggest, ' ', dict.revolts,
                ' could be ', dict.stopped, ' easily. '
            ),
            pep.seq(
                'But every member of the ', dict.military, ' could ',
                dict.wield,
                ' a weapon, and no one else had them -- which made ',
                names.jerry, ' feel safe. '),
        ), html.pco,
        //p8           
        pep.choice(
            pep.seq('But ', dict.guard, ' duty was ', dict.worrying,
                ', given the potential for ', dict.revolts, '. '),
            pep.seq(dict.Guard, ' duty became a lot more ', dict.loaded,
                '   when ', dict.revolts, ' was on the horizon. '),
            pep.seq('Guards were on the front lines of defense, and ',
                names.jerry, ' knew it. '),
        ), pep.choice(
            pep.seq(names.jerry, ' was ', dict.worried, ' that ',
                pronouns.they(names.jerry0),
                ' might actually have to use ', pronouns.their(names.jerry0),
                ' weapons. '),
            pep.seq(names.jerry, ' was ', dict.worried,
                ' about whether ', pronouns.they(names.jerry0),
                ' would actually be able to ', dict.kill, pep.opt(
                    ' if needed'), '. '),
            pep.seq(names.jerry, ' didn\'t want to ', dict.kill,
                ' if worse came to worse. '),
        ), pep.choice(
            pep.seq('As a pacifist, that was ', dict.exceptionally, ' ',
                dict.worrying, '. '),
            pep.seq(dict.afterAll, ", ", names.jerry,
                ' didn\'t want to shed blood. '),
            pep.seq(names.jerry, ' ', dict.abhorred, ' violence. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' had only taken this ', dict.job,
                ' for the pay, and because ', pronouns.they(names.jerry0),
                ' were ', dict.pressured, ' to do so by ', pronouns.their(
                    names.jerry0), ' parents. '),
            pep.seq('Without pressure from ', pronouns.their(names.jerry0),
                ' parents, ', names.jerry,
                ' never would have ', dict.enlisted, '. '),
            pep.seq(names.jerry, ' only ', dict.enlisted,
                ' because of the free housing. '),
        ), pep.choice(
            pep.seq('But there was no way in ', world.realm(names.realm),
                ', that ', names.jerry,
                ' would ', dict.willingly, ' attack fellow ', world.brethrens(
                    names.realm), '. '),
            pep.seq(
                'A ', dict.rebellion, ' was ', dict.somehow,
                ' far worse than fighting ', dict.imagined,
                ' invaders from other ', dict.realm, 's. '
            ),
            pep.seq(names.jerry, ' just couldn\'t ', dict.kill, ' ',
                pronouns.their(names.jerry0), ' fellow ', world.brethrens(
                    names.realm),
                '. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' would rather ', dict.die, ' or be ', dict.imprisoned,
                ' for treason. '),
            pep.seq(names.jerry, ' wished that ', pronouns.they(names.jerry0),
                ' could quit, although it would mean ', dict.death,
                ' or being ', dict.imprisoned,
                ' at the hand of the court. '
            ),
            pep.seq(names.jerry, ' thought ', dict.death, ' or being ',
                dict.imprisoned, ' might be better than shedding ',
                world.brethren(names.realm), ' blood. '),
        ), pep.choice(
            pep.seq('Given the ', dict.pending, ' ', dict.revolts,
                ', it may be the former. '),
            pep.seq('Either would be ', dict.better, ' than this ',
                dict.current, ' ', dict.unease, '. '),
            pep.seq('What would ', names.jerry, '\'s parents think? '),
        ), html.pco,
        //p9            
        pep.choice(
            pep.seq('"', names.jerry, '! I need to ', dict.talk,
                ' with you!" '),
            pep.seq('"Oy! Get over here a ', dict.moment, '!" '),
            pep.seq('"Hey, ', dict.shithead, '! Come here a ', dict.moment,
                '." '),
        ), pep.choice(
            pep.seq('The commander, ', names.kaden, ', ', dict.cried,
                ', as ', names.jerry,
                ' ', dict.ducked, ' through the doorway to resume ',
                pronouns.their(names.jerry0), ' post. '),
            pep.seq(names.kaden, ' ', dict.cried, ' at ', names.jerry,
                '. '),
            pep.seq(names.kaden, ' ', dict.spotted, ' ', names.jerry,
                ' with a shout. '),
        ), pep.choice(
            pep.seq(names.jerry, ' ', dict.looked, ' up, surprised. '),
            pep.seq('The ', dict.noise, ' ', dict.startled, ' ', names.jerry,
                '. '),
            pep.seq(names.jerry, '\'s stomach ', dict.churned, ' with ',
                dict.surprise, ' and ', dict.trepidation, '. '),
        ), html.pco,
        //p10            
        pep.choice(
            pep.seq('"Sure, sarge, what\'s up?" '),
            pep.seq('"How\'s it going, ', names.kaden, '?" '),
            pep.seq('"How can I help you?" '),
        ), pep.choice(
            pep.seq(names.jerry, ' ', dict.asked, '. '),
            pep.seq(names.jerry, ' ', dict.looked, ' ', dict.genially,
                ' at ', names.kaden, '. '),
            pep.seq(names.kaden, ' shot ', names.jerry, ' a ', dict.dirtyLook,
                '. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.their(names.jerry0)),
                ' stomach was letting ', pronouns.them(
                    names.jerry0), ' know that this may be ', pronouns.their(
                    names.jerry0),
                ' worst ', dict.trepidation, ' come to life. '),
            pep.seq(names.jerry, ' felt ', pronouns.their(names.jerry0),
                ' courage waver. '),
            pep.seq(names.jerry, ' was ', dict.suddenly, ' ', pep.opt(
                    "hyper "), 'aware of ', pronouns.their(names.jerry0),
                ' ', dict.sweaty, ' ', dict.palms, ' and ', dict.inadequate,
                ' stature. '),
        ), html.pco,
        //p11   
        pep.choice(
            pep.seq('"', dict.haveYouHeard, ' all this ', dict.nonsense,
                ' about ', names.eddie, ' recently?" '),
            pep.seq('"', dict.haveYouHeard, ' about this ', dict.impending,
                ' ',dict.nonsense, '?" '),
            pep.seq('"', dict.haveYouHeard, ' about ', names.eddie,
                '?" '),
        ), pep.choice(
            pep.seq(names.kaden, ' ', dict.asked, ' with a ', dict.growl,
                ', and ', names.jerry,
                ' shrugged noncommittally. '),
            pep.seq(names.kaden, ' ', dict.growled, '. '),
            pep.seq(names.kaden, ' adjusted ', pronouns.their(names.kaden0),
                ' glasses and turned ', pronouns.their(names.kaden0),
                ' ', dict.dirtyLook, ' on ', names.jerry,
                '. '),
        ), html.pco,
        //p12        
        pep.choice(
            pep.seq('"A bit, here and there. '),
            pep.seq('"You mean about the ', dict.rebellion, '? '),
            pep.seq('"Another ', dict.rebellion, '? '),
        ), pep.choice(
            pep.seq('I haven\'t heard much. '),
            pep.seq('That\'s new', pep.opt('s'), ' to me. '),
            pep.seq('I ', dict.assumed, ' it was just ', pep.choice(dict.rumors, dict.nonsense), '. '),
        ), pep.choice(
            pep.seq('Why?" '),
            pep.seq('Is it ', dict.legit, '?" '),
            pep.seq('Do you think we should be ', dict.worried, '?" '),
        ), html.pco,
        //p13   
        pep.choice(
            pep.seq('"Well, knowing your past..." '),
            pep.seq('"Listen, ', names.jerry, '..." '),
            pep.seq('"So, look..." '),
            pep.seq('" I mean, ', dict.allThingsConsidered, '..." '), 
        ), pep.choice(
            pep.seq(names.kaden,
                ' ', dict.trailedOff, ' as if ', dict.trying, ' to ', dict.discover, ' a ', dict.delicate, ' way to ', dict.state, ' something ', dict.offensive, '. '
            ),
            pep.seq(names.kaden,
                ' ', dict.trailedOff, ' as if ', dict.gathering, ' ', dict.courage, ' to ', dict.state, ' something. '),
            pep.seq(names.kaden, ' ', dict.inhaled, '. '),
        ), pep.choice(
            pep.seq('Though ', names.kaden,
                ' had never been the ', dict.polite, ' sort. '),
            pep.seq(names.jerry, ' wondered what ', names.kaden,
                ' was about to drop on ', pronouns.them(
                    names.jerry0), '. '),
            pep.seq('The ', dict.silence, ' was ', dict.awkward, '. '),
        ), pep.choice(
            pep.seq('"No ', dict.shit, ', alright?" '),
            pep.seq('"This is ', dict.tough, ' to ', dict.state, ', but..." '),
            pep.seq('"I don\'t want to be that commander, but..." '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.kaden0)),
                ' cut to the chase. '),
            pep.seq(names.kaden, ' continued. '),
            pep.seq(names.kaden, ' ', dict.grinned, ' ', dict.sheepishly, '. '),
        ), pep.choice(
            pep.seq(
                'If this comes to ', dict.rebellion, ', you know we’re on the front lines. '
            ),
            pep.seq(
                '"You know we\'re the ', pep.opt(pep.choice('first', 'only')), ' line of defense, right?  '),
            pep.seq('"If you spot something ', dict.strange, ' on your shift... '),
        ), pep.choice(
            pep.seq('You can’t hesitate. '),
            pep.seq('You can\'t back down. '),
            pep.seq('You can\'t run away. '),
        ), pep.choice(
            pep.seq('Not like you did..." '),
            pep.seq(
                'You haven\'t exactly proven yourself in the past." '),
            pep.seq('You don\'t even think about it." '),
        ), html.pco,
        //p14           
        pep.choice(
            pep.seq('"No, commander. '),
            pep.seq('"I would never, commander. '),
            pep.seq('"You don\'t need to worry about me. '),
        ), pep.choice(
            pep.seq('Of course not." '),
            pep.seq('You can trust me." '),
            pep.seq('That was one time." '),
        ), pep.choice(
            pep.seq(names.jerry, ' cut ', names.kaden, ' off before ',
                pronouns.they(names.kaden0),
                ' could reiterate what ', names.jerry,
                ' had failed to do. '),
            pep.seq(names.jerry, ' reassured the commander. '),
            pep.seq(names.jerry,
                ' blushed with embarrassment at being called out. '),
        ), pep.choice(
            pep.seq(names.jerry,
                ' felt the falseness of the words as they left ',
                pronouns.their(
                    names.jerry0), ' mouth. '),
            pep.seq(names.jerry,
                ' knew as soon as the words came out, that they were a lie.'
            ),
            pep.seq(names.jerry, ' was lying, but it didn\'t matter.'),
        ), html.pco,
        //p15         
        pep.choice(
            pep.seq('"No freezing. '),
            pep.seq('"No thinking. '),
            pep.seq('"Not a flinch from you. '),
        ), pep.choice(
            pep.seq('No moral qualms. '),
            pep.seq(
                'I know you\'ve got those deep thoughts and all... '),
            pep.seq('You might be the sensitive one, but... '),
        ), pep.choice(
            pep.seq(
                'You do what needs to be done and you put those halfwits in their place -- most likely, a grave. '
            ),
            pep.seq(
                'You put this rebellion down if it comes to your front door. '
            ),
            pep.seq(
                'Those rebels deserve everything they\'ve got coming to them. '
            ),
        ), pep.choice(
            pep.seq('You hear me? '),
            pep.seq('You understand? '),
            pep.seq('They\'re a waste of breath and space. '),
        ), pep.choice(
            pep.seq('It’s us or them." '),
            pep.seq('We are law and order." '),
            pep.seq('This is what we were made for." '),
        ), html.pco,
        //p16     
        pep.choice(
            pep.seq('"Yes, commander." '),
            pep.seq('"Of course." '),
            pep.seq('"I won\'t let you down." '),
        ), pep.choice(
            pep.seq(names.jerry,
                '\'s palms were itchy and a sheen of sweat was breaking out across ',
                pronouns.their(names.jerry0), ' skin. '),
            pep.seq(names.jerry,
                ' was more than ready to get out of this conversation. '
            ),
            pep.seq(names.jerry, '\'s mouth was full of ash. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' wondered if ', names.kaden,
                ' noticed. '),
            pep.seq('"Thank you for bringing this to my attention." '),
            pep.seq(names.jerry,
                ' felt their knees shaking just a little bit. '),
        ), html.pco,
        //p17           
        pep.choice(
            pep.seq('"You have duties." '),
            pep.seq('"Your duties are the most important." '),
            pep.seq('"Our duties are above all else." '),
        ), pep.choice(
            pep.seq(names.kaden, ' finished. '),
            pep.seq(names.kaden, ' grunted at ', names.jerry, '. '),
            pep.seq(names.jerry, ' nodded in agreement. '),
        ), pep.choice(
            pep.seq(
                '"And you will die either doing them or refusing them. '
            ),
            pep.seq('"If you shirk them, you will die. '),
            pep.seq('"It is duty or death. '),
        ), pep.choice(
            pep.seq('It\'s your choice." '),
            pep.seq('You can choose." '),
            pep.seq('You understand?" '),
        ), html.pco,
        //p18           
        pep.choice(
            pep.seq('"I\'m sorry?" '),
            pep.seq('"Excuse me?" '),
            pep.seq('"Pardon?" '),
        ), pep.choice(
            pep.seq(names.jerry, ' ', dict.asked, '. '),
            pep.seq(names.jerry, ' was confused. '),
            pep.seq(names.jerry, ' was unsure what ', names.kaden,
                ' had just uttered. '),
        ), pep.choice(
            pep.seq('Did the commander just say that ', pronouns.they(
                    names.jerry0),
                ' would die in battle? '),
            pep.seq('Did the commander just threaten ', pronouns.them(
                names.jerry), '? '),
            pep.seq('Did the commander really just say that? '),
        ), html.pco,
        //p19   
        pep.choice(
            pep.seq(
                '"What I mean is, if you refuse, or stall, or fuck around when it\'s time to fight, you\'re dead. '
            ),
            pep.seq('"It\'s fight or die. '),
            pep.seq('"Yeah, I didn\'t stutter. '),
        ), pep.choice(
            pep.seq('Literally. '),
            pep.seq('It\'s true. '),
            pep.seq('I\'m not fucking around. '),
        ), pep.choice(
            pep.seq('I will kill you." '),
            pep.seq(
                'You will be thrown into the pit quicker than I can say "Go!" if you refuse to fight." '
            ),
            pep.seq('Failing to fight is punishable by death." '),
        ), html.pco,
        //p20            
        pep.choice(
            pep.seq('"We\'re a team, commander." '),
            pep.seq('"We\'re all in this together." '),
            pep.seq('"Understood." '),
        ), pep.choice(
            pep.seq(names.jerry, ' mustered all of the courage ',
                pronouns.they(names.jerry0),
                ' could to make it sound convincing. '),
            pep.seq(names.jerry,
                ' knew that ', names.kaden, ' was dead serious. '),
            pep.seq(names.jerry, ' felt the sweats come in ', pronouns.their(
                names.jerry), ' fear. '),
        ), pep.choice(
            pep.seq(
                '"I wouldn\'t abandon my fellow soldiers in the field of war." '
            ),
            pep.seq(
                '"I would never do anything to endanger my squad." '),
            pep.seq('"I would give my life for our ', world.boss(names.realm),
                '." '),
        ), html.pco,
        //p21   
        pep.choice(
            pep.seq(names.kaden, '’s searching gaze seemed to invade ',
                names.jerry, '’s soul. '),
            pep.seq(names.kaden, ' stared menacingly at ', names.jerry,
                '. '),
            pep.seq('There was a moment of silence as ', names.kaden,
                ' evaluated the truth of ',
                names.jerry, '\'s statement. '),
        ), pep.choice(
            pep.seq(
                'But they could not -- thank the dogs -- detect the lie in it. '
            ),
            pep.seq('Thankfully, ', names.kaden,
                ' seemed blissfully unaware of ', names.jerry,
                '\'s nervousness. '),
            pep.seq(names.kaden, ' seemed ready to kill ', names.jerry,
                ' at the slightest hint of doubt. '),
        ), pep.choice(
            pep.seq(names.kaden, ' nodded approvingly. '),
            pep.seq(names.kaden, ' smiled warmly at ', names.jerry,
                '. '),
            pep.seq(names.kaden,
                ' seemed satisfied, though, and smiled. '),
        ), html.pco,
        //p22         
        pep.choice(
            pep.seq('"Knew I could count on you. '),
            pep.seq('"I knew they were liars up in command. '),
            pep.seq('"No reason to doubt, is there. '),
        ), pep.choice(
            pep.seq('Carry on. '),
            pep.seq('Go on back to your post. '),
            pep.seq('Be gone now. '),
        ), pep.choice(
            pep.seq('Look sharp." '),
            pep.seq('Stay ready." '),
            pep.seq('I\'ll be up in a while." '),
        ), html.pco,
        //p23            
        pep.choice(
            pep.seq(names.jerry,
                ' walked past the command desk and up the curling stairs to ',
                pronouns.their(names.jerry0), ' post. '),
            pep.seq(names.jerry, ' carried onwards up the stairs. '),
            pep.seq(names.jerry,
                ' left the command post and headed upstairs to ',
                pronouns.their(
                    names.jerry), ' guard station. '),
        ), pep.choice(
            pep.seq('The sweat was real. '),
            pep.seq(pep.capitalize(pronouns.they(names.jerry)),
                ' felt hot and cold at the same time. '),
            pep.seq('Sweat poured off of ', names.jerry, '. '),
        ), pep.choice(
            pep.seq(names.jerry, ' was trembling. '),
            pep.seq('Shaking with fear, ', pronouns.they(names.jerry),
                ' finished the climb upwards. '),
            pep.seq('Shaking like a leaf, ', names.jerry,
                ' wondered if anything would come of the pending conflict. '
            ),
        ), pep.choice(
            pep.seq('Was war really that imminent? '),
            pep.seq('Was ', names.eddie,
                ' really about to take down the ', world.boss(names.realm),
                '? '),
            pep.seq('Could war be on the horizon? '),
        ), pep.choice(
            pep.seq('How could they get out of it? '),
            pep.seq('How would ', names.jerry,
                ' find a way to avoid fighting? '),
            pep.seq(
                'Would this particular town be safe from the horrors of war? '
            ),
        ), html.pco,
        //p24           
        pep.choice(
            pep.seq(
                'Peering across the dusty landscape surrounding the compound, ',
                names.jerry,
                ' idly wondered if ', pronouns.they(names.jerry0),
                ' could fling ', pronouns.themself(
                    names.jerry0), ' from the ramparts. '),
            pep.seq(names.jerry, ' contemplated suicide by rampart as ',
                pronouns.they(names.jerry0),
                ' scanned the dusty landscape. '),
            pep.seq(names.jerry,
                ' briefly wondered if death was better than war. '),
        ), pep.choice(
            pep.seq('After all, the hospitalized could not fight. '),
            pep.seq('Even if ', pronouns.they(names.jerry0),
                ' didn\'t die, ', names.jerry,
                ' could at least avoid the fighting. '),
            pep.seq('But what if ', pronouns.they(names.jerry0),
                ' failed even at suicide? '),
        ), pep.choice(
            pep.seq('Then again, ', pronouns.they(names.jerry0),
                ' could end up dead, or worse, especially if the invading forces took control of the hospital. '
            ),
            pep.seq(
                'Or maybe invading forces would not look kindly at prisoners of war. '
            ),
            pep.seq('Likely, ', pronouns.they(names.jerry0),
                ' would be killed anyway by invading forces. '),
        ), pep.choice(
            pep.seq(world.brethrens(names.realm),
                ' were not kind in civil war. '),
            pep.seq(world.brethrens(names.realm),
                ' did not fuck around in times of war. '),
            pep.seq(names.jerry,
                ' would not last long in the hands of ', pronouns.their(
                    names.jerry0),
                ' enemies. '),
        ), pep.choice(
            pep.seq('There were no rules to follow. '),
            pep.seq('There was no Geneva Convention in ', world.realm(
                names.realm), '. '),
            pep.seq('There were no rules in civil war. '),
        ), pep.choice(
            pep.seq('Dead could be buried -- wounded needed care. '),
            pep.seq(
                'And the dead were much easier to deal with than the wounded. '
            ),
            pep.seq('Prisoners were more expensive than mass graves. '),
        ), html.pco,
        //p25         
        pep.choice(
            pep.seq('Looking down the thirty foot drop though, ', names
                .jerry,
                ' decided that perhaps suicide was not the best way. '),
            pep.seq('Looking down into the chasm, ', names.jerry,
                ' decided that suicide was not for ', pronouns.them(
                    names.jerry0), '. '),
            pep.seq(names.jerry,
                ' shied away from thoughts of suicide. '),
        ), pep.choice(
            pep.seq('There had to be another. '),
            pep.seq(
                'There had to be a way to stay out of war that didn\'t result in pain or death. '
            ),
            pep.seq(
                'Like momma always said, there\'s a better way to do things. '
            ),
        ), pep.choice(
            pep.seq('Could ', pronouns.they(names.jerry0),
                ' request a transfer to the medical or other nonviolent units? '
            ),
            pep.seq('Maybe ', pronouns.they(names.jerry0),
                ' could request a transfer. '),
            pep.seq('Maybe ', pronouns.they(names.jerry0),
                ' could request a promotion. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' could -- but ', pronouns.they(
                    names.jerry0), ' would be laughed at, for ',
                pronouns.they(names.jerry0),
                ' had no marketable skills. '),
            pep.seq('The commander wouldn\'t go for it. '),
            pep.seq('That plan was doomed to fail. '),
        ), html.pco,
        //p26           
        pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' could join the revolution, although then ', pronouns.they(
                    names.jerry0),
                '’d just be fighting for the otherside, and ', names.jerry,
                ' doubted that they were kinder. '),
            pep.seq(names.jerry,
                ' contemplated joining the rebellion. '),
            pep.seq(names.jerry,
                ' wondered if joining the rebellion would somehow be safer. '
            ),
        ), pep.choice(
            pep.seq(
                'What about an extended vacation, perhaps to the mortal realm? '
            ),
            pep.seq('What about vacationing to the mortal realm? '),
            pep.seq('What about sneaking away to the mortal realm? '),
        ), pep.choice(
            pep.seq('Or joining a scouting mission to the other side? '),
            pep.seq('Or joining an expedition to somewhere remote? '),
            pep.seq('Or joining the fire crews instead? '),
        ), pep.choice(
            pep.seq('Either could help ', names.jerry,
                ' forego battle, although ', names.jerry,
                ' had a feeling that no vacations were being approved in this particular moment in time. '
            ),
            pep.seq('Either would help ', names.jerry,
                ' avoid battle, but they weren\'t exactly easy solutions. '
            ),
            pep.seq(names.jerry,
                ' knew that these were just fantasies. '),
        ), pep.choice(
            pep.seq('You know, pending civil war and all. '),
            pep.seq(
                'Pending civil war really narrowed the options for escape. '
            ),
            pep.seq('It was far too late to escape the situation.  '),
        ), html.pco,
        //p27           
        pep.choice(
            pep.seq('"Did you hear they closed the portals down?" '),
            pep.seq('"Did you hear about the portals?" '),
            pep.seq(
                '"Did you hear the mortal world\'s been cut off from us?" '
            ),
        ), pep.choice(
            pep.seq(names.dorian, '\'s voice came from behind ', names.jerry,
                ', startling them.'),
            pep.seq(names.dorian, ' spoke behind ', names.jerry, '. '),
            pep.seq(names.dorian, ' blew cigar smoke in ', names.jerry,
                '\'s face as ', pronouns.they(
                    names.dorian), ' approached. '),
        ), html.pco,
        //p28           
        pep.choice(
            pep.seq('"What?" '),
            pep.seq('"You\'re kidding." '),
            pep.seq('"No way." '),
        ), pep.choice(
            pep.seq(names.jerry, ' said incredulously. '),
            pep.seq(names.jerry, ' was surprised. '),
            pep.seq(names.jerry, ' couldn\'t tell if ', names.dorian,
                ' was kidding. '),
        ), html.pco,
        //p29         
        pep.choice(
            pep.seq(
                '"Yeah, no one is supposed to leave or enter until this whole mess with ',
                names.eddie,
                ' is done." '),
            pep.seq(
                '"They\'ve got the portals under lock and key until ',
                names.eddie,
                ' is dealt with." '),
            pep.seq(
                '"Yeah, portals are closed and there\'s a bounty on ',
                names.eddie, ', too." '),
        ), pep.choice(
            pep.seq(names.dorian,
                ' huffed on a cigarette, releasing a long trail of white smoke. '
            ),
            pep.seq(names.dorian, ' took another drag of ', pronouns.their(
                names.dorian0), ' cigar. '),
            pep.seq(names.dorian, ' nodded sagely. '),
        ), html.pco,
        //p30          
        pep.choice(
            pep.seq('"Well, fuck me." '),
            pep.seq('"Damn, that\'s crazy." '),
            pep.seq('"Who would\'ve thought." '),
        ), pep.choice(
            pep.seq(names.jerry, ' said. '),
            pep.seq(names.jerry, ' chewed on the words for a moment. '),
            pep.seq(names.jerry, ' felt the unease grow inside ',
                pronouns.them(names.jerry0), '. '),
        ), pep.choice(
            pep.seq('"This is serious then." '),
            pep.seq('"That\'s unreal." '),
            pep.seq('"I didn\'t think it was that serious." '),
        ), html.pco,
        //p31        
        pep.choice(
            pep.seq('"Sure seems that way. '),
            pep.seq('"War is imminent. '),
            pep.seq('"Can\'t make this shit up. '),
        ), pep.choice(
            pep.seq('It\'s a fucking shame, too. '),
            pep.seq('It\'s so hard to imagine us at war. '),
            pep.seq('I can\'t believe the ', world.boss(names.realm),
                ' let it get this far. '),
        ), pep.choice(
            pep.seq('I\'d hate to get blood on my brand new dagger." '),
            pep.seq('I didn\'t want to blood my new dagger on ', world.brethrens(
                names.realm), '." '),
            pep.seq('I didn\'t actually want to use this dagger." '),
        ), pep.choice(
            pep.seq(names.dorian, ' hefted a shiny blade from ',
                pronouns.their(names.dorian0),
                ' waist belt. '),
            pep.seq(names.dorian, ' displayed a bright new blade from ',
                pronouns.their(names.dorian0),
                ' belt. '),
            pep.seq(names.dorian, ' fingered a blade on ', pronouns.their(
                names.dorian0), ' belt. '),
        ), pep.choice(
            pep.seq(
                '"But I guess if traitor blood is the only way to whet it, count me in." '
            ),
            pep.seq(
                '"I hope it does me good though, when the time comes." '
            ),
            pep.seq('"But that\'s what daggers are for, I guess." '),
        ), html.pco,
        //p32           
        pep.choice(
            pep.seq(names.jerry,
                ' paused a moment, weighing what to say to that ridiculously, flat toned desire to murder. '
            ),
            pep.seq(names.jerry, ' gathered thoughts before speaking. '),
            pep.seq(names.jerry, ' wasn\'t sure how to respond. '),
        ), pep.choice(
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' settled on an ambivalent nod and grunt. '),
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' decided on a smile. '),
            pep.seq('Smiling, ', names.jerry, ' nodded at ', names.dorian,
                '. '),
        ), html.pco,
        //p33        
        pep.choice(
            pep.seq('"I\'m going to walk the ledge." '),
            pep.seq('"I\'m off for a round." '),
            pep.seq('"I will be back shortly." '),
        ), pep.choice(
            pep.seq(names.dorian, ' said, pocketing the blade. '),
            pep.seq(names.dorian, ' sheathed the blade. '),
            pep.seq(names.dorian, ' grinned at names.jerry. '),
        ), pep.choice(
            pep.seq('"Commander thinks you’re going to break first. '),
            pep.seq('"', names.dorian,
                ' says you\'re our first and biggest coward." '),
            pep.seq('"', names.dorian,
                ' is saying you\'ll break rank and run when the time comes." '
            ),
        ), pep.choice(
            pep.seq('You aren’t, are you, ', names.jerry, '? '),
            pep.seq('You won\'t, will you? '),
            pep.seq('You wouldn\'t do that to me, though. '),
        ), pep.choice(
            pep.seq('We gotta have each other’s backs up here." '),
            pep.seq('We\'re like family." '),
            pep.seq('I believe in you." '),
        ), html.pco,
        //p34       
        pep.choice(
            pep.seq('"Fuck ', names.kaden, '." '),
            pep.seq('"Fuck this place." '),
            pep.seq('"This place could burn up for all I care." '),
        ), pep.choice(
            pep.seq(names.jerry, ' said rashly. '),
            pep.seq(names.jerry, ' spoke without a waver in ', pronouns
                .their(names.jerry0),
                ' voice. '),
            pep.seq(names.jerry, ' did not hesitate to speak rashly. '),
        ), pep.choice(
            pep.seq('Boldly. '),
            pep.seq(names.jerry, ' felt reckless. '),
            pep.seq('With fervor. '),
        ), pep.choice(
            pep.seq('"They don\'t know shit about me. '),
            pep.seq('"They don\'t know me from a brick in the wall. '),
            pep.seq('"They\'re full of shit. '),
        ), pep.choice(
            pep.seq('I got your back." '),
            pep.seq('I would never leave you." '),
            pep.seq('I would never fuck you over." '),
        ), pep.choice(
            pep.seq(names.jerry, ' felt the lie like a wet blanket. '),
            pep.seq(names.jerry, ' knew ', pronouns.they(names.jerry0),
                ' ', pronouns.were(names.jerry0), ' veering into dangerous territory. '),
            pep.seq(names.jerry, ' was straight up lying. '),
        ), pep.choice(
            pep.seq('But ', names.dorian,
                ' had an unblooded knife, and ', names.jerry,
                ' wasn\'t about to be its maiden voyage. '),
            pep.seq('But ', names.dorian,
                ' had a knife, so honesty wasn\'t an option. '),
            pep.seq('Anything to keep ', pronouns.them(names.jerry),
                ' alive another day. '),
        ), html.pco,
        //p35          
        pep.choice(
            pep.seq(names.dorian,
                '\'s eyes widened at the outright insult to the commander. '
            ),
            pep.seq(names.dorian, ' flinched when ', names.jerry,
                ' insulted the commander. '),
            pep.seq(names.dorian, ' ', dict.looked, ' perplexed at ',
                names.jerry, '\'s resolve. '),
        ), pep.choice(
            pep.seq('That, apparently, took courage to say out loud. '),
            pep.seq(pep.capitalize(pronouns.they(names.dorian0)),
                ' had not expected such furor from ',
                names.eddie, '. '),
            pep.seq(names.dorian, ' was utterly taken aback by ', names
                .jerry, '\'s boldness. '),
        ), pep.choice(
            pep.seq(names.dorian, ' slapped ', names.jerry,
                ' on the back. '),
            pep.seq(names.dorian, ' grinned. '),
            pep.seq(names.dorian, ' seemed satisfied. '),
        ), pep.choice(
            pep.seq('"I knew they were full of shit. '),
            pep.seq('"I knew it. '),
            pep.seq('"Atta boy. '),
        ), pep.choice(
            pep.seq('Be back in a bit." '),
            pep.seq('Be back soon." '),
            pep.seq('Gonna go make my rounds." '),

        ), html.p('c'))

};