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
let arr = [];
const STORAGE_KEY = 'TODOS';

const input = document.querySelector('.ui.action input');
const btn = document.querySelector('.ui.button');
const todoList = document.querySelector('.list');

const filterButtons = document.querySelectorAll('.tabs .button');
const filterButtonAll = document.querySelector('.tabs .button[data-type="all"]');
const filterButtonNotdone = document.querySelector('.tabs .button[data-type="notdone"]');
const filterButtonDone = document.querySelector('.tabs .button[data-type="done"]');



filterButtonAll.addEventListener('click', e => handleFilterClick(e, 'all'));
filterButtonNotdone.addEventListener('click',  e => handleFilterClick(e, 'notdone'));
filterButtonDone.addEventListener('click',  e => handleFilterClick(e, 'done'));

const handleFilterClick = (event, type) => {
  const btn = document.querySelector(`.tabs .button[data-type="${type}"]`);
  for (f of filterButtons) {
    f.classList.remove('blue')
  }
  btn.classList.add('blue');

  reRender();
}

const reRender = () => {
  const activeFilterButton = document.querySelector('.tabs .button.blue');
  const type = activeFilterButton.dataset.type;
  let data = arr;
  if (type === 'notdone') {
    data = data.filter(i => !i.done);
  } else if (type === 'done') {
    data = data.filter(i => i.done);
  }


  todoList.replaceChildren('');
  data.forEach(element => {
    todoList.insertAdjacentHTML('afterbegin', getTodoHTML(element));
  });

  attachListeners();
}


const handleDeleteTodo = (event) => {
  const todoElement = event.target.closest('.todo');
  const id = todoElement.dataset.id;
  arr = arr.filter(i => i.id !== id);
  setStorageData(arr);
  todoElement.remove();
}

const handleToggle = (event) => {
  event.preventDefault();
  const todoElement = event.target.closest('.todo');
  const id = todoElement.dataset.id;
  const isActive = todoElement.classList.contains('todo--active');
  const checkboxEl = todoElement.querySelector('input[type="checkbox"]');
  arr = arr.map(i => {
    if (i.id === id) {
      i.done = !isActive
    }
    return i;
  });
  setStorageData(arr);
  
  if (isActive) {
    todoElement.classList.remove('todo--active');
    checkboxEl.checked = false;
  } else {
    todoElement.classList.add('todo--active');
    checkboxEl.checked = true;
  }

  reRender();
}

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



const getTodoHTML = ({id, name, done}) => {
  let className = 'todo';
  if (done) {
    className += ' todo--active'
  }
  return `
    <div class="${className}" data-id="${id}">
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
  setStorageData(arr);

  const newTodo =  getTodoHTML(data);
  todoList.insertAdjacentHTML('afterbegin', newTodo);

  // Получаем новый элемент
  const currentTodo = document.querySelector(`[data-id="${data.id}"]`);

  // Для кнопки "Удалить" нового элемента добавляем лисенер
  const currentTodoDeleteButton = currentTodo.querySelector('.negative.ui.button');
  currentTodoDeleteButton.addEventListener('click', handleDeleteTodo);
  // Edit button?

  input.value = '';

  handleFilterClick(null, 'all')
});


const getItemsFromStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return JSON.parse(data);
}

const attachListeners = () => {
  const deleteTodoButtons = document.getElementsByClassName('negative ui button');

  for (const deleteButton of deleteTodoButtons) {
    deleteButton.addEventListener('click', handleDeleteTodo);
  };

  const checkboxes = document.querySelectorAll('.todo .checkbox, .todo .text');
  for (const checkbox of checkboxes) {
    checkbox.addEventListener('click', handleToggle);
  };
}



// IIFE. Initialize
(()=>{
  const data = getStorageData();
  arr = data;

  arr.forEach(todo => {
    const newTodo = getTodoHTML(todo)
    todoList.insertAdjacentHTML('afterbegin', newTodo);
  })
  if(!data) {
    setStorageData([]);
  }


  attachListeners();

})();