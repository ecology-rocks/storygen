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
           pep.seq('"No, thank you. '),
             pep.seq('"No need for that now. '),
        ), pep.choice( //s3
             pep.seq('Lousy traitors are just causing trouble for us in here. '),
             pep.seq('Every once in a while, we need to take the trash out. '),
             pep.seq('Just a bit of a hiccup in the day. '),
        ), pep.choice( //s3
             pep.seq('Don\'t have to worry about that piece of scum any longer." '),
             pep.seq('There\s no need to be concerned." '),
             pep.seq('Carry on with your day, good person." '),
        ), pep.choice( //s3
             pep.seq('The soldier took a breath and ', names.jerry,
                ' realized belatedly that there was fresh blood on the sword that the guard held. '),
             pep.seq(names.jerry, ' couldn\'t take ', pronouns.their(names.jerry0), ' eyes off of the blood dripping from the guard\'s sword. '),
             pep.seq('Blood dripped from the sword that the guard held. '),
        ), pep.choice( //s3
             pep.seq(pep.capitalize(pronouns.their(names.jerry0)), ' stomach turned. '),
             pep.seq(names.jerry, ' felt sick at the sight. '),
             pep.seq('The gore made ', names.jerry, '\'s stomach churn. '),
        ), html.pco,

        pep.choice(
            //p7
             pep.seq('"Just go left instead and keep to the south wall. '),
             pep.seq('"Turn back towards where you came from. '),
             pep.seq('"You know the other way out, right? '),
        ), pep.choice( //s3
             pep.seq(
                'You\'ll pass the armory and the vault, then hang a right and you\'ll be in the front lobby to check out." '
            ),
             pep.seq('You need to go by the vault and then you\'ll find yourself in the lobby." '),
             pep.seq('It\'s an easy trek around the other side, past the vault." '),
        ), pep.choice( //s3
             pep.seq('The soldier continued with a hearty smile. '),
             pep.seq('The soldier finished their thought and smiled. '),
            pep.seq('The soldier absentmindedly wiped the bloody blade on their crisp, black pants. '),
        ), html.pco,

        pep.choice(
            // p8
            pep.seq('"Great, uh, thanks." '),
            pep.seq('"Have a great evening." '),
            pep.seq('"Thanks -- see you around." '),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' did a small salute and turned to walk away. '),
            pep.seq(names.jerry, ' bowed in respect and turned to go from the bloody scene. '),
            pep.seq(names.jerry, ' nodded numbly and saluted. '),
        ), html.pco,

        pep.choice(
            //p9
            pep.seq('"Have a great evening!" '),
            pep.seq('"Peace be with you!" '),
            pep.seq('"Farewell, friend!" '),
        ), pep.choice( //s3
            pep.seq('The soldier shouted as ', names.jerry, ' departed. '),
            pep.seq('The soldier\'s shout followed ', names.jerry, ' down the hallway. '),
            pep.seq(names.jerry, ' heard the soldier say as ', pronouns.they(names.jerry0), ' departed. '),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' were unsure what to make of the scene, but bed still called ', pronouns.their(names
                    .jerry0),
                ' name. '),
            pep.seq('If ', names.jerry, ' was being honest, sleeping was more important than processing what ', pronouns.they(names.jerry0), ' had just witnessed. '),
            pep.seq(names.jerry, ' tried ', pronouns.their(names.jerry0), ' hardest to ignore what ', pronouns.they(names.jerry), ' had just witnessed. '),
        ), html.pco,

        pep.choice(
            //p10
            pep.seq(
                'The armory was shut and locked as it should be, but the vault\'s door was wide open and the lights were beaming out into the otherwise dark hallway. '
            ),
            pep.seq('As ', names.jerry, ' turned the corner, ', pronouns.they(names.jerry0), ' saw the vault\'s door ajar. '),
            pep.seq('Passing the locked armory, ', names.jerry, ' saw the vault door ajar. '),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' slowed ', pronouns.their(names.jerry0), ' pace as ', pronouns.they(
                    names.jerry0),
                ' approached the door, wondering if the aftermath in the shortcut had anything to do with the vault seemingly being unsecured. '
            ),
            pep.seq(names.jerry, ' felt a surge of adrenaline as ', pronouns.they(names.jerry0), ' realized that this might be part of the ', dict.rebellion, '. '),
            pep.seq('Light flooded the hallway from the askew door as ', names.jerry, ' approached. '),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' unsheathed ', pronouns.their(names
                    .jerry0),
                ' own dagger, gripping it with a white-knuckled ferocity.'),
            pep.seq('Gripping ', pronouns.their(names.jerry0), ' dagger, ', names.jerry, ' felt ', pronouns.their(names.jerry0), ' heart pounding painfully. '),
            pep.seq('Every second felt like an hour as ', names.jerry, ' gripped a dagger and got ready for combat. '),
        ), html.pco,

        pep.choice(
            //p11
            pep.seq(names.jerry, ' peered around the end of the door, filled with apprehension. '),
            pep.seq('The door seemed so large as ', names.jerry, ' peered around its corner, to see what awaited. '),
            pep.seq(names.jerry, ' rushed around the end of the door blindly,  with a gasping breath. '),
        ), pep.choice( //s3
            pep.seq(
                'The portal in the center of the vaulted room', 
              ' glowed iridescent blue and purple, lighting the room up all by itself. '
            ),
            pep.seq('The eerie blue shine of the portal shut down', names.jerry, '\'s fears at once. '),
            pep.seq('The portal hummed, alone in the vault. '),
        ), pep.choice( //s3
            pep.seq('There was no sign of life. '),
            pep.seq('There were no enemies here. '),
            pep.seq('No danger in sight. '),
        ), pep.choice( //s3
            pep.seq('Cautiously, ', names.jerry,
                ' stepped across the threshold, dagger held at the ready. '),
            pep.seq(names.jerry, ' tiptoed through the doorway and into the room. '),
            pep.seq('Hands shaking, ', names.jerry, ' held the dagger out as ', pronouns.they(names.jerry0), ' stepped into the room. '),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' flipped ', pronouns.their(names.jerry0),
                ' head left and right, scanning the walls for signs of an ambush. '),
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)), ' scanned the room for a potential ambush. '),
            pep.seq(names.jerry, ' fingered the blade lightly as ', pronouns.they(names.jerry0), ' took stock of the room. '),
        ), html.pco,

        pep.choice(
            //p12
            pep.seq('There was nothing. '),
            pep.seq('Again, ', pronouns.they(names.jerry0), ' saw nothing. '),
            pep.seq('The room was silent, except for the dim noise of the portal. '),
        ), pep.choice( //s3
            pep.seq(names.jerry,
                ' had not spent a lot of time in the vault -- only during orientation -- but nothing seemed out of place. '
            ),
            pep.seq('Nothing seemed out of place here, either. '),
            pep.seq('The room looked completely normal to ', names.jerry, '. '),
        ), pep.choice( //s3
            pep.seq('There were no bodies, no signs of a scuffle. '),
            pep.seq('No scuff marks, no bodies. '),
            pep.seq('No blood or gore to be found. '),
        ), pep.choice( //s3
            pep.seq('Nothing seemed out of the ordinary, other than the fact that ', names.dorian,
                ' had said just this past evening that the portals were all closed down. '),
            pep.seq('But hadn\'t ', names.dorian, 
                    ' said that the portals were shut down? '),
            pep.seq('But why was this portal open, when ', names.dorian, 
                    ' had said they were all locked down? '),
        ), pep.choice( //s3
            pep.seq('And this was the opposite of "closed down." '),
            pep.seq('This portal was teeming with life. '),
            pep.seq('This portal, in contrast, was wide open and ready for business. '),
        ), html.pco,

        pep.choice(
            //p13
            pep.seq('Heart racing, ', names.jerry, ' sheathed ', pronouns.their(names.jerry0),
                ' dagger and looked out into the abandoned hallway. '),
            pep.seq(names.jerry, ' sheathed ', pronouns.their(names.jerry0), ' dagger, slightly ashamed of ', pronouns.their(names.jerry0), ' potential overreaction. '),
            pep.seq(names.jerry, ' clipped the dagger back into its case. '),
        ), pep.choice( //s3
            pep.seq('As if against ', pronouns.their(names.jerry0), ' own will, ', names.jerry,
                ' carefully pulled the vault door shut. '),
            pep.seq('Almost under a spell, ', names.jerry, ' yanked the vault door shut. '),
            pep.seq('Not even thinking about what ', pronouns.they(names.jerry0), ' were doing, ', names.jerry, ' pulled the vault door closed behind ', pronouns.them(names.jerry0), '. '),
        ), pep.choice( //s3
            pep.seq('Other than one small squeak, it glided fluidly and closed quietly. '),
            pep.seq('It creaked the entire way closed. '),
            pep.seq('It shut smoothly and silently. '),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' heard a click as the door shut and ', pronouns.their(names.jerry0),
                ' eyes went wide with panic. '),
            pep.seq('The click snapped ', names.jerry, ' out of ', pronouns.their(names.jerry0), ' daze. '),
            pep.seq(names.jerry, ' felt the door lock into place. '),
        ), pep.choice( //s3
            pep.seq('Of course the door had an auto-lock. '),
            pep.seq('Why wouldn\'t the door lock itself? '),
            pep.seq(names.jerry, ' had forgotten about the lock. '),
        ), html.pco,

        pep.choice(
            //p14
            pep.seq(names.jerry, ' pushed and pulled on the door, but it would not budge. '),
            pep.seq('Using all of the strength that ', pronouns.they(names.jerry0), ' could, ', pronouns.they(names.jerry0), ' tried desperately to open the door. '),
            pep.seq('It was too late, and ', names.jerry, ' knew it. '),
        ), pep.choice( //s3
            pep.seq('The panic became full blown. '),
            pep.seq(pep.capitalize(pronouns.their(names.jerry0)), ' throat felt tight around ', pronouns.their(names.jerry0), ' breath. '),
            pep.seq('A sinking feeling settled in. '),
        ), pep.choice( //s3
            pep.seq('How would ', names.jerry, ' explain this in the morning when someone found ',
                pronouns.them(names.jerry0), '? '),
            pep.seq('How was one to explain away being found in the vault with the only open portal? '),
            pep.seq('What would ', names.jerry, ' do to get out of this mess? '),
        ), html.pco,

        pep.choice(
            //p15
            pep.seq('"Fuck, fuck, fuck." '),
            pep.seq('"Holy mother of god." '),
            pep.seq('"What have I done?" '),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' muttered as ', pronouns.they(names.jerry0),
                ' paced in front of the locked the door. '),
            pep.seq(names.jerry, '\'s voice echoed in the empty chamber. '),
            pep.seq(pep.capitalize(pronouns.their(names.jerry0)), ' voice felt flat, yet full of pain. '),
        ), html.i('o'), pep.choice( //s3
            pep.seq( 'I was going home when I noticed the door open. '),
            pep.seq('I noticed the door ajar. '),
            pep.seq('There were strange noises coming through the open door. '),
        ), pep.choice( //s3
            pep.seq(
                'I came in to survey and make sure that ', 
              'nothing was out of place when somehow the door shut. ',),
            pep.seq('I saw someone in here, but they jumped through the portal. '),
            pep.seq('Some creature knocked me out and locked me in here. '),
        ), html.i('c'), html.pco,

        pep.choice(
            //p16
            pep.seq(names.jerry, ' had a feeling that they would see through those flimsy excuses. '),
            pep.seq('The excuses were a lie, and everyone would know it. '),
            pep.seq('Everyone would see right through the lies. '),
        ), pep.choice( //s2
            pep.seq(names.jerry, ' knew why ', pronouns.they(names.jerry0), ' had closed the door. '),
            pep.seq(names.jerry, ' closed the door for one reason only. '),
            pep.seq('No one would believe that ', names.jerry, ' had\'nt closed the door ', pronouns.themself(names.jerry0), '. '),
        ), pep.choice( //s3
            pep.seq('Even if ', pronouns.they(names.jerry0), ' didn\'t want to admit it. '),
            pep.seq('Though ', names.jerry, ' would never admit it. '),
            pep.seq(names.jerry, ' was a traitor, pure and simple. '),
        ), html.i('o'), pep.choice( //s4
            pep.seq('Freedom from fighting is right through that portal. ', ),
            pep.seq('Freedom is just a few steps away. '),
            pep.seq('Your chance to be free of this realm is just a few feet from you. '),
        ), html.i('c'), pep.choice( //s5
            pep.seq(names.jerry, ' heard the traitorous self-voice in the silence of the vault. '),
            pep.seq('The voice rang loud and clear in ', pronouns.their(names.jerry0), ' head. '),
            pep.seq('The choice was clear. '),
        ), pep.choice( //s6
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' hadn\'t closed the door to prevent escapes. '),
            pep.seq(names.jerry, ' knew there was only one way out. '),
            pep.seq(names.jerry, ' knew the truth of matters. '),
        ), pep.choice( //s7
            pep.seq('No one outside of the vault shut the door on ', pronouns.them(names.jerry0), '. '),
            pep.seq('No one compelled ', names.jerry, ' to close the door. '),
            pep.seq('There was no scapegoat to be had here. '),
        ), pep.choice( //s8
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' shut the door to escape -- and knew it. '),
            pep.seq(names.jerry, ' had been trying to flee. '),
            pep.seq(names.jerry, ' was a goner. '),
        ), html.pco,

        pep.choice(
            //p17
            pep.seq('The time was now or never. '),
            pep.seq('Decision time was nigh. '),
            pep.seq('It was time to make a choice. '),
        ), pep.choice( //s3
            pep.seq('Try to spin a story about why ', pronouns.they(names.jerry0),
                ' were locked in the vault room by ', pronouns.themself(names.jerry0),
                ', with the guard missing, or just go ahead and walk through the portal to freedom. '
            ),
            pep.seq('Spin a story, or jump to freedom. '),
            pep.seq('Stay for jail or flee for a new chance. '),
        ), pep.choice( //s3
            pep.seq(pep.capitalize(pronouns.they(names.jerry0)),
                ' stepped away from the door and looked at the portal. '),
            pep.seq(names.jerry, ' stepped towards the portal. '),
            pep.seq(names.jerry, ' could not tear ', pronouns.their(names.jerry0), ' eyes away from the portal. '),
        ), pep.choice( //s3
            pep.seq('It was now a blue-ish orange, and it seemed to be calling to ', pronouns.them(
                names
                .jerry0), '. '),
            pep.seq('It glimmered in the dim room, calling to ', pronouns.them(names.jerry0), '. '),
            pep.seq('It was fascinating to watch the swirling blue and orange colors in the ornately carved frame. '),
        ), pep.choice( //s3
            pep.seq('Unlike many, ', pronouns.they(names.jerry0),
                ' had never actually been through the portal. '),
            pep.seq(names.jerry, ' had never been to the other side before. '),
            pep.seq(names.jerry, ' had never seen the other world before. '),
        ), pep.choice( //s3
            pep.seq('By some small miracle, ', pronouns.they(names.jerry0),
                ' had missed most of the hazing that occurred in basic training. '),
            pep.seq('Escaping most of the hazing in basic training, ',  names.jerry, ' had skirted the experience entirely. '),
            pep.seq(names.jerry, ' wondered if it was a better world on the other side. '),
        ), html.pco,

        pep.choice(
            //p18
            pep.seq('But ', pronouns.they(names.jerry0), ' had heard the stories. '),
            pep.seq(names.jerry, ' had heard the awe-filled voices tell of the mortal realm. '),
            pep.seq('Voices sang loudly every winter of the mortal realm. '),
        ), pep.choice( //s3
            pep.seq('How the mortal realm was much like the ', world.realm(names.realm),
                ' realm, just devoid of magic and immortality. '),
            pep.seq('How it was less magical, but people were kind. '),
            pep.seq('How it was a fearsome place left only to the bravest to conquer. '),
        ), pep.choice( //s3
            pep.seq(
                'How there was a rush in not-belonging, ', 
              'and a peacefulness to the mortal realm that was unlike anything ever experienced in ',
                world.realm(names.realm), '. '),
            pep.seq('The polar opposite of ', world.realm(names.realm), '. '),
            pep.seq('The same, yet different from their own home world. '),
        ), pep.choice( //s3
            pep.seq('How there were no laws for those ', world.brethrens(names.realm),
                ' that walks on the other side. '),
            pep.seq('Where lawlessness abided. '),
            pep.seq('Where magic was forbidden. '),
        ), pep.choice( //s3
            pep.seq('No consequences. '),
            pep.seq('No rule of law for ', world.brethrens(names.realm), '. '),
            pep.seq('No way to face the consequences of treason. '),
        ), pep.choice( //s3
            pep.seq(
                'How one could disappear without a trace ',
              'in the vast wilderness of the mortal realm. '
            ),
            pep.seq('How one could simply cease to exist. '),
            pep.seq('Where no one would know your name. '),
        ), html.pco, html.i('o'),

        pep.choice(
            //p19
            pep.seq('You can never come back, ', names.jerry, '. '),
            pep.seq('There\'s no going back. '),
            pep.seq('This is it, then. '),
        ), pep.choice( //s3
            pep.seq('No more mother, or father. '),
            pep.seq('No more family, no more work. '),
            pep.seq('You can\'t undo this sort of thing. '),
        ), pep.choice( //s3
            pep.seq('No more hanging out with ', names.reed, ' or bantering with ', names.dorian,
                '. '),
            pep.seq('No more friends. '),
            pep.seq('No more wisecracks from ', names.reed, ' or ', names.dorian, '. '),
        ), pep.choice( //s3
            pep.seq('You will be a traitor and a coward if you jump through that portal. ', ),
            pep.seq('You will bring dishonor to your family name. '),
            pep.seq('Your parents will disown you. '),
        ), html.i('c'), html.pco,

        pep.choice(
            //p20
            pep.seq('"I am already a coward." '),
            pep.seq('"This is already done." '),
            pep.seq('"I have already wronged my family. "'),
        ), pep.choice( //s3
            pep.seq(names.jerry, ' answered their silent musings out loud. '),
            pep.seq(names.jerry, ' spoke into the silence. '),
            pep.seq(names.jerry, ' felt the words heavy on ', pronouns.their(names.jerry0), ' tongue. '),
        ), pep.choice( //s3
            pep.seq('"I am the one in a locked room with the portal, with the guard missing. '),
            pep.seq('"I am the one with no excuses in a forbidden room. '),
            pep.seq('"I am the one, alone in the vault, in the middle of the night. '),
        ), pep.choice( //s3
            pep.seq(names.kaden, ' has it out for me. '),
            pep.seq(names.kaden, ' will have my head. '),
            pep.seq(names.kaden, ' will literally kill me. '),
        ), pep.choice( //s3
            pep.seq('No one will come to my defense. '),
            pep.seq('No one will stand beside me in court. '),
            pep.seq('Even my friends expect this of me. '),
        ), pep.choice( //s3
            pep.seq('It is either die here, or run there." '),
            pep.seq('I can run now and live longer, or die here in the morn." '),
            pep.seq('Dead in the morning or dead later in the mortal realm." '),
        ), html.pco,

        pep.choice(
            //p21
            pep.seq(names.jerry, ' drew closer to the portal. '),
            pep.seq(names.jerry, ' made ', pronouns.their(names.jerry0), ' choice. '),
            pep.seq(names.jerry, ' was finally ready. '),
        ), pep.choice( //s3
            pep.seq('It emitted a soft hum, barely perceptible to the ears. '),
            pep.seq('The portal seemed to buzz in excitement. '),
            pep.seq('The portal seemed willing -- happy, even. '),
        ), pep.choice( //s3
            pep.seq('It called to ', names.jerry, ', the promise of a new life awaiting. '),
            pep.seq('It spoke sweet nothings to ', names.jerry, '. '),
            pep.seq('Its sound filled ', pronouns.their(names.jerry), ' ears. '),
        ), pep.choice( //s3
            pep.seq('With nothing to lose, ', pronouns.they(names.jerry0), ' jumped. '),
            pep.seq(names.jerry, ' jumped in. '),
            pep.seq(names.jerry, ' took a last, parting breath - and jumped. '),
        ), html.p('c'), )
};