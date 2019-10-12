module.exports.function = function info (name, inform) {
  var console = require('console')
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  // console.debug(engname)

  var counters = db.infos[engname]["counters"]
  // console.log(counters)

  for (counter in counters) {
    counters[counter] = tools.naming(counters[counter], "kor")
  }

  var engitems = db.infos[engname]["items"]

  var itemnums = []
  for (i in engitems){
    itemnums.push(db.item[engitems[i]])
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
  console.log(detailset)

  var skillset = []
  for (i=0;i<3;i++) {
    console.log(i)
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
  console.log(title)

  var lane = db.infos[engname]["line"]

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counters: counters,
    items: iteminfo,
    lunes: 'c',
    skills: skillset,
    summary: summary,
    lane: lane,
    title: title,
    version: version,
  }
}
