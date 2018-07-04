var pep = require("apep");

module.exports = {
  must: pep.weightedChoice([[0.5, "must"], [0.25, "have to"], [0.25, "need to"]]),
  mcName: pep.choice("Urnuthun", "Tralroloth", "Unorez", "Sinoth", 
                     "Vog'thun", "Bag'thanniud", "Onnoch", "Geglod", "Toth'tekis", "Anez")
  
};
