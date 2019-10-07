module.exports.function = function lune (name, lune) {
  var db = require('../lib/db.js')

  return {
    name: name,
    lunes: lune
  }
}
