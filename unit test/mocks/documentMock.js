const createMockDocument = (value) => {
  document.body.innerHTML = `
  <input type= "text" id= "new-task" value = ${value}>
  <ul class= "task-list">
    <li class = "task-section"></li>
  </ul>
  `;
};

export default createMockDocument;