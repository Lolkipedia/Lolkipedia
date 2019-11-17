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
    let status = '아이디 잘못 입력'
    result['status'] = status
    return result
  }

  const league_url = 'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summonerid + '?api_key=' + config.get('APIKEY')
  try {
    const response = http.getUrl(league_url, {format:"json"})
  } catch (e) {
    status = '티어존재x'
    return result
  }

  let tierset = []
  for(i in response) {
    let queuetype = response[i]["queueType"]
    let tier = response[i]['tier']
    let rank = response[i]['rank']

    let temp = {
      queuetype: queuetype,
      tier: tier,
      rank: rank
    }

    tierset.push(temp)
  }

  result['summonername'] = summonername
  result['tierset'] = tierset
  result['status'] = '전적 검색 결과입니다.'

  return result
}
