'use strict';
/** 
 * Домашнее задание к занятию 7.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Запросите у пользователя через prompt определенное выражение (например '2*2')
 * Создайте функцию calculator() через new Function с выражением из prompt
 * Вызовете эту функцию
*/



// const calculator = () => {
  
//   let value = prompt('Ваше выражение');
//   let func = new Function(`return ${value}`);

//   return func;
// }

// alert(calculator()());



/**
 * Задание 2
 * Создайте функцию-конструктор Stopwatch для секундомера
 * У функции должны быть 3 метода: start, stop, clear
 * При вызове start каждую секунду должен увеличиваться счетчик и выводиться в консоль
 * При вызове stop секундомер должен оставиться, но счетчик сбрасываться не должен
 * При вызове clear останавливаем секундомер и сбрасываем счетчик
 * Пример:
 * stopwatch.start() => Выводит каждую секунду новое значение в консоль
 * setTimeout(() => stopwatch.stop(), 3000) => Через 3 секунды останавливаем секундомер
 * setTimeout(() => stopwatch.start(), 6000) => Через 6 секунд запускаем секундомер, отсчет должен продолжиться с того места, на котором остановился в прошлый раз
 * setTimeout(() => stopwatch.clear(), 15000) => Через 15 секунд сбрасываем секундомер, очищаем счетчик и останавливаем интервал
 * P.S. Можете попробовать использовать не setInterval, а рекурсивный setTimeOut
*/


// function StopWatch() {
//   this.current = 0;
//   this.interval = 0;
  
//   this.start = function() {
//     this.interval = setInterval(() => {
//       this.current++;
//       console.log(this.current);
//     }, 1000);
//   }
//     this.stop = function() {
//       clearInterval(this.interval);
//   }
//     this.clear= function() {
//       this.current = 0;
//       console.log(this.current);
//       clearInterval(this.interval);
//   }
// }
// const stopWatch = new StopWatch();
// stopWatch.start();
// setTimeout(() =>{stopWatch.stop()}, 4000);
// setTimeout(() =>{stopWatch.start()}, 6000);
// setTimeout(() =>{stopWatch.clear()}, 15000);



/**
 * Задание 3
 * Напишите функию sumElements которая будет суммировать все аргументы функции
 * Напишите декоратор, который будет удалять все НЕ числовые аргументы и возвращать результат функции sumElements
*/


// function sumElements() {
  
//   return [].reduce.call(arguments, function(a, b) {
//     if(typeof b !== 'number'){
//          return a;
//     }
//     else{
//       return a + b;
//     }
//   });
// }

// console.log( sumElements(4, 5, 'first' , 6));


/**
 * Задание 4
 * Напишите функцию bindAll, котоаря будет принимать в качестве аргумента объект и привязывать контекст ко всем его методам
 * P.S. необходимо циклом пройтись по ключам объекта и если ключ является функцией, то вполнить привязку
 * Пример:
  const obj = { 
    name: 'John', 
    sayHi() { console.log(this.name) } 
  };

  ========
  const s = obj.sayHi
  s() => Ошибка т.к. потерян контекст this
  ========

  bindAll(obj)
  const f = obj.sayHi
  f() => 'John'
*/

// const obj = { 
//   name: 'Kurt', 
//   surname: 'Cobain',
//   age: 27,
//   sayRip() {
//     console.log(`RIP ${this.name}!`);
//   }
// };


// function rockstar(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'function') {
//       obj[key] = obj[key].bind(obj);
//     }
//   }
//   console.log(`${this.name} ${this.surname} kill himself in ${this.age}`);
// }


// const bindAll = rockstar.bind(obj);
// bindAll(obj);
// let sayRip = obj.sayRip;
// sayRip();
  
