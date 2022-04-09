//store object for using api//

//define all variables//

//buttons, search bar, user input//
let searchBar = document.getElementById("search-bar");
let searchButton = document.getElementById("search-button");

//weather data is object, and we store api response as the object//
function getWeather() {
  let userInput = document.getElementById("search-bar").value;
  const weatherData = fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${userInput},US&appid=eee684649ca8f26e54eba6e99b817178&units=imperial`
  ).then(response => response.json()); //takes json and turns into an javascript ojbect/
  weatherData.then(data => {
    showWeather(data); //showWeather take values from weatherdata, but needs to have showWeather so i can have the values//
    console.log(data); //now we have data
  });
}
searchButton.addEventListener("click", getWeather);

//pass the weatherData object to it, grabbing the values from object to html page//
function showWeather(data) {
  //the variables for the content i want to get//
  let city = document.getElementById("city");
  let temp = document.getElementById("temp");
  let tempHiLow = document.getElementById("tempHiLow");
  let currentConditions= document.getElementById("current-conditions");
  let humidity = document.getElementById("humidity");
  let currentDate = document.getElementById("current-date");
  // let icon = document.getElementById("icon");
  city.innerHTML = `${data.name}`;
  temp.innerHTML = `Temperature ${data.main.temp} &#176;F`;
  tempHiLow.innerHTML = `High ${data.main.temp_min}&#176;F / Low ${data.main.temp_max}&#176;F`;
  currentConditions.innerHTML = `${data.weather[0].description}`;//currently comes back undefined//
  humidity.innerHTML = `Humidity ${data.main.humidity}%`;
  currentDate.innerHTML = `Current Date is ${new Date()}`;
  // icon.innerHTML = `${data.weather.icon}`;
}


