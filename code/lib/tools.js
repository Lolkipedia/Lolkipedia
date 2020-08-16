var http = require('http')
const na ="https://ddragon.leagueoflegends.com/realms/na.json" 
// const ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["champion"]
const ver = "10.12.1"
// const item_ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["item"]

let url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/item.json")
const items = http.getUrl(url, {format:"json", cacheTime: 0}).data

url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion.json")
const champ = http.getUrl(url, {format:"json", cacheTime: 0}).data

var console = require('console')

module.exports.naming = function (name, target) {
  if (target === "eng") {
    for (idx in champ){
      if (champ[idx]["name"] == name){
        var outname = champ[idx]["id"]
        break
        }
    } 
  } else {
      for (idx in champ){
        if (champ[idx]["id"] == name){
          var outname = champ[idx]["name"]
          break
          }
      } 
  }
  
  return outname
}


module.exports.counterrename = function (name) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/en_US/champion.json")
  var search = http.getUrl(url, {format:"json", cacheTime: 0}).data

  for (idx in search){
    if (search[idx]["name"] == name){
      var outname = search[idx]["id"]
    }
  }
  
  return outname
}


module.exports.skilldetail = function (engname) {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/champion/", engname ,".json")  
  const response = http.getUrl(url, {format:"json", cacheTime: 0})
  const search = response["data"][engname]["spells"]

  var result = []
  for (i=0;i<4;i++) {
    result.push([search[i]["id"] ,search[i]["description"]])
  }

  return result
}


module.exports.version = function () {

  return ver
}


module.exports.subitemnum = function (itemnum) {
  var subitems = items[itemnum]["from"]

  var sub = []
  for (i in subitems){
    sub.push(subitems[i])
  }
  
  return sub
}


module.exports.subitem = function (subitemnums) {
  var subitems = []
  for (i in subitemnums){
    subitems.push(items[subitemnums[i]]["name"])
  }

  return subitems
}


module.exports.itemname = function (itemnum) {
  var itemname = items[itemnum]["name"]

  return itemname
}


module.exports.itemprice = function (itemnum) {
  var itemprice = items[itemnum]["gold"]["total"]

  return itemprice
}


module.exports.summary = function (engname) {
  var summary = champ[engname]["blurb"]

  return summary
}


module.exports.title = function (name) {
  var title = champ[name]["title"]

  return title
}


module.exports.rune = function () {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/summoner.json")
  var rune = http.getUrl(url, {format:"json", cacheTime: 0}).data

  return rune
}
