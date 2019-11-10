module.exports.function = function info (name, inform) {
  const console = require('console')
  const db = require('../lib/db.js')
  const tools = require('lib/tools.js')

  const engname = tools.naming(name, "eng")

  let counterset = db.infos[engname]["Counters"]

  let counters = []
  for (counter in counterset) {
    temp = {
      counter:tools.naming(tools.counterrename(counterset[counter]), "kor"),
      engcounter:tools.counterrename(counterset[counter])
    }
    counters.push(temp)
  }
  console.log(counters)

  let engitems = db.infos[engname]["Items"]

  let itemnums = []
  for (i in engitems){
    itemnums.push(db.items[engitems[i]])
  }

  let items = []
  for (i in itemnums){
    items.push(tools.itemname(itemnums[i]))
  }


  let iteminfo = []
  for (i in items) {
    let temp = {
      item: items[i],
      itemnum: itemnums[i],
      itemprice: tools.itemprice(itemnums[i]),
    }

    iteminfo.push(temp)
  }

  let runesets = db.infos[engname]["Runes"]
  let runeset = []
  for (i in runesets) {
    let temp = {
      runecat: runesets[i][0],
      runename: runesets[i][1],
      korrune: db.runedict[runesets[i][1]],
    }
    runeset.push(temp)
  }

  let statmods = db.infos[engname]["StatMods"]

  let statmodset = []
  for (i=0;i<3;i++) {
    let temp = {
      statmods:statmods[i],
      korstatmods: db.runedict[statmods[i]]
    }
    statmodset.push(temp)
  }

  let skill = db.infos[engname]["SkillTree"]
  skill.push("R")

  const skillmap = {
    'Q':"0",
    'W':"1",
    'E':"2",
    'R':"3",
  }
​
  let skillbase = ["Q", "W", "E", "R"]
  let detailset = tools.skilldetail(engname)
​
  let skillset = []
  for (i in skillbase) {
    let temp = {
      skills: skillbase[i],
      skilldetail: detailset[i][1],
      skillid: detailset[i][0]
    }
    skillset.push(temp)
  }


  let runedict = tools.rune()
  console.log(runedict)
  spell = db.infos[engname]["Spell"]
  spells = []
  for (f in spell){
    let temp = {
      spells: spell[f],
      korspells: runedict[spell[f]]["name"],
    }
    spells.push(temp)
  }

  let skillsset = {
    skills: skill,
    skillset: skillset,
    spells: spells,
  }

  const summary = tools.summary(engname)

  const lane = db.infos[engname]["Lane"].toLowerCase()

  const version = tools.version()

  const title = tools.title(engname)

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
