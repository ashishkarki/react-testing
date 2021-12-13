const axios = require('axios')

const getPeoplePromise = (
  fetchingLib = axios,
  api = 'https://swapi.dev/api/people/',
) => {
  return fetchingLib(api)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return {
        count: data.count,
        results: data.results,
      }
    })
}

const getPeopleAsync = async (
  fetchinLib = axios,
  api = 'https://swapi.dev/api/people/',
) => {
  const response = await fetchinLib(api)
  const data = response.data

  return {
    count: data.count,
    results: data.results.slice(0, 2),
  }
}

module.exports = {
  getPeoplePromise,
  getPeopleAsync,
}
