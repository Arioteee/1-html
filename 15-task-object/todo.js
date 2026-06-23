export const ToDoList = {
	tasks: [
		{
			id: 1,
			title: 'Buy the book',
			priority: 1,
		},
	],
	addTask() {
		this.tasks.push({
			id: this.tasks.length + 1,
			title: arguments[0],
			priority: arguments[1],
		})
	},
	deleteTask(id) {
		if (this.tasks.length < id) {
			console.error('Haven`t this id')
		}

		const index = this.tasks.findIndex(task => task.id === id)

		if (index !== -1) {
			this.tasks.splice(index, 1)
		}
	},
	updateNameAndPriority(findId, newTitle, newPriority) {
		const foundItem = this.tasks.find(item => item.id === findId)

		if (foundItem) {
			foundItem.priority = newPriority
			foundItem.title = newTitle
		}
	},
	sortTaskByPriority() {
		this.tasks.sort((pre, next) => pre.priority - next.priority)
	},
}

ToDoList.addTask('Drunk', 1)
ToDoList.addTask('Wash', 5)
ToDoList.addTask('Eat', 2)
ToDoList.addTask('Drink', 0)
ToDoList.addTask('Sllep', 10)
console.log(ToDoList.tasks)

// ToDoList.deleteTask(2)
// console.log(ToDoList.tasks)

ToDoList.updateNameAndPriority(1, 'Dateing', 2)
console.log(ToDoList.tasks)

ToDoList.sortTaskByPriority()
console.log(ToDoList.tasks)
