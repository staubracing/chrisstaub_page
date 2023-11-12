// This JavaScript file contains functions for managing a task list. The task list is stored in the browser's local storage.

function addTask(taskValue) {
  let task = taskValue || document.getElementById("newTask").value;

  if (task.trim() !== "") {
    let newTask = document.createElement("li");

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "taskItem";
    radio.value = task;

    newTask.appendChild(radio);
    let textNode = document.createTextNode(task);
    newTask.appendChild(textNode);
    
    document.getElementById("taskList").appendChild(newTask);
    document.getElementById("newTask").value = "";

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
    '#taskList li input[type="radio"]:checked'
  );

  tasks.forEach((task) => {
    task.parentElement.remove(); // Removes the list item
  });

  saveTasks(); // Update the tasks in localStorage after deletion
}
