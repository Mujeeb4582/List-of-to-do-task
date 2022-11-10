/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock.js';
import { getAddedTodos } from '../src/module/newTask.js';
import { todo } from '../src/module/displayTask.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('item status', () => {
  it('changing the item status', () => {
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
    const checkbox = taskSection.children[0].children[
      index
    ].querySelector('#checkbox');
    checkbox.checked = true;

    todo.completedTodo(checkbox.checked, index);

    expect(todo.allTodos[index - 1].completed).toEqual(
      checkbox.checked,
    );
  });
});