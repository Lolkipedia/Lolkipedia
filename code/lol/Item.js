module.exports.function = function item (name, item) {
  var db = require('../lib/db.js')

  return {
    name: name,
    items: item}
}
