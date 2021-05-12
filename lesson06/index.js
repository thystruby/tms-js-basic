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
// function sum(...args) {
//     const sumNumbers = args.reduce((acc, next) => {
//         if(typeof next === 'number') {
//             return acc + next
//         }
//         return acc
//     }, 0)

//     return sumNumbers
// }
// console.log(sum(1, 'lw[', 2, 3, 'hf'))

/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b
*/
// function substract(a) {
//     return function(b) {
//         return a - b
//     }
// }
// console.log(substract(10)(5));
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
//     return function(string) {
//         return password === string ? true : false
//     }
// }
// const checkPassword = makePassword('somePassword')
// console.log(checkPassword('somePasswor'));

/**
 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
*/
// function foo(name) {
//     const nameArr = name.split(' ')
//     const reduceArr = nameArr.reduce((acc, next) => {
//         return acc + next[0].toUpperCase()
//     }, '')
//     console.log(reduceArr)
// }
// foo('Республика беларусь sdojp fkd')
/**
 * Задание 5
 * Сделайте функцию-конструктор с 2-я методами и которая принимает в качестве аргумента объект {from: Number, to: Number} 
 * При вызове метода generate() каждый вызов будет генерировать случайное числа от 'from' до 'to' и класть в массив. Число округлять до 3-х знаков после запятой 
 * Добавьте внутренний метод get(), который будет возвращать массив уже сгенерированных уникальных чисел
 * Добавьте метод clear() для отчистки массива
 * Все данные должны храниться внутри функции-конструктора.
*/
// function Foo(obj) {
//     this.arr = []
//     this.generate = function() {
//         const { from, to } = obj
//         const random = Math.random() * to + from
//         return this.arr.push(random.toFixed(3))
//     }
//     this.get = function() {
//         if(this.arr.length) {
//             return this.arr
//         }
//         return false
//     }
//     this.clear = function() {
//         return this.arr = []
//     }
// }
// const newObj = new Foo({from: 5, to: 7})
// newObj.generate()
// newObj.generate()
// newObj.generate()
// console.log(newObj.get())

/**
 * Задание 6
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.
*/
// function arrTrue(a, b) {
//     const sortedA = a.sort()
//     const sortedB = b.sort()
//     if(sortedA.length != sortedB.length) {
//         return false
//     }
//     for(let i = 0; i < sortedA.length; i++) {
//        if(a[i] != b[i]) {
//           return false;
//        }
//     }
//     // Краткое решение //
//     if(JSON.stringify(sortedA) === JSON.stringify(sortedB)) {
//         return true
//     }
//     // //
//     return false
// }
// console.log(arrTrue([1, 2, 4, 3], [1, 2, 3, 4]))
/**
 * Задание 7
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
*/
// function foo() {
//     let count = 1
//     return function() {
//         return count++
//     }
// }
// let counter = foo()
// counter()
// counter()
// counter()
// console.log(Math.pow(counter(), 2));