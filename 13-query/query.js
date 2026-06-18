const queryURL = {
	search: 'Вася',
	take: 10,
}

function encodeURLComponent(queryURL) {
	return (
		Object.entries(queryURL)
			//[key, value] деструктуризация для того, чтобы мэп принял для себя массив, а не значение + индекс
			.map(([key, value]) => `${key}=${value}`)
			.join('&')
	)
}

console.log(encodeURLComponent(queryURL))
