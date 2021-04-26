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
