module.exports.function = function item (name, item) {
  var db = require('../lib/db.js')

  let tools = require('lib/tools.js')
  var engname = tools.kor2eng(name)

  return {
    name: name,
    engname: engname,
    items: item}
}
