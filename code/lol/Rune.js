module.exports.function = function rune (name, rune) {
  const db = require('../lib/db.js')
  const tools = require('lib/tools.js')
  const console = require('console')
  const engname = tools.naming(name, "eng")
  const version = tools.version()

  const runesets = db.infos[engname]["Runes"]

  let runeset = []
  for (i in runesets) {
    let temp1 = {
      runecat: runesets[i][0],
      korrunecat: db.runedict[runesets[i][0]],
      runename: runesets[i][1],
      korrune: db.runedict[runesets[i][1]],
    }
    runeset.push(temp1)
  }
  
  const statmods = db.infos[engname]["StatMods"]
  let statmodset = []
  for (i=0;i<3;i++) {
    let temp2 = {
      statmods:statmods[i],
      korstatmods: db.runedict[statmods[i]]
    }
    statmodset.push(temp2)
  }

  return {
    name: name,
    engname: engname,
    runeset: runeset,
    statmodset: statmodset,
    version: version,
  }
}
