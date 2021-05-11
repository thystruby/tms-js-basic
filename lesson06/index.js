'use strict';
/**
 * Домашнее задание к занятию 6.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/
/**
 * Задание 1
 * Написать функцию, которая принимает произвольное количество параметров и возвращает сумму числовых элементов
 * Пример: sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5) => 15
*/

// const sumNumbers = (...args) => {
//     const numArr = args.filter(item => !Number.isNaN(Number(item)));
//     return numArr.reduce((sum, present) => sum + present, 0);
// }
// console.log(sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5));




/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b
*/
// function substraction(a) {
//     return function (b) {
//         return a - b;
//     };
// }
// console.log(substraction(5)(1));


/**
 * Задание 3
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
*/

// function makePassword(password) {
//     return function (value) {
//         if (password === value) {
//             return true
//         } return false
//     }
// };
// console.log(makePassword('1234qwer')('123qwe'));


/**
 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
*/

// const getAbbreviation = words => {
//     return words.split(' ').map(item => item[0].toUpperCase()).join('');
// }

// console.log(getAbbreviation('Добрый день'));


/**
 * Задание 5
 * Сделайте функцию-конструктор с 2-я методами и которая принимает в качестве аргумента объект {from: Number, to: Number}
 * При вызове метода generate() каждый вызов будет генерировать случайное числа от 'from' до 'to' и класть в массив. Число округлять до 3-х знаков после запятой
 * Добавьте внутренний метод get(), который будет возвращать массив уже сгенерированных уникальных чисел
 * Добавьте метод clear() для отчистки массива
 * Все данные должны храниться внутри функции-конструктора.
*/



/**
 * Задание 6
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.
*/
// const arrFirst = [1, 2, 3, 4,];
// const arrSec = [4, 3, 2, 1,];

// const compareArr = () => {
//     if (arrFirst.join() === arrSec.join()) {
//         return true;
//     }
//     return false
// }
// console.log(compareArr());

/**
 * Задание 7
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
*/
// function numberOfCalls() {
//     let a = 1
//     return function () {
//         return Math.pow(a++, 2);
//     }
// }
// let counter = numberOfCalls();
// counter()
// console.log(counter())