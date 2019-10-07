module.exports.function = function counter (name, counter) {
  var db = require('../lib/db.js')

  return {
    name: name,
    counters: counter
  }
}
