/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock.js';
import { getAddedTodos } from '../src/module/newTask.js';
import { todo } from '../src/module/displayTask.js';
import clearCompleted from '../src/module/clearCompleted.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('clear completed task', () => {
  it(' delete one element using clear completed', () => {
    todo.allTodos = [];
    createMockDocument('description-1');
    localStorage.clear();
    const taskSection = document.querySelector('.task-list');
    const newTodo = document.getElementById('newToDo');
    getAddedTodos();
    addInputDescription('description-2', newTodo);
    getAddedTodos();
    addInputDescription('description-3', newTodo);
    getAddedTodos();
    const index = 1;
    const checkbox = taskSection.children[0].children[index].querySelector('#checkbox');
    checkbox.checked = true;

    todo.completedTodo(checkbox.checked, index);
    clearCompleted();

    expect(todo.allTodos.length).toEqual(
      2,
    );
  });
});