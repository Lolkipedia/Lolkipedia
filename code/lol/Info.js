

module.exports.function = function info (name, inform) {
  var console = require('console')
  var db = require('../lib/db.js')
  let tools = require('lib/tools.js')
  // ENGNAME
  var engname = tools.naming(name, "eng")

  // COUNTER
  var counterset = db.infos[engname]["Counters"]
  console.log(counterset)
  var counters = []
  for (counter in counterset) {
    temp = {
      counter:tools.naming(tools.counterrename(counterset[counter]), "kor"),
      engcounter:tools.counterrename(counterset[counter])
    }
    counters.push(temp)
  }

  // ITEM
  var engitems = db.infos[engname]["Items"]

  var itemnums = []
  for (i in engitems){
    itemnums.push(db.items[engitems[i]])
  }
  console.log(itemnums)

  var items = []
  for (i in itemnums){
    items.push(tools.itemname(itemnums[i]))
  }

  var iteminfo = []
  for (i in items) {
    var temp = {
      item: items[i],
      itemnum: itemnums[i] 
    }
    iteminfo.push(temp)
  }

  // RUNE
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

  // SKILL
  var skills = db.infos[engname]["SkillTree"]
  var skill = []
  for (i=0;i < 3;i++) {
    skill.push(skills[i])
  }

  var temp_dict = {
    "Q":0,
    "W":1,
    "E":2,
    "R":3
  }
  var detailset = tools.skilldetail(engname)

  var skillset = []
  for (i=0;i<3;i++) {
    var temp = {
      skills: skill[i],
      skilldetail: detailset[temp_dict[skill[i]]][1],
      skillid: detailset[temp_dict[skill[i]]][0]
    }
    skillset.push(temp)
  }

  // ETC
  var summary = tools.summary(engname)

  var title = tools.title(engname)

  var lane = db.infos[engname]["Lane"].toLowerCase()

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counters: counters,
    items: iteminfo,
    runeset: runeset,
    statmodset:statmodset,
    skills: skillset,
    summary: summary,
    lane: lane,
    title: title,
    version: version,
  }
}
