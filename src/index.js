import './style.css';
import populate from './module/populatetask.js';
import { getAddedTodos, form } from './module/newTask.js';
import deleteTask from './module/removeTask.js';
import clearCompleted from './module/clearCompleted.js';

const clearCompletedButton = document.getElementById('clearCompleted');

populate();
form.addEventListener('submit', getAddedTodos);

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-trash') {
    deleteTask(e.target.id);
  }
});

clearCompletedButton.addEventListener('click', clearCompleted);
