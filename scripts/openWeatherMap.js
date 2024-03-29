const apiKey = '909b9f5fd521f22b3362b573944f96a2';
const city = 'Rexburg';

// Get the weather div container element
const weatherElement = document.getElementById('weather-container');

// Get the weather data from the API
async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&forecast?id=524901&appid=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
        //display weather data to console if response is ok
        console.log(`Weather data fetched succsesfully for ${city}`);
        console.log(data);
        //display weather data to HTML
        document.getElementById('city-name').textContent = city;
        document.getElementById('temperature').textContent = data.main.temp.toFixed(1);
        // Create an image element and append it to the weather-icon div
        const icon = document.createElement('img');
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.getElementById('weather-icon').appendChild(icon);
        // Display the weather description
        document.getElementById('description').textContent = data.weather[0].description;
 
    } else {
        console.error(`Error fetching weather: ${data.message}`);
    }
}

getWeather();