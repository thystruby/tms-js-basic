'use strict';
/** 
 * Домашнее задание к занятию 8.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1. Получить элемент с id="unordered_list" тремя способами. Сам элемент находится в файле index.html
*/


/**
 * Задание 2. Изменить цвет каждого четного элемента (кроме элемента <h2>) в блоке с атрибутом name="text-container" на красный. HTML не изменять.
*/


/**
 * Задание 3. Запросите у пользователя имя через prompt(). Значение, введенное в prompt необходимо вывести в html.
 * Формат вывода:
 * 1) Создаем новый элемент div через JS
 * 2) Выполняем базовую стилизацию. Добавим зеленый бэкграунд и желтую обводку. Так же стоит задать паддинги в 30px
 * 3) Вставляем новый элемент в качестве ПОСЛЕДНЕГО элемента внутрь body, не забываем добавить значение полученное из prompt внутрь этого элемента
*/

const bnt  = document.querySelector("button");
const ppp  = document.querySelector("p");

bnt.addEventListener("click",function() {
  let p = prompt ('name');
  body.insertAdjacentHTML('beforeend', `<p> ваше имя ${p}</p>`);
}
)


/**
 * Задание 4. Заполните таблицу с классом my-table данными из объекта data. Таблицу уже есть в файле index.html
 * P.S. Проходимся по массиву и вставляем данные в таблицу. Один объект массива - один tr, свойство объекта - td.
 * P.S.S. Так же стоит вынести формирование tr в отдельную функцию
*/

const data = [
  {
    name: 'John',
    age: 23,
    salary: '100000'
  },
  {
    name: 'Mary',
    age: 34,
    salary: '58000'
  },
  {
    name: 'Max',
    age: 50,
    salary: '121500'
  },
  {
    name: 'Adam',
    age: 18,
    salary: '65200'
  }
];


const tableBody = document.querySelector('tbody');

const getrow = (data) => {
  const {name,age,salery} = data;
  return
  <tr>
    <td>${name}</td>
    <td>${age}</td>
    <td>${salery}</td>
  </tr>
}

for (let i = 0 ; i < data.length; i++) {
  tableBody.insertAdjacentHTML('beforeend',getRow(data[i]))
    
  }

/**
 * Задание 5. Написать функцию, которая будет доставать все данные из таблицы
 * На вход в эту функцию мы должны передавать DOM элемент таблицы.
 * Надо предусмотреть проверку на то, является ли элемент тэгом <table>
 * На выходе должен быть массив следующего вида:
  const data = [
    ['John', '23', '100000'], // Элемент массива data - это массив со всеми данными из <td>
    ['Mary', '34', '58000'],
    ['Max', '50', '121500'],
    ['Adam', '18', '65200'],
  ];
*/


const table = document.querySelector('table');

parseTble(table);

function parseTble(tableElement) {
   
  const tableRows =tableElement.rows;
  for (const row of tableRows) {
    console.log(row.cells);  
     
  }
};


const btn =document.querySelector("button");
const body =document.body;






  btn.onclck = function() {
    body.style = `
    background: red;
    `;
  }


const bnt  = document.querySelector("button");
const ppp  = document.querySelector("p");

bnt.addEventListener("click",function() {
  let p = prompt ('name');
  body.insertAdjacentHTML('beforeend', `<p> ваше имя ${p}</p>`);
}
)


const opn = document.querySelector("button");
const opе = document.querySelector("ul");






opn.addEventListener("click",function() {
 if(ul.style.display === 'none') {
   ul.style.display = 'block'
 } else {
  ul.style.display = 'none'
 }
  
}
)



let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Fail!")), 4000);
});



/*const arrowAsunc = async () => {
  console.log('Before');
  const promiseData = await new Promise((res) => {
    setTimeout(() => {
      res({});
    },2500);
  })
  console.log('After');
};
arrowAsunc();*/



