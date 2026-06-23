'use strict'

function getValueFromInputs() {
	const firstRaw = document.querySelector('#firstValue').value
	const secondRaw = document.querySelector('#secondValue').value

	function parseNumber(str) {
		if (str === '') return null
		const num = Number(str)
		if (isNaN(num) || !isFinite(num)) {
			return null
		}
		return num
	}

	const firstValue = parseNumber(firstRaw)
	const secondValue = parseNumber(secondRaw)

	if (firstValue === null || secondValue === null) {
		alert('Ошибка: введите корректные числа в оба поля!')
		return null
	}

	return { first: firstValue, second: secondValue }
}

function cleanInputs() {
	document.querySelector('#firstValue').value = ''
	document.querySelector('#secondValue').value = ''
}

function additionCalc(dataObj) {
	let result = dataObj.first + dataObj.second
	innerText(result)
}

function deductionCalc(dataObj) {
	let result = dataObj.first - dataObj.second
	innerText(result)
}

function increaseCalc(dataObj) {
	let result = dataObj.first * dataObj.second
	innerText(result)
}

function divisionCalc(dataObj) {
	let result = dataObj.first / dataObj.second
	innerText(result)
}

function innerText(result) {
	const resultRaw = document.querySelector('.result')
	resultRaw.innerText = result
}
