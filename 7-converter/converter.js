// Цель упражнения: Создать простую функцию для конвертации валют на JavaScript для использования в банковском ПО.

// Задание:
// Создать функцию конвертации валют, принимающую три параметра:
// Сумма для конвертации
// Исходная валюта
// Целевая валюта

// Пример работы функции:
// Примерно 1000 рублей к долларам вернет $30.

// Обработка ошибок:
// Если курс для пары валют неизвестен (например, нет курса рубль к ене), функция вернет null.

// Логика функции:
// В функции должны содержаться курсы конвертации для поддерживаемых валют (например, рубль к доллару и обратно).
// Реализовать логику конвертации с простыми математическими операциями, исходя из входных параметров.
// Если курс конвертации для заданной пары валют отсутствует, возвращается null.

// Расширение функциональности:
// Добавьте поддержку нескольких валют, минимум рубли, доллары, евро.
// Протестируйте функцию с различными входными данными.

function detectCurrency(currencyFrom, currencyTo, value) {
	switch (true) {
		case currencyFrom === 'RUB' && currencyTo === 'USD':
			return convertRubUSD(value, currencyFrom, currencyTo)
		case currencyFrom === 'USD' && currencyTo === 'RUB':
			return convertRubUSD(value, currencyFrom, currencyTo)

		case currencyFrom === 'RUB' && currencyTo === 'EURO':
			return convertRubEuro(value, currencyFrom, currencyTo)
		case currencyFrom === 'EURO' && currencyTo === 'RUB':
			return convertRubEuro(value, currencyFrom, currencyTo)

		case currencyFrom === 'EURO' && currencyTo === 'USD':
			return convertUSDEuro(value, currencyFrom, currencyTo)
		case currencyFrom === 'USD' && currencyTo === 'EURO':
			return convertUSDEuro(value, currencyFrom, currencyTo)
		default:
			return null
	}
}

function convertRubUSD(value, currencyFrom, currencyTo) {
	if (currencyFrom === 'RUB' && currencyTo === 'USD') {
		return value / 75
	} else if (currencyFrom === 'USD' && currencyTo === 'RUB') {
		return value * 75
	}

	return null
}

function convertRubEuro(value, currencyFrom, currencyTo) {
	if (currencyFrom === 'RUB' && currencyTo === 'EURO') {
		return value / 90
	} else if (currencyFrom === 'EURO' && currencyTo === 'RUB') {
		return value * 90
	}

	return null
}

function convertUSDEuro(value, currencyFrom, currencyTo) {
	if (currencyFrom === 'USD' && currencyTo === 'EURO') {
		return value / 1.12
	} else if (currencyFrom === 'EURO' && currencyTo === 'USD') {
		return value * 1.12
	}

	return null
}

console.log(detectCurrency('USD', 'EURO', 4000))
console.log(detectCurrency('RUB', 'EURO', 3400))
console.log(detectCurrency('USD', 'RUB', 230))
