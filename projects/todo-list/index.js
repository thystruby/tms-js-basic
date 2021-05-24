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





const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div');

const LS_KEY = 'INPUT_TEST';
const lsData = localStorage.getItem(LS_KEY);
let arr = [];

if(lsData) {
  arr = JSON.parse(lsData);
}

arr.forEach((element) => {
  div.insertAdjacentHTML('beforeend', `<div>${element.text}</div>`)
});

button.addEventListener('click', () => {
  arr.push({
      text: input.value,
      completed: false
  });
  localStorage.setItem(LS_KEY, JSON.stringify(arr))
  div.insertAdjacentHTML('beforeend', `<div>${input.value}</div>`)
});
