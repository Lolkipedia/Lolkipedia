module.exports.function = function info (name) {
  var console = require('console')
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")

  var counters = db.counters[engname]

  for (counter in counters) {
    counters[counter] = tools.naming(counters[counter], "kor")
  }

  var version = tools.version(name)

  var summary = tools.summary(engname)

  return {
    name: name,
    engname: engname,
    counters: counters,
    items: 'b',
    lunes: 'c',
    skills: 'd',
    summary: summary,
    version: version,
  }
}
