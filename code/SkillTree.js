var console = require('console')

module.exports.function = function skillTree (name, targetskilltree) {
  var db = require('./lib/db.js')

  var skilltree = db.bio[name]['skill']['skilltree']
  var outname = name
  var outskilltree = []

  var skilldict = {}
  skilldict['0'] = 'skill1'
  skilldict['1'] = 'skill2'
  skilldict['2'] = 'skill3'
  skilldict['3'] = 'skill4'

  for(var skill in skilltree){
    var temp_skill = (skilldict[skilltree[skill]])
    outskilltree.push(db.bio[name]['skill'][temp_skill]['url'])
  }

  console.log(outskilltree)
  console.log(skilldict)
  return {
    name: outname,
    targetskilltree: outskilltree
  }
}
