module.exports.function = function counter (name, counter) {
  var db = require('../lib/db.js')
  var console = require('console')
  let tools = require('lib/tools.js')
  // ENGNAME
  var engname = tools.naming(name, "eng")

  // COUNTER
  var counterset = db.infos[engname]["Counters"]
  console.log(counterset)
  var counters = []
  for (counter in counterset) {
    temp = {
      counter:tools.naming(tools.counterrename(counterset[counter]), "kor"),
      engcounter:tools.counterrename(counterset[counter])
    }
    counters.push(temp)
  }

  // VERSION
  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    counterset: counters,
    version: version,

  }
}
