class Task {
	constructor(title, id) {
		this.id = id;
		const task = document.createElement('div');
		task.className = 'task';
		task.id = id;

		const checkboxInput = document.createElement('input');
		checkboxInput.type = 'checkbox';
		checkboxInput.className = 'checkboxTask';

		const titleTask = document.createElement('label');
		titleTask.className = 'titleTask';
		titleTask.innerText = title;

		const removeTask = document.createElement('input');		
		removeTask.type = 'button';
		removeTask.className = 'removeTask';
		removeTask.value = 'Remover';
		removeTask.onclick = async () => {
			const id = this.id;
			
			const el = document.getElementById(id);
			el.parentNode.removeChild(el);

			const task = await fetch(`http://localhost:8080/${id}`, {
				method: 'DELETE'
			});
			
			const res = await task.json();
			console.log(res);
		};

		task.append(checkboxInput, titleTask, removeTask);

		return task;
	}

	static appendTask(task) {
		const tasksArea = document.querySelector('.tasksArea');
		tasksArea.appendChild(task);
	}
}

export default Task;