module.exports.function = function info (name, inform) {
  const console = require('console')
  const db = require('../lib/db.js')
  const tools = require('lib/tools.js')

  const engname = tools.naming(name, "eng")

  var counterset = db.infos[engname]["Counters"]

  var counters = []
  for (counter in counterset) {
    temp = {
      counter:tools.naming(tools.counterrename(counterset[counter]), "kor"),
      engcounter:tools.counterrename(counterset[counter])
    }
    counters.push(temp)
  }
  console.log(counters)

  var engitems = db.infos[engname]["Items"]

  var itemnums = []
  for (i in engitems){
    itemnums.push(db.items[engitems[i]])
  }

  var items = []
  for (i in itemnums){
    items.push(tools.itemname(itemnums[i]))
  }


  var iteminfo = []
  for (i in items) {
    var temp = {
      item: items[i],
      itemnum: itemnums[i],
      itemprice: tools.itemprice(itemnums[i]),
    }

    iteminfo.push(temp)
  }

  var runesets = db.infos[engname]["Runes"]
  var runeset = []
  for (i in runesets) {
    var temp = {
      runecat: runesets[i][0],
      runename: runesets[i][1],
      korrune: db.runedict[runesets[i][1]],
    }
    runeset.push(temp)
  }

  var statmods = db.infos[engname]["StatMods"]

  var statmodset = []
  for (i=0;i<3;i++) {
    var temp = {
      statmods:statmods[i],
      korstatmods: db.runedict[statmods[i]]
    }
    statmodset.push(temp)
  }

  var detailset = tools.skilldetail(engname)

  var skill = db.infos[engname]["SkillTree"]
  skill.push("R")

  const skillmap = {
    'Q':"0",
    'W':"1",
    'E':"2",
    'R':"3",
  }
​
  var skillbase = ["Q", "W", "E", "R"]
  var detailset = tools.skilldetail(engname)
​
  var skillset = []
  for (i in skillbase) {
    var temp = {
      skills: skillbase[i],
      skilldetail: detailset[i][1],
      skillid: detailset[i][0]
    }
    skillset.push(temp)
  }


  var runedict = tools.rune()
  console.log(runedict)
  spell = db.infos[engname]["Spell"]
  spells = []
  for (f in spell){
    var temp = {
      spells: spell[f],
      korspells: runedict[spell[f]]["name"],
    }
    spells.push(temp)
  }

  var skillsset = {
    skills: skill,
    skillset: skillset,
    spells: spells,
  }

  var summary = tools.summary(engname)

  var lane = db.infos[engname]["Lane"].toLowerCase()

  var version = tools.version()

  var title = tools.title(engname)

  return {
    name: name,
    engname: engname,
    counters: counters,
    items: iteminfo,
    runeset: runeset,
    statmodset:statmodset,
    skills: skillsset,
    summary: summary,
    lane: lane,
    title: title,
    version: version,
  }
}
