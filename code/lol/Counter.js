module.exports.function = function counter (name, counter) {
  const db = require('../lib/db.js')
  const console = require('console')
  const tools = require('lib/tools.js')
  
  const engname = tools.naming(name, "eng")
  let counterset = db.infos[engname]["Counters"]

  let counters = []
  for (counter in counterset) {
    let temp = {
      counter:tools.naming(tools.counterrename(counterset[counter]), "kor"),
      engcounter:tools.counterrename(counterset[counter])
    }
    console.log(temp)
    counters.push(temp)
  }
  console.log(counters)


  const version = tools.version()

  return {
    name: name,
    engname: engname,
    counterset: counters,
    version: version,
  }
}
