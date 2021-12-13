const googleSearch = require('./script')

const dbMock = [
	'dog.com',
	'cheetos.com',
	'NETLIFY.art',
	'dogpictures.com'
]

describe('googleSearch function', () => {
	it('test should be true', () => {
		expect(true).toBeTruthy()
	})

	test('returns empty result', () => {
		const actual = googleSearch('non-existent', dbMock)
		expect(actual).toEqual([])
	})

	test('returns dog array', () => {
		const actual = googleSearch('dog', dbMock)
		expect(actual).toEqual(['dog.com', 'dogpictures.com'])
	})
})