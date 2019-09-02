var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./fxns/my-apep-fxns.js'); //custom functions
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup

//'We are introduced to our character\'s sense of pacifism through some sort of interaction with another creature.'

/* ROAD MAP

1. Write the first version of text
2. Import the first version and get it running
3. Add two alternate sentence versions to each sentence -- working on now
4. Add in word variation 

*/

module.exports = {
    //could be expanded more
    title: pep.choice("Rosy Recollections", "Childhood", "The Cruel, Cruel World"),
    text: pep.seq(html.p('o'), html.i('o'),
            //p1
            pep.choice(
                pep.seq('"Momma, momma!" ', names.jerry, ' ', dict.cried, ' as ', pronouns.they(names.jerry0),
                    ' ', dict.fled, ' from ', pronouns.their(names.jerry0), ' ', dict.bullies, '. '),
                pep.seq('"', dict.leaveMeAlone, '" ', names.jerry, ' ', dict.cried, ' as ', pronouns.they(
                    names.jerry0), ' ', dict.fled, ' in ', dict.terror, '. '),
                pep.seq(names.jerry, ' ', dict.fled, ' at ', dict.breakneck, ' ', dict.speed,
                    ' around the ', dict.corner, ' and towards the ', dict.house, '. '),
            ),
            //s2
            pep.choice(
                //adrian and max chased after them, leaving hastily placed footprints behind them as they ran. 
                pep.seq(names.adrian, ' and ', names.max, ' ', dict.chased, ' after ', pronouns.them(
                        names.jerry0), ', leaving ', dict.hastily, ' placed ', dict.footprints,
                    ' behind them as they ', dict.chased, '. '),
                //Their tormentors, adrian and max, were chasing jerry and cackling as they went.
                pep.seq(pronouns.Their(names.jerry0), ' ', dict.bullies, ', ', names.adrian,
                    ' and ', names.max, ', were ', myPep.edIng(dict.chased), ' ', names.jerry, ' and ',
                    dict.cackling, ' as they went. '),
                //A team of taller, stronger, faster children were chasing jerry at a supernaturally fast speed. 
                pep.seq('A ', dict.couple, ' of ', dict.taller, ', ', dict.stronger, ', ', dict.faster,
                    ' ', dict.juveniles, ' were ', dict.chasing, ' ', names.jerry, ' at a ', dict.breakneck,
                    ' ', dict.speed, '. '),
            ),

            pep.choice(
                pep.seq(names.jerry, ' felt relief ', dict.washOver, ' ', pronouns.them(names.jerry0),
                    ' when ', pronouns.they(names.jerry0), ' ', dict.spotted, ' ', pronouns.their(names.jerry0),
                    ' mother ', dict.peeking, pep.opt(pep.seq(" ", dict.furtively)),
                    ' out from behind the ', pep.opt("kitchen "), 'window', pep.opt(" curtains"), '. '),
                // jerry spotted their mother inside the window. 
                pep.seq(names.jerry, ' ', dict.spotted, ' ', pronouns.their(names.jerry0),
                    ' mother inside the window. '),
                //Closing the distance to the house, jerry knew relief and safety were close.
                pep.seq('Closing the distance to the ', dict.house, ', ', names.jerry,
                    ' knew relief and safety were close. '),
            ),

            pep.choice( // s4

                //jerry scrambled up the front steps to the door and yanked on the handle.
                pep.seq(names.jerry, ' ', dict.fled,
                    ' up the front steps to the door and yanked on the handle. '),
                // jerry cleared the front steps on the way to the safety of the door, twisting the knob with ferocity.
                pep.seq(names.jerry,
                    ' cleared the front steps on the way to the safety of the door, twisting the knob with ferocity. '
                ),
                // jerry grabbed the front door handle and pulled backwards, the sounds of bullies right behind them.
                pep.seq(names.jerry,
                    ' grabbed the front door handle and pulled backwards, the sounds of ', dict.bullies,
                    ' right behind ', pronouns.them(names.jerry0), '. '),
            ),
            pep.choice(

                //s5 

                //It didn't budge.
                pep.seq('It didn\'t budge. '),
                pep.seq('The door wouldn\'t move. '),
                pep.seq('The door was like iron in ', pronouns.their(names.jerry0), ' hands. '),
            ), html.pco, //p2

            pep.choice( //s1
                pep.seq('"Momma!" '),
                //"Are you home, momma?"
                pep.seq('"Are you home, momma?" '),
                //jerry jiggled the door handle again.
                pep.seq(names.jerry, ' jiggled the door handle again. '),
            ), pep.choice( //s2

                //jerry’s voice grew desperate.  
                pep.seq(names.jerry, '\'s voice grew desperate. '),
                //jerry's voice shook with fear. 
                pep.seq(names.jerry, '\'s voice shook with fear. '),
                //The fear in jerry's voice was obvious.
                pep.seq('The fear in ', names.jerry, '\'s voice was obvious. '),

            ), pep.choice( //s3
                //“Let me in!”
                pep.seq('"Let me in!" '),
                //"Please god."
                pep.seq('"Please, ', dict.gods, '. "'),
                //"Momma..."
                pep.seq('"Momma..." '),
            ), html.pco,

            pep.choice( //p3

                //“Play with your friends.” 
                pep.seq('"Play with your ', myPep.pluralize(dict.buddy), '." '),
                // "Don't you be running in here when you\'ve got friends outside."
                pep.seq('"Don\'t you be coming in here when you\'ve got ', myPep.pluralize(dict.buddy),
                    ' outside." '),
                //"You know the rule. Stay outside until dinner. "
                pep.seq('"You know the rule. Stay outside until dinner." '),
            ), pep.choice( //s2
                //A dull, flat voice came from behind the door. 
                pep.seq('A dull, flat voice came from behind the door. '),
                //Their mother's trill voice came from the other side.
                pep.seq(pronouns.Their(names.jerry0),
                    ' mother\'s trill voice came from the other side. '),
                //A heartless monotone met jerry's struggles
                pep.seq('A ', dict.heartless, ' monotone met ', names.jerry, '\'s struggles. '),
            ), pep.choice( //s3
                //jerry heard the door chain jingle. 
                pep.seq(names.jerry, ' heard the door chain jingle. '),
                // jerry heard footsteps walking away.
                pep.seq(names.jerry, ' heard footsteps walking away. '),
                // jerry knew their mother would be no help.
                pep.seq(names.jerry, ' knew ', pronouns.their(names.jerry0), ' mother would be no help. '),
            ), pep.choice( //s4
                //“And don’t come home until sundown.”
                pep.seq('"And don\'t come home until sundown." '),
                // "I don't want to see you here again until night time."
                pep.seq('"I don\'t want to see you here again until night time." '),
                // "Be gone now, child."
                pep.seq('"Be gone now, child." '),
            ), html.pco,

            pep.choice( //p4s1
                //adrian and max were upon jerry, though the steps were a line in the sand they were not willing to cross. 
                pep.seq(names.adrian, ' and ', names.max, ' were upon ', names.jerry,
                    ', though the steps were a line in the sand they were not willing to cross. '),
                // adrian and max stood motionless in front of the house.
                pep.seq(names.adrian, ' and ', names.max, ' stood motionless in front of the house. '),
                //The children raced to the house but stopped short of the porch. 
                pep.seq('The children ', dict.raced, ' to the ', dict.house, ' but stopped ', dict.short,
                    ' of the porch. '),

            ), pep.choice( //s2
                //They crossed their arms in front of their chests like creepy twins.
                pep.seq('They simultaneously ', dict.crossedTheirArms, ' like ', dict.creepy, ' twins. '),
                // adrian/max grinned from ear to ear while the other stared, slack-jawed. 
                pep.seq(pep.choice(names.adrian, names.max), ' ', dict.grinned, ' ', dict.widely,
                    ' while the other ', dict.stared, ', ', dict.slackJawed, '. '),
                // The freakishly tall bullies had patient looks on their faces.
                pep.seq('The ', dict.freakishly, ' tall ', dict.bullies,
                    ' had patient looks on their faces. '),

            ), html.pco,
            pep.choice( //p5 
                //“Come play with us!” 
                pep.seq('"Come play', pep.opt(' with us'), '!" '),
                //"Come on, it'll only hurt a little." 
                pep.seq('"Come on, it\'ll only hurt a ', dict.little, '." '),
                //"There\'s no escape now."
                pep.seq('"You may as well come down -- there\'s no ', dict.escape, ' now." '),
            ), pep.choice( //s2
                //adrian cajoled, no hint of laughter in their voice.
                pep.seq(names.adrian, ' ', dict.cajoled, ', no hint of ', dict.laughter, ' in ', pronouns
                    .their(names.adrian0), ' voice. '),
                // max said seriously.
                pep.seq(names.max, ' said ', dict.seriously, '. '),
                //Their faces held no sunshine, only murder. 
                pep.seq('Their faces held no sunshine, only ', dict.murder, '. '),
            ), html.pco,

            pep.choice( //p6s1

                //“No thank you.” 
                pep.seq('"No, ', dict.thankYou, '." '),
                //"I'd rather swallow a sack of bees."
                pep.seq('"I\'d rather ', dict.swallow, ' a ', dict.sack, ' of ', dict.bees, '." '),
                //"Go fuck yourselves."
                pep.seq('"Go ', dict.fuckYourselves, '." '),
            ), pep.choice( //s2
                //jerry said firmly, and leaned against their front door for support. 
                pep.seq(names.jerry, ' said ', dict.seriously, ', and ', dict.leaned, ' against ',
                    pronouns.their(names.jerry0), ' front door for support. '),
                // Their voice shook as they spoke.
                pep.seq(pronouns.Their(names.jerry0), ' voice shook as ', pronouns.they(
                    names.jerry0), ' spoke. '),
                // It came as a whisper from jerry's mouth.
                pep.seq('It came as a whisper from ', names.jerry, '\'s mouth. '),
            ), pep.choice( //s3
                //“I’d like to play by myself for a while.” 
                pep.seq('"I\'d like to play by myself for a while." '),
                // "You need to leave."
                pep.seq('"You need to leave." '),
                // "Please go away. I don't want to play your stupid game."
                pep.seq('"Please go away. I don\'t want to play your stupid game." '),
            ), pep.choice( //s4
                //The three passed a long moment in silence, no one budging from their spot.
                pep.seq('The three ', dict.spent, ' a long ', dict.moment, ' in ', dict.silence,
                    ', no one ', dict.budging, ' from their ', dict.position, '. '),
                // It seemed that they were at a standstill.
                pep.seq('It seemed that they were at ', myPep.aAn(dict.standstill), '. '),
                // No one moved.
                pep.seq('No one ', myPep.edIng(dict.budging), '. '),
            ), html.pco,

            pep.choice( //p7

                //“We’ll wait, then.” 
                pep.seq('"We\'ll wait, then." '),
                // "No worries. We\'ll be here." 
                pep.seq('"No worries. We\'ll be here." '),
                // "It\'ll be fun."
                pep.seq('"It\'ll be fun though, we promise!" '),
            ), pep.choice( //s2
                //adrian said, and together, they strode to the scraggly elm in the front yard. 
                pep.seq(names.adrian, ' said, and together, they ', dict.strode, ' to the ', dict.scraggly,
                    ' ', dict.elm, ' in the front yard. '),
                // adrian and max walked towards the shrubbery near the house.
                pep.seq(names.adrian, ' and ', names.max, ' ', dict.strode, ' towards the ', dict.elm,
                    ' near the ', dict.house, '. '),
                // The children backed away from the porch, taking up space near the ornamental tree out front. 
                pep.seq('The children ', dict.retreated, ' from the porch, taking up space near the ',
                    dict.ornamental, ' ', dict.elm, ' out front. '),
            ), pep.choice( //s3
                //It gave no shade, but they were not there for the shade. 
                pep.seq('It gave little ', dict.shade, ', but they were not there for the ', dict.shade,
                    '. '),
                // Even the greenery seemed cowed by their presence. 
                pep.seq('Even the greenery seemed ', dict.cowed, ' by their presence. '),
                // jerry breathed a sigh of relief.
                pep.seq(names.jerry, ' breathed a sigh of relief. '),
            ), pep.choice( //s4
                //They sat down in front of the elm, and max produced a ball from their left pocket.  
                pep.seq(names.adrian, ' sat down, and ', names.max,
                    ' produced a ball from their left pocket. '),
                // Taking a seat, adrian began drawing a gruesome picture in the dirt.
                pep.seq('Taking a seat, ', names.adrian,
                    ' began drawing a gruesome picture in the dirt. '),
                // They settled in the dirt by the trees. 
                pep.seq('They settled in the ', dict.dirt, ' by the tree. '),
            ), pep.choice( //s5
                //They began to play ball, as if it was the most natural thing in the world.
                pep.seq('They ', dict.began,
                    ' to play ball, as if it was the most natural thing in the world. '),
                // max idly threw a ball up in the air and caught it with their eyes closed.
                pep.seq(names.max, ' ', dict.idly, ' ', dict.threw, ' a ball up in the air and ', dict.caught,
                    ' it with ', pronouns.their(names.max0), ' eyes closed. '),
                // adrian giggled with anticipation.
                pep.seq(names.adrian, ' ', myPep.edIng(dict.cackling), ' with anticipation. '),
            ), pep.choice( //s6
                //As if three minutes ago, they had not just tried to beat jerry into a pulp.
                pep.seq('As if ', dict.sp2to6, ' ', myPep.pluralize(dict.moment),
                    ' ago, they had not just tried to ', dict.beat, ' ', names.jerry, ' into a pulp. '),
                // They seemed wholly unconcerned with jerry, but jerry was not fooled.
                pep.seq('They seemed wholly ', dict.unconcerned, ' with ', names.jerry, ', but ', names.jerry,
                    ' was not ', dict.fooled, '. '),
                //It was as if nothing had happened. 
                pep.seq('It was as if nothing had happened. '),
            ), html.pco,

            pep.choice( //p8s1

                //p8

                //Not knowing what else to do, jerry sat on the front porch, back against the door, and cried.
                pep.seq(pep.opt('Not knowing what else to do, '), names.jerry,
                    ' sat on the front porch, back against the door, and ', dict.sobbed, '.'),
                // jerry wondered if a day would ever go without being harrassed by the neighbor kids.
                pep.seq(names.jerry, ' wondered if a day would ever ', dict.goBy, ' without being ', dict
                    .harassed, ' by the neighbors. '),
                // jerry stifled back tears as they took a seat to wait for sunset.
                pep.seq(names.jerry, ' ', dict.stifled, ' ', dict.sobs, ' as ', pronouns.they(names.jerry0),
                    ' took a seat to wait for sunset. '),
            ), //end choice
            html.i('c'), html.p('c'),
        ) ///end seq

};