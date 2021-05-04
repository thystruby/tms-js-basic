'use strict';
/** 
 * Домашнее задание к занятию 6.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 0
 * Написать функцию тестирования.
 * test("Результат должен быть 5", calcSum(3, 2), 5) => 'Результат должен быть 5: Успех';
*/

function calcSum() {
    return Array.from(arguments || []).reduce((acc, a) => acc + (Math.round(a) || 0), 0);
}

function test(prompt, val, expectedVal) {
    return `${prompt}: ${val === expectedVal ? 'Успех' : 'не Успех'}`;
}

test("Результат должен быть 5", calcSum(3, 2), 5);

/**
 * Задание 1
 * Написать функцию, которая принимает произвольное количество параметров и возвращает сумму числовых элементов
 * Пример: sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5) => 15
*/

function sumNumbers() {
    return [ ...arguments ].reduce((acc, a) => acc + (Math.round(a) || 0), 0);
}

sumNumbers(1,2,3);
 

/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b
*/
 function substract (a,b) {
     return function(b) {
         console.log(a-b);

     } 
 }
 substract (a)(b);


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

function makePassword(pass) {
    this.pass = pass;
    this.check = function(pass) {
        return pass === this.pass
    };
    return this.check;
};

let checkPassword = makePassword('somePassword'); //задаем пороль
checkPassword('password') // возвращает false
checkPassword('somePassword')



  

/**
 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
*/

const abbr = str => (str.split(' ') || []).reduce((acc, a) => acc + (a[0] || '').toUpperCase(), '')
abbr('еспублика беларусь')
abbr('Минск')


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

basicArrayEquals = (a, b) => a.toString() === b.toString();

basicArrayEquals([1,2, 'asdf', undefined, null], [1,2, 'asdf', undefined, null]) // true
basicArrayEquals([1,2, { a: 444 }], [1,2, {}]) // true


equals = (a, b) => {
    if (a === null && b === null) { return true;}
    if (typeof a !== typeof b) return false;
    if (typeof a === 'function') { return a === b; } 
    if (Object.keys(a).toString() !== Object.keys(b).toString()) { return false; }

    for (key in a) {
        if (typeof a[key] !== typeof b[key]) { return false; }
        if (typeof a[key] === 'object' || typeof a[key] === 'array') { 
            if (!equals(a[key], b[key])) { return false;}
        }
        if (typeof a[key] === 'number') {
            if (Number.isNaN(a[key]) && Number.isNaN(b[key])) { continue; }
        }
        if (a[key] !== b[key]) { return false; }
    }

    // https://github.com/ramda/ramda/blob/6b6a85d3fe30ac1a41ac05734be9f61bd92325e5/dist/ramda.js#L2658
    return true;
}

equals(
    [   5,
        3,
        'string',
        { a: 1, b: NaN, c: 3, d: undefined, x: {
            y: [1, 2, 3, null, {
                z: true
            }]
        } }
    ],
    [
        5,
        3,
        'string',
        { a: 1, b: NaN, c: 3, d: undefined, x: {
            y: [1, 2, 3, null, {
                z: true
            }]
        } }
    ]
)



