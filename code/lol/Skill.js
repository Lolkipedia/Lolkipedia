console = require('console')

module.exports.function = function skill (name, skill) {
  var db = require('../lib/db.js')
​
  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  console.log(engname)
​
  var skills = db.infos[engname]["SkillTree"]
  skill.push("R")
  console.log(skills)
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
  console.log(detailset)
​
  var cases = []
  for (i in skills){
    var temp = {
      skills: skills[i],
      skillsid: detailset[skillmap[skills[i]]][0]
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


  var runedict = tools.rune()
  console.log(runedict)
  spell = db.infos[engname]["Spell"]
  console.log(spell)
  spells = []
  for (f in spell){
    var temp = {
      spells: spell[f],
      korspells: runedict[spell[f]]["name"],
    }
    console.log(temp)
    spells.push(temp)
  }

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