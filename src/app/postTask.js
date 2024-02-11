export default document.querySelector('#newTaskButton').addEventListener('click', async (ev) => {
	ev.preventDefault();

	const task = {
		title: document.querySelector('#newTaskInput').value
	};

	const res = await fetch('http://localhost:8080/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(task)
	});

	document.querySelector('.tasksArea').append(task);

	const createdTask = await res.json();
	console.log(createdTask);
});