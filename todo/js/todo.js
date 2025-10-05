const STORAGE_KEY = 'tasks';

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('newTask');
const emptyState = document.getElementById('emptyState');
const deleteSelectedButton = document.getElementById('deleteSelected');
const deleteAllButton = document.getElementById('deleteAll');
const taskForm = document.getElementById('taskForm');

const generateId = () => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID();
  }

  return `task-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const updateEmptyState = () => {
  if (!emptyState) return;
  const hasTasks = taskList && taskList.children.length > 0;
  emptyState.hidden = hasTasks;
};

const createTaskElement = ({ id, text }) => {
  const listItem = document.createElement('li');
  listItem.className = 'staub-task';
  listItem.dataset.taskId = id;

  const label = document.createElement('label');
  label.className = 'task-label';

  const checkbox = document.createElement('input');
  checkbox.className = 'task-checkbox';
  checkbox.type = 'checkbox';
  checkbox.name = 'taskItem';
  checkbox.value = id;

  const textSpan = document.createElement('span');
  textSpan.className = 'task-text';
  textSpan.textContent = text;

  label.appendChild(checkbox);
  label.appendChild(textSpan);
  listItem.appendChild(label);

  return listItem;
};

const saveTasks = () => {
  if (!taskList) return;

  const tasks = Array.from(taskList.querySelectorAll('.staub-task')).map(
    (item) => ({
      id: item.dataset.taskId,
      text: item.querySelector('.task-text')?.textContent?.trim() ?? '',
    })
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const addTask = (taskText) => {
  if (!taskList || !taskInput) return;

  const text = typeof taskText === 'string' ? taskText : taskInput.value.trim();

  if (!text) {
    taskInput.focus();
    return;
  }

  const task = {
    id: generateId(),
    text,
  };

  const element = createTaskElement(task);
  taskList.appendChild(element);

  saveTasks();
  updateEmptyState();

  taskInput.value = '';
  taskInput.focus();
};

const loadTasks = () => {
  if (!taskList) return;

  const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  storedTasks.forEach((task) => {
    if (task?.text) {
      const element = createTaskElement(task);
      taskList.appendChild(element);
    }
  });

  updateEmptyState();
};

const deleteSelectedTasks = () => {
  if (!taskList) return;

  const selected = taskList.querySelectorAll('.task-checkbox:checked');
  selected.forEach((checkbox) => {
    checkbox.closest('.staub-task')?.remove();
  });

  saveTasks();
  updateEmptyState();
};

const deleteAllTasks = () => {
  if (!taskList) return;

  taskList.textContent = '';
  localStorage.removeItem(STORAGE_KEY);
  updateEmptyState();
  taskInput?.focus();
};

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  taskInput?.focus();

  taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
  });

  deleteSelectedButton?.addEventListener('click', deleteSelectedTasks);
  deleteAllButton?.addEventListener('click', deleteAllTasks);
});
