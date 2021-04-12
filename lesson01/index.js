'use strict';
/** 
 * Домашнее задание к занятию 1.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1.
 * Подключить этот JS файл в HTML документ.
 * Создайте несколько переменных с разными типами данных: number, string, boolean, null, undefined
 * Выведите через запятую "типы" этих переменных в консоль
*/

/*
let number = 15;
let str = "fjgh";
let myCommit = true;
let a = null;
let b;
console.log( number, str, myCommit, a, b);
*/


/**
 * Задание 2.
 * Объявите 2 переменные: admin и name
 * В переменную name положите строку "John"
 * Скопируйте значение из переменной name в переменную admin
 * Выводите в alert следующую строку "Активный администратор: [значение переменной admin]".
 * P.S. Надо использовать шаблонные строки ("обратные" ковычки)
*/

/*
let userName = "John";
let admin = userName;
alert(`Активный администратор: ${admin}`);
*/


/** 
 * Задание 3.
 * Создайте константу с текстом "Привет"
 * С помощью метод prompt запросите у пользователя его имя. По умолчанию установить значение "Имя пользователя"
 * Выводите в alert строку типа "[константа] [значение, введенное в prompt]"
*/

/*
const hello = "Привет";
let userName = prompt("Ваше имя?");
alert(`${hello}, ${userName}`); 
*/


/**
 * Задание 4.
 * Выведите confirm с текстом "Получить доступ?"
 * Выведите в alert значение, полученное из confirm 
*/
let myPass = confirm("Получить доступ");
alert(`${myPass}`);
