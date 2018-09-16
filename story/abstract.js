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

    abstract: pep.seq(html.p('o'), html.i('o'),

        pep.choice( //p1as1
            pep.seq(pep.capitalize(dict.across), ' ', dict.depths, ' ', world.realm(names.realm),
                ', ', dict.trouble, ' is ', dict.stirring, '. '),
            pep.seq(pep.capitalize(dict.trouble), ' is ', dict.stirring, ' in ', world.realm(names.realm),
                ' lately. '), 
            pep.seq('The ', world.brethrens(names.realm), ' are right to be ', dict.afraid, '. '),
        ), //end pep.choice

        pep.choice( //p1as2
            pep.seq(names.eddie, ' is raising ', myPep.aAn(dict.army), ' to ', dict.overthrow,
                ' the ', world.boss(names.realm), ' and gain the freedom to ', dict.overthrow,
                ' the mortal realm. '), 
            pep.seq(pep.capitalize(pep.choice(dict.hungry, dict.longing)), ' for power, ', names.eddie,
                ' wants to ', dict.overthrow, ' the ', world.boss(names.realm), ' with a homegrown ',
                dict.army, '. ', ), 
            pep.seq('With the ', world.boss(names.realm), ' vulnerable, ', names.eddie,
                ' is planning to ', dict.overthrow, ' them, with ', pronouns.their(names.eddie0),
                ' eyes set on ', myPep.doing(dict.overthrow), ' the mortal world next. '), 
        ), //end pep.choice

        //p1as3
        pep.choice(
            pep.seq('But for every ', dict.sp2to6, ' ', world.brethrens(names.realm),
                ' in favor of the ', dict.crusade,
                ', there is one who is not sure that they should leave the safety of  ', world.realm(
                    names.realm), '. '),
            pep.seq('But not everyone is ', dict.pleased, ' with ', names.eddie, '\'s plans for ',
                world.realm(names.realm), '. '),
            pep.seq('Many of the ', world.brethrens(names.realm), ' are ', dict.displeased, ' with ',
                names.eddie, ' and ', pronouns.their(names.eddie0), ' ', dict.crusade, '. '),
        ), //end pep.choice

        //p1as4: 
        pep.choice(
            pep.seq(dict.afterAll, ', the ', dict.gods,
                ' leave them be -- but that could change if an all out war broke loose. '),
            pep.seq('Life was ', dict.good, ' here, and the ', world.brethrens(names.realm),
                ' didn\'t need a war to ruin it. '),
            pep.seq(pep.choice('The ' + world.brethrens(names.realm).run(), 'They'),
                ' were willing to fight to keep the peace, as ironic as that seemed. '),
        ), //end pep.choice

        //p2 --   //p2as1
        html.pco, pep.choice(
            pep.seq('With ', pep.opt('civil'), ' war ', dict.stirring, ' in the ', world.brethren(
                names.realm), ' world, ', names.jerry, ' is faced with a choice. '),
            pep.seq(names.jerry, ' is an outcast of sorts -- war just makes ', pronouns.them(names.jerry0),
                ' sick. '),
            pep.seq('There\'s not a ', dict.fierce, ' bone in ', names.jerry, '\'s body. '),
        ), //end pep.choice

        //p2as2
        pep.choice(
            pep.seq(names.jerry, ' must abandon ', pronouns.their(names.jerry0),
                ' ideals of pacifism and face the horrors of war, or be imprisoned or killed for choosing not to fight. '),
            pep.seq('Facing death or worse for refusing to participate, ', names.jerry, ' must ',
                dict.pick, ' a side. ', ),
            pep.seq(names.jerry, ', and all other ', world.brethrens(names.realm), ' must ', dict.pick,
                ' a side in this battle -- no matter how peaceful they are. '),
        ), //end pep.choice

        //p2as3
        pep.choice(
            //One day, however, they discover another path.
            pep.seq('One day, however, ', pronouns.they(names.jerry0), ' ', dict.discover, myPep.verbS(
                names.jerry0), ' ', dict.anotherPath, '. '),
            //As they despaired, jerry discovered another path.
            pep.seq('As ', pronouns.they(names.jerry0), ' despaired, ', names.jerry, ' ', dict.discovered,
                ' ', dict.anotherPath, '. '),
            //Just as they had lost hope, jerry discovered another path before them.
            pep.seq('Just as ', pronouns.they(names.jerry0), ' had lost hope, ', names.jerry, ' ',
                dict.discovered, ' ', dict.anotherPath, ' before ', pronouns.them(names.jerry0), '. '
            ),
        ), //end pep.choice

        //p2as4
        pep.choice(
            //During a skirmish, someone had left one of the closely guarded mortal portals open.
            pep.seq(
                'During a skirmish, someone had left one of the closely guarded mortal portals open. '
            ),
            //jerry discovered an open portal to the mortal world left unguarded in the fighting.
            pep.seq(names.jerry, " ", dict.discovered,
                " an open portal to the mortal world left unguarded in the fighting."),
            //Seeing an unguarded portal, jerry realized that they had a chance at freedom.
            pep.seq("Seeing an unguarded portal, ", names.jerry, " realized that ", pronouns.they(
                names.jerry0), " had a chance at freedom. "),
        ), //end pep.choice

        //p2as5
        pep.choice(
            //Seizing upon their chance, they escape into the mortal world to begin life anew.
            pep.seq('Seizing upon ', pronouns.their(names.jerry0), ' chance, ', pronouns.they(names.jerry0),
                ' escape', myPep.verbS(names.jerry0), ' into the mortal world to begin life anew. '),
            //Hoping no one would see them, jerry leapt through the portal and landed in the mortal world.
            pep.seq("Hoping no one would see ", pronouns.them(names.jerry0), ", ", names.jerry,
                " leapt through the portal and landed in the mortal world. "),
            //Taking a deep breath, jerry dashed into the new world before them.
            pep.seq("Taking a deep breath, ", names.jerry, " dashed into the new world before them. "),
        ), //end pep.choice 

        //p3 -- //p3as1
        html.pco, pep.choice(
            //Yet, every time they interact with mankind, chaos follows.
            pep.seq('Yet, every time ', pronouns.they(names.jerry0), ' interact', myPep.verbS(names.jerry0),
                ' with mankind, chaos follows. '),
            //For every nice thing that jerry does in the mortal world, chaos is born.
            pep.seq('For every nice thing that ', names.jerry,
                ' does in the mortal world, chaos is born. '),
            //Despite trying to live a moral life in their new world, trouble seems to follow. 
            pep.seq('Despite trying to live a moral life in ', pronouns.their(names.jerry0),
                ' new world, trouble seems to follow. '),
        ), //end pep.choice

        //p3as2
        pep.choice(
            //Will they find a way to adapt to their new life without causing mass war, famine, or illness?
            pep.seq('Will ', pronouns.they(names.jerry0), ' find a way to adapt to ', pronouns.their(
                names.jerry0), ' new life without causing mass war, famine, or illness? '),
            //And fellow BRETHRENS are hunting for jerry to bring them back for trial.
            pep.seq('And fellow ', world.brethrens(names.realm), ' are hunting for ', names.jerry,
                ', to bring ', pronouns.them(names.jerry0), ' back for trial. '),
            //Will jerry be able to survive in this new and lonely world?
            pep.seq('Will ', names.jerry, ' be able to survive in this new and lonely world? '),
        ), //end pep.choice

        //p3as3
        pep.choice(
            //Will they find a way to end the BRETHREN war and prevent the collapse of civilization?
            pep.seq('Will ', pronouns.they(names.jerry0), ' find a way to end the ', world.brethren(
                names.realm), ' war and prevent the collapse of civilization? '),
            //Can jerry find a way to take down eddie before they start a war between the worlds?
            pep.seq('Can ', names.jerry, ' find a way to take down ', names.eddie,
                ' before they start a war between the worlds? '),
            //Will the boundaries between the mortal realm and REALM ever be the same?
            pep.seq('Will the boundaries between the mortal realm and ', world.realm(names.realm),
                ' ever be the same? '),
        ), //end pep.choice

        //p3as4
        pep.choice(
            //Or will the BRETHRENS hunting jerry find and drag them back to REALM?
            pep.seq('Or will the ', world.brethrens(names.realm), ' hunting ', names.jerry,
                ' find and drag ', pronouns.them(names.jerry0), ' back to ', world.realm(names.realm),
                '? '),
            //Or will jerry inadvertently destroy the world they've come to love?
            pep.seq('Or will ', names.jerry, ' inadvertently destroy the world ', pronouns.they(names
                .jerry0), '\'ve come to love?'),
            //Or will jerry be captured before they can find a way to save the world?
            pep.seq('Or will ', names.jerry,
                ' be captured before they can find a way to save the world? '),
        ), // end pep.choice

        //p4 -- p4as1
        html.pco, pep.choice(
            //Join the author as they explore the collision of toxic nationalism and pacifism in a world where the wrong choice means eternal torment.
            pep.seq('Join ', names.author,
                ' as they explore the collision of toxic nationalism and pacifism in a world where the wrong choice means eternal torment. '
            ),
            //Join us as we explore the true meaning of home in this stunning urban fantasy novella. 
            pep.seq(
                'Join us as we explore the true meaning of home in this stunning urban fantasy novella. '
            ),
            //Find out by reading more from the adventures of jerry in REALM.
            pep.seq('Find out by reading more from the adventures of ', names.jerry, ' in ', world.realm(
                names.realm), '. '),
        ), // end pep.choice 
        html.i('c'), html.p('c'), //chapter end tags
    ), //end pep.seq
}; //end module.exports