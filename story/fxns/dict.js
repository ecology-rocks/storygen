var pep = require("apep");
//pep = require('apep-std-transformations')(pep);
//pep = require('apep-std-vars')(pep);
//var myPep = require('../my-apep-fxns.js');

module.exports = {

    abhorred: pep.choice("abhorred", "detested", "despised", "loathed"),
  
    across: pep.choice("across", "within", "around", "between", "inside", ),

    actually: pep.choice("actually", "really", "definitely", "absolutely", "indeed"),

    affect: pep.choice("affect", "influence", "impact"),

    afraid: pep.choice("afraid", "terrified", "scared", "fearful"),

    afterAll: pep.choice("After all", "Truly", "Above all", "Most importantly"),

    agreement: pep.choice("agreement", "consensus", "concurrence", ),

    always: pep.choice("always", "perpetually", "habitually", "unfailingly", "regularly"),

    angry: pep.choice("angry", "mad", "displeased"),

    animalList: pep.choice("horse", "cat", "bear", "cow", "bull", "goat", "dragon"),

    anotherPath: pep.choice("another path", "a third choice", "a final choice", "a way out"),

    apathetic: pep.choice("apathetic", "dulled", "numb", "indifferent", ),

    army: pep.choice("army", "batallion", "horde", "force", "calvary", "militia"),

    appeal: pep.choice("appeal", "charm", "attractiveness", "pizzazz", "allure"),
  
    appeared: pep.choice("appeared", "seemed", "looked"),

    ascertain: pep.choice("ascertain", "tell", "determine", ),

    asked: pep.choice("asked", "questioned", "inquired", "queried"),

    ass: pep.seq(pep.choice("ass", "rump", "butt", ), pep.opt("-hole")),

    barked: pep.choice("barked", "snapped", "coughed", "growled"),

    beat: pep.choice("beat", "break", "batter", "crush", "pummel"),

    bees: pep.choice("bees", "hornets", "wasps", "cockroaches", "dung beetles"),

    began: pep.choice("began", "started", "commenced", ),
  
    biggest: pep.choice("biggest", "largest", "colossal", ),

    bin: pep.choice("trash", "bin", "dumpster", "can"),

    bluntness: pep.choice("blutness", "candor", "directness", "forthrightness", "honesty", "unreserve"),
  
    bottom: pep.choice("bottom", "basement", "base"),

    breakneck: pep.choice("breakneck", "reckless", "full-tilt", "lightning", "supernatural"),

    buddy: pep.choice("buddy", "comrade", "friend", "classmate", "mate", "pal", "playmate"),

    budging: pep.choice("moving", "budging", "shifting", "swaying", ),

    bullies: pep.choice("bullies", "tormenters", "persecutors"),

    cackling: pep.choice("cackling", "laughing", "giggling", "chortling", "snickering", "sniggering",
        "tittering"),

    cafeteria: pep.choice("cafeteria", "diner", "mess hall"),

    cajoled: pep.choice("cajoled", "teased", "provoked", "goaded", "spurred"),

    cardinal: pep.choice("east", "north", "south", "west"),

    caught: pep.choice("caught", "snagged", "grabbed", "snared"),
  
    challenging: pep.choice("challenging", "hard", "difficult", "demanding", "taxing", "exacting"),

    chased: pep.choice("chased", "followed", "hounded", "hunted", "trailed", "ran"),

    chasing: pep.choice("chasing", "following", "hounding", "hunting", "trailed", "running"),

    chin: pep.choice("chin", "lips", "smackers", "gobbers", "face", "cheeks"),

    clean: pep.choice("clean", "remove", "dispose"),

    colored: pep.choice("colored", "tinted", "painted", "stained", "tinged"),

    coming: pep.choice("coming", "running", "hiding"),
  
    compound: pep.choice("compound", "base", "barracks", "fortress", "castle"),

    corner: pep.choice("corner", "bend", "ridge", "edge"),

    correct: pep.choice("correct", "precise", "right", "accurate", ),

    could: pep.choice("could", "might", "may"),

    couple: pep.choice("team", "couple", "brace", "set", "duo", "dyad", "twosome", "doublet"),

    cowed: pep.choice("cowed", "intimidated", "subdued", "unnerved", "rattled"),

    creepy: pep.choice("creepy", "macabre", "eerie", "menacing", "ominous", "sinister"),

    cried: pep.choice("cried", "shouted", "yelped", "hollered", "bellowed", "barked"),

    crossed: pep.choice("crossed", "folded", "intertwined"),

    crossedTheirArms: pep.choice("crossed their arms", "folded their arms", "intertwined their arms",
        "giggled", "cackled", "waved"),

    crusade: pep.choice("crusade", "conquest", "campaign", "struggle", "goal", ),

    damnIt: pep.choice(pep.seq("damn it", pep.opt(" all to hell")), "for fuck's sake",
        "for the love of all"),

    dangerously: pep.choice("dangerously", "alarmingly", "precariously", "severely"),
  
    death: pep.choice("death", "obliteration", "dying", "annihilation"),

    depths: pep.seq("the ", pep.choice("depths", "boundaries", "breadth", "borders"), " of"),
  
    die: pep.choice("die", "perish", "expire", "burn"),

    dies: pep.choice("dies", "perishes", "burns", "expires"),

    different: pep.choice("different", "strange", "unique", "peculiar"),

    dim: pep.choice("dim", "dark", "gray", "night-lit"),

    dirt: pep.choice("dirt", "soil", "muck", "mud", "dust", ),

    discover: pep.choice("discover", "stumble upon", "find", "unearth", "uncover"),

    discovered: pep.choice("discovered", "stumbled upon", "found", "unearthed", "uncovered"),

    displeased: pep.choice("displeased", "angry", "frustrated", "disgusted", "uneasy"),

    drag: pep.choice("drag", "haul", "tug", "pull"),

    dragged: pep.choice("dragged", "hauled", "tugged", "pulled"),

    drippingFrom: pep.choice("dripping from", "hanging from", "smeared on", "all over"),

    dog: pep.choice("dog", "hound", "cur", "beast"),

    doom: pep.choice("doom", "annihilation", "destruction", "ruin", "downfall", "catastrophe"),
  
    ducked: pep.choice("ducked", "hunkered", "hunched", "stooped", ),

    elm: pep.choice("elm", "tree", "bush", "pine", "maple", "oak", "tupelo", "crabapple", "ash",
        "shrubbery", ),
  
    enlisted: pep.choice("enlisted", "joined", "volunteered"),

    escape: pep.choice("escape", "escaping", "way out", "running", "going back", "safe passage", ),

    exceptionally: pep.choice("exceptionally", "abnormally", "especially", "particularly"),  
  
    faster: pep.choice("faster", "speedier", "quicker", "agile", "swifter", "fleet"),

    few: pep.choice("few", "couple", "handful"),

    fierce: pep.choice("fierce", "angry", "violent", "war-mongering", "war-hungry", "bloodthirsty",
        "bloodhungry"),

    finally: pep.choice("finally", "eventually", "painstakingly"),

    fled: pep.choice("fled", "ran", "scampered", "sprinted", "dashed", "bolted", "scurried", "sped",
        "scrambled"),

    food: pep.choice("food", "fare", "feast", "meal"),

    fooled: pep.choice("fooled", "bamboozled", "tricked", "conned", "deceived", "deluded", "hornswaggled",
        "duped"),

    footprints: pep.choice("footprints", "impressions", "footsteps"),

    freakishly: pep.choice("freakishly", "aberrantly", "freakily", "grotesquely", "oddly", ),

    fretting: pep.choice("fretting", "worrying", "caring", "agonizing", "brooding"),

    frustrated: pep.choice("frustrated", "fed up", "discontented", "disheartened"),

    fuckYourselves: pep.choice("fuck yourselves", "die in a fire", "set yourselves on fire", "eat a dick",
        "hump a porcupine", "deep throat a dagger", "eat shit and die", "pound salt in your ass"),

    furtively: pep.choice("furtively", "covertly", "clandestinely", "surreptitiously", ),

    glowing: pep.choice("glowing", "gleaming", "flaming", "luminous"),

    gnawed: pep.choice("gnawed", "chewed", "chomped", "bit", "munched", "crunched", "nibbled"),

    gnawing: pep.choice("gnawing", "chewing", "chomping", "biting", "munching", "crunching", "nibbling"),

    goBy: pep.choice("go by", "pass", "arrive", "come"),

    gods: pep.choice("gods", "High Lords", "deities", "Great Ones"),

    good: pep.choice("good", "great", "amazing", "excellent", "peaceful", "adequate"),

    grape: pep.choice("grape", "pink", "soft", "blue", "purple", "green", "strawberry", "lemon"),

    green: pep.choice("green", "emerald", "lime", "olive"),

    grin: pep.choice("grin", "smile", "smirk"),

    grinned: pep.choice("grinned", "smiled", "smirked", "beamed", ),
  
    Guard: pep.choice("Guard", "Sentry"),
  
    guard: pep.choice("guard", "sentry"),

    happen: pep.choice("happen", "occur", "come to pass"),

    harassed: pep.choice("harassed", "heckled", "teased", "tormented", "pestered", "persecuted",
        "hounded", "bedeviled", ),

    harsh: pep.choice("grating", "jarring", "rasping", "strident", "raucous", "brassy", "discordant",
        "unharmonious", "unmelodious"),

    hastily: pep.choice("hastily", "carelessly", "rashly"),

    hat: pep.choice("hat", "cap", "helmet", "fedora"),

    heartily: pep.choice("heartily", "wholeheartedly", "sincerely", "genuinely", "warmly"),

    heartless: pep.choice("heartless", "cruel", "brutal", "callous", "cold-hearted", "cold-blooded",
        "harsh", "inhuman", "insensitive", "merciless", "ruthless"),

    house: pep.choice("house", "homestead", "cabin", "building", "dwelling", "shanty"),

    hungry: pep.choice("hungry", "starved", "famished", "ravenous"),

    idly: pep.choice("idly", "casually", "easily", "absently", "carelessly", "leisurely"),
  
    imagined: pep.choice("imagined", "imaginary", "abstract", "fanciful", "fantastic", "hypothetical"),

    impending: pep.choice("impending", "imminent", "looming", "pending", ),
  
    imprisoned: pep.choice("imprisoned", "jailed", "incarcerated"),

    insane: pep.choice("insane", "crazy", "mad", "certifiable", "half-baked", "batshit", ),

    intimidating: pep.choice("intimidating", "hellish", "scary", "fearsome"),

    issue: pep.choice("question", "issue", "problem"),

    jelly: pep.choice("jelly", "jam", "cheese", "spread", "clumps", "cream"),
  
    job: pep.choice("job", "position", "gig", "post"), 
  
    joke: pep.choice("joke", "farce", "laughingstock"),

    juveniles: pep.choice("juveniles", "adolescents", "children", "miscreants", "teenagers", "youths"),
    
    kill: pep.choice("kill", "fight", "murder", "slay"), 

    last: pep.choice("last", "final", "ultimate", "concluding", "finishing"),

    laugh: pep.choice("laugh", "cackle", "guffaw", "chortle"),

    laughter: pep.choice("laughter", "humor", "amusement", ),

    leaned: pep.choice("leaned", "rested", "reclined", ),

    leaveMeAlone: pep.choice("Leave me alone!", "Leave me be!", "Go away!"),

    left: pep.choice("left", "abandoned"),

    legit: pep.choice("legit", "legitimate", "serious", "genuine"),

    life: pep.choice("life", "existence", "creation", "mortal coil"),

    little: pep.choice("little", "bit", "tad", ),
  
    loaded: pep.choice("loaded", "challenging", "high-stakes", "precarious", "touch-and-go"),

    longing: pep.choice("longing", "searching", "yearning", "scheming"),

    looked: pep.choice("looked", "glanced", "stared", "peered"),

    lost: pep.choice("lost", "squandered", "forgotten", "wasted"),

    meat: pep.choice("meat", "game", ),
  
    military: pep.choice("military", "army", "guard", "royal guard", "armed forces"),

    moment: pep.choice("minute", "moment", "second"),

    morsel: pep.choice("morsel", "bite", "nibble", "piece"),

    murder: pep.choice("murder", "annihilation", "torture", "destruction", "bloodshed", "trouble"),

    nothing: pep.choice("nothing", "nada", "nil", "aught", "zilch", "nought", ),

    ornamental: pep.choice("ornamental", "ornate", "exquisite", "showy", ),

    outdoors: pep.choice("outdoors", "wilds"),

    outside: pep.choice("outside", "in the elements", "beyond"),

    over: pep.choice('over', 'up', 'done', 'finished'),

    overcooked: pep.choice("overcooked", "well-done"),

    overthrow: pep.choice("overthrow", "conquer", "depose", "topple", "displace", "unseat", "dethrone"),

    peeking: pep.choice("peeking", "peering", "looking", ),
  
    pending: pep.choice("pending", "imminent", "impending", "forthcoming"), 

    perhaps: pep.choice("perhaps", "maybe", "possibly", "conceivably", ),

    pick: pep.choice("pick", "choose", "join"),

    piece: pep.choice("piece", "chunk"),

    pile: pep.choice("pile", "collection", "hunk", "jumble", "mountain"),

    place: pep.choice("place", "dump", "throw", "put"),

    planned: pep.choice("planned", "prepared", "pending", "impending", "approaching", "brewing",
        "imminent"),

    pleased: pep.choice("pleased", "happy", "comfortable", "excited", ),

    position: pep.choice("position", "spot", "location", "place", "station", ),
      
    pressured: pep.choice("pressured", "pushed", "compelled"), 

    pushing: pep.choice("pushing", "thrusting", ),

    putrid: pep.choice("putrid", "fetid", "rancid", "foul", "malodorous"),

    raced: pep.choice("raced", "ran", "sped"),

    raging: pep.choice("raging", "raving", "stark", "fuming", "storming"),

    realm: pep.choice("realm", "world", "empire", "kingdom"),

    rebellion: pep.choice("rebellion", "uprising", "civil war", "insurgency", "insurrection",
        "revolution"),

    retreat: pep.choice("retreat", "back down", "stop", "withdraw", ),

    retreated: pep.choice("retreated", "backed away", "fell back", "withdrew"),
    
    revolts: pep.choice("revolts", "insurrections", "rebellions", "mutinies", "revolutions"),

    rose: pep.choice("rose", "stood", "got up"),

    rulers: pep.choice("rulers", "kings", "conquerors", "elites", "royals", "ruling classes"),

    sack: pep.choice("sack", "bundle", "satchel", "pouch", "tote", "bag", "duffel"),

    said: pep.choice("said", "declared", "spoke", "emphasized", "remarked", "expressed"),

    savored: pep.choice("savored", "enjoyed", "appreciated"),

    scraggly: pep.choice("scraggly", "unkempt", "dingy", "bedraggled", "scruffy", "tacky"),

    seemed: pep.choice("seemed", "appeared", "looked", ),

    selfImmolate: pep.choice("self-immolate", "die in a fire", "jump off a cliff", "go fuck a cactus"),

    serious: pep.choice("serious", "concerning", "grim", "severe", "grave", "bleak", "ominous", ),

    seriously: pep.choice("seriously", "earnestly", "passionately", "sincerely", "resolutely", "firmly", ),

    shade: pep.choice("shade", "shadow", "relief from heat", "penumbra", "cover"),

    shit: pep.choice("shit", "poop", "crap", "poo poo", "fecal matter"),
  
    shithead: pep.seq(pep.choice("shit", "poop", "crap", "poo poo"), 
                                 pep.choice(" head", " for brains", " face", " toes")),

    shitty: pep.choice("shitty", "poopy", "crappy", "terrible", "gross"),

    short: pep.choice("short", "just short", "shy", "just shy", ),

    sight: pep.choice("sight", "vision", "visage", "spectacle", "countenance", ),

    silence: pep.choice("silence", "quiet", "stillness", "reticence", "dead air", ),

    skies: pep.choice("skies", "horizon"),

    slackJawed: pep.choice("slack-jawed", "absently", "mindlessly", "inattentively", "vacuously",
        "hollowly"),

    sobbed: pep.choice("sobbed", "cried", "blubbered", "whimpered", "wept"),

    sobs: pep.choice("sobs", "tears", "blubbering", "whimpers"),

    somehow: pep.choice("somehow", "right now", "for now", "in one way or another", "in some way",
        "in some such way", ),

    sp2to6: pep.choice("two", "three", "four", "five", "six"),

    speed: pep.choice("speed", "rate", "pace", "velocity"),

    spent: pep.choice("spent", "passed", "wasted", "exhausted", ),

    spoken: pep.choice("said", "spoken", "declared", "pronounced"),

    spotted: pep.choice("spotted", "spied", "glimpsed", "saw", ),

    standstill: pep.choice("standstill", "impasse", "stalemate", "dead end", "deadlock", ),

    stared: pep.choice("stared", "gawked", "looked", "gazed", "goggled", ),

    steaming: pep.choice("steaming", "piping", "hot", "scalding"),

    stifled: pep.choice("stifled", "repressed", "held back", "squelched", "suffocated", "suppressed"),

    stirring: pep.choice("stirring", "brewing", "bubbling", "boiling over", "overflowing", "beginning",
        "rising", "looming", "pending"),

    stop: pep.choice("stop", "halt", "defeat", "block", "kill"),
  
    stopped: pep.choice("stopped", "halted", "defeated", "crushed", "put down"), 

    strangely: pep.choice("strangely", "unusually", "abnormally", "curiously", "peculiarly", ),

    strode: pep.choice("strode", "tromped", "traipsed", "tramped", "walked", "stalked", "paced"),

    stronger: pep.choice("stronger", "athletic", "robust", "tenacious", "tough", "muscular", "powerful"),

    suddenly: pep.choice("suddenly", "abruptly", "without warning", "unanticipatedly", "without cause",
        "precipitously", ),

    swallow: pep.choice("swallow", "eat", "choke on", ),
  
    talk: pep.choice("talk", "speak", "chat"),

    taller: pep.choice("taller", "lanky", "towering", "slender", "gangly", "angular"),

    teetered: pep.choice("teetered", "tottered", "wavered", ),

    terror: pep.choice("terror", "fear", "dread", "horror", "alarm", "panic"),

    thankYou: pep.choice("thank you", "thanks"),

    threw: pep.choice("threw", "tossed", "lobbed", "heaved", "hurled", "pitched"),

    time: pep.choice("time", "instance", "occasion"),

    trash: pep.choice("trash", "refuse", "rubbish", "scraps"),

    tray: pep.choice("tray", "platter", "plate"),

    tomorrow: pep.choice("tomorrow", "later", "next sunrise", "soon", "on the morrow"),

    toothy: pep.choice("toothy", "toothsome", "fanged", "devilish"),

    tough: pep.choice("tough", "hard", "challenging", "grueling", "difficult", ),

    tower: pep.choice("tower", "turret", "belfry", "citadel", "lookout"),

    trouble: pep.choice("trouble", "disaster", "calamity", "catastrophe", "unrest", "discontent", ),

    truest: pep.choice("truest", "most true", "most accurate"),

    uncertainty: pep.choice("uncertainty", "ambiguity", "murky outcomes"),

    unconcerned: pep.choice("unconcerned", "unperturbed", "uninterested"),

    usual: pep.choice("usual", "normal", "average"),

    war: pep.choice("war", "conflict", "civil war", "battle", "combat", "bloodshed"),

    warmly: pep.choice("amicably", "cordially", "kindly", "sincerely", "friendly", "genially"),

    washOver: pep.choice("wash over", "wash through", "flood over", "flood through", "rush through",
        "course over", ),

    whole: pep.choice("whole", "complete", "entire", "full"),

    widely: pep.choice("widely", "ear to ear", "lavishly", "liberally", ),
  
    wield: pep.choice("wield", "carry", "brandish", "possess", "own"),
  
    willingly: pep.choice("willingly", "voluntarily", "unquestionably", "cheerfully", "readily"), 

    wipes: pep.choice("wipes", "cleans", "sponges", "swabs", ),

    wondered: pep.choice("wondered", "pondered", "considered", "mused", "reflected", "mulled"),
  
    worried: pep.choice("worried", "concerned", "bothered", "distressed"),
  
   worrying: pep.choice("worrying", "worrisome", "alarming", "perturbing", "bothersome", "troublesome"),

};