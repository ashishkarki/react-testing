const axios = require('axios')
const { getPeopleAsync, getPeoplePromise } = require('./script-async')

describe('getPeopleAsync', () => {
  it('should return an array of people', async () => {
    expect.assertions(1)
    const people = await getPeopleAsync()

    expect(people.count).toBe(82)
  })

  it('should return an array of people', (done) => {
    expect.assertions(1)

    getPeopleAsync(axios).then((people) => {
      expect(people.count).toBe(82)
      done()
    })
  })

  it('should return an array of people', () => {
    expect.assertions(1)

    return getPeopleAsync(axios).then((people) => {
      expect(people.count).toBe(82)
    })
  })
})

describe('using mocks and stubs', () => {
  let mockAxios = null
  beforeEach(() => {
    mockAxios = jest.fn().mockReturnValue(
      Promise.resolve({
        data: {
          count: 82,
          results: [
            {
              name: 'Luke Skywalker',
              height: '172',
              mass: '77',
              hair_color: 'blond',
            },
            {
              name: 'Johnny Bravo',
              height: '120',
              mass: '70',
              hair_color: 'brown',
            },
          ],
        },
      }),
    )
  })

  it('calls mockAxios once with getPeopleAsync', () => {
    return getPeopleAsync(mockAxios).then(() => {
      expect.assertions(3)
      expect(mockAxios.mock.calls.length).toBe(1)
      expect(mockAxios.mock.calls[0][0]).toBe('https://swapi.dev/api/people/')
      expect(mockAxios).toBeCalledWith('https://swapi.dev/api/people/')
    })
  })

  it('getPeopleAsync returns count and results', () => {
    return getPeopleAsync(mockAxios).then((people) => {
      expect.assertions(3)
      expect(people.count).toBe(82)
      expect(people.results[0]).toMatchObject({
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
      })
      expect(people.results[1].name).toBe('Johnny Bravo')
    })
  })
})
