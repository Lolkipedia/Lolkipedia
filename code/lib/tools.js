var http = require('http')
const na ="https://ddragon.leagueoflegends.com/realms/na.json" 
// const ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["champion"]
const ver = '9.20.1'
// const item_ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["item"]

module.exports.naming = function (name, target) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  if (target == "eng") {
    for (idx in search){
    if (search[idx]["name"] == name){
      var outname = search[idx]["id"]
      break
      }
    } 
  } else {
    for (idx in search){
    if (search[idx]["id"] == name){
      var outname = search[idx]["name"]
      break
      }
    } 
  }
  
  return outname
}
module.exports.counterrename = function (name) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/en_US/champion.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  for (idx in search){
    if (search[idx]["name"] == name){
      var outname = search[idx]["id"]
    }
    }
  
  return outname
}

module.exports.skilldetail = function (engname) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion/", engname ,".json")  
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"][engname]["spells"]

  var result = []
  for (i=0;i<4;i++) {
    result.push([search[i]["id"] ,search[i]["description"]])
  }

  return result
}

module.exports.version = function (name) {

  return ver
}


module.exports.subitemnum = function (itemnum) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/item.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  const items = response["data"]

  var subitems = items[itemnum]["from"]

  var sub = []
  for (i in subitems){
    sub.push(subitems[i])
  }
  
  return sub
}


module.exports.subitem = function (subitemnums) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/item.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  const items = response["data"]

  var subitems = []
  for (i in subitemnums){
    subitems.push(items[subitemnums[i]]["name"])
  }

  return subitems
}


module.exports.itemname = function (itemnum) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/item.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  const items = response["data"]

  var itemname = items[itemnum]["name"]

  return itemname
}


module.exports.itemprice = function (itemnum) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/item.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  const items = response["data"]

  var itemprice = items[itemnum]["gold"]["total"]

  return itemprice
}


module.exports.summary = function (engname) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  var summary = search[engname]["blurb"]

  return summary
}


module.exports.title = function (name) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  var title = search[name]["title"]

  return title
}


module.exports.rune = function () {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/summoner.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  return search
}



// module.exports.summonerkey = function(summonername) {
//   var console = require('console')
//   var config = require('config')
//   var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + '?api_key=' + config.get('APIKEY')
//   try {
//     var response = http.getUrl(url, {format:"json", cacheTime: 0})
//   } catch(e) {
//     console.log(e)
//     console.error('fail')
//   }
  
//   return response
// }


// module.exports.findtier = function(summnoerid) {
//   var fail = require('fail')
//   var config = require('config')
//   var console = require('console')
//   var url = 'https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summnoerid + '?api_key=' + config.get('APIKEY')
//   try {
//     var response = http.getUrl(url, {format:"json"})
//   } catch (e) {
//     console.log(e)
//     console.error('response')
//   }
//   // var response = http.getUrl(url, {format:"json"})


//   // var result = []
//   // for(i in response) {
//   //   var queuetype = response[0]["queueType"]
//   //   var tier = response[0]['tier']
//   //   var rank = response[0]['rank']

//   //   var temp = {
//   //     queuetype: queuetype,
//   //     tier: tier,
//   //     rank: rank
//   //   }

//   //   result.push(temp)
//   // }

//   return response
// }