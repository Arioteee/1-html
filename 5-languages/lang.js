let selectUserLang = prompt('Which lang are you speaking?')

let lowerCaseMessage = selectUserLang.toUpperCase()

console.log(selectUserLang)

switch (lowerCaseMessage) {
	case 'BY':
		console.log('Вітаць!')

		break
	case 'RU':
		console.log('Приветствуем!')

		break
	case 'DE':
		console.log('Begrüßen!')

		break
	case 'FR':
		console.log('Saluons!')

		break
	default:
		console.log('Hello!')

		break
}
