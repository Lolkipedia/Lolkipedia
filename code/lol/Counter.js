module.exports.function = function counter (name, counter) {
  var db = require('../lib/db.js')
  var console = require('console')
  

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")
  const engcounters = db.infos[engname]["counters"]

  var counters = []

  for (i in engcounters) {
    var temp = {
      counter: tools.naming(engcounters[i], "kor"),
      engcounter: engcounters[i]
    }
    counters.push(temp)
  }

  console.log(counters)

  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counterset: counters,
    version: version,

  }
}
