function saveTasks() {
  let tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    // Assuming the task text is the node following the radio button
    let taskText = li.childNodes[1].nodeValue.trim();
    tasks.push(taskText);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach(task => {
      addTask(task);
    });
  }
}

window.onload = loadTasks;

function clearAllTasks() {
  // Clear the tasks from the DOM
  document.getElementById('taskList').innerHTML = '';

  // Clear the tasks from localStorage
  localStorage.removeItem('tasks');
}

function clearSelectedTasks() {
  let tasks = document.querySelectorAll('#taskList li input[type="radio"]:checked');

  tasks.forEach(task => {
    task.parentElement.remove(); // Removes the list item
  });

  saveTasks(); // Update the tasks in localStorage after deletion
}

function addTask(taskValue) {
  let task = taskValue || document.getElementById('newTask').value;

  if (task.trim() !== '') {
    // Create a new list item
    let newTask = document.createElement('li');

    // Create a radio button for each task
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'taskItem';
    radio.value = task;

    // Append the radio button to the list item
    newTask.appendChild(radio);

    // Create a text node and append it to the list item
    let textNode = document.createTextNode(task);
    newTask.appendChild(textNode);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(newTask);

    // Clear the input field
    document.getElementById('newTask').value = '';

    saveTasks(); // Save the task list after adding
  } else {
    alert('Please enter a task.');
  }
}

