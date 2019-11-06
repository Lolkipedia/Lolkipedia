module.exports.function = function tier (summonername, tierinput) {
  const db = require('../lib/db.js')
  const console = require('console')
  const tools = require('lib/tools.js')
  const http = require('http')
  const config = require('config')


  let result = {}

  const summoner_url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + '?api_key=' + config.get('APIKEY')  
  try {
    var summonerid = http.getUrl(summoner_url, {format:"json", cacheTime: 0}).id
  } catch(e) {
    var status = '아이디 잘못 입력'
    console.log(status)
    result['status'] = status
    return result
  }
  

  const league_url = 'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerid + '?api_key=' + config.get('APIKEY')
  try {
    var response = http.getUrl(league_url, {format:"json"})
  } catch (e) {
    var status = '티어존재x'
    result.status = status
    return result
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
  // console.log(tierset)


  result['summonername'] = summonername
  result['tierset'] = tierset
  result['status'] = '200'

  // console.log(result)

  return result
}
