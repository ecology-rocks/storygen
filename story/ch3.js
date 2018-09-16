var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./fxns/my-apep-fxns.js'); //custom functions
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup

//Our main character is presented with an opportunity to escape the realm that they're currently in and move onto the mortal realm. They take the opportunity and walk through the magic portal. Some of the portal lore may be introduced in this section. Supporting and/or recurring characters may also appear as helpers in this section.

module.exports = {

    title: pep.choice("Temptation", "A New Life", "Just Jump"),
    text: pep.seq(html.p('o'),

        pep.choice( //p1as1
            pep.seq('The moon hung low in the sky as ', names.jerry,
                ' walked across the courtyard and into the administrative building that led to freedom. '
            ),
            pep.seq(names.jerry,
                ' crunched through the courtyard towards the ominous administrative building. '),
            pep.seq('The moon hung ominously over the administration building as ', names.jerry,
                ' made ',
                pronouns.their(names.jerry0), ' way home. '),
        ), pep.choice( //s2
            pep.seq('It had been a long shift, but it was over and ', names.jerry,
                ' could not wait to crawl into bed. '),
            pep.seq(names.jerry, ' was thankful that the arduous shift was over. '),
            pep.seq(names.jerry, '\'s thoughts drifted as ', pronouns.they(names.jerry0),
                ' tried to shake off the long night. '),
        ), pep.choice( //s
            pep.seq('Nothing, of course, had happened. '),
            pep.seq('It had been an uneventful day of work. '),
            pep.seq('The evening had been long and boring. '),
        ), html.pco,

        pep.choice( //p2s1
            pep.seq('The hallway was dimly lit and sparsely populated. '),
            pep.seq(
                'The door opened with a creak as ', names.jerry, ' stepped into the dimly lit hallway. '),
            pep.seq(names.jerry, ' always felt like ', pronouns.they(names.jerry0),
                ' were part of some murder mystery when entering the gate building late at night. '),
        ), pep.choice( //s
            pep.seq(
                'Despite it being the literal changing of the guard, all of the day staff were gone. '
            ),
            pep.seq('It was amazing to ', names.jerry,
                ' how empty the gate building was, despite the shift change at this hour. '),
            pep.seq('The hallway smelled faintly of farm animal and gunpowder. '),
        ), pep.choice( //s3
            pep.seq('The preternatural quiet was harshly interrupted by ', names.jerry,
                '\'s combat books clunking upon the stone floor. '),
            pep.seq(names.jerry,
                '\'s boots disrupted the quiet hallway as they clattered against the stone. '),
            pep.seq('The hallway was quiet, punctuated only by ', names.jerry,
                '\'s heavy breath and boots upon the floor. '),
        ), html.pco,
        pep.choice( //p3s1
            pep.seq(names.jerry, ' turned a corner and found ', pronouns.themself(names.jerry0),
                ' in the midst of chaos. '),
            pep.seq(names.jerry, ' abruptly found ', pronouns.themself(names.jerry0),
                ' surrounded by activity as ', pronouns.they(names.jerry0), ' rounded the corner. '),
            pep.seq(names.jerry, ' heard voices just around the bend. '),
        ), pep.choice( //s2
            pep.seq('The lights were much brighter here, and orange cones and caution tape blocked ',
                pronouns.their(names.jerry0), ' path. '),
            pep.seq(
                'The flood lights reflected off of the bright orange safety cones and caution tape fluttered in the wind. '
            ),
            pep.seq(names.jerry,
                ' saw several folks on the other side of orange cones and caution tape. '),
        ), pep.choice( //s3
            pep.seq('A fellow guard, weapon loose in hands, nodded abruptly at ', names.jerry, '. '),
            pep.seq('The guard closest to ', names.jerry, ' grunted. '),
            pep.seq(names.jerry, ' saw the nearest guard eyeing ', pronouns.them(names.jerry0), '. '),
        ), html.pco,

        pep.choice( //p4s1
            pep.seq('"You\'ll have to go the long way, sorry, soldier." '),
            pep.seq('"This here hallway is closed, soldier." '),
            pep.seq('"Go on back the way you came." '),
        ), pep.choice( //s3
            pep.seq('The guard grunted. '),
            pep.seq(
                'The guard moved the orange cone between them, as if that would solve everything. '),
            pep.seq('The guard smiled. '),
        ), pep.choice( //s3
            pep.seq('"Bit of an incident up ahead." '),
            pep.seq('"Got a bit of a mess to clean up." '),
            pep.seq('"Classified business, you see?" '),
        ), html.pco,

        pep.choice(
            //p5
             pep.seq('"Do you need help?" '),
             pep.seq('"Oh, do you need me to assist?" '),
             pep.seq('"I\'ve got hands if you need them." '),
        ), pep.choice( //s3
             pep.seq(names.jerry,
                ' offered, surveying past the soldier to the fresh splats of blood on the wall. '),
             pep.seq('names.jerry wondered what the story was. '),
             pep.seq('names.jerry offered absentmindedly, immediately regretting the decision. '),
        ), pep.choice( //s3
             pep.seq(world.brethrens(names.realm), ' in hazmat suits were hard at work. '),
             pep.seq('The hazmats buzzed around behind the guard like busy little bees. '),
             pep.seq('Hazmatted ', world.brethrens(names.realm), ' were staring. '),
        ), html.pco,

        pep.choice(
            //p6
             pep.seq('"No, we\'ve got it handled. '),
           pep.seq(''),
             pep.seq(''),
        ), pep.choice( //s3
             pep.seq('Lousy traitors are just causing trouble for us in here. '),
             pep.seq(''),
             pep.seq(''),
        ), pep.choice( //s3
             pep.seq('Don\'t have to worry about that piece of scum any longer." '),
             pep.seq(''),
             pep.seq(''),
        ), pep.choice( //s3
             pep.seq('The soldier took a breath and ', names.jerry,
                ' realized belatedly that there was fresh blood on the sword that the guard held. '),
             pep.seq(''),
             pep.seq(''),
        ), pep.choice( //s3
             pep.seq(pep.capitalize(pronouns.their(names.jerry0)), ' stomach turned. '),
             pep.seq(''),
             pep.seq(''),
        ), html.pco,

        pep.choice(
            //p7
             pep.seq('"Just go left instead and keep to the south wall. '),
             pep.seq(''),
             pep.seq(''),
        ), pep.choice( //s3
             pep.seq(
                'You\'ll pass the armory and the vault, then hang a right and you\'ll be in the front lobby to check out." '
            ),
             pep.seq(''),
             pep.seq(''),
        ), pep.choice( //s3
             pep.seq('The soldier continued with a hearty smile. '),
             pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            // p8
            pep.seq('"Great, uh, thanks." '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' did a small salute and turned to walk away. '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p9
            pep.seq('"Have a great evening!" '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('The soldier shouted as ', names.jerry, ' departed. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' were unsure what to make of the scene, but bed still called ', pronouns.their(names
                    .jerry0),
                ' name. '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p10
            pep.seq(
                'The armory was shut and locked as it should be, but the vault\'s door was wide open and the lights were beaming out into the otherwise dark hallway. '
            ),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' slowed ', pronouns.their(names.jerry0), ' pace as ', pronouns.they(
                    names.jerry0),
                ' approached the door, wondering if the aftermath in the shortcut had anything to do with the vault seemingly being unsecured. '
            ),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' unsheathed ', pronouns.their(names
                    .jerry0),
                ' own dagger, gripping it with a white-knuckled ferocity.'),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p11
            pep.seq(names.jerry, ' peered around the corner, filled with apprehension. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(
                'The portal in the center of the vaulted room glowed iridescent blue and purple, lighting the room up all by itself. '
            ),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('There was no sign of life. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Cautiously, ', names.jerry,
                ' stepped across the threshold, dagger held at the ready. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' flipped ', pronouns.their(names.jerry0),
                ' head left and right, scanning the walls for signs of an ambush. '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p12
            pep.seq('There was nothing. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry,
                ' had not spent a lot of time in the vault -- only during orientation -- but nothing seemed out of place. '
            ),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('There were no bodies, no signs of a scuffle. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Nothing seemed out of the ordinary, other than the fact that ', names.dorian,
                ' had said just this past evening that the portals were all closed down. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('And this was the opposite of "closed down."'),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p13
            pep.seq('Heart racing, ', names.jerry, ' sheathed ', pronouns.their(names.jerry0),
                ' dagger and looked out into the abandoned hallway. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('As if against ', pronouns.their(names.jerry0), ' own will, ', names.jerry,
                ' carefully pulled the vault door shut. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Other than one small squeak, it glided fluidly and closed quietly. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' heard a click as the door shut and ', pronouns.their(names.jerry0),
                ' eyes went wide with panic. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Of course the door had an auto-lock. '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p14
            pep.seq(names.jerry, ' pushed on the door, but it would not budge. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('The panic became full blown. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('How would ', names.jerry, ' explain this in the morning when someone found ',
                pronouns.them(names.jerry0), '? '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p15
            pep.seq('"Fuck, fuck, fuck." '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' muttered as ', pronouns.they(names.jerry0),
                ' paced in front of the locked the door. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(html.i('o'), 'I was going home when I noticed the door open. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(
                'I came in to survey and make sure that nothing was out of place when somehow the door shut. ',
                html.i('c'), ),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p16
            pep.seq(names.jerry, ' had a feeling that they would see through those flimsy excuses. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' knew why ', pronouns.they(names.jerry0), ' had closed the door. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Even if ', pronouns.they(names.jerry0), ' didn\'t want to admit it. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(html.i('o'), 'Freedom from fighting is right through that portal. ', html.i('c'), ),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' heard the traitorous self-voice in the silence of the vault. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' hadn\'t closed the door to prevent escapes. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('No one shut the door on ', pronouns.them(names.jerry0), '. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' shut the door to escape -- and knew it. '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p17
            pep.seq('The time was now or never. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Try to spin a story about why ', pronouns.they(names.jerry0),
                ' were locked in the vault room by ', pronouns.themself(names.jerry0),
                ', with the guard missing, or just go ahead and walk through the portal to freedom. '
            ),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' stepped away from the door and looked at the portal. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('It was now a blue-ish orange, and it seemed to be calling to ', pronouns.them(
                names
                .jerry0), '. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('Unlike many, ', pronouns.they(names.jerry0),
                ' had never actually been through the portal. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('By some small miracle, ', pronouns.they(names.jerry0),
                ' had missed most of the hazing that occurred in basic training. '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p18
            pep.seq('But ', pronouns.they(names.jerry0), ' had heard the stories. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('How the mortal realm was much like the ', world.realm(names.realm),
                ' realm, just devoid of magic and immortality. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(
                'How there was a rush in not-belonging, and a peacefulness to the mortal realm that was unlike anything ever experienced in ',
                world.realm(names.realm), '. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('How there were no laws for those ', world.brethrens(names.realm),
                ' that walks on the other side. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('No consequences. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(
                'How one could disappear without a trace in the vast wilderness of the mortal realm. '
            ),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p19
            pep.seq(html.i('o'), 'You can never come back, ', names.jerry, '. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('No more mother, or father. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('No more hanging out with ', names.reed, ' or bantering with ', names.dorian,
                '. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('You will be a traitor and a coward if you jump through that portal. ', html.i(
                'c'), ),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p20
            pep.seq('"I am already." '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' answered their silent musings out loud. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('"I am the one in a locked room with the portal, with the guard missing. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq(names.kaden, ' has it out for me. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('No one will come to my defense. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('It is either die here, or run there." '),
            pep.seq(''),
            pep.seq(''),
        ), html.pco,

        pep.choice(
            //p21
            pep.seq(names.jerry, ' drew closer to the portal. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('It emitted a soft hum, barely perceptible to the ears. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('It called to ', names.jerry, ', the promise of a new life awaiting. '),
            pep.seq(''),
            pep.seq(''),
        ), pep.choice( //s3
            pep.seq('With nothing to lose, ', pronouns.they(names.jerry0), ' jumped. '),
            pep.seq(''),
            pep.seq(''),
        ), html.p('c'), )
};