// Основной JS код приложения
// ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ: Было бы очень круто, если бы в данном приложении мы применили "компонентный" подход
// Суть заключается в том, что бы создать папку components, а в ней для каждого 'компонента' создать отдельный файл с функцией
// Эта функция должна принимать необходимые ей данный, а затем возвращать заполненный HTML код. P.S. конструируем HTML с помощью шаблонных строк ``
// После описания функции ее необходимо экспортировать, а что бы ее использовать в основном коде необходимо соответственно сделать import 
// После этого элемент c помощью JS вставляется в HTML.
// Все "компоненты" я пометил в HTML с помощью аттрибута data-component
// В таком случае у нас HTML файл изначально будет практически пустым. Основные HTML элементы мы будем создавать и вставлять через JS.
// Все стили прописаны в файле index.css, главное сохранить html структуру и классы. Просто аккуратно скопировать код из index.html :) 
// Пример использования: 
/*
import Forecast from './components/forecast.js'

const initializeForecast = () => {
  const forecastContainer = Forecast(); // Передаем необходимые аргументы, например массив элементов полученный с API. В переменную forecastContainer у нас поместится html код компонента
  const forecastPlace = document.querySelector('.forecast-place'); // Место, в которое будем вставлять компонент
  forecastPlace.insertAdjacentHTML('afterbegin', forecastContainer); // Собственно метод "вставки"
}
 */

import WeatherApiService from './api-service.js';

const searchButton = document.querySelector('.search-button');

function getCurrentDate() {
  const todayDate = document.querySelector(".date")
  const date =new Date(Date.now());

  const day = date.getDate();
  const month = (date.getMonth() + 1).toString().padStart(2,"0");
  const year = date.getFullYear();


  todayDate.innerHTML = `Today ${day}.${month}.${year}`
}
getCurrentDate();


searchButton.addEventListener('click', async () => {
  try {
    const mainData = await WeatherApiService.getWeatherInfoByName('Minsk');
    const forecastData = await WeatherApiService.getWeatherForecast('Minsk');
    console.log(mainData);
    console.log(forecastData);
  } catch (error) {
    console.log(error);
  }
});



