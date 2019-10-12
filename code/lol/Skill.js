  console = require('console')

  module.exports.function = function skill (name, skill) {
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  console.log(engname)

  var skills = db.infos[engname]["skill_tree"]
  var skill = []
  for (i=0;i < 3;i++) {
    skill.push(skills[i])
  }

  var skillbase = ["Q", "W", "E", "R"]
  var detailset = tools.skilldetail(engname)
  console.log(detailset)
  var skillset = []
  for (i in skillbase) {
    var temp = {
      skills: skillbase[i],
      skilldetail: detailset[i][1],
      skillid: detailset[i][0]
    }
    skillset.push(temp)
  }
  console.log(skillset)


  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    skills: skill,
    skillset: skillset,
    version: version
  }
}
