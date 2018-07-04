var pep = require("apep");

module.exports = {
  evilDoer: pep.choice("She's", "He's", "They're"),
  subject: pep.choice('CPU', 'HTML', 'GUI', 'IPv6', 'file system', 'ACL'),
  somethingBad: pep.choice('on fire', 'doxxed', 'SQL injected', 'double encrypted'),
  doingSomthingBad: pep.choice('pinging', 'ROT13ing', 'seg faulting', 'doxxing', 'DDOSing'),
  target: pep.choice('NSA', 'CIA', 'FBI', 'mainframe', 'shell', 'cloud'),
  exclaimation: pep.seq(pep.choice('BLARK', 'ARG', 'BARF', 'GROK', 'ACK'), pep.many1('!'))
};
