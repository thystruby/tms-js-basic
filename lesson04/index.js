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
// const obj = {
//     name: 'John',
//     surname: 'Doe',
//     getFullName () {
//         alert(`Полное имя: ${this.name} ${this.surname}`)
//     }
// }
// obj.getFullName()

/**
  * Задание 2
  * Создайте функцию-конструктор User который будет принимать 2 аргумента: имя и фамилия
  * Добавьте метод getFullName по аналогии с первым заданием
  * Создайте 2 объекта на основе конструктора и передайте в них разные значения
  * Выведите в консоль getFullName для 2-х новых объектов
*/
// function User(name, surname) {
//     // this = {}
//    this.name = name;
//    this.surname = surname;
//    this.getFullName = function() {
//             console.log(`Полное имя: ${this.name} ${this.surname}`)
//         }
//     // return this
// }
// let user1 = new User('Ваня', 'Сорокин')
// let user2 = new User('Влад', 'Муксинов')
// user2.getFullName()



/**
 * Задание 3
 * Создайте конструктор Animal который будет принимать 2 параметра: имя, голос, и переменную типа boolean - canFly
 * Конструктор будет иметь 2 метода.
 * 1) sayHi который будет вызывать alert со строкой "[имя] говорит [голос]"
 * 2) fly который будет вызывать alert со строкой "[name] умеет летать". Если переменная canFly равна false, то выводить строку "[имя] не умеет летать"
 * Пример вызова: dog.sayHi() => "Собака говорит ГАВ"; dog.fly() => "Собака не умеет летать"
 * raven.sayHi() => "Ворон говорит КАР-КАР"; raven.fly() =>  "Ворон умеет летать"
*/
// function Animal(name, voice, canFly) {
//     this.name = name;
//     this.voice = voice;
//     this.canFly = canFly;
//     this.sayHi = function() {
//         console.log(`${this.name} says ${this.voice}`)
//     };
//     this.fly = function() {
//         if(this.canFly) {
//             console.log(`${this.name} can fly`)
//         } else {
//             console.log(`${this.name} can't fly`)
//         }
//     }
// }
// let dog = new Animal('dog', 'Wof-Wof', false)
// let raven = new Animal ('raven', 'Kar-Kar', true)
// dog.sayHi()
// dog.fly()
// raven.sayHi()
// raven.fly()
/**
 * Задание 4
 * Создайте функцию crossOrPile которая будет рандомно возвращать "Орел" или "Решка".
 * Округлять до ближайшего целого.
*/
// function crossOrPile() {
//     // Math.round(Math.random()) === 1 ? console.log("Orel") : console.log('Reshka');
//     const a = Math.random() 
//     const b = Math.round(a)
//     b === 1 ? console.log('Орел') : console.log('Решка')
// }
// crossOrPile()


/**
 * 
 * Задание 5
 * Создать функцию которая будет принимать 2 значения: число и степень
 * Функция должна возвращать число, возведенное в степень
 * Предусмотреть проверку на число. 
 * Если передаем например строку "12.2234284px", то должно браться число 12.22. Т.е. округляем до 2-х знаков после запятой
 * Надо использовать Math
*/
// function foo(number, degree) {
//     const parsedNum = parseFloat(number).toFixed(2)
//     if(isNaN(parsedNum) || isNaN(degree)) {
//        throw new Error('NaN')
//     }
//     return Math.pow(parsedNum, degree)
// }
// console.log(foo("12.2234284px", 2))
/**
 * Задание 6
 * Создайте массив из 5 любых элементов.
 * Напишите функцию, которая будет возвращать клонированный массив.
 * P.S. необходимо использовать цикл
*/
// const arr = [1, 2, 9, 4, 5]
// function clone(arr) {
//     const clonedArr = []
//     for(let i = 0; i < arr.length; i++) {
//         clonedArr.push(arr[i])
//     }
//     return clonedArr
// }
// console.log(clone(arr))

/**
 * Задание 7
 * Есть массив элементов. Например: [1, 'строка', 2, '-5', 13]
 * Надо написать функцию, которая будет суммировать числа массива и выводить результат.
 * Так же надо предусмотреть проверку на число. 
 * Если элемент массива является строкой, которую нельзя привести к числу в явном виде, то надо пропускать элемент и переходить к следующему.
 * Пример: [1, 'строка', 2, '-5', 13] => 11
*/
// let arr = ['fjffj', 1, 'строка', 2, '-5', 13] // объявление массива
// function sum(array) { // создаем функцию
//     const sumArr = array.reduce((acc, next) => { // создаем переменную, кладем в нее массив с методом сложения элементов, как аргумент этот метод принимает callback(функцию). В нем есть параметры текущего и следующего значения
//         if(isNaN(next)) { // делаем проверку на следующее значение
//             return acc // возвращаем сохраненное значение если следующее значение не удалось привести к числу
//         }
//         else { 
//             return acc + +next // далее суммируем уже имеющееся значение со следующим числовым
//         }
//     }, 0) // делаем изначально acc 0, чтобы acc по умолчанию был числом и не препятствовал нашему циклу и его окончательному решению
//     console.log(sumArr) // вызываем получившееся решение
// }
// sum(arr) // вызываем функцю с интересующим нас массивом


/**
 * Задание 8
 * Напишите функцию которая будет принимать 2 аргумента: начало и конец диапазона
 * Функция должна возвращать произведение всех элементов в заданном диапазоне.
 * Пример: range(1, 10) => 3628800. Что соответствует 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10
*/
// function range(begin, end) {
//     let multiplication = begin;
//     for(let i = begin + 1; i <= end; i++) {
//         multiplication *= i
//     }
//     console.log(multiplication)
// }
// range(1, 10)

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
//     {name: 'John', age: 42 }, 
//     {name: 'Ashton', age: 37}, 
//     {name: 'Bruce', age: 50}, 
//     {name: 'Dakota', age: 25}
// ]
// function findUser(array, searchLine) { // создаем функцию
//     let user = '' // создаем переменную
//     array.forEach((item, index) => { // наделяем метод forEach параметрами
//         if(item.name === searchLine) { // делаем проверку на соответствие  
//             user = item
//         }
//     })
//     if(user) {
//        return alert(JSON.stringify(user)) // способ передачи данных в виде строки
//     }
//     return alert("No results found for your request")
// }
// findUser(data, 'Bru')
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
// const studentsArr = [ {name: 'Вася', percent: 80}, {name: 'Зина', percent: 77}, {name: 'Катя', percent: 88}, {name: 'Петя', percent: 95}, {name: 'Вова', percent: 57} ]
// // #### Function Start #### //
// function checkPercentage(arr) {
//     // #### map #### //
//     const mappedArr = arr.map((el, index) => {
//         switch(true) {
//             case el.percent >= 90:
//                 return {
//                     ...el,
//                     grade: 5
//                 }
//             case el.percent >= 80:
//                 console.log(el)
//                 return {
//                     ...el,
//                     grade: 4
//                 }
//             case el.percent >= 70:
//                 return {
//                     ...el,
//                     grade: 3
//                 }
//             case el.percent >= 60:
//                 return {
//                     ...el,
//                     grade: 2
//                 }
//             default: 
//                 return {
//                     ...el,
//                     grade: 'не сдал'
//                 }
//         }
//     })
//     // #### end map #### //
//     mappedArr.forEach(element => {
//         console.log(`${element.name} - ${element.grade}`);
//     });
// }
// // #### Function end #### //
// checkPercentage(studentsArr)
function foo(azaza) {
    azaza()
} 

foo(() => {
    console.log(1)
})

function ue(w, e) {

}
ue(2,8)