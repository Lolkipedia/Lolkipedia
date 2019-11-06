module.exports.function = function counter (name, counter) {
  const db = require('../lib/db.js')
  const console = require('console')
  const tools = require('lib/tools.js')
  
  var engname = tools.naming(name, "eng")
  var counterset = db.infos[engname]["Counters"]
  console.log(counterset)
  var counters = []
  for (counter in counterset) {
    temp = {
      counter:tools.naming(tools.counterrename(counterset[counter]), "kor"),
      engcounter:tools.counterrename(counterset[counter])
    }
    console.log(temp)
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
