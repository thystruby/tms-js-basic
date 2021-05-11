'use strict';
/** 
 * Домашнее задание к занятию 8.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1. Получить элемент с id="unordered_list" тремя способами. Сам элемент находится в файле index.html
*/

/*const elem = document.querySelectorAll("#unordered_list"); 
console.log(elem);

const elem1 = document.getElementById("unordered_list");
console.log(elem1);

const bodyElem = document.body;
const elem2 = bodyElem.childNodes;
console.log(elem2);
*/

/**
 * Задание 2. Изменить цвет каждого четного элемента (кроме элемента <h2>) в блоке 
 * с атрибутом name="text-container" на красный. 
 * HTML не изменять.
*/

/*
const elem1 = document.querySelectorAll("[name='text-container']");
console.log(elem1);
const noChange = elem1[0].querySelector("h2")
console.log(noChange);
Array.from(elem1[0].children).forEach(function(element, index, array) {
  if (index % 2 === 0 && element !== noChange )
   {
    element.style.color = "red";
  }    
})
*/
// вариант 1
/*
const elem1 = document.querySelectorAll("[name='text-container']");
console.log(elem1);
const noChange = elem1[0].querySelector("h2")
console.log(noChange);
Array.from(elem1[0].children).forEach(function(element, index, array) {
    if (index % 2 !== 0 && element !== noChange) {
    element.style.color = "red";
  }    
})
*/
//вариант 2
/*
const elem1 = document.querySelector("[name='text-container']");
Array.from(elem1.children).forEach(function(element, index, array) {
  if (index % 2 !== 0 && element.tagName !== 'H2') {
    element.style.color = "red";
  }    
})
 */

  /**
 * Задание 3. Запросите у пользователя имя через prompt(). Значение, введенное в prompt необходимо вывести в html.
 * Формат вывода:
 * 1) Создаем новый элемент div через JS
 * 2) Выполняем базовую стилизацию. Добавим зеленый бэкграунд и желтую обводку. Так же стоит задать паддинги в 30px
 * 3) Вставляем новый элемент в качестве ПОСЛЕДНЕГО элемента внутрь body, не забываем добавить значение полученное из prompt внутрь этого элемента
*/

let info = prompt('введите имя');
let div = document.createElement('div');
div.className = 'block';
div.innerHTML = info;
document.body.append(div);
div.style.cssText = `
background: green;
border: yellow;
padding: 30px;
`;


/**
 * Задание 4. Заполните таблицу с классом my-table данными из объекта data. Таблица уже есть в файле index.html
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

