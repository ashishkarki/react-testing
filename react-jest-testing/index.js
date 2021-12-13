const googleSearch = require('./script/script')
const {
  getPeopleAsync,
  getPeoplePromise,
} = require('./script-async/script-async')

console.log('TESING THE GOOGLE SEARCH MODULE')
console.log(googleSearch('soup'))
console.log(googleSearch('cat'))

console.log('TESING THE GOOGLE SEARCH MODULE ASYNC')
getPeopleAsync().then((data) => console.log(data))
