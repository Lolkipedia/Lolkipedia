module.exports.function = function item (name, item) {
  const db = require('../lib/db.js')
  const tools = require('lib/tools.js')
  const console = require('console')

  const engname = tools.naming(name, "eng")

  const engitems = db.infos[engname]["Items"]

  let itemnums = []
  for (i in engitems){
    itemnums.push(db.items[engitems[i]])
  }


  let items = []
  for (i in itemnums){
    items.push(tools.itemname(itemnums[i]))
  }


  let subitemnums = []
  for (i in items){
    subitemnums.push(tools.subitemnum(itemnums[i]))
  }


  let subitems = []
  for (i in items){
    subitems.push(tools.subitem(subitemnums[i]))
  }


  let subitemset = []
  for (i in items){
    let temp_list = []
    for (j in subitems[i]){
      let temp = {
        subitems: subitems[i][j],
        subitemnum: subitemnums[i][j],
        itemprice: tools.itemprice(subitemnums[i][j])
      }
      temp_list.push(temp)
      }
    subitemset.push(temp_list)
  }


  let itemset = []
  for (i in items){
    let temp = {
      items: items[i],
      itemnums: itemnums[i],
      subitemset: subitemset[i],
      itemprice: tools.itemprice(itemnums[i])
    }
    itemset.push(temp)
  }


  const startitemset = db.infos[engname]["StartItems"]
  let startitems = []
  for (i in startitemset) {
    let temp = {
      korstartitems: tools.itemname(db.items[startitemset[i]]),
      startitems: startitemset[i],
      startitemnum: db.items[startitemset[i]],
      itemprice: tools.itemprice(db.items[startitemset[i]]),
    }
    startitems.push(temp)
  }

  const version = tools.version()

  return {
    name: name,
    engname: engname,
    items: items,
    itemnums: itemnums,
    itemset: itemset,
    startitems: startitems,
    version: version,
    }
}
