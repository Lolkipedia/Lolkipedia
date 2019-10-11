module.exports.function = function info (name, inform) {
  var console = require('console')
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  console.debug(engname)

  var counters = db.counters[engname]
  // console.log(counters)

  for (counter in counters) {
    counters[counter] = tools.naming(counters[counter], "kor")
  }

  var title = tools.title(engname)
  console.log(title)

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
    title: title,
    version: version,
  }
}
