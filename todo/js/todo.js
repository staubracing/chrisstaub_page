// script for loading the task list from localStorage

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

/**
 * Add a task to the task list
 * @param {string} taskValue - The task to add to the task list with the given value or empty string
 * */

function saveTasks() {
  let tasks = []; // Create an empty array to store the tasks
  document.querySelectorAll("#taskList li").forEach((li) => { // Loop through each list item in the task list
    let taskText = li.childNodes[1].nodeValue.trim(); // Get the text of the task and trim any whitespace from the beginning and end
    tasks.push(taskText); // Add the task to the array of tasks to save to localStorage
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save the tasks to localStorage as a JSON string
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((task) => {
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


