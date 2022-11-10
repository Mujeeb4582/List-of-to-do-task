/**
 * @jest-environment jsdom
 */

import createMockDocument from './mocks/documentMock.js';
import { getAddedTodos } from '../src/module/newTask.js';
import { todo } from '../src/module/displayTask.js';

function addInputDescription(value, input) {
  input.value = value;
}

describe('add item', () => {
  it('creates a container element inside the task list', () => {
    createMockDocument('description-1');
    localStorage.clear();
    const taskSection = document.querySelector('.task-list');

    getAddedTodos();

    expect(taskSection.children[0].className).toEqual(
      'allTodos',
    );
  });

  it('creates a task list element inside the task-list-container', () => {
    todo.allTodos = [];
    createMockDocument('description-2');
    localStorage.clear();
    const taskSection = document.querySelector('.task-list');

    getAddedTodos();

    expect(
      taskSection.children[0].children[0].className,
    ).toEqual('todo');
  });

  it('adds the exact number of task elements to the task-list-container ', () => {
    todo.allTodos = [];
    createMockDocument('description-3');
    localStorage.clear();

    const taskSection = document.querySelector('.task-list');
    const newTodo = document.getElementById('newToDo');

    getAddedTodos();
    addInputDescription('description-4', newTodo);
    getAddedTodos();
    addInputDescription('description-5', newTodo);
    getAddedTodos();

    expect(taskSection.children[0].children.length).toEqual(
      3,
    );
  });
});
