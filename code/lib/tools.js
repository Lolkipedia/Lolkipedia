var http = require('http')

module.exports.kor2eng = function (name) {
  var url = "http://ddragon.leagueoflegends.com/cdn/9.19.1/data/ko_KR/champion.json"

  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"]

  for (idx in search){
    if (search[idx]["name"] == name){
      var outname = search[idx]["id"]
      break
    }
  }
  return outname
}

module.exports.eng2kor = function (name) {
  const url = "http://ddragon.leagueoflegends.com/cdn/9.19.1/data/ko_KR/champion.json"

  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  var search = response["data"] 

  for (idx in search){
    if (search[idx]["id"] == name){
      var outname = search[idx]["name"]
      break
    }
  }
  return outname
}

module.exports.version = function (name) {
  const url = "http://ddragon.leagueoflegends.com/cdn/9.19.1/data/ko_KR/item.json"

  var response = http.getUrl(url, {format:"json", cacheTime: 0});
  const version = response["version"]


  return version
}