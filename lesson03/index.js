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

// let i = 0;
// while (i <= 15) {
//     if (i % 2 == 0) 
//         console.log(`${i} это четное`);
//     if(i % 2 == 1)
//         console.log(`${i} это нечетное`);
//     i++
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
//  let i = 0;
// while(i <= 100) {
//     if (i % 3 === 0) {
//         console.log(`${i} Fizz`);
//     }
//     if (i % 5 === 0){
//         console.log(`${i} Buzz`);
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} FizzBuzz`);
//     }
//      i++
// } 

// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(`${i} Fizz`);
//     }
//     if (i % 5 === 0) {
//         console.log(`${i} Buzz`);
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} FizzBuzz`);
//     }
// }

/**
 * Задание 3
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
*/
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i <= 1000; i++) {
//     if (i % 4 === 0) {
//         sum1 += i
//     }
//     if (i % 3 === 0) {
//         sum2 += i
//     }
// }
// console.log(`${sum1}, ${sum2}`)


/**
 * Задание 4
 * Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
*/

// let i = 45;
// while(i < 67){
//     console.log(i)
//     i++
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

// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i));

// }



/**
 * Задание 6
 * Написать функцию, которая будет принимать 2 аргумента и возвращать наименьшее их них
*/

// function min (a, b){
//     return Math.min(a,b)
// }
// const m = min(9, 2)
// console.log(m);

/**
 * Задание 7
 * Написать функцию, которая будет принимать в качестве аргумента объект пользователя вида: {name: 'имя', age: 'возраст'}, а так же 2 коллбэка (success и error)
 * Если возраст больше 18, то надо вызвать коллбэк succcess
 * В противном случае - error
 * success и error коллбэки оформите в качестве alert или console.log
*/
// const success = () => console.log('success')

// const error = () => console.log('error')

// const user = {
//     name: 'Alex',
//     age: 23,
// }
// function checkAge(user, onSuccess, onError) {
//     if (user.age > 18) {

//         onSuccess()
//     }else {

//         onError()
//     }
// }


// checkAge(user, success, error);

/**
 * Задание 8
 * Написать функцию, которая выведет в консоль числа из диапазона от 'a' до 'b'
 * Аргумент 'a' является обязательным, аргумент 'b' по умолчанию имеет значение 30
 * Если нету аргумента 'a', то надо выводить ошибку
 * Надо предусмотреть возможность вывода и обратного диапазона (если 'a' будет больше, чем 'b', то надо вывести цифры в порядке от 'b' до 'a')
 * Если числа равно, то надо вывести соответствующее сообщение.
*/
// function logRange (a,b) {
//     for (let index = a; index <= b; index++) {
//         console.log(index);
//     }
// }

// function logCondRange (a, b = 30) {
//     if (!a && a != 0){
//         console.log('error');
//         return;
//     }
//     if (a === b){
//         console.log('equal');
//     }
//     if (a > b){ 
//         logRange(b, a)
//     }else {
//         logRange(a, b)
//     }

// }
//  logCondRange(0)

/**
 * Задание 9
 * Написать функцию, которая будет принимать в качестве аргумента объект, удалять все пустые ключи и возвращать этот объект.
 * Пример:
 * { name: 'John', city: 'Minsk', job: '' } => { name: 'Alex', city: 'Minsk' }
*/

// const testObj = { name: 'John', city: 'Minsk', job: '' }

// function removeEmptyKeys (object){
//     for (const key in object) {
//         if (object[key] === '') {
//             delete object[key]

//         }
//     }
//     return object
// }

// console.log(removeEmptyKeys(testObj));
/**
 * Задание 10
 * Написать функцию, которая будет принимать 2 аргумента: объект и ключ
 * Сделать проверку на существание ключа в объекте
 * Если ключ существует необходимо вернуть true, иначе - false
*/
// function isObjectKeyExist(object, key) {
//     return object[key] !== undefined
// }

// console.log(isObjectKeyExist({a: 1}, "b"));



/**
 * Задание 11
 * Создать объект типа {name: 'John', age: 42, city: 'Minsk'}
 * Клонируйте этот массив в новую переменную. Используйте 2 способа: Object.assign и цикл for in.
*/
// const object = {name: 'John', age: 42, city: 'Minsk'}
// const objCoppy = Object.assign(object)
// const objCoppy2 = {};
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//      objCoppy2[key] = object[key]
//     }
// }

// console.log(objCoppy, objCoppy2);