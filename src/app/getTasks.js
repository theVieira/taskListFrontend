import Task from '../entities/Task.js';

export default async function getTasks() {
	fetch('http://localhost:8080/')
		.then(res => res.json())
		.then(res => {
			const tasks = res.tasks;
			tasks.forEach(task => {
				let newTask = new Task(task.title, task._id);
				Task.appendTask(newTask);
			});
		});
}

