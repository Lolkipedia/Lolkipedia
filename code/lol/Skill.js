module.exports.function = function skill (name, skill) {
  const db = require('../lib/db.js')
​  const console = require('console')
  const tools = require('lib/tools.js')

  const engname = tools.naming(name, "eng")
​
  let skill = db.infos[engname]["SkillTree"]
  skill.push("R")
​
  const skillmap = {
    'Q':"0",
    'W':"1",
    'E':"2",
    'R':"3",
  }
​
  const skillbase = ["Q", "W", "E", "R"]
  const detailset = tools.skilldetail(engname)
​
  let cases = []
  for (i in skill){
    let temp = {
      skills: skill[i],
      skillsid: detailset[skillmap[skill[i]]][0]
    }
​   
    cases.push(temp)
  }
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
  spell = db.infos[engname]["Spell"]

  let spells = []
  for (f in spell){
    let temp = {
      spells: spell[f],
      korspells: runedict[spell[f]]["name"],
    }
    spells.push(temp)
  }

  const version = tools.version()
​
  return {
    name: name,
    engname: engname,
    skills: cases,
    skillset: skillset,
    spells: spells,
    version: version,
  }
}