var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./fxns/my-apep-fxns.js'); //custom functions 
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup

//This section will appear at least once, but may appear multiple times. This will be a three section arc where the main character interacts with a mortal, sees the delayed aftermath, and then is confronted by creatures from homeland chasing them down. No lessons are learned in this section.

module.exports = {
    title: pep.choice("Chaos", "Blood Colored Glasses", "Mayhem and Murder"),
    text: pep.seq(html.p('o'), //p1
            pep.choice( //p1 s1
                pep.seq('The sun was uncomfortably warm against ', names.jerry, '\'s skin as ', pronouns.they(
                    names.jerry0), ' sat on a hot park bench, squinting in the brightness. '),
                pep.seq('Warming ', names.jerry, '\'s skin, the sun blistered out activity all around ', 
                        pronouns.them(names.jerry0), ', making it seem as though life was vibrant yet dull in the park. '),
                pep.seq('The sun burst even the saddest frown around ', names.jerry, ' as ', 
                       pronouns.they(names.jerry0), ' sat for while on a park bench. '),
            ), pep.choice( //s2
                pep.seq('The air was buzzing with life around ', pronouns.them(names.jerry0),
                    ', full of cicadas whining and birds singing. '),
                pep.seq('The air held no trace of spring, with its wet warmth caressing ', names.jerry, '\'s face. '),
                pep.seq(names.jerry, ' wondered if it was always this hot in this strange, bright place. '),
            ), pep.choice( //s3
                pep.seq('It was so unlike home, where the dull light was ever present. '),
                pep.seq('Home seemed close, yet so far away. '),
                pep.seq('Home was a world away now, and ', pronouns.they(names.jerry0), ' knew that ', 
                       pronouns.they(names.jerry0), ' could never go back. '),
            ), pep.choice( //s4
                pep.seq('Being here was like living in three dimensions for the first time. '),
                pep.seq('It was terrifying, but somehow it felt right. '),
                pep.seq('What would the future hold? '),
            ), html.pco,

            pep.choice( //p2 s1
                //p2
                pep.seq(
                    'Across the path, there were children playing on ', 
                  'brightly colored metal swing sets under their parents\' watchful eyes. '
                ),
                pep.seq(names.jerry, 
                        ' watched as a boy and a girl swung from ropes hanging off the nearby jungle gym. '),
                pep.seq('The sounds of screaming and giggling children surrounded ', 
                        names.jerry, ' as ', pronouns.they(names.jerry0), ' sat on a nearby bench. '),
            ), pep.choice( //s2
                pep.seq('Suddenly, ', names.jerry, ' longed for a family of ', pronouns.their(names.jerry0),
                    ' own. '),
                pep.seq(names.jerry, ' felt a deep and mysterous longing bubble up inside of ', pronouns.them(names.jerry0), '. '),
                pep.seq(names.jerry, ' suddenly wondered if ', pronouns.they(names.jerry0), 
                        'would ever have any kids to call ', pronouns.their(names.jerry0), ' own. '),
            ), pep.choice( //s3
                pep.seq(names.jerry, '\'s parents were older and had never really made ', 
                        pronouns.them(names.jerry0),
                    ' feel wanted as a child, but these children, in contrast, seemed so happy. '),
                pep.seq('Kids seemed so happy and carefree. '),
                pep.seq('Kids didn\'t feel right for this world -- too sweet. '),
            ), pep.choice( //s4
                pep.seq('They were giggling away as if they didn\'t have a care in the world. '),
                pep.seq(names.jerry, ' wondered what it would be like to have a family. '),
                pep.seq('Would a family fix this deep longing inside of ', pronouns.them(names.jerry0), '? '),
            ), html.pco,

            pep.choice( //p3 s1
                //p3
                pep.seq(
                    'Along the path waddled a short and plump brown, white, and black patchy dog, well beyond its ideal body shape. '
                ),
                pep.seq('A strange creature waddled by ', names.jerry, '. '),
                pep.seq('All fur and no eyes to be seen underneath the mess, a dog trotted by ', names.jerry, '. '),
            ), pep.choice( //s2
                pep.seq(
                    'It was attached by the neck to a blue rope that was held by a human with many of the same characteristics. '
                ),
                pep.seq('The human with the dog held it by a rope, taut and blue. '),
                pep.seq('Was it a slave? ', names.jerry, ' wondered at the blue rope attached to its neck. '),
            ), html.pco,

            pep.choice( //p4
                pep.seq('"Hey, how\'s it going?" '),
                pep.seq('"How are you today?" '),
                pep.seq('"Nice day for a sit, isn\'t it?"'),
            ), pep.choice( //s2
                pep.seq('The human muffed at ', names.jerry, ' as it passed by. '),
                pep.seq('The human grunted a half-hearted greeting as it passed. '),
                pep.seq('The human passed casually muttering niceties at ', names.jerry, '. '),
            ), html.pco,

            pep.choice( //p5
                pep.seq('"Great, thanks!" '),
                pep.seq('"What\'s that now?" '),
                pep.seq('"Oh, hello." '),
            ), pep.choice( //s2
                pep.seq(names.jerry, ' said. '),
                pep.seq(names.jerry, ' responded naturally, without thinking about it. '),
                pep.seq('Apparently I\'m not invisible, ', names.jerry, ' thought. '),
            ), pep.choice( //s3
                pep.seq('The human seemed to wince at ', names.jerry,
                    '\'s words, and walked a little faster. '),
                pep.seq('The human seemed deeply offended by his response. '),
                pep.seq('The human marched quickly away as if ', names.jerry, ' had just shit in their sandal. '),
            ), pep.choice( //s4
                pep.seq(names.jerry, ' frowned. '),
                pep.seq(names.jerry, ' felt a rush of red spread across ', pronouns.their(names.jerry0), ' face. '),
                pep.seq(names.jerry, ' felt equally offended by the human\'s reaction. '),
            ), pep.choice( //s5
                pep.seq('People were sure rude up here. '),
                pep.seq('How rude! '),
                pep.seq('What a monstrous little mortal this person was. '),
            ), html.pco,

            pep.choice( //p6
                pep.seq('The minutes passed and ', names.jerry, ' tried ', pronouns.their(names.jerry0),
                    ' hardest to forget about what had just had happened in ', world.realm(names.realm),
                    '. '),
                pep.seq(names.jerry, ' spent the next few minutes avoiding memories of the night before. '),
                pep.seq('The night before flooded into ', names.jerry, '\'s head. '),
            ), pep.choice( //s2
                pep.seq(pronouns.They(names.jerry0),
                    ' had no choice after becoming trapped. '),
                pep.seq('There had been no other way. '),
                pep.seq('What happened... happened. '),
            ), pep.choice( //s3
                pep.seq('The punishment would\'ve been death or exile anyway -- and ', pronouns.they(
                        names.jerry0),
                    ' preferred exile. '),
                pep.seq('Either way, death was at the end of this road. '),
                pep.seq('What would the gods do next? '),
            ), html.pco,

            pep.choice( //p7
                pep.seq('In the distance, ', names.jerry, ' heard the sounds of distress. '),
                //pep.seq(),
                //pep.seq(),
            ), pep.choice( //s2
                pep.seq('An ear-piercing scream cut across the park and straight into ', names.jerry,
                    '\'s heart. '),
                //pep.seq(),
                //pep.seq(),
            ), pep.choice( //s3
                pep.seq('What in god\'s name was happening? '),
                //pep.seq(),
                //pep.seq(),
            ), pep.choice( //s4
                pep.seq('Earth was supposed to be a fun and gentle place. '),
                //pep.seq(),
                //pep.seq(),
            ), html.pco,

            pep.choice( //p8s1
                pep.seq(names.jerry, ' rose from ', pronouns.their(names.jerry0),
                    ' resting place and walked past the parents who were hurriedly gathering their children to move away from the potential danger. '
                ),
                //pep.seq(),
                //pep.seq(),
            ), pep.choice(
                pep.seq(
                    'The screams were still going, but they were shorter now, punctuated by the screamer\'s inhale. '
                ),
                //pep.seq(),
                //pep.seq(),
            ), pep.choice( //s3
                pep.seq('Why would someone be screaming this much? '),
                //pep.seq(),
                //pep.seq(),
            ), pep.choice(
                pep.seq('Was it some sort of weird human ritual? '),
                //pep.seq(),
                //pep.seq(),
            ), html.pco,
            pep.choice( //p9s1
                pep.seq('Cresting the hill in front of ', pronouns.them(names.jerry0), ', ', names.jerry,
                    ' saw pure and unfiltered chaos on the edge of the park. '),
                // pep.seq(''),
                //pep.seq(''),
            ), pep.choice( //s2
                pep.seq(
                    'An almond brown smear spread across the earth beneath a mangled mess of bone, sinew, and meat. '
                ),
                //pep.seq(''),
                //pep.seq(''),
            ), pep.choice( //s3
                pep.seq(
                    'It looked like something straight out of one of those pirated cult classic horror films that ',
                    names.jerry, '\'s parents had brought home from the mortal realm. '),
                //pep.seq(''),
                // pep.seq(''),
            ), pep.choice( //s4
                pep.seq('Is this what mortals did for fun? '),
                // pep.seq(),
                // pep.seq(),
            ), html.pco,

            pep.choice( //p10s1
                //p10
                pep.seq(
                    'Above the sinewy mess was the plump, middle-aged human with round-rimmed glasses from before. '
                ),
                //  pep.seq(''),
                //  pep.seq(''),
            ), pep.choice( //s2
                pep.seq(
                    'He was cackling maniacally above the mess, and there were no other humans in sight. '
                ),
                //    pep.seq(''),
                //   pep.seq(''),
            ), pep.choice( //s3
                pep.seq('Off in the distance, a siren wailed. '),
                //  pep.seq(''),
                //  pep.seq(''),
            ), pep.choice( //s4
                pep.seq('Unsure of what to do, ', names.jerry,
                    ' stood there for a while, trying to piece things together. '),
                //   pep.seq(),
                //   pep.seq(),
            ), pep.choice( //s5
                pep.seq(pronouns.They(names.jerry0),
                    ' noticed the rope from earlier descending from the feet of the human and into the gory mess. '
                ),
                //  pep.seq(),
                //  pep.seq(),
            ), pep.choice( //s6
                pep.seq(names.jerry,
                    ' realized with a start that the body was the human\'s plump, happy, stupid little mutt from not 10 minutes ago. '
                ),
                //  pep.seq(),
                //  pep.seq(),
            ), html.pco,

            pep.choice( //p11s1
                //p11
                pep.seq('How does a human even inflict that much damage? '),
                //pep.seq(''),
                // pep.seq(''),
            ), pep.choice( //s2
                pep.seq(names.jerry, ' wondered as the sirens grew louder and louder. '),
                // pep.seq(''),
                // pep.seq(''),
            ), pep.choice( //s3
                pep.seq('The first flashing bright lights appeared on the roadway next to the park. '),
                // pep.seq(''),
                // pep.seq(''),
            ), pep.choice( //s4
                pep.seq(
                    'The white police vehicle\'s doors shot open and humans got out, weapons pointed at the man attached to the mangled mess in the park. '
                ),
                // pep.seq(''),
                // pep.seq(''),
            ), html.pco,
            pep.choice( //p12s1
                //p12
                pep.seq('"Hands up!" '),
                pep.seq('"Stop what you\'re doing!" '),
                pep.seq('"Now hold it, mister! '),
            ), pep.choice( //s2
                pep.seq('He heard the cops shout, but the human just kept... laughing. '),
                pep.seq('He seemed oblivious to the guards\' shouts. '),
                pep.seq('Could he even hear them? '),
            ), pep.choice( //s3
                pep.seq('He did move his hands, however. '),
                pep.seq('He moved his hands, for sure. '),
                pep.seq('The man wiggled his fingers in response. '),
            ), pep.choice( //s4
                pep.seq(
                    'He moved the hand that was still attached to the leash, grabbing it and pulled it towards him. '
                ),
                pep.seq('He moved his leash-attached hand closer to himself. '),
                pep.seq('The man pulled the leash towards him. '),
            ), pep.choice( //s5
                pep.seq(
                    'The lump of meat and flesh moved awkwardly along the grass, leaving a smear of blood behind it, as the man giggled uncontrollably. '
                ),
                pep.seq('The former lump of dog dragged gracelessly across the grass. '),
                pep.seq('The man giggled as his prize drew closer. '),
            ), pep.choice( //s6
                pep.seq('Shots rang out. '),
                pep.seq('The policeman fired. '),
                pep.seq('They fired. '),
            ), html.p('c'), //end choice
        ) //endseq
};