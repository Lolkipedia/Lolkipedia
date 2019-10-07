module.exports.function = function skill (name, skill) {
  var db = require('../lib/db.js')

  return {
    name: name,
    skills: skill
  }
}
