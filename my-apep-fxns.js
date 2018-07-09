
var pep = require("apep");
pep = require('apep-std-transformations')(pep);
pep = require('apep-std-vars')(pep);


module.exports = {//define your specialized functions here 

 pluralize: pep.match()
    .case(/(.*)y$/,   (_, x) => x + 'ies')
    .case(/(.*s)$/,   (_, x) => x + 'es')
    .case(/.*/,       (x) => x + 's'),

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
  },
  
  //tl
  html: {
    btt: '<p><a href="#top"><i>Back To Top</i></a></p>',
    i: pep.dict({o: '<i>', c: '</i>'}),
    p: pep.dict({o: '<p>', c: '</p>'}),
    div: pep.dict({row: '<div class="row mt-3">', 
                   sp: '<div class="col-md-1"></div>',
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
  
  //tl myPep.setting.realm(myPep.chooseRealm)
  setting: {
    realm: pep.dict({e: 'Ealionem', f: 'Astaran',  h: 'Hell'}),
    brethren: pep.dict({e: 'elf', f: 'faery', h: 'demon'}),
    brethrens: pep.dict({e: 'elves', f: 'faeries', h: 'demons'}),
    boss: pep.dict({e: 'Emporer', f: 'Archfey', h: 'Archdemon'}),
      
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
                      ),
    
    elfName: pep.choice("Arathorn","Venpeiros","Rennyn","Iliyarus",
                "Mardeiym","Zylmoira","Intevar","Phiqirelle",
                "Ayas","Uriwraek","Alwin","Eilris",
                "Montagor","Wranwraek","Ualair","Aragwyn",
                "Ettrian","Sarsalor","Kymil","Magna",
                "Anhaern","Orikian","Naesala","Genqirelle",
                "Farryn","Ulacaryn","Elincia","Phiqen",
                "Ygrainne","Syldove","Caerthynna","Preslen",
                "Gweyr","Zinleth","Radelia","Elgolor",
                "Kenia","Magbanise","Cilivren","Vadan",
                       ),
    feyName: pep.choice("Teodi","Pamla","Lyllas","Styssa",
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
  stirring: pep.choice("stirring", "brewing", "bubbling", "starting", 
                       "boiling over", "overflowing", "beginning", "rising", ),
  
  across: pep.choice("across", "within", "around", "between", "inside", "in", ),
  
  depths: pep.seq("the ", pep.choice("depths", "boundaries", "breadth", "borders"), " of"),
  
  trouble: pep.choice("trouble", "disaster", "calamity", "catastrophe", "unrest"),
},
  
}//end module.exports
