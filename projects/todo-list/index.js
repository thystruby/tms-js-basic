// Пример объекта для TODO-элемента: 
// const todo = {
//   id: уникальный ID, // Формируется при добавлении TODO элемента
//   name: 'Learn JS', // Название задачи
//   done: true/false // Статус. По умолчанию false
// }

// Функция для формирования уникального идентификатора
function generateUniqID() {
  return Math.random().toString(36).substr(2, 9);
}




// LOCAL STORAGE !!!
const arr = [];
const STORAGE_KEY = 'TODOS';

const input = document.querySelector('.ui.action input');
const btn = document.querySelector('.ui.button');
const todoList = document.querySelector('.list');

const deleteTodoButtons = document.getElementsByClassName('negative ui button');

const handleDeleteTodo = (event) => {
  const todoElement = event.target.closest('.todo');
  todoElement.remove();
  // UPDATE LOCAL STORAGE!!!!
}

for (const deleteButton of deleteTodoButtons) {
  deleteButton.addEventListener('click', handleDeleteTodo);
};

const getStorageData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return JSON.parse(data);
};

const setStorageData = (value) => {
  if(value instanceof Array) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } else {
    alert('Wrong type')
  }
};

// IIFE. Initialize
(()=>{
  const data = getStorageData();
  if(!data) {
    setStorageData([]);
  }
})();

const getTodoHTML = ({id, name, done}) => {
  return `
    <div class="todo" data-id="${id}">
      <label class="checkbox">
        <input type="checkbox" ${done ? 'checked' : ''} />
        <div class="checkbox-icon"></div>
      </label>
      <span class="text">${name}</span>
      <button class="negative ui button">Удалить</button>
      <button class="circular ui icon button button-edit">
        <i class="icon cog"></i>
      </button>
    </div>
  `;
}

btn.addEventListener('click', () => {
  const value = input.value;
  const data = {
    id: generateUniqID(),
    name: value,
    done: false
  };
  // LocalStorage?
  arr.push(data);
  const newTodo =  getTodoHTML(data);
  todoList.insertAdjacentHTML('afterbegin', newTodo);

  // Получаем новый элемент
  const currentTodo = document.querySelector(`[data-id="${data.id}"]`);

  // Для кнопки "Удалить" нового элемента добавляем лисенер
  const currentTodoDeleteButton = currentTodo.querySelector('.negative.ui.button');
  currentTodoDeleteButton.addEventListener('click', handleDeleteTodo);
  // Edit button?

  input.value = '';
});
