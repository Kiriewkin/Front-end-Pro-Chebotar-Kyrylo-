const apiKey = '3682a8e8870fb39f76c2731fb7566b0a';
const weatherData = document.getElementById('weatherData');
const updateButton = document.getElementById('updateButton');

async function fetchWeather(city = 'Kharkiv') {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        weatherData.textContent = 'Помилка отримання даних. Спробуйте ще раз.';
        return;
    }

    const data = await response.json();
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const wind = data.wind.speed;
    const feelsLike = data.main.feels_like;

    weatherData.innerHTML = '';

    const weatherContainer = document.createElement('div');
    const weatherList = document.createElement('ul');

    const temperatureItem = document.createElement('li');
    temperatureItem.textContent = `Температура: ${temperature} °C`;

    const descriptionItem = document.createElement('li');
    descriptionItem.textContent = `Опис: ${description}`;

    const humidityItem = document.createElement('li');
    humidityItem.textContent = `Вологість: ${humidity}%`;

    const pressureItem = document.createElement('li');
    pressureItem.textContent = `Тиск: ${pressure} hPa`;

    const windItem = document.createElement('li');
    windItem.textContent = `Швидкість вітру: ${wind} км/год`;

    const feelsLikeItem = document.createElement('li');
    feelsLikeItem.textContent = `Відчувається як: ${feelsLike} °C`;

    weatherList.appendChild(temperatureItem);
    weatherList.appendChild(descriptionItem);
    weatherList.appendChild(humidityItem);
    weatherList.appendChild(pressureItem);
    weatherList.appendChild(windItem);
    weatherList.appendChild(feelsLikeItem);

    weatherContainer.appendChild(weatherList);
    weatherData.appendChild(weatherContainer);
}

fetchWeather();

updateButton.addEventListener('click', () => {
    fetchWeather();
});