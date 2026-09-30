const weatherURL =
    "https://api.open-meteo.com/v1/forecast?latitude=19.0728&longitude=72.8826&hourly=temperature_2m";


const locationElement =
    document.getElementById("location");

const temperatureElement =
    document.getElementById("temperature");

const conditionElement =
    document.getElementById("condition");

const messageElement =
    document.getElementById("message");


async function getWeather() {

    try {

        messageElement.textContent =
            "Loading weather...";


        const response =
            await fetch(weatherURL);


        const weatherData =
            await response.json();


        console.log(weatherData);


        const temperature =
            weatherData.hourly.temperature_2m[0];


        locationElement.textContent =
            "Mumbai";


        temperatureElement.textContent =
            `${temperature}°C`;


        conditionElement.textContent =
            "Hourly temperature forecast";


        messageElement.textContent =
            "";


    } catch (error) {

        console.error(error);

        messageElement.textContent =
            "Unable to load weather data.";

    }

}


getWeather();
