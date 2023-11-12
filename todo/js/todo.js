// This JavaScript file contains functions for managing a task list. The task list is stored in the browser's local storage.

/**
 * Adds a new task to the task list.
 * The task can be provided as an argument or taken from the HTML input with ID 'newTask'.
 */
function addTask(taskValue) {
  // Determine the task value, preferring taskValue if provided and truthy
  let task = taskValue || document.getElementById("newTask").value;

  // Proceed only if the task is not empty
  if (task.trim() !== "") {
    let newTask = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.name = "taskItem";
    checkBox.value = task; // Link checkbox to the task value

    newTask.appendChild(checkBox); // Add checkbox to the list item

    let textNode = document.createTextNode(task);
    newTask.appendChild(textNode); // Add task text to the list item

    // Append the new task to the task list in the UI
    let taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);

    // Clear the input field
    document.getElementById("newTask").value = "";

    // Call saveTasks to save the updated task list (implementation required)
    saveTasks();
    
  } else {
    // Alert if no task is entered
    alert("Please enter a task.");
  }
}


/**
 * Saves the current tasks to localStorage.
 * Each task's text is extracted from the task list and stored.
 */
function saveTasks() {
  let tasks = []; // Initialize an array to store task texts

  // Iterate over each task item in the task list
  document.querySelectorAll("#taskList li").forEach((li, index) => {
    let taskText = li.childNodes[1].textContent.trim(); // Extract and trim task text
    let taskObject = {
      index: index,
      text: taskText }; // Create a task object

    tasks.push(taskObject); // Add the task text to the tasks array
  });

  // Convert the tasks array to a JSON string and save it in localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


/**
 * Loads and displays tasks from localStorage.
 * Each stored task is added to the task list using the addTask function.
 */
function loadTasks() {
  // Retrieve and parse the tasks from localStorage
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));

  // Check if there are any tasks stored
  if (storedTasks) {
    // Iterate through each task and add it to the task list
    storedTasks.forEach((taskObject) => {
      addTask(taskObject.text);
    });
  }
}

window.onload = loadTasks;

/**
 * Clears only the selected (checked) tasks from the task list and updates localStorage.
 */
function clearSelectedTasks() {
  // Select all checked tasks in the task list
  let tasks = document.querySelectorAll('#taskList li input[type="checkBox"]:checked');

  // Remove each selected task's list item from the DOM
  tasks.forEach((task) => {
    task.parentElement.remove();
  });

  // Update the remaining tasks in localStorage
  saveTasks();
}


/**
 * Clears all tasks from the task list and localStorage.
 */
function clearAllTasks() {
  // Remove all task list items from the DOM
  document.getElementById("taskList").innerHTML = "";

  // Remove stored tasks data from localStorage
  localStorage.removeItem("tasks");
}


