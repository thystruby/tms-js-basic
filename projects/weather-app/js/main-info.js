class MainInfoComponent {
    static getMainCointainerHTML() {
      return `
        <div class="container container-main">
          <div class="main-body"></div>
        </div>
      `;
    }
  
    static getMainInfoHTML({name, weather, main}) {
      return `
        <div class="main-info">
          <div class="city">
            <span class="uppercase">${name}</span> 
            <span class="type">${weather[0].description}</span>
          </div>
          <img class="icon" src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" />
          <div class="temp">
            <div class="temp-value">
              <!-- В зависимости от типы температуры (цельсий/фаренгейт) надо отображать тут это значение. По умолчанию с API мы получаем значение в цельсиях.  -->
              <!-- Значение округляем с помощью Math.round() -->
              <div>${main.temp}</div> 
              <div class="temp-controls">
                <!-- Надо сделать переключение между цельсиями и фаренгейтами. Формулу погуглите 🙂  -->
                <!-- Активное значение (цельсии или фаренгейты) наверное стоит хранить в localStorage -->
                <button class="temp-type temp-type-active">°C</button>
                <span>|</span>
                <button class="temp-type">°F</button>
              </div>
            </div>
            <!-- Тут так же надо сделать переключание между цельсиями/фаренгейтами -->
            <div>(min. ${main.temp_min} °C / max. ${main.temp_max} °C)</div> 
          </div>
        </div>
      `;
    }
  
    static getAdditionalInfoRow() {
      return ``
    }
  }
  
  export default MainInfoComponent;