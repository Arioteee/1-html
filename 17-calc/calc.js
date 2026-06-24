'use strict'

function getValueFromInputs() {
	const firstRaw = document.querySelector('#firstValue').value.trim()
	const secondRaw = document.querySelector('#secondValue').value.trim()

	function parseNumber(str) {
		str = str.replace(',', '.')
		if (str === '') return null
		const num = Number(str)
		if (isNaN(num) || !isFinite(num)) return null
		return num
	}

	const firstValue = parseNumber(firstRaw)
	const secondValue = parseNumber(secondRaw)

	if (firstValue === null || secondValue === null) {
		alert('Ошибка: введите корректные числа в оба поля!')
		return null
	}

	const result = { first: firstValue, second: secondValue }
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
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	const result = dataObj.first + dataObj.second
	innerText(result)
}

function deductionCalc(dataObj) {
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	const result = dataObj.first - dataObj.second
	innerText(result)
}

function increaseCalc(dataObj) {
	if (!dataObj) {
		alert('Ошибка: не удалось получить числа')
		return
	}
	const result = dataObj.first * dataObj.second
	innerText(result)
}

function divisionCalc(dataObj) {
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
