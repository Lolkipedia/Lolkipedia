module.exports.function = function tier (summonername, tierinput) {
  var db = require('../lib/db.js')
  var console = require('console')
  let tools = require('lib/tools.js')
  var http = require('http')
  var summonerkey = tools.summonerkey(summonername)

  try {
    console.log('pp')
    var summonerid = summonerkey['id']
    console.log('pp')
  } catch (e) {
    console.log(e)
  }
  
  // var accountid = summonerkey['accountId']
  console.log(summonerid)

  var fail = require('fail')
  var config = require('config')
  var console = require('console')
  var url = 'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summnoerid + '?api_key=' + config.get('APIKEY')

  try {
    console.log('pp')
    var response = http.getUrl(url, {format:"json"})
    console.log('pp')
  } catch (e) {
    console.log(e)
    console.log('pp')
  }


  var tierset = []
  for(i in response) {
    var queuetype = response[i]["queueType"]
    var tier = response[i]['tier']
    var rank = response[i]['rank']

    var temp = {
      queuetype: queuetype,
      tier: tier,
      rank: rank
    }

    tierset.push(temp)
  }
  console.log(tierset)
  tierset['summonername'] = summonername

  console.log(tierset)

  return tierset
}
