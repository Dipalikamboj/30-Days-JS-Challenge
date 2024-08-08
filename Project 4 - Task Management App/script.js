let tasks = [];
let editingTaskIndex = -1;

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    const task = { title, description, dueDate };
    if(editingTaskIndex === -1) {
        tasks.push(task);
    } else {
        tasks[editingTaskIndex] = task;
        editingTaskIndex = -1;
    }

    document.getElementById('task-form').reset();
    displayTasks();
});

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = "";

    tasks.forEach((task,index) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <div class="task-buttons">
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(taskDiv);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;
    editingTaskIndex = index;

}

function deleteTask(index) {
    if(confirm('Are you sure you want to delete this task?')){
        tasks.splice(index, 1);
        displayTasks();
    }
}

displayTasks();