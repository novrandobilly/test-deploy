const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();

  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    alert('Please enter a task');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', editTask);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

function editTask() {
  const taskItem = this.parentNode;
  const taskText = taskItem.firstChild.textContent;

  const newTaskText = prompt('Edit task:', taskText);
  if (newTaskText === null || newTaskText.trim() === '') {
    return;
  }

  taskItem.firstChild.textContent = newTaskText;
}

function deleteTask() {
  const taskItem = this.parentNode;
  taskList.removeChild(taskItem);
}
