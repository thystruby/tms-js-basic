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


/**
 * Задание 1
 * Написать функцию, которая принимает произвольное количество параметров и возвращает сумму числовых элементов
 * Пример: sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5) => 15
 */

/*
const onlyNumbers = function(func) {
    return function(...args) {
        const filtered = args.filter((item) => {
            if(!Number.isNaN(Number(item))) {
                return item;
            }
        });
        const result = func(...filtered);
        return result;
    }
}
function sum(...args) {
        return args.reduce((total, current) => {
        total += current;
        return total;
        
    }, 0)
}

const onlyNumbersSum = onlyNumbers(sum);

console.log(onlyNumbersSum(1,2,3,4,'heelo', 'true', 'by', undefined, 5));
*/

/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b
 */

/*
function substrac(a) {
    return (b) => {
            return a - b 
        }
    }

console.log(substrac(10)(12))
*/

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

/*
    function makePassword(somePassword) {
      
    return function checkPassword(chekedPassword) {
    if (somePassword === chekedPassword) {
        return true; 
    } else {
        return false;               
    };
};
};
    console.log(makePassword('123')('125'));
*/

/**
 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
 */

/*
function makeAbb(str) {
  const strArr = str.split(' ');
  const newArr = strArr.map((item) => {    
  return item[0];
}).join(" ");
return newArr;
};
console.log(makeAbb("Написать функцию, которая из любой фразы сделает вернет ее абревиатуру"))     
*/

/**
 * Задание 5
 * Сделайте функцию-конструктор с 2-я методами и которая принимает в качестве аргумента объект {from: Number, to: Number} 
 * При вызове метода generate() каждый вызов будет генерировать случайное числа от 'from' до 'to' и класть в массив. Число округлять до 3-х знаков после запятой 
 * Добавьте внутренний метод get(), который будет возвращать массив уже сгенерированных уникальных чисел
 * Добавьте метод clear() для отчистки массива
 * Все данные должны храниться внутри функции-конструктора.
 */


/**
 * 
 * Задание 6
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.
 */

/*
let arrFirst = [1, 2, 3, 4, 5];
let arrSecond = [1, 2, 3, 4, 5];

function isIndentical(arr1, arr2) {
    if (arr1.length === arr2.length) {
        let result = arr1.every(function(element, index) {
            return element === arr2[index]
        });
        return result
    } else {
        return false;
    };
};
console.log(isIndentical(arrFirst, arrSecond));
*/