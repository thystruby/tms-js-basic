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


// function sumNumbers(...arg) {
//    const numberArray = arg.filter(item => !Number.isNaN(Number(item)))
//    return numberArray.reduce((sum, current) => sum + current, 0)
// }

// const result = sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5)
// console.log(result);


/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b
*/


// function substract(a) {
//    return function (b) {
//       return a - b;
//    }
// }

// console.log(substract(3)(2));


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
//    return function (checkingPassword) {
//       if (password === checkingPassword) {
//          return 'True'
//       } else {
//          return 'False'
//       }
//    }
// }

// console.log(makePassword(321)(123));


/**
 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
*/


// const frase = 'республика Беларусь'

// function abb(f) {
//    const array = f.split(' ');
//    const firstSymbol = array.map(item => {
//       return item.split('')[0].toUpperCase()
//    });
//    return firstSymbol.join('');
// }

// const result = abb(frase);
// console.log(result);


/**
 * Задание 5
 * Сделайте функцию-конструктор с 2-я методами и которая принимает в качестве аргумента объект {from: Number, to: Number}
 * При вызове метода generate() каждый вызов будет генерировать случайное числа от 'from' до 'to' и класть в массив. Число округлять до 3-х знаков после запятой
 * Добавьте внутренний метод get(), который будет возвращать массив уже сгенерированных уникальных чисел
 * Добавьте метод clear() для отчистки массива
 * Все данные должны храниться внутри функции-конструктора.
*/


// const range = {
//    from: 10,
//    to: 20,
// }

// function arrayCreation() {
//    this.range = range;
//    const Array = [];
//    console.log(this.range);
//    this.generate = function () {
//       Array.push(+(Math.random() * (this.range.to - this.range.from) + this.range.from).toFixed(3));
//    }
//    this.get = function () {
//       return Array;
//    }
//    this.clear = function () {
//       Array.splice(0, Array.length);
//    }
// }

// let result = new arrayCreation(range)
// result.generate();
// result.generate();
// result.generate();
// result.generate();
// console.log(result.get());
// result.clear()
// console.log(result.get());



/**
 * Задание 6
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.
*/


// const firstArray = ['Hello', 'World', 1, 2]
// const secondArray = [1, 'Hello', 'World', 2]

// const compare = () => {
//    if (firstArray.sort().join() === secondArray.sort().join()) {
//       return 'True'
//    } else {
//       return 'False'
//    }
// }

// console.log(compare());


/**
 * Задание 7
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
*/


// function call() {
//    let calculation = 1;
//    return () =>{
//       return Math.pow(calculation++, 2)
//    }
// }

// const result = call();

// result();
// result();
// result();
// console.log(result());