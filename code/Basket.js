
var console = require('console')
module.exports.function = function basket (name, target) {
  var db = require('./lib/db.js')
  var image = db.bio[name]['url']
  var skill = db.bio[name]['skill']['skill1']['url']
  console.debug(skill)
  console.log(image)


  return {
    outputname: image,
    outputskill: skill
  }
}
