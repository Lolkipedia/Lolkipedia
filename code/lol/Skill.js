  console = require('console')
​
  module.exports.function = function skill (name, skill) {
  var db = require('../lib/db.js')
​
  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  console.log(engname)
​
  var skills = db.infos[engname]["skill_tree"]
  var skill = []
  for (i in skills) {
    skill.push(skills[i])
  }
  skill.push('R')
  console.log(skill)
​
  const skillmap = {
    'Q':"0",
    'W':"1",
    'E':"2",
    'R':"3",
  }
​
​
​
  var skillbase = ["Q", "W", "E", "R"]
  var detailset = tools.skilldetail(engname)
  console.log(detailset)
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
  console.log(cases)
​
  var skillset = []
  for (i in skillbase) {
    var temp = {
      skills: skillbase[i],
      skilldetail: detailset[i][1],
      skillsid: detailset[i][0]
    }
    skillset.push(temp)
  }
  console.log(skillset)
​
​
  var version = tools.version(name)
​
  return {
    name: name,
    engname: engname,
    skills: cases,
    skillset: skillset,
    version: version
  }
}