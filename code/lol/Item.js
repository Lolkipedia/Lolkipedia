module.exports.function = function item (name, item) {
  var db = require('../lib/db.js')
  let tools = require('lib/tools.js')

  var console = require('console')

  var engname = tools.naming(name, "eng")
  console.log(engname)

  var engitems = db.infos[engname]["items"]
  // db.~~

  var itemnums = []
  for (i in engitems){
    itemnums.push(db.item[engitems[i]])
  }
  console.log(itemnums)

  var items = []
  for (i in itemnums){
    items.push(tools.itemname(itemnums[i]))
  }
  console.log(items)

  var subitemnums = []
  for (i in items){
    subitemnums.push(tools.subitemnum(itemnums[i]))
  }
  console.log(subitemnums)

  var subitems = []
  for (i in items){
    subitems.push(tools.subitem(subitemnums[i]))
  }
  console.log(subitems)

  var subitemset = []
  for (i in items){
    var temp_list = []
    for (j in subitems[i]){
      var temp = {
        subitems: subitems[i][j],
        subitemnum: subitemnums[i][j]
      }
      temp_list.push(temp)
      console.log(temp_list)
      }
    subitemset.push(temp_list)
  }

  // var subitemset = subitemstructure
  // for (i in items){
  //   var temp = {
  //     subitems: subitems[i],
  //     subitemnum: subitemnums[i]
  //   }
  //   subitemset.push(temp)
  // }
  console.log(subitemset)

  var itemset = []
  for (i in items){
    var temp = {
      items: items[i],
      itemnums: itemnums[i],
      subitemset: subitemset[i]
    }
    itemset.push(temp)
  }
  console.log(itemset)
  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    items: items,
    itemnums: itemnums,
    itemset: itemset,
    version: version,
    }
}
