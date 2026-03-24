const cryptoPassword = prompt('Write the new password: ')
const checkPassword = prompt('Write the password for check: ')

function crypto(cryptoPassword) {
	const splitted = cryptoPassword.split('')

	const firstFourSymbols = splitted.slice(0, 4)
	const secondFourSymbols = splitted.slice(4, 8)
	const thirdFourSymbols = splitted.slice(8, 12)
	const otherSymbols = splitted.slice(12)

	let d = []

	const a = d.concat(thirdFourSymbols, secondFourSymbols, firstFourSymbols, otherSymbols)
	return a.join('')
}

function Check(cryptoPassword, checkPassword) {
	const uncryptoPassword = cryptoPassword.split('')

	const firstFourSymbols = uncryptoPassword.slice(0, 4)
	const secondFourSymbols = uncryptoPassword.slice(4, 8)
	const thirdFourSymbols = uncryptoPassword.slice(8, 12)
	const otherSymbols = uncryptoPassword.slice(12)

	let d = []

	const a = d.concat(firstFourSymbols, secondFourSymbols, thirdFourSymbols, otherSymbols)

	console.log(a)

	if (a.join('') === checkPassword) {
		console.log(true)
	}

	return false
}

crypto(cryptoPassword)
Check(cryptoPassword, checkPassword)
