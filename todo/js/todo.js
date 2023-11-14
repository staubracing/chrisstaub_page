/**
 * Adds a new task to the task list.
 * The task can be provided as an argument or taken from the HTML input with ID 'newTask'.
 */
let taskcount = 0;

function addTask(taskValue) {
  
  let task = taskValue || document.getElementById("newTask").value;
  
  if (task.trim() !== "") {
    let newTask = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.name = "taskItem";
    checkBox.value = task;

    newTask.appendChild(checkBox);

    let textNode = document.createTextNode(task);
    newTask.appendChild(textNode);
    
    let taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);

    taskcount++;
    const threshold = 5;
    if(taskcount > threshold){
      alert("Really, Joe? You think you'll get all of these done?.");
    }

   
    document.getElementById("newTask").value = "";
    
    saveTasks();

  } else {
      alert("Please enter a task.");
  }
}

/**
 * Saves the current tasks to localStorage.
 * Each task's text is extracted from the task list and stored.
 */
function saveTasks() {
  let tasks = [];  
  document.querySelectorAll("#taskList li").forEach((li, index) => {
    let taskText = li.childNodes[1].textContent.trim();
    let taskObject = {
      index: index,
      text: taskText
    };
    tasks.push(taskObject);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/**
 * Loads and displays tasks from localStorage.
 * Each stored task is added to the task list using the addTask function.
 */
function loadTasks() {
  let storedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (storedTasks) {  
    storedTasks.forEach((taskObject) => {
      addTask(taskObject.text);
    });
  }
}

window.onload = loadTasks;

/**
 * Clears only the selected (checked) tasks from the task list and updates localStorage.
 */
function deleteSelectedTasks() {  
  let tasks = document.querySelectorAll('#taskList li input[type="checkBox"]:checked');
  tasks.forEach((task) => {
    task.parentElement.remove();
  });

  saveTasks();

}

/**
 * Clears all tasks from the task list and localStorage.
 */
function deleteAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  localStorage.removeItem("tasks");
}


