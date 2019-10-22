module.exports.function = function skill (name, skill) {
  var db = require('../lib/db.js')
  let tools = require('lib/tools.js')
  var console = require('console')
  // ENGNAME
  var engname = tools.naming(name, "eng")

  // SKILL
  var skills = db.infos[engname]["SkillTree"]
  var skill = []
  for (i in skills) {
    skill.push(skills[i])
  }
  skill.push('R')
​
  const skillmap = {
    'Q':"0",
    'W':"1",
    'E':"2",
    'R':"3",
  }
​
​
  var skillbase = ["Q", "W", "E", "R"]
  var detailset = tools.skilldetail(engname)
​
  var cases = []
  for (i in skill){
    var temp = {
      skills: skill[i],
      skillsid: detailset[skillmap[skill[i]]][0]
    }
​
    cases.push(temp)
  }
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

  var spelldict = tools.spell()
  spell = db.infos[engname]["Spell"]
  spells = []
  for (f in spell){
    var temp = {
      spells: spell[f],
      korspells: spelldict[spell[f]]["name"]
    }

    spells.push(temp)
  }

  // VERSION
  var version = tools.version(name)
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