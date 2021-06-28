'use strict';
/**
 * Домашнее задание к занятию 3.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
 */
// for (let i = 0; i < 16; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} это четное`);
//     } else {
//         console.log(`${i} это нечетное`);
//     }
// }

/**
 * Задание 2
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 * Надо написать 2 варианта: с помощью цикла for и while
*/
//    WHILE
// let i = 1;
// do {
//     let str = '';
//     if (i % 3 == 0) {
//         str += 'Fizz';
//     } if (i % 5 == 0) {
//         str += 'Buzz';
//     }

//     console.log(str ? str : i);
//     i++;
// } while (i <= 100);

//   FOR
// for (let i = 1; i <= 100; i++) {
//     let k = '';
//     if (i % 3 == 0) {
//         k += 'Fizz';
//     }
//     if (i % 5 == 0) {
//         k += 'Buzz';
//     }
//     console.log(k ? k : i);
// }

/**
 * Задание 3
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
*/

// function numbers(num) {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 4 == 0 || i % 3 == 0) {
//             sum += i;
//         }
//     }
//     return (sum);
// }
// console.log(numbers(1000));



/**
 * Задание 4
 * Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
*/

// let i = 45;
// while (i <= 67) {
//     console.log(i);
//     i++;
// }

/**
 * Задание 5*
 * Нарисовать треугольник с помощью цикла.
 * Для рисования использовать символ *(звездочка) и консоль.
 * P.S. Для рисования при каждой итерации цикла необходимо добавлять к переменной один знак "*"
*/
// Пример:
//*
//**
//***
//****
//*****
// first option

// let star = '*';
// let lines = 5;
// let str = '';
// let i = 0
// do {
//     str += star;
//     i++;
//     console.log(str);
// } while (i < lines);

// second option

// let star = '*';
// let line = 5;
// let string = '';
// for (i=0; i < line; i++) {
//     string += star;
//     console.log(string);
// }


/**
 * Задание 6
 * Написать функцию, которая будет принимать 2 аргумента и возвращать наименьшее из них
*/

// 1 Вариант:

// function difference(a, b) {
//     if (a - b > 0) {
//         console.log(b)
//     } else {
//         console.log(a)
//     }
// }
// difference(34, 213);

// 2 Вариант:
// function differ(a, b) {
//     return a <= b ? a : b;
// }
// console.log(differ(32, 14));

// 2ой более правильный ,наверное,т.к именно возвращает.


/**
 * Задание 7
 * Написать функцию, которая будет принимать в качестве аргумента объект пользователя вида: {name: 'имя', age: 'возраст'}, а так же 2 коллбэка (success и error)
 * Если возраст больше 18, то надо вызвать коллбэк succcess
 * В противном случае - error
 * success и error коллбэки оформите в качестве alert или console.log
*/

// function CheckAge(age) {
//     let user = {
//         name: 'Bob',
//         age: '',
//     };
//     if (age >= 18) {
//         console.log('success')
//     } else {
//         console.log('error')

//     }
// }
// CheckAge(18);



/**
 * Задание 8
 * Написать функцию, которая выведет в консоль числа из диапазона от 'a' до 'b'
 * Аргумент 'a' является обязательным, аргумент 'b' по умолчанию имеет значение 30
 * Если нету аргумента 'a', то надо выводить ошибку
 * Надо предусмотреть возможность вывода и обратного диапазона (если 'a' будет больше, чем 'b', то надо вывести цифры в порядке от 'b' до 'a')
 * Если числа равно, то надо вывести соответствующее сообщение.
*/
// function getNumders(a, b = 30) {
//     for (let i = a; i <= b; i++) {
//         let range = '';
//         range += i;
//         console.log(range);
//     };
//     if (a > b) {
//         for (let i = b; i <= a; i++) {
//             let rang = '';
//             rang += i;
//             console.log(rang)
//         }
//     } else if (a === b) {
//         console.log('The numbers are equal')
//     } else if (a === undefined) {
//         console.log('Enter both numbers');
//     };
// }
// getNumders(9);
/**
 * Задание 9
 * Написать функцию, которая будет принимать в качестве аргумента объект, удалять все пустые ключи и возвращать этот объект.
 * Пример:
 * { name: 'John', city: 'Minsk', job: '' } => { name: 'John', city: 'Minsk' }
*/
// function delEmptyKeys() {
//     let user = {
//         name: 'Pol',
//         city: 'Brest',
//         gender: '',
//     }
//     for (let key in user) {
//         if (user[key] === '') {
//             delete user[key];
//             console.log(user)
//         }
//     }
// }
// delEmptyKeys();

/**
 * Задание 10
 * Написать функцию, которая будет принимать 2 аргумента: объект и ключ
 * Сделать проверку на существание ключа в объекте
 * Если ключ существует необходимо вернуть true, иначе - false
*/
// const user = {
//     name: 'Bob',
//     gender: 'male',
// };
// function CheckKey(obj, key) {
//     if (key in user) {
//         return true;
//     } else {
//         return false;
//     };
// };
// console.log(CheckKey(user, 'city'));





/**
 * Задание 11
 * Создать объект типа {name: 'John', age: 42, city: 'Minsk'}
 * Клонируйте этот массив в новую переменную. Используйте 2 способа: Object.assign и цикл for in.
*/

// FOR_IN

// let user = {
//     name: 'John',
//     age: 42,
//     city: 'Minsk'
// }
// let clone = {};
// for (let key in user) {
//     clone[key] = user[key];
// };
// console.log(clone);

// OBJECT_ASSIGN

// let user = {
//     name: 'John',
//     age: 42,
//     city: 'Minsk'
// }
// let clone = Object.assign({}, user);
// console.log(clone);
