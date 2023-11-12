# todo.js

`todo.js` is a JavaScript file designed to manage a task list in a web application. This file primarily handles the creation, display, and management of tasks using the browser's local storage. It is intended to be used in conjunction with an HTML file that provides a user interface for task management.

## Functions

### addTask(taskValue)

This function adds a new task to the task list. It takes a `taskValue` parameter, which is the task to be added. If `taskValue` is not provided, the function will use the value from the 'newTask' input field. The function creates a new list item with a radio button and the task text, and appends it to the 'taskList' element. After adding the task, the function calls `saveTasks()` to save the updated task list to local storage.

### saveTasks()

This function saves the current task list to local storage. It creates an array of tasks, where each task is the text of a list item in the 'taskList' element. The function then saves the array to local storage as a JSON string.

### loadTasks()

This function loads the task list from local storage. It retrieves the array of tasks from local storage, parses it from a JSON string to an array, and then adds each task to the task list by calling `addTask()`.

### clearTasks()

This function clears the task list. It removes all list items from the 'taskList' element, and then calls `saveTasks()` to save the empty task list to local storage.

### clearSelectedTasks()

This function clears the selected tasks from the task list. It removes all list items from the 'taskList' element that have a checked radio button, and then calls `saveTasks()` to save the updated task list to local storage.

### clearCompletedTasks() (not implemented)

This function clears the completed tasks from the task list. It removes all list items from the 'taskList' element that have a checked radio button, and then calls `saveTasks()` to save the updated task list to local storage.