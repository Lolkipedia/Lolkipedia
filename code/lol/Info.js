module.exports.function = function info (name, inform) {
  var console = require('console')
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  // console.debug(engname)

  var counterset = db.infos[engname]["counters"]
  // var engcounters = db.info[engname]["counters"]
  // console.log(counters)

  var counters = []
  for (counter in counterset) {
    temp = {
      counter:tools.naming(counterset[counter], "kor"),
      engcounter:counterset[counter]
    }
    counters.push(temp)
  }
  console.log(counters)
  var engitems = db.infos[engname]["items"]

  var itemnums = []
  for (i in engitems){
    itemnums.push(db.item[engitems[i]])
  }
  // console.log(itemnums)

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
  console.log(statmods)
  var statmodset = []
  for (i=0;i<3;i++) {
    var temp = {
      statmods:statmods[i],
      korstatmods: db.runedict[statmods[i]]
    }
    console.log(statmods[i]),
    statmodset.push(temp)
  }
  console.log(statmodset)



  var skills = db.infos[engname]["skill_tree"]
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
  console.log(skillset)

  var summary = tools.summary(engname)

  var title = tools.title(engname)

  var lane = db.infos[engname]["line"]

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counters: counters,
    // engcounters: engcounters,
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
