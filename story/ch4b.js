var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('./fxns/my-apep-fxns.js'); //custom functions
var names = require('./fxns/constants.js'); //character and setting names
var dict = require('./fxns/dict.js'); //word switcher
var pronouns = require('./fxns/pronouns.js'); //pronoun lookup
var world = require('./fxns/world.js'); //world lookup
var html = require('./fxns/html.js'); //formatting lookup

module.exports = {

    title: pep.choice(pep.seq('Nighttime Terrors'), pep.seq('Unforgivable'), pep.seq('The Rushing River'),),
    text: pep.seq(html.p('o'),

        pep.choice( //s1
            pep.seq(names.jerry, ' found refuge from the hot sun and bloody scene in an alleyway off the main drag. '),
            pep.seq(names.jerry, ' rested in a cool alleyway off of the main street. '), 
            pep.seq('Finding refuge in an alley, ', names.jerry, ' rested for hours. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('The scene just kept playing, over and over, in ', pronouns.their(names.jerry0), ' head. '), 
            pep.seq('The bloody scene from before would just not leave ', pronouns.their(names.jerry0), ' head. '), 
            pep.seq('The scene kept playing over and over in ', pronouns.their(names.jerry0), ' mind. '), 
        ), //end pep.choice
                  
        pep.choice( //s3
            pep.seq('No ', world.brethren(names.realm), ' had ever spoken of such monstrosities in the mortal realm. '),
            pep.seq('No one had spoken of such barbarity in the mortal realm. '), 
            pep.seq('Was the mortal realm really such a savage place? '),
        ), //end pep.choice

        pep.choice( //s4
            pep.seq('Was this an aberration? '), 
            pep.seq('How had humans survived in such conditions? '), 
            pep.seq(names.jerry, ' felt sick and sweaty with disgust. '), 
        ), //end pep.choice
                  
        pep.choice( //s5
            pep.seq('How had something like that even happened? '),
            pep.seq(names.jerry, ' didn\'t know if ', pronouns.they(names.jerry0), ' could spend eternity in such a place. '), 
            pep.seq(names.jerry, ' tried to focus on breathing for a while. '),
        ), //end pep.choice

        //p2 --   //p2as1
        html.pco,         pep.choice( //s1
            pep.seq('The sun set quickly, and as it did, the heat of the day left also. '),
            pep.seq('The days were shorter here. '), 
            pep.seq('The rest of the day flew by. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq(names.jerry, ' had never seen a mortal sunset, and it was something to behold. '), 
            pep.seq('The mortal sunset astounded ', pronouns.them(names.jerry0), '. '), 
            pep.seq('The mortal sunset filled ', pronouns.them(names.jerry0), ' with wonder. '), 
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('The usual green din of her own sky was replaced with fire and gold. '), 
            pep.seq('Though the home sky of ', world.realm(names.realm), ' was a putrid green, this sunset was full of fire and gold. '), 
            pep.seq('It was like being alive for the first time. '), 
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('The main street turned orange, then gray with the night time sky. '), 
            pep.seq('The street glowed orange then dimmed to gray as night set in. '), 
            pep.seq('The night came quickly then. '), 
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq('It was time to move. '), 
            pep.seq('It was safe to leave. '), 
            pep.seq(names.jerry, ' knew it was time to go. '), 
        ), //end pep.choice
   
                  
        //p3 -- 
        html.pco,         pep.choice( //s1
            pep.seq(pronouns.They(names.jerry0), ' stepped out from the alleyway onto the chipped and broken sidewalk. '),
            pep.seq('Stepping out on the broken sidewalk, ', names.jerry, ' saw little human activity left. '),
            pep.seq('The street was quieter now that the sun had gone down. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('The cars and their headlights seemed ugly against the peaceful night. '),
            pep.seq('Headlights broke the peaceful night. '),
            pep.seq('The smell of diesel filled ', pronouns.their(names.jerry), ' nostrils as cars drove by. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq(names.jerry, ' took a right down a larger side street where cars were less frequent, and the shops were mostly shuttered for the evening. '),
            pep.seq(names.jerry, ' wandered aimlessly down a larger side street, looking for something to fill ', pronouns.their(names.jerry0), ' time. '),
            pep.seq('Strolling with purpose down a side street, ', names.jerry, ' observed the myriad of design differences between ', world.realm(names.realm), ' and this strange new place. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('A large, cresting bridge, sparkling with little white lights, shown in the distance. '),
            pep.seq('A bridge rose in the distance ahead of ', pronouns.them(names.jerry0), '. '),
            pep.seq('Sparkling lights adorned a bridge up ahead. '),
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq(names.jerry, ' wondered where it led. '),
            pep.seq(pronouns.They(names.jerry0), ' wondered if it led to more city. '),
            pep.seq('It seemed like an adventure waiting to happen. '),
        ), //end pep.choice
            
                  //p4
    html.pco,         pep.choice( //s1
            pep.seq('The incline made her legs burn, and pavement gave way to an unusual metal grate beneath her feet as she stepped out over the black, churning river below. '),
            pep.seq('The incline to the bridge was steep. '),
            pep.seq('The metal grate felt odd under ', pronouns.their(names.jerry0), ' feet as ', pronouns.they(names.jerry0), ' stepped onto the bridge. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('The bridge had a large wire fence that extended above her head. '),
            pep.seq('The bridge was lined with barbed wire. '),
            pep.seq('The edge was blocked by fencing. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('Every ten feet or so, there was an industrial looking sign, white back with black letters, with some oddly comforting messages. '),
            pep.seq('Every few steps, there were ominous signs. '),
            pep.seq(''),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('"Don\'t do it." '),
            pep.seq('"You\'re better than this night." '),
            pep.seq('"Go talk to someone." '),
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq('"Think of your family." '),
            pep.seq('"Think of your loved ones." '),
            pep.seq('"Think of tomorrow." '),
        ), //end pep.choice

        pep.choice( //s6
            pep.seq('"Get help." '),
            pep.seq('"Don\'t be on the news." '),
            pep.seq('"Don\'t be a tragi song." '),
        ), //end pep.choice
                  
        pep.choice( //s7
            pep.seq('Like it was a bridge on the path to death. '),
            pep.seq('Like a gateway to the other side. '),
            pep.seq('Were people vandalizing the bridge?'),
        ), //end pep.choice
                  
                  
                  //p5
                  
    html.pco,         pep.choice( //s1
            pep.seq(names.jerry, ' slowed as ', pronouns.they(names.jerry0), ' realized there was another pedestrian in the narrow walkway. '),
            pep.seq(names.jerry, ' realized there was a human up ahead. '),
            pep.seq(names.jerry, ' saw life up ahead. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq(pronouns.They(names.jerry0), ' grew nervous at the sight. '),
            pep.seq(pronouns.They(names.jerry0), ' ', pronouns.were(names.jerry0), ' unsure of how humans greeted each other. '),
            pep.seq(names.jerry, ' wondered if this human would be friendly. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('The last time ', pronouns.they(names.jerry0), ' had spoken to a human, it hadn\'t gone that well. '),
            pep.seq('The humans before seemed exceptionally unkind. '),
            pep.seq('Humans did not seem the type for pleasantries. '),
        ), //end pep.choice
                  
                  
                  //p6
                  
                      html.pco,         pep.choice( //s1
            pep.seq('The woman wore a white and pink long sleeved shirt with a hood over her face. '),
            pep.seq('The woman was wrapped in a scarf that covered half her face. '),
            pep.seq('The woman was tall and lean, covered in a sheen of sweat. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('Her pants were tight against her legs, and there was a device of some sort wrapped around her arm and connected to her ears. '),
            pep.seq('Her shorts were tight and high on her waist. '),
            pep.seq('She seemed too thin for her height. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq(names.jerry, ' smiled at her as she passed. '),
            pep.seq(names.jerry, ' gave her a warm grin. '),
            pep.seq(names.jerry, ' smiled ', pronouns.their(names.jerry0), ' best smile. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('"Have a great evening!" '),
            pep.seq('"I hope your day was most excellent!" '),
            pep.seq('"what a lovely night!" '),
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq(pronouns.They(names.jerry0), ' said warmly. '),
            pep.seq(pronouns.They(names.jerry0), ' offered. '),
            pep.seq(pronouns.They(names.jerry0), ' said as the woman hurried away. '),
        ), //end pep.choice
                  
                  
                  //p7
                  
                      html.pco,         pep.choice( //s1
            pep.seq('The woman\'s face flashed with confusion as she passed, and ', names.jerry, ' wondered if ', pronouns.they(names.jerry0), ' somehow did not appear human. '),
            pep.seq('The woman\'s fear showed on her face. '),
            pep.seq('The woman appeared frighted and confused. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('Had the portal failed ', pronouns.them(names.jerry0), '? '),
            pep.seq('Was something wrong with ', pronouns.their(names.jerry0), ' mortal appearance? '),
            pep.seq('Did ', names.jerry, ' look like an alien? '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('Did ', pronouns.they(names.jerry0), ' have extra ears? '),
            pep.seq('Were there extra appendages? '),
            pep.seq('Was ', pronouns.their(names.jerry0), ' face green? '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('Were ', pronouns.their(names.jerry0), ' horns showing? '),
            pep.seq('Did ', pronouns.they(names.jerry0), ' have a tail? '),
            pep.seq('Did ', pronouns.they(names.jerry0), ' have a visible third eye? '),
        ), //end pep.choice 
                  
                  
                  //p8             
                  
                      html.pco,         pep.choice( //s1
            pep.seq('A clatter arose behind ', names.jerry, '. '),
            pep.seq(names.jerry, ' heard a noise behind ', pronouns.them(names.jerry0), '. '),
            pep.seq('The fence rattled out of sight. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq(pronouns.They(names.jerry0), ' turned in amazement, to see the woman climbing the fence between two of the signs. '),
            pep.seq(names.jerry, ' turned to see the woman climbing. '),
            pep.seq('The woman was climbing the fence.'),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('Higher and higher she went, quick like a spider. '),
            pep.seq('She moved so fluidly up the chain link. '),
            pep.seq('Like a spider, she slid up the fence suspiciously fast. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq(names.jerry, '\'s throat felt tight.'),
            pep.seq(names.jerry, ' was filled with horror. '),
            pep.seq(names.jerry, ' realized too late what was about to happen. '),
        ), //end pep.choice 
                  
                  
                  //p9
                  
                      html.pco,         pep.choice( //s1
            pep.seq('"Wait, stop!" '),
            pep.seq('"No, don\'t!" '),
            pep.seq('"Oh, god." '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('The signs had suddenly clicked in her mind. '),
            pep.seq('The signs took on new meaning. '),
            pep.seq('The signs suddenly made sense. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('This was a place where people came to end their lives. '),
            pep.seq('This was a popular suicide spot. '),
            pep.seq('This was a suicide hotspot. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('Like ', pronouns.they(names.jerry0), ' had nearly done on the ramparts ', 
                    pronouns.themself(names.jerry0), ' just a few days ago. '),
            pep.seq('Not so long ago, ', pronouns.they(names.jerry0), ' had nearly done the same thing. '),
            pep.seq(pronouns.Their(names.jerry0), ' own near-death experience seemed ages ago. '),
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq('"There\'s always a solution!" '),
            pep.seq('"Let\'s talk about this!" '),
            pep.seq('"Please, no!" '),
        ), //end pep.choice
                  
                  
                  //p10
                  
                      html.pco,         pep.choice( //s1
            pep.seq('The woman dangled precariously on the edge of the fencing before pulling herself over to the other side. '),
            pep.seq('The woman hung from the fence shakily. '),
            pep.seq('The woman seemed unsure at the peak of the fence. '),
        ), //end pep.choice

        pep.choice( //s1
            pep.seq(names.jerry, ' had closed the distance to where the woman had climbed, but there was no way to get to her.'),
            pep.seq(names.jerry, ' had made it to the base, but could not reach the woman. '),
            pep.seq('Helplessly, ', names.jerry, ' looked for anything to stop the woman. '),
        ), //end pep.choice
                 
                  
                  //p11
                  
                      html.pco,         pep.choice( //s1
            pep.seq('"It gets better!" '),
            pep.seq('"Don\'t do it!" '),
            pep.seq('"Think of your family!" '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq(names.jerry, ' said weakly, seeing the resolve in the woman\'s eyes. '),
            pep.seq(names.jerry, ' knew it was futile. '),
            pep.seq('But it was too late. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('The woman let go, her head covering flying off. '),
            pep.seq('The woman jumped. '),
            pep.seq('The woman leaned back and just... let go. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('Fear heavy in her eyes. '),
            pep.seq('Her eyes were filled with sadness. '),
            pep.seq('Her eyes would haunt ', names.jerry, ' for many moons to come. '),
        ), //end pep.choice 
                  
                  //p12
                  
                      html.pco,         pep.choice( //s1
            pep.seq('The moment passed in an instant. '),
            pep.seq('Silence filled the night. '),
            pep.seq('She was gone just like that. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('It was like the woman had never even been there. '),
            pep.seq(names.jerry, ' wondered if it had even really happened. '),
            pep.seq('Not even a splash. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('A car rattled over the bridge, lights flashing Jerry in the eyes as it went. '),
            pep.seq('A car zoomed by, startling ', names.jerry, '. '),
            pep.seq('A car approached, breaking the silence. '),
        ), //end pep.choice
                  
                  //p13
                  
                  
                      html.pco,         pep.choice( //s1
            pep.seq('"Hey!" '),
            pep.seq('"Is that ', pronouns.them(names.jerry0), '?" '),
            pep.seq('"Look!" '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq(names.jerry, ' heard a voice call from the other side of the bridge. '),
            pep.seq(''),
            pep.seq(''),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('"There ', pronouns.they(names.jerry0), ' ', pronouns.are(names.jerry0), '!" '),
            pep.seq('"Over there!" '),
            pep.seq('"You!" '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq('Another voice called. '),
            pep.seq('Another shout. '),
            pep.seq('A second voice answered. '),
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq(names.jerry, ' strained to see the humans shouting. '),
            pep.seq(names.jerry, ' squinted into the night. '),
            pep.seq(names.jerry, ' thought the voices sounded familiar. '),
        ), //end pep.choice

        pep.choice( //s6
            pep.seq('Were they human at all? '),
            pep.seq('Were they human? '),
            pep.seq('Why were humans interested in ', pronouns.them(names.jerry0), '? '),
        ), //end pep.choice 
      
        pep.choice( //s7
            pep.seq('They were pointed at ', pronouns.them(names.jerry0), '. '),
            pep.seq('They were fixated on ', pronouns.them(names.jerry0), '. '),
            pep.seq('Had ', pronouns.they(names.jerry0), ' been found? '),
        ), //end pep.choice                  
                  
                  //p14
                  
                      html.pco,         pep.choice( //s1
            pep.seq('"', names.jerry, '! '),
            pep.seq('"Hey, you!" '),
            pep.seq('"Hey, scum!" '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('Traitor of ', world.realm(names.realm), '! '),
            pep.seq('You sleazy little pig! '),
            pep.seq('Deserter! '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('Stop!" '),
            pep.seq('Surrender!" '),
            pep.seq('Halt!" '),
        ), //end pep.choice
                  
                  
                  //p15
                  
                      html.pco,         pep.choice( //s1
            pep.seq('Yes. '),
            pep.seq('Oh, gods. '),
            pep.seq('What the hell? '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('They were definitely after ', pronouns.them(names.jerry0), '. '),
            pep.seq('It was definitely other elves. '),
            pep.seq('How had they found ', pronouns.them(names.jerry0), '? '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq( pronouns.Their(names.jerry0), ' heart racing, ', 
                    names.jerry, ' took off running down the bridge, away from ', 
                    pronouns.their(names.jerry0), ' pursuers, who were busy backtracking to get to ', 
                    pronouns.them(names.jerry0), ' side of the bridge. '),
            pep.seq(names.jerry, ' took off, running as fast as ', pronouns.they(names.jerry0), ' could. '),
            pep.seq('Taking advantage of their confusion, ', names.jerry, ' took off running. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq(pronouns.Their(names.jerry0), ' guard training kicked in, and ', pronouns.they(names.jerry0), ' lengthened the distance between them. '),
            pep.seq('With the others trying to get to ', pronouns.their(names.jerry0), ' side of the bridge, ', pronouns.they(names.jerry0), ' increased the distance between them. '),
            pep.seq(pronouns.They(names.jerry0), ' ran until ', pronouns.their(names.jerry0), ' lungs screamed. '),
        ), //end pep.choice 
  
                  
                  //p16
                  
                      html.pco,         html.i('o'), pep.choice( //s1
            pep.seq('Shit. '),
            pep.seq('But why, though? '),
            pep.seq('Holy mother of god. '),
        ), //end pep.choice

        pep.choice( //s1
            pep.seq('Why are they hunting me? '),
            pep.seq('Why do they care about one lousy deserter? '),
            pep.seq('Why would they come after me? '),
        ), //end pep.choice

        pep.choice( //s1
            pep.seq('They don\'t need me. '),
            pep.seq('Am I to be made an example of? '),
            pep.seq('Will I be pursued forever? '),
        ), html.i('c'), //end pep.choice
                  

                 
                  
                  //p17
            
                  
                      html.pco,         pep.choice( //s1
            pep.seq('Reaching the other side of the bridge, ', pronouns.they(names.jerry0), ' saw a sea of pavement roads leading away. '),
            pep.seq(pronouns.Their(names.jerry0), ' feet hit pavement and ', pronouns.they(names.jerry0), ' realized ', pronouns.they(names.jerry0), ' was off the bridge. '),
            pep.seq('The unknown roads reached out before ', pronouns.them(names.jerry0), ' as ', pronouns.they(names.jerry0), ' stepped off the bridge. '),
        ), //end pep.choice

        pep.choice( //s2
            pep.seq('Figuring ', pronouns.their(names.jerry0), ' safest bet was to hide, ', pronouns.they(names.jerry0), ' scrambled down the embankment to the river\'s edge below. '),
            pep.seq(pronouns.They(names.jerry0), ' needed to hide, and quickly. '),
            pep.seq('They would overtake ', pronouns.them(names.jerry0), ' if ', pronouns.they(names.jerry0), ' kept this pace up. '),
        ), //end pep.choice

        pep.choice( //s3
            pep.seq('There were no safety lights, and the river\'s flow blocked out noise. '),
            pep.seq('There was safety to be had underneath the bridge. '),
            pep.seq('No one would look for ', pronouns.them(names.jerry0), ' under the bridge. '),
        ), //end pep.choice
                  
        pep.choice( //s4
            pep.seq(pronouns.They(names.jerry0), ' climbed up into the bridge\'s supports and kept ', pronouns.their(names.jerry0), ' eyes fastened down on the gravel below for any sign of danger. '),
            pep.seq(pronouns.They(names.jerry0), ' climbed up into the bridge structure and took a deep breath. '),
            pep.seq('Hypervigilant, ', pronouns.they(names.jerry0), ' climbed up to safety. '),
        ), //end pep.choice 
      
        pep.choice( //s5
            pep.seq('It was going to be a long night. '),
            pep.seq(pronouns.They(names.jerry0), ' wondered if ', pronouns.they(names.jerry0), ' would make it out alive. '),
            pep.seq('It was a long time til the safety of morning. '),
        ), //end pep.choice
                  
                  
                  
         html.p('c'), //chapter end tags
    ), //end pep.seq
}; //end module.exports