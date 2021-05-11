'use strict';
/**
 * Домашнее задание к занятию 8.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1. Получить элемент с id="unordered_list" тремя способами. Сам элемент находится в файле index.html
*/
1.
console.log(document.body.childNodes[3]);
2.
console.log(document.getElementById('unordered_list'));
3.
console.log(document.querySelector('#unordered_list'));


/**
 * Задание 2. Изменить цвет каждого четного элемента (кроме элемента <h2>) в блоке с атрибутом name="text-container" на красный. HTML не изменять.
*/

let element = document.querySelector('.text-container');
let children = element.children;
let c = children[3];

for (let i = 0; i < children.length; i++) {
    if (i % 2 == 0) {

    } else {
        children[i].style.backgroundColor = 'red';
        children[3].style.backgroundColor = 'yellow';
    }

}
// 2ая строчка в else 100% реализуется более грамотно,но до меня пока не дошло КАК)))



/**
 * Задание 3. Запросите у пользователя имя через prompt(). Значение, введенное в prompt необходимо вывести в html.
 * Формат вывода:
 * 1) Создаем новый элемент div чеез JS
 * 2) Выполняем базовую стилизацию. Добавим зеленый бэкграунд и желтую обводку. Так же стоит задать паддинги в 30px
 * 3) Вставляем новый элемент в качестве ПОСЛЕДНЕГО элемента внутрь body, не забываем добавить значение полученное из prompt внутрь этого элемента
*/
// let age = prompt('Введите ваш возраст');

// const div = document.createElement('div');
// div.id = 'idDiv';

// div.setAttribute('style', 'background:green;border: 20px solid yellow;padding:30px; margin:10px;');

// document.body.append(div)
// document.getElementById('idDiv').innerHTML = age;

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

let tableBody = document.querySelector('tbody')

for (let i = 0; i < data.length; i++) {
    let row = document.createElement('tr');
    row.innerHTML =
        '<td>' + data[i].name + '</td>' +
        '<td>' + data[i].age + '</td>' +
        '<td>' + data[i].salary + '</td>';
    tableBody.appendChild(row)
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
// function getData(elem) {

// }


// console.log();


// Nope