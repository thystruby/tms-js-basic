'use strict';
/**
 * Домашнее задание к занятию 4.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Создайте объект user типа {name: 'John', surname: 'Doe'}
 * Добавьте метод getFullName который должен вызывать alert со строкой "Полное имя: [name] [surname]"
*/

// let user = {
//     name: 'John',
//     surname: 'Doe',
//     getFullName: function () {
//         console.log(`Полное имя: ${this.name} ${this.surname}`);
//     }
// }
// user.getFullName();


/**
  * Задание 2
  * Создайте функцию-конструктор User который будет принимать 2 аргумента: имя и фамилия
  * Добавьте метод getFullName по аналогии с первым заданием
  * Создайте 2 объекта на основе конструктора и передайте в них разные значения
  * Выведите в консоль getFullName для 2-х новых объектов
*/
// function User(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.getFullName = function () {
//         console.log(`Full name: ${this.name} ${this.surname}.`)
//     };
// }
// const Bob = new User('Bob', 'Pitterson');
// const Ray = new User('Ray', 'Bradly');
// Bob.getFullName();
// Ray.getFullName();

/**
 * Задание 3
 * Создайте конструктор Animal который будет принимать 2 параметра: имя, голос, и переменную типа boolean - canFly
 * Конструктор будет иметь 2 метода.
 * 1) sayHi который будет вызывать alert со строкой "[имя] говорит [голос]"
 * 2) fly который будет вызывать alert со строкой "[name] умеет летать". Если переменная canFly равна false, то выводить строку "[имя] не умеет летать"
 * Пример вызова: dog.sayHi() => "Собака говорит ГАВ"; dog.fly() => "Собака не умеет летать"
 * raven.sayHi() => "Ворон говорит КАР-КАР"; raven.fly() =>  "Ворон умеет летать"
*/

// function Animal(name, voice, canFly = false) {
//     this.name = name;
//     this.voice = voice;
//     this.canFly = canFly;
//     this.fly = function () {
//         if (canFly) {
//             console.log(`${this.name} can fly`)
//         } else {
//             console.log(`${this.name} can not fly`)
//         }
//     }
//     this.sayHi = function () {
//         console.log(`${this.name} say ${this.voice}`)
//     };
// };

// const cat = new Animal('Cat', 'meow')
// const pigeon = new Animal('Pigeon', 'gurr-guurr', true)
// const dog = new Animal('Dog', 'wof-wof')
// const parrot = new Animal('Parrot', 'I am learning Frontend', true)


// cat.sayHi();
// cat.fly();
// pigeon.sayHi();
// pigeon.fly()
// dog.sayHi();
// dog.fly();
// parrot.sayHi();
// parrot.fly();


/**
 * Задание 4
 * Создайте функцию crossOrPile которая будет рандомно возвращать "Орел" или "Решка".
 * Округлять до ближайшего целого.
*/
// function crossOrPile() {
//     if (Math.round(Math.random()) == 0) {
//         return ('Орел');
//     } else {
//         return 'Решка';
//     };
// }

// console.log(crossOrPile());


/**
 * Задание 5
 * Создать функцию которая будет принимать 2 значения: число и степень
 * Функция должна возвращать число, возведенное в степень
 * Предусмотреть проверку на число.
 * Если передаем например строку "12.2234284px", то должно браться число 12.22. Т.е. округляем до 2-х знаков после запятой
 * Надо использовать Math
*/
// function mPow(a, b) {
//     if (Number.isNaN(a) && Number.isNaN(b)) {
//         console.log('Введите число')
//     };
//     return Math.pow(parseInt(a), parseInt(b)).toFixed(2);

// };
// console.log(mPow(3, 2));


/**
 * Задание 6
 * Создайте массив из 5 любых элементов.
 * Напишите функцию, которая будет возвращать клонированный массив.
 * P.S. необходимо использовать цикл
*/
// const arr = [1, 2, 3, 4, 5,];
// function newArr() {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i];
//     };
//     return newArr;
// };

// console.log(newArr());

/**
 * Задание 7
 * Есть массив элементов. Например: [1, 'строка', 2, '-5', 13]
 * Надо написать функцию, которая будет суммировать числа массива и выводить результат.
 * Так же надо предусмотреть проверку на число.
 * Если элемент массива является строкой, которую нельзя привести к числу в явном виде, то надо пропускать элемент и переходить к следующему.
 * Пример: [1, 'строка', 2, '-5', 13] => 11
*/
// const arr = [2, 4, 'Hello', 6, 8];


// function sumOfArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Number.isNaN(Number(arr[i]))) {
//             continue;
//         }
//         sum += +arr[i]
//     }
//     return sum;
// }
// console.log(sumOfArr(arr));



/**
 * Задание 8
 * Напишите функцию которая будет принимать 2 аргумента: начало и конец диапазона
 * Функция должна возвращать произведение всех элементов в заданном диапазоне.
 * Пример: range(1, 10) => 3628800. Что соответствует 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10
*/

// let p = 1;
// function range(a, b) {

//     for (let i = a; i <= b; i++) {
//         p *= i;
//     } return p
// }
// console.log(range(2, 4));

/**
 * Задание 9
 * Создайте массив объектов типа const data = [{ name: 'John', age: 42 }, {name: 'Ashton' age: 37}, {name: 'Bruce', age: 50}, {name: 'Dakota', age: 25}]
 * Создайте функцию которая будет реализовывать поиск по имени. Функция должна принимать 2 аргумента: массив объектов и строку поиска
 * Поиск должен быть независимым от регистра
 * Если элемент найден, то надо вызывать alert с этим объектом
 * В противном случае вызывать alert с текстом "No results found for your request"
 * Пример: findUser(data, 'BRUce') => {name: 'Bruce', age: 50}
*/
// const data = [
//     { name: 'John', age: 42 },
//     { name: 'Ashton', age: 37 },
//     { name: 'Bruce', age: 50 },
//     { name: 'Dakota', age: 25 },
// ]
// const filteredUsers = data.find(item => item.name.toLowerCase('johN'));
// if (filteredUsers === undefined) {
//     console.log('No results found for your request');
// } else {
//     console.log(filteredUsers);
// }


/**
 * Задание 10
 * Написать функцию, которая будет реализовывать следующий функционал
 * У нас есть массив студентов: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест.
 * и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.
 * Данные студентов оформить как массив объектов типа: [{name: 'Вася', percent: 80}, {name: 'Зина', percent: 77}, ...]
 *
 * Надо создать новую функцию checkPercentage которая в записимости от процента будет возвращать соответствующую оценку
 * Оценки рассчитываются следующим образом:
 * если процент >= 90 - 5
 * если процент >= 80 - 4
 * если процент >= 70 - 3
 * если процент >= 60 - 2
 *
 * Ответ вывести в консоль следующим образом:
 * Вася - 4
 * Зина - 3
 * ...
*/

// const results = [
//     { name: 'Вася', percent: 80 },
//     { name: 'Зина', percent: 77 },
//     { name: 'Катя', percent: 88 },
//     { name: 'Петя', percent: 95 },
//     { name: 'Вова', percent: 57 },
// ];

// const checkPercentage = results.forEach((item, index, array) => {
//     if (item.percent >= 90) {
//         console.log(`${item.name} - 5`)
//     } else if (item.percent >= 80) {
//         console.log(`${item.name} - 4`)
//     } else if (item.percent >= 70) {
//         console.log(`${item.name} - 3`)
//     } else if (item.percent >= 60) {
//         console.log(`${item.name} - 2`)
//     }
// });


