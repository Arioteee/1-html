import { ToDoList } from './../15-task-object/todo.js'

const newTask = {
	tasks: [
		{
			id: 1,
			title: 'тест',
			description: 'описание',
			priority: 0,
		},
	],
}

ToDoList.addTask.call(newTask, 'Eat', 2)
ToDoList.addTask.call(newTask, 'Drink', 1)

ToDoList.deleteTask.call(newTask, 1)

ToDoList.updateNameAndPriority.call(newTask, 2, 'Test', 10)

ToDoList.sortTaskByPriority.call(newTask)

console.log(JSON.stringify(newTask, null, 2))
