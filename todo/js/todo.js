// This JavaScript file contains functions for managing a task list. The task list is stored in the browser's local storage.

function addTask(taskValue) {
  let task = taskValue || document.getElementById("newTask").value;
// Check if the task is not empty
  if (task.trim() !== "") {
    // Create a new list item
    let newTask = document.createElement("li");
    // Create a checkbox for the new list item
    let checkBox = document.createElement("input"); // Create a new input element
    checkBox.type = "checkBox"; // Set the input element's type to checkbox
    checkBox.name = "taskItem"; // Set the input element's name to taskItem
    checkBox.value = task; // Set the input element's value to the task

    newTask.appendChild(checkBox); // Add the checkbox to the list item

    // Create a label for the checkbox
    let textNode = document.createTextNode(task);

    // Add the label to the list item
    newTask.appendChild(textNode);
    // Add the task to the task list
    let taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);
    
    // Clear the input field
    document.getElementById("newTask").value = "";

    // Save the tasks to localStorage as a JSON string ( call the saveTasks function)
    saveTasks();
  } else {
    alert("Please enter a task.");
  }
}

function saveTasks() {
  let tasks = []; // Create an empty array to store the tasks
  document.querySelectorAll("#taskList li").forEach((li) => {
    // Loop through each list item in the task list
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
  document.getElementById("taskList").innerHTML = "";

  // Clear the tasks from localStorage
  localStorage.removeItem("tasks");
}

function clearSelectedTasks() {
  let tasks = document.querySelectorAll(
    '#taskList li input[type="checkBox"]:checked'
  );

  tasks.forEach((task) => {
    task.parentElement.remove(); // Removes the list item
  });

  saveTasks(); // Update the tasks in localStorage after deletion
}
