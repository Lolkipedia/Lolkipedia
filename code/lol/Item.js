module.exports.function = function item (name, item) {
  var db = require('../lib/db.js')
  let tools = require('lib/tools.js')

  var console = require('console')

  var engname = tools.naming(name, "eng")
  console.log(engname)

  var engitems = db.infos[engname]["Items"]
  // db.~~


  var itemnums = []
  for (i in engitems){
    itemnums.push(db.items[engitems[i]])
  }


  var items = []
  for (i in itemnums){
    items.push(tools.itemname(itemnums[i]))
  }


  var subitemnums = []
  for (i in items){
    subitemnums.push(tools.subitemnum(itemnums[i]))
  }


  var subitems = []
  for (i in items){
    subitems.push(tools.subitem(subitemnums[i]))
  }


  var subitemset = []
  for (i in items){
    var temp_list = []
    for (j in subitems[i]){
      var temp = {
        subitems: subitems[i][j],
        subitemnum: subitemnums[i][j]
      }
      temp_list.push(temp)
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

  var itemset = []
  for (i in items){
    var temp = {
      items: items[i],
      itemnums: itemnums[i],
      subitemset: subitemset[i]
    }
    itemset.push(temp)
  }

  var startitemset = db.infos[engname]["StartItems"]
  console.log(startitemset)
  var startitems = []
  for (i in startitemset) {
    var temp = {
      korstartitems: tools.itemname(db.items[startitemset[i]]),
      startitems: startitemset[i],
      startitemnum: db.items[startitemset[i]]
    }
    console.log(temp)
    startitems.push(temp)
  }

  console.log(startitems)


  var version = tools.version(name)

  return {
    name: name,
    engname: engname,
    items: items,
    itemnums: itemnums,
    itemset: itemset,
    startitems: startitems,
    // startitems: '',
    version: version,
    }
}
