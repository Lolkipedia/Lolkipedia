module.exports.function = function rune (name, rune) {
  const db = require('../lib/db.js')
  const tools = require('lib/tools.js')
  const engname = tools.naming(name, "eng")
  const version = tools.version(name)

  var runesets = db.infos[engname]["Runes"]

  var runeset = []
  for (i in runesets) {
    var temp1 = {
      runecat: runesets[i][0],
      korrunecat: db.runedict[runesets[i][0]],
      runename: runesets[i][1],
      korrune: db.runedict[runesets[i][1]],
    }
    runeset.push(temp1)
  }
  const console = require('console')
  console.log(runeset)

  var statmods = db.infos[engname]["StatMods"]
  console.log(statmods)
  var statmodset = []
  for (i=0;i<3;i++) {
    var temp2 = {
      statmods:statmods[i],
      korstatmods: db.runedict[statmods[i]]
    }
    console.log(statmods[i]),
    statmodset.push(temp2)
  }
  console.log(statmodset)

  return {
    name: name,
    engname: engname,
    runeset: runeset,
    statmodset: statmodset,
    version: version,
  }
}
