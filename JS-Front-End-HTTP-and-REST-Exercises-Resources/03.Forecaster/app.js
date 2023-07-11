function attachEvents() {
  const getWeatherBtn = document.getElementById("submit");
  getWeatherBtn.addEventListener("click", getWeather);

  async function getWeather() {
    const BASE_URL = "http://localhost:3030/jsonstore/forecaster/locations";
    const locationName = document.getElementById("location").value;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const info = data.find((x) => x.name === locationName);
    
    createForecast(info.code);
    
  }

  async function createForecast(code) {
    const BASE_URL_Today = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const BASE_URL_Three_Days = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
    let forecastContainer = document.getElementById('forecast');
    forecastContainer.style.display = 'block';

    const responseToday = await fetch(BASE_URL_Today);
    const dataToday = await responseToday.json();
    let currentContainer = document.getElementById('current');

    const responseThreeDays = await fetch(BASE_URL_Three_Days);
    const dataThreeDays = await responseThreeDays.json();

    createToday(dataToday,currentContainer);
    createThreeDays(dataThreeDays,currentContainer);
  }

  function createToday(data,currentContainer){
    const {condition, high, low} = data.forecast;

    //Creating Elements
    let forecastsContainer = document.createElement('div');
    forecastsContainer.classList.add('forecasts');
    
    let spanCondition = document.createElement('span');
    spanCondition.classList.add('condition', 'symbol');

    let spanContainer = document.createElement('span');
    spanContainer.classList.add('condition');

    // Forecast Data
    let spanName = document.createElement('span');
    spanName.classList.add('forecast-data');
    spanName.textContent = data.name;

    let spanTemp = document.createElement('span');
    spanTemp.classList.add('forecast-data');
    spanTemp.innerHTML = `${low}&#176;/${high}&#176;`;

    let spanWeather = document.createElement('span');
    spanWeather.classList.add('forecast-data');
    spanWeather.textContent = condition;
    
    checkWeatherCondition(condition,spanCondition);
    


    
    spanContainer.appendChild(spanName);
    spanContainer.appendChild(spanTemp);
    spanContainer.appendChild(spanWeather);
    forecastsContainer.appendChild(spanCondition);
    forecastsContainer.appendChild(spanContainer);
    currentContainer.appendChild(forecastsContainer);

  }

  function createThreeDays(data){
    
    let forecastData = data.forecast;
    let forecastInfo = document.createElement('div');
    forecastInfo.classList.add('forecast-info');

    for (const {condition,high,low} of forecastData) {
      
      

      let upcomingSpan = document.createElement('span');
      upcomingSpan.classList.add('upcoming');

      let symbolSpan = document.createElement('span');
      symbolSpan.classList.add('symbol');

      let temperature = document.createElement('span');
      temperature.classList.add('forecast-data');
      temperature.innerHTML = `${low}&#176;/${high}&#176;`;
      
      let spanCondition = document.createElement('span');
      spanCondition.classList.add('forecast-data'); 
      spanCondition.innerHTML = condition;
      checkWeatherCondition(condition,symbolSpan);


      upcomingSpan.appendChild(symbolSpan);
      upcomingSpan.appendChild(temperature);
      upcomingSpan.appendChild(spanCondition);
      forecastInfo.appendChild(upcomingSpan);
      let upcomingDiv = document.getElementById('upcoming');
      upcomingDiv.appendChild(forecastInfo);
    }
   
   
  }

  function checkWeatherCondition(condition,spanCondition){

    if (condition == 'Sunny') {
      spanCondition.innerHTML = '&#x2600;'
    }

    else if(condition == 'Partly sunny'){
      spanCondition.innerHTML = '&#x26C5;'
    }

    else if (condition == 'Overcast') {
      spanCondition.innerHTML = '&#x2601;'
    }

    else if(condition == 'Rain') {
      spanCondition.innerHTML = '&#x2614;'
    }
  }

}

attachEvents();
