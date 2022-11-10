const createMockDocument = (value) => {
  document.body.innerHTML = `
  <input type= "text" id= "newToDo" value = ${value}>
  <ul class= "task-list-container">
    <li class = "task-list"></li>
  </ul>
  `;
};

export default createMockDocument;