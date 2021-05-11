'use strict';
/** 
 * Домашнее задание к занятию 5.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Написать код, который заменит регистр каждого символа на противоположный
 * Например 'Hello world' -> 'hELLO WORLD'
*/
// const string = 'Hello world'
// const arr = string.split('')
// const newArr = arr.map((el, index) => {
//     if(el === el.toUpperCase()) {
//         return el.toLowerCase()
//     } else {
//         return el.toUpperCase()
//     }
// })
// const stringArr = newArr.join('')
// console.log(stringArr)

/**
 * Задание 2
 * Написать функцию, которая будет принимать 2 аргумента: строку и массив, а далее фильтровать строку и заменять запрещенные слова на конструкцию типа  '[первая буква слова]***'
 * Список запрещенных слов представляет из себя массив вида: ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
 * Пример работы функции: textFilter('I have a gun', ['fuck', 'criminal', 'drugs', 'gun', 'stupid']) => 'I nav a g***'
 * Проверка на запрещенное слово должна быть регистронезависимой
 * P.S. используйте map()
 * P.S.S. Строку необходимо разбить по символу пробела ' ' что бы получить массив слов
*/
// const badArr = ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
// function textFilter(str, arr) {
//     const strArr = str.split(' ')

//     const goodArr = strArr.map(element => {
//         if(arr.includes(element)) {
//             return `${element.charAt(0)}${new Array(element.length).join('*')}`
//         }

//         return element
//     })

//     return goodArr.join(' ')

// }
// console.log(textFilter('I fuck this arr methods iam stupid criminal drugs', badArr))

/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив уникальных элементов. Т.е. массив, который не содержит повторных значений
 * Пример: getUniqueElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе", 1]
*/
// const arr = ["кришна", "кришна", "харе", "харе", 1]
// // ####### FUNCTION START #######
// function getUniqueElements(arr) {
//     const newArr = []
//     arr.forEach((element, index) => {
//         if(newArr.includes(element)) {
//             return
//         }
//         newArr.push(element)
//     })
//     return newArr
// }
// // ###### FUNCTION END ########
// console.log(getUniqueElements(arr))

// const oneSukaDeystvie = arr => Array.from(new Set(arr))

// console.log(oneSukaDeystvie([1,1,1,1,1,2,2,2]))

/**
 * Задание 4
 * Напишите код, который проверит является строка палиндромом (слово, которое с обеих сторон читается одинаково) и вернет true либо false
 * Например 'репер', 'шалаш'
 * Пример: palindrome('репер') => true
*/
// function palindrome(word) {
//     let splitWord = word.split('')
//     let reverseWord = splitWord.reverse()
//     let joinWord = reverseWord.join('')
//     if(word === joinWord){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(palindrome('рембо'))

// const foo = word => word === word.split('').reverse().join('') ? true : false

// console.log(foo('lolo'))

/**
 * Задание 5
 * Написать функцию которая отсортирует массив пользователей по возрасту сверху вниз
 * Пример: sortByAge([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]) => [{name: 'Петя', age: 30}, {name: 'Маша', age: 27}, {name: 'Вася', age: 12}]
*/
// function sort(arr) {
//     arr.sort((a, b) => {
//         return b.age - a.age
//     })
//     return arr
// }
// console.log(sort([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]))

/**
 * Задание 6
 * Написать функцию, которая будет искать пользователей, у которых возраст больше 18 лет.
 * Пример: getAdult([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]) => [{name: 'Маша', age: 18}, {name: 'Виктор', age: 40}]
 * Использовать метод filter/find
*/
// function ageFilter(arr) {
//     const filter = arr.filter(item => item.age >= 18)
//     return filter
// }
// console.log(ageFilter([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]))

/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
*/
// function foo(arr, value) {
//     if(arr.includes(value)) {
//         for (let val in arr) {
//             if(arr[val] === value) {
//                 return val
//             }
//         }
//     } else {
//         return -1
//     }
// }
// console.log(foo([1, 9, 'fjfj'], 6))

/**
 * Задание 8
 * Создать массив из 10 чисел. Необходимо высчитать сумму всех элементов
 * Используем reduce
*/
// const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].reduce(function(a, b) {
//     return a + b;
//   });
//   console.log(arr)
/**
 * Задание 9
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой.
 * Получите значения двумя разными способами: с помощью join и reduce
*/
// const arr = ['my', 'lovely', 'homework']
// const stringJoin = arr.join(',')
// console.log(stringJoin)

// const stringReduce = arr.reduce((acc, next) => {
//     return acc + ',' + next
// })
// console.log(stringReduce)


/**
 * Задание 10.
 * Написать функцию, которая будет принимать в качестве параметра объект вида {start: Number, end: Number, string: String} и обрезать строку из центра в соответствии со значениями start и end.
 * Например: cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }) => 'r47qi...ntkpy'
*/
// function foo(obj) {
//     const { start, end, string } = obj
//     const croppedString = string.slice(start, string.length - end)
//     return string.replace(croppedString, '...')
// }
// console.log(foo({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }))
