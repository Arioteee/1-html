const cardNumber = '2202-2043-5606-8971'

const cardNumberWOSymb = cardNumber.replace(/[^\p{L}\p{N}]/gu, '')

// Проверка, что введены только цифры
if (!isNaN(cardNumberWOSymb) && cardNumberWOSymb.length == 16) {
	algLuhn(cardNumberWOSymb)
} else {
	console.log(false)
}

function algLuhn(validNumber) {
	const validNumberArray = validNumber.split('').map(Number)
	let s

	for (let i = 0; i < validNumberArray.length; i += 2) {
		if (validNumberArray[i] * 2 > 9) {
			s = validNumberArray[i] * 2 - 9
			validNumberArray[i] = s
		} else {
			s = validNumberArray[i]
			validNumberArray[i] = s
		}
	}

	let res = validNumberArray.reduce((acc, el) => {
		return acc + el
	}, 0)

	return res
}

if (algLuhn(cardNumberWOSymb) % 10 === 0) {
	console.log(true)
} else {
	console.log(false)
}
