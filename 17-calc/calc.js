'use strict'

console.log('✅ Скрипт calc.js загружен')

function getValueFromInputs() {
	console.log('▶️ getValueFromInputs вызвана')
	const firstRaw = document.querySelector('#firstValue').value.trim()
	const secondRaw = document.querySelector('#secondValue').value.trim()
	console.log('firstRaw:', firstRaw, 'secondRaw:', secondRaw)

	function parseNumber(str) {
		str = str.replace(',', '.')
		if (str === '') return null
		const num = Number(str)
		if (isNaN(num) || !isFinite(num)) return null
		return num
	}

	const firstValue = parseNumber(firstRaw)
	const secondValue = parseNumber(secondRaw)
	console.log('firstValue:', firstValue, 'secondValue:', secondValue)

	if (firstValue === null || secondValue === null) {
		alert('Ошибка: введите корректные числа в оба поля!')
		return null
	}

	const result = { first: firstValue, second: secondValue }
	console.log('✅ возвращаем объект:', result)
	return result
}

function cleanInputs() {
	document.querySelector('#firstValue').value = ''
	document.querySelector('#secondValue').value = ''
}

function innerText(value) {
	document.querySelector('.result').innerText = value
}

function additionCalc(dataObj) {
	console.log('additionCalc вызвана с:', dataObj)
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	const result = dataObj.first + dataObj.second
	innerText(result)
}

function deductionCalc(dataObj) {
	console.log('deductionCalc вызвана с:', dataObj)
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	const result = dataObj.first - dataObj.second
	innerText(result)
}

function increaseCalc(dataObj) {
	console.log('increaseCalc вызвана с:', dataObj)
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	const result = dataObj.first * dataObj.second
	innerText(result)
}

function divisionCalc(dataObj) {
	console.log('divisionCalc вызвана с:', dataObj)
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	if (dataObj.second === 0) {
		alert('На ноль делить нельзя! Ответ: ∞')
		innerText('∞')
	} else {
		const result = dataObj.first / dataObj.second
		innerText(result)
	}
}
