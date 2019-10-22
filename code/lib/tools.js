var http = require('http')
const na ="https://ddragon.leagueoflegends.com/realms/na.json" 
// const ver = http.getUrl(na, {format:"json", cacheTime: 0})["n"]["champion"]
const ver = '9.19.1'
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

  var price = items[itemnum]["gold"]["total"]

  return price
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


module.exports.spell = function () {
  const url = "http://ddragon.leagueoflegends.com/cdn/".concat(ver,"/data/ko_KR/summoner.json")
  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  return search
}


