module.exports.function = function tier (summonername, tierinput) {
  var db = require('../lib/db.js')
  var console = require('console')
  let tools = require('lib/tools.js')
  var summonerkey = tools.summonerkey(summonername)

  var summonerid = summonerkey['id']
  // var accountid = summonerkey['accountId']
  console.log(summonerid)

  var tierset = tools.findtier(summonerid)
  console.log(tierset)

  // var result = []
  // for(i in response) {
  //   var queuetype = response[0]["queueType"]
  //   var tier = response[0]['tier']
  //   var rank = response[0]['rank']

  //   var temp = {
  //     queuetype: queuetype,
  //     tier: tier,
  //     rank: rank
  //   }

  //   result.push(temp)
  // }
  tierset['summonername'] = summonername

  return tierset
}
