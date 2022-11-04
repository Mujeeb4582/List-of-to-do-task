import { createTodo, todo } from './displayTask.js';

const clearCompleted = () => {
  todo.clearCompleted();
  createTodo();
};

export default clearCompleted;