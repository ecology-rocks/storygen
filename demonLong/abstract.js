
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);

var myPep = require('../my-apep-fxns.js');
var names = require('./constants.js');
var dict = require('./dict.js');


//p1as1a = par 1 ver a sen 1 ver a
let aText = {
  
  //Across the depths of the REALM, trouble is brewing.
  p1as1a: pep.seq(pep.capitalize(dict.across), ' ', dict.depths, ' ', myPep.setting.realm(names.setVar), ', ', dict.trouble, ' is ',dict.stirring, '. '),
  //Trouble is brewing in REALM lately.
  p1as1b: pep.seq(pep.capitalize(dict.trouble),' is ', dict.stirring, ' in ', myPep.setting.realm(names.setVar), ' lately. '),
  //The BRETHRENS are right to be afraid.
  p1as1c: pep.seq('The ', myPep.setting.brethrens(names.setVar), ' are right to be ', dict.afraid, '. '),
  
  //C1 is raising an army to overthrow the BOSS and gain the freedom to conquer the mortal realm. 
  p1as2a: pep.seq(names.c1, ' is raising ',myPep.aAn(dict.army),' to ',dict.overthrow, ' the ',myPep.setting.boss(names.setVar), ' and gain the freedom to ',dict.overthrow, ' the mortal realm. '),
  //Hungry for power, C1 wants to overthrow the BOSS with a homegrown army.
  p1as2b: pep.seq(pep.capitalize(pep.choice(dict.hungry, dict.longing)), ' for power, ', names.c1, ' wants to ', dict.overthrow, ' the ', myPep.setting.boss(names.setVar), ' with a homegrown ', dict.army, '. ',),
  //With the BOSS vulnerable, C1 is planning to overthrow the throne with their eyes set on overthrowing the mortal world next.
  p1as2c: pep.seq('With the ', myPep.setting.boss(names.setVar), ' vulnerable, ', names.c1, ' is planning to ', dict.overthrow, ' them, with ', myPep.pronouns.their(names.c1g), ' eyes set on ', myPep.doing(dict.overthrow), ' the mortal world next. '),
  
  //But for every three BRETHRENS in favor of the crusade, there is one who is not sure that they should leave the safety of the REALM.
  p1as3a: pep.seq('But for every ',dict.sp2to6, ' ',myPep.setting.brethrens(names.setVar), ' in favor of the ', dict.crusade, ', there is one who is not sure that they should leave the safety of  ',myPep.setting.realm(names.setVar), '. '),
  //But not everyone is pleased with C1's plans for REALM.
  p1as3b: pep.seq('But not everyone is ', dict.pleased, ' with ', names.c1, '\'s plans for ', myPep.setting.realm(names.setVar), '. '),
  //Many of the BRETHRENS are displeased with C1 and their crusade.
  p1as3c: pep.seq('Many of the ', myPep.setting.brethrens(names.setVar), ' are ', dict.displeased, ' with ', names.c1, ' and ', myPep.pronouns.their(names.c1g), ' ', dict.crusade, '. '),
  
  //After all, the gods leave them be -- but that could change it an all out war broke loose.
p1as4a: pep.seq(dict.afterAll, ', the ',dict.gods, ' leave them be -- but that could change if an all out war broke loose. '),
  //Life was good here, and the BRETHRENS didn't need a war to ruin it.
p1as4b: pep.seq('Life was ', dict.good, ' here, and the ', myPep.setting.brethrens(names.setVar), ' didn\'t need a war to ruin it. '),
  //They were willing to fight to keep the peace, as ironic as that seemed.
p1as4c: pep.seq(pep.choice('The '+ myPep.setting.brethrens(names.setVar).run(), 'They'), ' were willing to fight to keep the peace, as ironic as that seemed. '),
  
  //With civil war stirring in the BRETHREN world, C0 is faced with a choice. 
  p2as1a: pep.seq('With ',pep.opt('civil'),' war ',dict.stirring, ' in the ', myPep.setting.brethren(names.setVar), ' world, ', names.c0, ' is faced with a choice. '),
  //C0 is an outcast of sorts -- war just makes them sick.
  p2as1b: pep.seq(names.c0, ' is an outcast of sorts -- war just makes ', myPep.pronouns.them(names.c0g), ' sick. '),
  //There's not a fierce bone in C0's body.
  p2as1c: pep.seq('There\'s not a ', dict.fierce, ' bone in ', names.c0, '\'s body. '),

  // C0 must abandon their ideals of pacifism and face the horrors of war, or be imprisoned or killed for choosing not to fight.
  p2as2a: pep.seq(names.c0, ' must abandon ', myPep.pronouns.their(names.c0g), ' ideals of pacifism and face the horrors of war, or be imprisoned or killed for choosing not to fight. '),
  //Facing death or worse for refusing to participate, C0 must pick a side.
    p2as2b: pep.seq('Facing death or worse for refusing to participate, ', names.c0, ' must ',dict.pick, ' a side. ', ),
  //C0, and all other BRETHRENS must pick a side in this battle -- no matter how peaceful they are.
    p2as2c: pep.seq(names.c0, ', and all other ', myPep.setting.brethrens(names.setVar), ' must ',dict.pick, ' a side in this battle -- no matter how peaceful they are. '),
  
  //One day, however, they discover another path.
  p2as3a: pep.seq('One day, however, ', myPep.pronouns.they(names.c0g), ' ', dict.discover, myPep.verbS(names.c0g), ' ', dict.anotherPath, '. '),
  //As they despaired, C0 discovered another path.
    p2as3b: pep.seq('As ', myPep.pronouns.they(names.c0g), ' despaired, ', names.c0, ' ', dict.discovered, ' ',dict.anotherPath, '. '),
  //Just as they had lost hope, C0 discovered another path before them.
    p2as3c: pep.seq('Just as ', myPep.pronouns.they(names.c0g), ' had lost hope, ', names.c0, ' ', dict.discovered, ' ', dict.anotherPath, ' before ', myPep.pronouns.them(names.c0g), '. '),
  
  //During a skirmish, someone had left one of the closely guarded mortal portals open.
  p2as4a: pep.seq('During a skirmish, someone had left one of the closely guarded mortal portals open. '),
  //C0 discovered an open portal to the mortal world left unguarded in the fighting.
    p2as4b: pep.seq(names.c0, " ", dict.discovered, " an open portal to the mortal world left unguarded in the fighting."),
  //Seeing an unguarded portal, C0 realized that they had a chance at freedom.
    p2as4c: pep.seq("Seeing an unguarded portal, ", names.c0, " realized that ", myPep.pronouns.they(names.c0g), " had a chance at freedom. "),
  
  //Seizing upon their chance, they escape into the mortal world to begin life anew.
  p2as5a: pep.seq('Seizing upon ', myPep.pronouns.their(names.c0g), ' chance, ', myPep.pronouns.they(names.c0g), ' escape', myPep.verbS(names.c0g), ' into the mortal world to begin life anew. '),
  //Hoping no one would see them, C0 leapt through the portal and landed in the mortal world.
    p2as5b: pep.seq("Hoping no one would see ", myPep.pronouns.them(names.c0g), ", ", names.c0, " leapt through the portal and landed in the mortal world. "),
  //Taking a deep breath, C0 dashed into the new world before them.
    p2as5c: pep.seq("Taking a deep breath, ", names.c0, " dashed into the new world before them. "),
  
  
  //Yet, every time they interact with mankind, chaos follows.
  p3as1a: pep.seq('Yet, every time ', myPep.pronouns.they(names.c0g), ' interact', myPep.verbS(names.c0g), ' with mankind, chaos follows. '),
  //For every nice thing that C0 does in the mortal world, chaos is born.
  p3as1b: pep.seq('For every nice thing that ', names.c0, ' does in the mortal world, chaos is born. '),
  //Despite trying to live a moral life in their new world, trouble seems to follow. 
  p3as1c: pep.seq('Despite trying to live a moral life in ', myPep.pronouns.their(names.c0g), ' new world, trouble seems to follow. '),
  
  //Will they find a way to adapt to their new life without causing mass war, famine, or illness?
  p3as2a: pep.seq('Will ', myPep.pronouns.they(names.c0g), ' find a way to adapt to ', myPep.pronouns.their(names.c0g), ' new life without causing mass war, famine, or illness? '),
  //And fellow BRETHRENS are hunting for C0 to bring them back for trial.
  p3as2b: pep.seq('And fellow ', myPep.setting.brethrens(names.setVar), ' are hunting for ', names.c0, ', to bring ', myPep.pronouns.them(names.c0g), ' back for trial. '),
  //Will C0 be able to survive in this new and lonely world?
  p3as2c: pep.seq('Will ', names.c0, ' be able to survive in this new and lonely world? '),
  
  //Will they find a way to end the BRETHREN war and prevent the collapse of civilization?
  p3as3a: pep.seq('Will ', myPep.pronouns.they(names.c0g), ' find a way to end the ',myPep.setting.brethren(names.setVar), ' war and prevent the collapse of civilization? '),
  //Can C0 find a way to take down C1 before they start a war between the worlds?
  p3as3b: pep.seq('Can ', names.c0, ' find a way to take down ', names.c1, ' before they start a war between the worlds? '),
  //Will the boundaries between the mortal realm and REALM ever be the same?
  p3as3c: pep.seq('Will the boundaries between the mortal realm and ', myPep.setting.realm(names.setVar), ' ever be the same? '),
  
  //Or will the BRETHRENS hunting c0 find and drag them back to REALM?
  p3as4a: pep.seq('Or will the ',myPep.setting.brethrens(names.setVar), ' hunting ', names.c0, ' find and drag ', myPep.pronouns.them(names.c0g), ' back to ',myPep.setting.realm(names.setVar), '? '),
  //Or will C0 inadvertently destroy the world they've come to love?
  p3as4b: pep.seq('Or will ', names.c0, ' inadvertently destroy the world ', myPep.pronouns.they(names.c0g), '\'ve come to love?'),
  //Or will C0 be captured before they can find a way to save the world?
  p3as4c: pep.seq('Or will ', names.c0, ' be captured before they can find a way to save the world? '),
  
  //Join the author as they explore the collision of toxic nationalism and pacifism in a world where the wrong choice means eternal torment.
  p4as1a: pep.seq('Join ',names.author, ' as they explore the collision of toxic nationalism and pacifism in a world where the wrong choice means eternal torment. '),
  //Join us as we explore the true meaning of home in this stunning urban fantasy novella. 
  p4as1b: pep.seq('Join us as we explore the true meaning of home in this stunning urban fantasy novella. '),
  //Find out by reading more from the adventures of C0 in REALM.
  p4as1c: pep.seq('Find out by reading more from the adventures of ', names.c0, ' in ', myPep.setting.realm(names.setVar), '. '),
  
};

