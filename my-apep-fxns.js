
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);


module.exports = {//define your specialized functions here 

 pluralize: pep.match()
    .case(/(.*)y$/,   (_, x) => x + 'ies')
    .case(/(.*s)$/,   (_, x) => x + 'es')
    .case(/.*/,       (x) => x + 's'),

 doing: pep.match()
    .case(/(.*)e$/,   (_, x) => x + 'ing')
    //.case(/(.*s)$/,   (_, x) => x + 'es')
    .case(/.*/,       (x) => x + 'ing'),
  
aAn: pep.match()
    .case(/^[aeiou]/, (x) => 'an '+x)
    .case(/.*/, (x) => 'a '+x),

edIng: pep.match()
    .case(/(.*)ing$/, (_, x) => x + 'ed')
    .case(/(.*)ed$/, (_, x) => x + 'ing'),
 
  //tl
  pronouns: {
    they: pep.dict({ male: 'he', female: 'she',}, 'they'),
    them: pep.dict({ male: 'him', female: 'her',}, 'them'),
    their: pep.dict({ male: 'his', female: 'her',}, 'their'),
    theirs: pep.dict({ male: 'his', female: 'hers',}, 'theirs'),
    They: pep.dict({male: 'He', female: 'She',}, 'They'),
    Them: pep.dict({ male: 'Him', female: 'Her',}, 'Them'),
    Their: pep.dict({ male: 'His', female: 'Her',}, 'Their'),
    Theirs: pep.dict({ male: 'His', female: 'Hers',}, 'Theirs'),
    themself: pep.dict({male: 'himself', female: 'herself',}, 'themself'),
  },
  
  
  //tl
  
  /*div.row
      div.col-md-3
      div(class="col-md-6 rounded mt-2 darken box" id="capture" style="background-image: url(" + bookCover + ")")
        h1(class="text-light module text-center title") #{title}
        h1(class="text-light module text-center author") #{author}*/
  
  html: {
    btt: '<p><a href="#top"><i>Back To Top</i></a></p>',
    i: pep.dict({o: '<i>', c: '</i>'}),
    p: pep.dict({o: '<p>', c: '</p>', co: '</p><p>',}),
    div: pep.dict({row: '<div class="row mt-3">', 
                   sp: '<div class="col-md-1"></div>',
                   oCov: '<div class="col-md-3"></div><div class="col-md-6 rounded mt-2 darken box" style="background-image:url(',
                   //put in book cover url
                   oCovC: ')"><h1 class="text-light module text-center title">',
                   //put in title, end h1
                   oCovA: '<h1 class="text-light module text-center author">',
                   //end h1
                   oAbs: '<div class="col-md-5 rounded bg-info t-2 ml-2 mr-2 text-light">', 
                   oCh: '<div class="row mt-3"><div class="col-md-2"></div><div class="col-md-8 rounded bg-light pt-3 pl-3 pr-3 pb-3 text-dark">',
                   c: '</div>',
                   c2: '</div></div>',
                   h1: '<h1 class="text-center text-primary">',
                   h1c: '</h1>'}),
    
    
  },
  
  //tl myPep.chooseRealm
  chooseRealm: pep.choice('e', 'f', 'h'),
  
  verbS: pep.dict({male: 's', female: 's'}, ''),
  
  charNames: function(v){
    console.log(v);
    if(v == 'e'){

    return(pep.choice("Arathorn","Venpeiros","Rennyn","Iliyarus",
                "Mardeiym","Zylmoira","Intevar","Phiqirelle",
                "Ayas","Uriwraek","Alwin","Eilris",
                "Montagor","Wranwraek","Ualair","Aragwyn",
                "Ettrian","Sarsalor","Kymil","Magna",
                "Anhaern","Orikian","Naesala","Genqirelle",
                "Farryn","Ulacaryn","Elincia","Phiqen",
                "Ygrainne","Syldove","Caerthynna","Preslen",
                "Gweyr","Zinleth","Radelia","Elgolor",
                "Kenia","Magbanise","Cilivren","Vadan",
                  ))
    } else if(v == 'f'){
    
     return(pep.choice("Teodi","Pamla","Lyllas","Styssa",
                  "Ghamish","Nefre","Sceothisy","Sinsebe",
                  "Pherravy","Miastore","Dhympaph","Giero",
                  "Zeormof","Zifrath","Mnastri","Shapo",
                  "Stentamuih","Nylrimaeph","Oelitesh","Scylrene",
                  "Dhoelleph","Zyphif","Shiste","Maethrah",
                  "Phrevaph","Gaphlaph","Ziflode","Pynshiny",
                  "Pirlereos","Phrempanuis","Thapha","Scinshi",
                  "Phamesh","Paetse","Mysan","Tafo",
                  "Syffane","Emafah","Scefferas","Yrripes",
                  "Astoh","Pilna","Nimbes","Steodhe",
                  "Zashes","Yfi","Thintili","Yphlapysh",
                  "Draerlomi","Scafravi"))
    } else {
     return(pep.choice( "Urnuthun", "Tralroloth", "Unorez", "Sinoth", 
                  "Vog'thun", "Bag'thanniud", "Onnoch", "Geglod", 
                  "Toth'tekis", "Anez","Tastraniz","Thol'gith",
                  "Sigrok","Vizreruth","Uzomud","Jurkadal",
                  "Thelgen","Bagoneth","Orkodath","Urkomaud",
                  "Ag'thoth","Or'amal","Tonnon","Ogixath",
                  "Xirzarath","Golgrech","Solvos","Elmadir",
                  "Birgrath","Vullmin","Iz'gadig","Drorgrazon",
                  "Bagdrazith","Trorrother","Ragrinor","Oth'tomen",
                  "Tarruth","Roz'gonath","Roth'tidag","Tharzamon",
                  "Moggiz","Agrauth","Moz'gonog","Sinnelan",
                  "Troramith","Galremath","Ralgromoth","Ozgunaug",
                  "Baglanod","Jiz'gad","Xozoruth","Birremon",
                  "Brugdris","Gag'draros","Volgemos","Jolgriroth",
                  "Uzgak","Sag'dran","Zogakoth","Gar'or",))
      }
    },
  
  
  
  //tl myPep.setting.realm(myPep.chooseRealm)
  setting: {
    realm: pep.dict({e: 'Ealionem', f: 'Astaran',  h: 'Hell'}),
    brethren: pep.dict({e: 'elf', f: 'faery', h: 'demon'}),
    brethrens: pep.dict({e: 'elves', f: 'faeries', h: 'demons'}),
    boss: pep.dict({e: 'Emperor', f: 'Archfey', h: 'Archdemon'}),
      
      },
  
  
  //myPep.gender
  gender: pep.choice("male", "female", "enby"),
  
  //tl
  frMat: {
    //one level myPep.frMat. ...
    darknessTitle: pep.choice("darkness", "night", "shadows", "depth", 
                              "deep", "twilight", "flame", "fire", "fury"),

    intoTitle: pep.choice("into", "towards", "for", "in"),

    iTitle: pep.choice("I", "We", "You", "They"),

    glowTitle: pep.choice("glow", "grow", "shine", "lurk", "go", "venture", "ride"),


    authorFirst: pep.choice("James", "John"," Robert", "Michael", "William",
                            "David", "Richard", "Joseph", "Thomas", "Charles",
                            "Christopher", "Daniel", "Matthew", "Anthony", "Donald",
                            "Mark", "Paul", "Steven", "Andrew", "Kenneth",
                            "George", "Joshua", "Kevin", "Brian", "Edward",
                            "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth",
                            "Barbara", "Susan", "Jessica", "Sarah", "Margaret",
                            "Karen", "Nancy", "Lisa", "Betty", "Dorothy",
                            "Sandra", "Ashley", "Kimberly", "Donna", "Emily",
                            "Carol", "Michelle", "Amanda", "Melissa", "Deborah"),

    authorMiddle: pep.choice("A.", "B.", "C. ", "D. ", "E. ", "F. ", "G. ",
                             "H. ", "I. ", "J. ", "K. ", "L. ", "M. ", "N. ",
                             "O. ", "P. ", "Q. ", "R. ", "S. ", "T. ", "U. ",
                             "V. ", "W. ", "X. ", "Y. ", "Z. "),
    authorLast: pep.choice("Smith","Johnson","Williams","Jones","Brown",
                            "Davis","Miller","Wilson","Moore","Taylor",
                            "Anderson","Thomas","Jackson","White","Harris",
                            "Martin","Thompson","Garcia","Martinez","Robinson",
                            "Clark","Rodriguez","Lewis","Lee","Walker",
                            "Hall","Allen","Young","Hernandez","King",
                            "Wright","Lopez","Hill","Scott","Green",
                            "Adams","Baker","Gonzalez","Nelson","Carter",
                            "Mitchell","Perez","Roberts","Turner","Phillips",
                            "Campbell","Parker","Evans","Edwards","Collins",
                            "Stewart","Sanchez","Morris","Rogers","Reed",
                            "Cook","Morgan","Bell","Murphy","Bailey",
                            "Rivera","Cooper","Richardson","Cox","Howard",
                            "Ward","Torres","Peterson","Gray","Ramirez",
                            "James","Watson","Brooks","Kelly","Sanders",
                            "Price","Bennett","Wood","Barnes","Ross",
                            "Henderson","Coleman","Jenkins","Perry","Powell",
                            "Long","Patterson","Hughes","Flores","Washington",
                            "Butler","Simmons","Foster","Gonzales","Bryant",
                            "Alexander","Russell","Griffin","Diaz","Hayes",
                            "Myers","Ford","Hamilton","Graham","Sullivan",
                            "Wallace","Woods","Cole","West","Jordan",
                            "Owens","Reynolds","Fisher","Ellis","Harrison",
                            "Gibson","Mcdonald","Cruz","Marshall","Ortiz",
                            "Gomez","Murray","Freeman","Wells","Webb",
                            "Simpson","Stevens","Tucker"),

    bookCover: pep.choice("https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-733475.jpeg?1530713663187", 
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-416920.jpeg?1530712948354",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-341114.jpeg?1530716859431",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-417070.jpeg?1530716859688",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fenergy-of-technology-consumption-light-159466.jpeg?1530712948143",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-941419.jpeg?1530716859861",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-735647.jpeg?1530716860178",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fdelicate-arch-night-stars-landscape.jpg?1530713663357",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-921284.png?1530712948507",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-312491.jpeg?1530998567754",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Ffoggy-mist-forest-trees-42263.jpeg?1530998567986",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-204366.jpeg?1530998568308",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-289367.jpeg?1530998568534",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-217660.jpeg?1530998568957",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-414331.jpeg?1530998569205",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-226721.jpeg?1530998569491",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-428429.jpeg?1530998569761",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-194917.jpeg?1530998572761",
                          "https://cdn.glitch.com/b0a1be1d-962e-4ae1-bdff-1c343af18259%2Fpexels-photo-754071.jpeg?1530998576011",
                         ),


    demonName: pep.choice("Urnuthun", "Tralroloth", "Unorez", "Sinoth", 
                  "Vog'thun", "Bag'thanniud", "Onnoch", "Geglod", 
                  "Toth'tekis", "Anez","Tastraniz","Thol'gith",
                  "Sigrok","Vizreruth","Uzomud","Jurkadal",
                  "Thelgen","Bagoneth","Orkodath","Urkomaud",
                  "Ag'thoth","Or'amal","Tonnon","Ogixath",
                  "Xirzarath","Golgrech","Solvos","Elmadir",
                  "Birgrath","Vullmin","Iz'gadig","Drorgrazon",
                  "Bagdrazith","Trorrother","Ragrinor","Oth'tomen",
                  "Tarruth","Roz'gonath","Roth'tidag","Tharzamon",
                  "Moggiz","Agrauth","Moz'gonog","Sinnelan",
                  "Troramith","Galremath","Ralgromoth","Ozgunaug",
                  "Baglanod","Jiz'gad","Xozoruth","Birremon",
                  "Brugdris","Gag'draros","Volgemos","Jolgriroth",
                  "Uzgak","Sag'dran","Zogakoth","Gar'or",
                "Arathorn","Venpeiros","Rennyn","Iliyarus",
                "Mardeiym","Zylmoira","Intevar","Phiqirelle",
                "Ayas","Uriwraek","Alwin","Eilris",
                "Montagor","Wranwraek","Ualair","Aragwyn",
                "Ettrian","Sarsalor","Kymil","Magna",
                "Anhaern","Orikian","Naesala","Genqirelle",
                "Farryn","Ulacaryn","Elincia","Phiqen",
                "Ygrainne","Syldove","Caerthynna","Preslen",
                "Gweyr","Zinleth","Radelia","Elgolor",
                "Kenia","Magbanise","Cilivren","Vadan",
                  "Teodi","Pamla","Lyllas","Styssa",
                  "Ghamish","Nefre","Sceothisy","Sinsebe",
                  "Pherravy","Miastore","Dhympaph","Giero",
                  "Zeormof","Zifrath","Mnastri","Shapo",
                  "Stentamuih","Nylrimaeph","Oelitesh","Scylrene",
                  "Dhoelleph","Zyphif","Shiste","Maethrah",
                  "Phrevaph","Gaphlaph","Ziflode","Pynshiny",
                  "Pirlereos","Phrempanuis","Thapha","Scinshi",
                  "Phamesh","Paetse","Mysan","Tafo",
                  "Syffane","Emafah","Scefferas","Yrripes",
                  "Astoh","Pilna","Nimbes","Steodhe",
                  "Zashes","Yfi","Thintili","Yphlapysh",
                  "Draerlomi","Scafravi"
                       ),
  },//end frMat
  
dict: {
  
  across: pep.choice("across", "within", "around", "between", "inside", ),
  
  afraid: pep.choice("afraid", "terrified", "scared", "fearful"),
  
  afterAll: pep.choice("After all", "Truly", "Above all", "Most importantly"),
  
  anotherPath: pep.choice("another path", "a third choice", "a final choice", "a way out"),
  
  army: pep.choice("army", "batallion", "horde", "force", "calvary", "militia"),
  
  beat: pep.choice("beat", "break", "batter", "crush", "pummel"),
  
  bees: pep.choice("bees", "hornets", "wasps", "cockroaches", "dung beetles"),
  
  began: pep.choice("began", "started", "commenced", ),
  
  breakneck: pep.choice("breakneck", "reckless", "full-tilt", "lightning", "supernatural"),
  
  buddy: pep.choice("buddy", "comrade", "friend", "classmate", "mate", "pal", "playmate"),
  
  budging: pep.choice("moving", "budging", "shifting", "swaying",), 
  
  bullies: pep.choice("bullies", "tormenters", "persecutors"),
  
  cackling: pep.choice("cackling", "laughing", "giggling", "chortling", "snickering", "sniggering", "tittering"),
  
  cajoled: pep.choice("cajoled", "teased", "provoked", "goaded", "spurred"),
  
  caught: pep.choice("caught", "snagged", "grabbed", "snared"),
  
  chased: pep.choice("chased", "followed", "hounded", "hunted", "trailed", "ran"),
  
  chasing: pep.choice("chasing", "following", "hounding", "hunting", "trailed", "running"),
  
  coming: pep.choice("coming", "running", "hiding"),
  
  corner: pep.choice("corner", "bend", "ridge", "edge"),
  
  couple: pep.choice("team", "couple", "brace", "set", "duo", "dyad", "twosome", "doublet"),
  
  cowed: pep.choice("cowed", "intimidated", "subdued", "unnerved", "rattled"),
  
  creepy: pep.choice("creepy", "macabre", "eerie", "menacing", "ominous", "sinister"),
  
  cried: pep.choice("cried", "shouted", "yelped", "hollered", "bellowed"),
  
  crossedTheirArms: pep.choice("crossed their arms", "intertwined their arms", "giggled", "cackled", "waved" ),
  
  crusade: pep.choice("crusade", "conquest", "campaign", "struggle", "goal", ),
  
  depths: pep.seq("the ", pep.choice("depths", "boundaries", "breadth", "borders"), " of"),
  
  dirt: pep.choice("dirt", "soil", "muck", "mud", "dust", ),
  
  discover: pep.choice("discover", "stumble upon", "find", "unearth", "uncover"),
  
  discovered: pep.choice("discovered", "stumbled upon", "found", "unearthed", "uncovered"),
  
  displeased: pep.choice("displeased", "angry", "frustrated", "disgusted", "uneasy"),
  
  elm: pep.choice("elm", "tree", "bush", "pine", "maple", "oak", "tupelo", "crabapple", "ash", "shrubbery",),
  
  escape: pep.choice("escape", "escaping", "way out", "running", "going back", "safe passage", ),
  
  faster: pep.choice("faster", "speedier", "quicker", "agile", "swifter", "fleet"),
  
  fierce: pep.choice("fierce", "angry", "violent", "war-mongering", "war-hungry", "bloodthirsty", "bloodhungry"),
  
  fled: pep.choice("fled", "ran", "scampered", "sprinted", "dashed", "bolted", "scurried", "sped", "scrambled"),
  
  fooled: pep.choice("fooled", "bamboozled", "tricked", "conned", "deceived", "deluded", "hornswaggled", "duped"),
  
  footprints: pep.choice("footprints", "impressions", "footsteps"),
  
  freakishly: pep.choice("freakishly", "aberrantly", "freakily", "grotesquely", "oddly", ),
  
  fuckYourselves: pep.choice("fuck yourselves", "die in a fire", "set yourselves on fire", "eat a dick", "hump a porcupine", "deep throat a dagger", "eat shit and die", "pound salt in your ass"),
  
  furtively: pep.choice("furtively", "covertly", "clandestinely", "surreptitiously", ), 
  
  goBy: pep.choice("go by", "pass", "arrive", "come"),
  
  gods: pep.choice("gods", "High Lords", "deities", "Great Ones"),
  
  good: pep.choice("good", "great", "amazing", "excellent", "peaceful", "adequate"),
  
  grinned: pep.choice("grinned", "smiled", "smirked", "beamed", ),
  
  harassed: pep.choice("harassed", "heckled", "teased", "tormented", "pestered", "persecuted", "hounded", "bedeviled", ),
  
  hastily: pep.choice("hastily", "carelessly", "rashly"),
  
  heartless: pep.choice("heartless", "cruel", "brutal", "callous", "cold-hearted", "cold-blooded", "harsh", "inhuman", "insensitive", "merciless", "ruthless"),
  
  house: pep.choice("house", "homestead", "cabin", "building", "dwelling", "shanty"),
  
  hungry: pep.choice("hungry", "starved", "famished", "searching"),
  
  idly: pep.choice("idly", "casually", "easily", "absently", "carelessly", "leisurely"),
  
  juveniles: pep.choice("juveniles", "adolescents", "children", "miscreants", "teenagers", "youths"),
  
  laughter: pep.choice("laughter", "humor", "amusement", ),
  
  leaned: pep.choice("leaned", "rested", "reclined", ),
  
  leaveMeAlone: pep.choice("Leave me alone!", "Leave me be!", "Go away!"),
  
  little: pep.choice("little", "bit", "tad", ),
  
  longing: pep.choice("longing", "searching", "yearning", "scheming"),
  
  moment: pep.choice("minute", "moment", "second", "space", "time"),
  
  murder: pep.choice("murder", "annihilation", "torture", "destruction", "bloodshed", "trouble"),
  
  ornamental: pep.choice("ornamental", "ornate", "exquisite", "showy",),
  
  overthrow: pep.choice("overthrow", "conquer", "depose", "topple", "displace", "unseat", "dethrone"),
  
  peeking: pep.choice("peeking", "peering", "looking", ),
  
  pick: pep.choice("pick", "choose", "join"),
  
  pleased: pep.choice("pleased", "happy", "comfortable", "excited", ),
  
  position: pep.choice("position", "spot", "location", "place", "station", ),
  
  raced: pep.choice("raced", "ran", "sped"),
  
  retreated: pep.choice("retreated", "backed away", "fell back", "withdrew"),
  
  sack: pep.choice("sack", "bundle", "satchel", "pouch", "tote", "bag", "duffel"),
  
  scraggly: pep.choice("scraggly", "unkempt", "dingy", "bedraggled", "scruffy", "tacky"),
  
  seriously: pep.choice("seriously", "earnestly", "passionately", "sincerely", "resolutely", "firmly", ),
  
  shade: pep.choice("shade", "shadow", "relief from heat", "penumbra", "cover"),
  
  short: pep.choice("short", "just short", "shy", "just shy",),
  
  silence: pep.choice("silence", "quiet", "stillness", "reticence", "dead air",),
  
  slackJawed: pep.choice("slack-jawed", "absently", "mindlessly", "inattentively", "vacuously", "hollowly"),
  
  sobbed: pep.choice("sobbed", "cried", "blubbered", "whimpered", "wept"), 
  
  sobs: pep.choice("sobs", "tears", "blubbering", "whimpers"),
  
  sp2to6: pep.choice("two", "three", "four", "five", "six"),
  
  speed: pep.choice("speed", "rate", "pace", "velocity"),
  
  spent: pep.choice("spent", "passed", "wasted", "exhausted", ), 
  
  spotted: pep.choice("spotted", "spied", "glimpsed", "saw",),
  
  standstill: pep.choice("standstill", "impasse", "stalemate", "dead end", "deadlock", ),
  
  stared: pep.choice("stared", "gawked", "looked", "gazed", "goggled", ),
  
  stifled: pep.choice("stifled", "repressed", "held back", "squelched", "suffocated", "suppressed"), 
  
  stirring: pep.choice("stirring", "brewing", "bubbling", "boiling over", "overflowing", "beginning", "rising", "looming", "pending" ),
  
  strode: pep.choice("strode", "tromped", "traipsed", "tramped", "walked", "stalked", "paced"),
  
  stronger: pep.choice("stronger", "athletic", "robust", "tenacious", "tough", "muscular", "powerful"),
  
  swallow: pep.choice("swallow", "eat", "choke on", ), 
  
  taller: pep.choice("taller", "lanky", "towering", "slender", "gangly", "angular"),
  
  terror: pep.choice("terror", "fear", "dread", "horror", "alarm", "panic"),
  
  thankYou: pep.choice("thank you", "thanks"),
  
  threw: pep.choice("threw", "tossed", "lobbed", "heaved", "hurled", "pitched"),
  
  trouble: pep.choice("trouble", "disaster", "calamity", "catastrophe", "unrest"),
  
  unconcerned: pep.choice("unconcerned", "unperturbed", "uninterested"),
  
  washOver: pep.choice("wash over", "wash through", "flood over", "flood through", "rush through", "course over", ),
  
  widely: pep.choice("widely", "ear to ear", "lavishly", "liberally", ),

  
},
  
}//end module.exports
