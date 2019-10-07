module.exports.function = function info (name) {
  var db = require('../lib/db.js').info

  return {
    name: name,
    counters: 'a',
    items: 'b',
    lunes: 'c',
    skills: 'd'
  }
}