//p1as1 = par 1 ver a sen 1
let aPar = {
  p1as1: pep.choice(aText.p1as1a, aText.p1as1b, aText.p1as1c),
  p1as2: pep.choice(aText.p1as2a, aText.p1as2b, aText.p1as2c),
  p1as3: pep.choice(aText.p1as3a, aText.p1as3b, aText.p1as3c),
  p1as4: pep.choice(aText.p1as4a, aText.p1as4b, aText.p1as4c),
  
  p2as1: pep.choice(aText.p2as1a, aText.p2as1b, aText.p2as1c),
  p2as2: pep.choice(aText.p2as2a, aText.p2as2b, aText.p2as2c),
  p2as3: pep.choice(aText.p2as3a, aText.p2as3b, aText.p2as3c),
  p2as4: pep.choice(aText.p2as4a, aText.p2as4b, aText.p2as4c),
  p2as5: pep.choice(aText.p2as5a, aText.p2as5b, aText.p2as5c),
  
  p3as1: pep.choice(aText.p3as1a, aText.p3as1b, aText.p3as1c),
  p3as2: pep.choice(aText.p3as2a, aText.p3as2b, aText.p3as2c),
  p3as3: pep.choice(aText.p3as3a, aText.p3as3b, aText.p3as3c),
  p3as4: pep.choice(aText.p3as4a, aText.p3as4b, aText.p3as4c),
  
  p4as1: pep.choice(aText.p4as1a, aText.p4as1b, aText.p4as1c),

  
};



let abstract = pep.seq(myPep.html.p('o'), myPep.html.i('o'),
                       
aPar.p1as1, aPar.p1as2, aPar.p1as3 ,aPar.p1as4,
                       
                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p2as1, aPar.p2as2, aPar.p2as3, aPar.p2as4, aPar.p2as5,

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p3as1, aPar.p3as2, aPar.p3as3, aPar.p3as4,

                       myPep.html.p('c'), myPep.html.p('o'),

aPar.p4as1,


                       myPep.html.i('c'),myPep.html.p('c'), 

);

module.exports = {
  abstract: abstract,
  
};