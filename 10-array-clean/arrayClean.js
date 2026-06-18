function filterArray(arr, removeFunction) {
	// Замыкание - возвращаем новую функцию, которая будет фильтровать массив
	return function () {
		const result = []

		for (let i = 0; i < arr.length; i++) {
			// Если функция удаления возвращает false (не удалять), добавляем элемент
			if (!removeFunction(arr[i])) {
				result.push(arr[i])
			}
		}

		return result
	}
}

// Использование:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const removeEven = num => num % 2 === 0

// Создаем функцию-фильтр с замыканием
const filterEven = filterArray(numbers, removeEven)

// Вызываем полученную функцию
const filteredNumbers = filterEven()
console.log(filteredNumbers) // [1, 3, 5, 7, 9]

// Другие примеры:
const removeGreaterThan5 = num => num > 5
const filterGreater = filterArray(numbers, removeGreaterThan5)
console.log(filterGreater()) // [1, 2, 3, 4, 5]

const mixedNumbers = [-3, -2, -1, 0, 1, 2, 3]
const removeNegative = num => num < 0
const filterNegative = filterArray(mixedNumbers, removeNegative)
console.log(filterNegative()) // [0, 1, 2, 3]
