import uniqueRandomArray from 'unique-random-array'
const peoplesNames = require('./peoples-names.json')

const mainExport = {
  all: peoplesNames,
  random: uniqueRandomArray(peoplesNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
