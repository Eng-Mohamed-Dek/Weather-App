const cityName = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const speed = document.getElementById("wind");
let btn = document.querySelector("button");
let search = document.getElementById("search");
let weatherIcon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");

// Fetch weather data
async function getWeather(cityname) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=640993374fab7ab04f600cc32a89a1d6`
    const response = await fetch(apiURL)

    const data = await response.json()
    weather.classList.remove('hide')

    if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = 'clouds.png'
    } else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = 'clear.png'
    } else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = 'rain.png'
    } else if (data.weather[0].main === 'snow') {
        weatherIcon.src = 'snow.png'
    } else if (data.weather[0].main === 'Drizzle') { 
        weatherIcon.src = 'drizzle.png'
    } else {
        weatherIcon.src = 'rain.png'
    }

    humidity.innerHTML = `${data.main.humidity}%`;
    speed.innerHTML = `${data.wind.speed} m/s`;
    temp.innerHTML = `${Math.round(data.main.temp)} °C`;
    cityName.innerHTML = data.name;
}

btn.addEventListener('click' , () => {
    getWeather(search.value)
})
