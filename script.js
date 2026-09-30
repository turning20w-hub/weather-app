// ==========================
// WEATHER
// ==========================

const weatherURL =
    "https://api.open-meteo.com/v1/forecast?latitude=19.0728&longitude=72.8826&hourly=temperature_2m";

const aurangabadURL =
    "https://api.open-meteo.com/v1/forecast?latitude=19.8776&longitude=75.3423&daily=sunrise,sunset&hourly=temperature_2m&timezone=auto";


const locationElement =
    document.getElementById("location");

const temperatureElement =
    document.getElementById("temperature");

const conditionElement =
    document.getElementById("condition");

const messageElement =
    document.getElementById("message");

const aurangabadTemperature =
    document.getElementById("aurangabad-temperature");

const aurangabadSunrise =
    document.getElementById("aurangabad-sunrise");

const aurangabadSunset =
    document.getElementById("aurangabad-sunset");


async function getWeather() {

    try {

        messageElement.textContent = "Loading weather...";

        // Mumbai
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


        // Aurangabad
        const aurangabadResponse =
            await fetch(aurangabadURL);

        const aurangabadData =
            await aurangabadResponse.json();

        console.log(aurangabadData);

        const aurangabadTemp =
            aurangabadData.hourly.temperature_2m[0];

        const sunrise =
            aurangabadData.daily.sunrise[0];

        const sunset =
            aurangabadData.daily.sunset[0];

        aurangabadTemperature.textContent =
            `${aurangabadTemp}°C`;

        aurangabadSunrise.textContent =
            `Sunrise: ${sunrise}`;

        aurangabadSunset.textContent =
            `Sunset: ${sunset}`;


        messageElement.textContent = "";

    } catch (error) {

        console.error(error);

        messageElement.textContent =
            "Unable to load weather data.";

    }

}


getWeather();


// ==========================
// RANDOM LEXICON
// ==========================

const API_BASE =
    "https://randomlexicon.com/api/random-definition";

const fetchBtn =
    document.getElementById("fetchBtn");

const posFilter =
    document.getElementById("posFilter");

const statusEl =
    document.getElementById("status");

const resultEl =
    document.getElementById("result");

const errorEl =
    document.getElementById("error");

const wordEl =
    document.getElementById("word");

const partOfSpeechEl =
    document.getElementById("partOfSpeech");

const definitionEl =
    document.getElementById("definition");


fetchBtn.addEventListener("click", fetchWord);


async function fetchWord() {

    const url =
        new URL(API_BASE);


    // Add the part-of-speech filter
    // only if the user selected one.

    if (posFilter.value) {

        url.searchParams.set(
            "pos",
            posFilter.value
        );

    }


    setLoadingState();


    try {

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                `Request failed: ${response.status}`
            );

        }


        const data =
            await response.json();


        if (
            !data.ok ||
            !data.word ||
            !data.definition
        ) {

            throw new Error(
                "Unexpected API response"
            );

        }


        renderResult(data);


    } catch (error) {

        console.error(error);

        showError(
            "Unable to fetch a word right now. Please try again."
        );


    } finally {

        fetchBtn.disabled = false;

    }

}


function setLoadingState() {

    fetchBtn.disabled = true;

    statusEl.textContent =
        "Loading...";

    errorEl.textContent =
        "";

    resultEl.hidden =
        true;

}


function renderResult(data) {

    wordEl.textContent =
        data.word;

    partOfSpeechEl.textContent =
        data.pos || "";

    definitionEl.textContent =
        data.definition;

    statusEl.textContent =
        "";

    errorEl.textContent =
        "";

    resultEl.hidden =
        false;

}


function showError(message) {

    statusEl.textContent =
        "";

    errorEl.textContent =
        message;

    resultEl.hidden =
        true;

}
