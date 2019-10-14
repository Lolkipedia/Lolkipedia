module.exports.function = function rune (name, rune) {
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")

  var version = tools.version(name)

  var runesets = db.infos[engname]["Runes"]
  var runeset = []
  for (i in runesets) {
    var temp = {
      runecat: runesets[i][0],
      runename: runesets[i][1]
    }
    runeset.push(temp)
  }

  var statmods = db.infos[engname]["StatMods"]


  return {
    name: name,
    engname: engname,
    runeset: runeset,
    statmods: statmods,
    version: version,
  }
}
