function bubbleSort(arr) {
	// Создаём копию массива, чтобы не изменять оригинал
	const sorted = [...arr]

	// Внешний цикл: количество проходов
	for (let i = 0; i < sorted.length - 1; i++) {
		// Внутренний цикл: сравнение соседних элементов
		for (let j = 0; j < sorted.length - 1 - i; j++) {
			// Если левый элемент больше правого - меняем местами
			if (sorted[j] > sorted[j + 1]) {
				// Обмен значений
				let temp = sorted[j]
				sorted[j] = sorted[j + 1]
				sorted[j + 1] = temp
			}
		}
	}

	return sorted
}

// Пример использования
const numbers = [1, 40, -5, 10, 0]
const sortedNumbers = bubbleSort(numbers)

console.log('Исходный массив:', numbers)
console.log('Отсортированный:', sortedNumbers)
