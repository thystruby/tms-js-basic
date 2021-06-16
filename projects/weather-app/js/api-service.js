// Тут пишем код для обращения к API
// В данном задании мы используем 2 API с openweather
// 1. https://openweathermap.org/current
// 2. https://openweathermap.org/forecast16
// Код для обращения к API через fetch() смотрим по этим ссылкам в документации
// Тут должно быть 2 функции: получение информации о городе (current) и функция получения прогноза погоды на 16-дней.
// P.S. Помните, что для обращени к API необходимо использовать свой API_KEY


/*http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}*/

const API_KEY = '58b6f7c78582bffab3936dac99c31b25';
const getCurrentApiUrl = (city, apiKey) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

const getForecastApiUrl = (city, apiKey) => `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=16&appid=${apiKey}`

class WeatherApiService {
  static async getWeatherInfoByName(city) {
    const response = await fetch(getCurrentApiUrl(city, API_KEY));
    const data = await response.json();
    return data;
  }
  static async getWeatherForecast(city) {
    const response = await fetch(getForecastApiUrl(city, API_KEY));
    const data = await response.json();
    return data;
  }
}

export default WeatherApiService;