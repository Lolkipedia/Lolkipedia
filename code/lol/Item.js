module.exports.function = function item (name, item) {
  var db = require('lib/db.js')

  var console = require('console')

  let tools = require('lib/tools.js')
  var engname = tools.naming(name, "eng")

  var items = ['칠흑의 양날 도끼', "망자의 갑옷", "스테락의 도전"]

  var version = tools.version(name)

  var subitems = {
    items: null,
    subitems: []
  }
  subitems["items"] = items
  console.log(subitems)

  for (sub in items){
    subitems["subitems"].push(tools.subitem(items[sub]))
    console.log(subitems)
  };

  return {
    name: name,
    engname: engname,
    items: items,
    subitems: subitems,
    version: version,
    }
}
