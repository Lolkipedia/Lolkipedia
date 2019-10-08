module.exports.function = function info (name) {
  var console = require('console')
  var db = require('../lib/db.js').info

  let tools = require('lib/tools.js')
  var engname = tools.kor2eng(name)

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counters: 'a',
    items: 'b',
    lunes: 'c',
    skills: 'd',
    version: version,
  }
}
