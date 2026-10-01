# weather-app

# Tutorial

## Build your first weather + lexicon application
Today we will build a weather + lexicon application page with APIs, using GitHub Pages, 

1. Create a new repository and let's name it “WeatherLexi” 
2. Toggle ReadMe file as on. 
3. Visit OpenMateo to source the exact co-ordinates according to your location and visit Random lexicon to source their API. 
4. Create a new file and name it `index.html` and add the code. Commit changes. 
5. Create a new file and name it `script.js`. Add the code with javascript that will connect with the targeted APIs that lists in code. Commit changes. 
6. Create a new file and name it `style.css`.Add the code and commit changes


# How-to

## How to authenticate API requests 
1. Visit open-meteo.com and add the coordinates and information to get the API. 
2. Add the API URL in your script.js file. For eg.: `https://open-meteo.com/en/docs?latitude=19.8776&longitude=75.3423&daily=sunrise,sunset&timezone=auto`
3. Commit changes
4. The live web page will run the APIs and fetch information. 
[ Same applies to Random Lexicon API] 


## How to retrieve weather for a location
1. Visit open-meteo.com and add the coordinates
2. You can tick the box to fetch the weather data every two hours.
3. Temperature, rain, precipitation are also some options available to use. 
4. On the page scroll below and fetch the API URL that will run the requests we ticked mark. 

## How to get random words for the site 
1. Visit [randomlexico.com](https://randomlexicon.com/api-quick-start)
2. Add the code to your page. Commit changes. 


## How to handle API errors
1. APIs server will communicate via JSON. Ensure you have JavaScript enabled and Js. code in your file. 
2. Ensure you have `index.html` and `style.css` file targeting the page structure to yield results through API. 
3. () fetch - Ensure the element is used. 

# Reference

## Authentication
It is a process where the user server needs to validate the request that is sent to the API server to fetch the database. It is verifying the client side application and server that's initiating an API request. 

## Endpoints
It is a digital location where an API ( Application Programming Interface) receives API calls or requests. These calls are received to fetch database available on the server. The URL is the form of the endpoint that has components. 

# Explanation

## How the weather API works
With Open Mateo you can use their API for non commercial use for upto 10.000 daily limits. Once you fill in the information and tick the box it will give a URL for you to use. Add the API URL in your js file and run the code. Js will make the call to API server to fetch database and the API will communicate with JSON files that will be appearing on the web page of the user. 

## How the lexicon API works
The Random Lexicon API fetches the words and definitions from Wiktionary through Kaikki.org. 
To generate random word one can make an API endpoint that will be able to read JSON response. 
Skim through their quick start guide at: [randomlexicon.com](https://randomlexicon.com/api-quick-start)

## Why we use API keys
By using API keys we can create a container on our user server that fetches the information from the API server database in a secure way. API keys can help the API server to monitor the usage and control the main database. 


