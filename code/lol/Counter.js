module.exports.function = function counter (name, counter) {
  var db = require('../lib/db.js')
  

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  const engcounters = db.counters[engname]

  var counter = []

  for (i in engcounters) {
    var temp_name = tools.naming(engcounters[i], "kor")
    counter.push(temp_name)
  }

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counters: counter,
    engcounters: engcounters,
    version: version,

  }
}
