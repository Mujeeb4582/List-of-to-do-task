import './style.css';

// declare an array and add some objects
const toDoList = [
  {
    description: 'Learn ES6 module concept',
    completed: true,
    index: 0,
  },
  {
    description: 'Creat a project using webpack',
    completed: false,
    index: 1,
  },
  {
    description: 'Structure the to do list project',
    completed: true,
    index: 2,
  },
  {
    description: 'Finish to do list project',
    completed: true,
    index: 3,
  },
];

// grab the element for display the list

const list = document.querySelector('.list');

const populateItem = (taskList) => {
  list.innerHTML += `
  <li class = 'item'>
  <div class = 'listItem'>
  <input type="checkbox" name="task" value="task">
<label for="task">${taskList.description}</label>
</div>
<i class="fa-solid fa-ellipsis-vertical"></i>
</li>
  `;
};

toDoList.forEach(populateItem);