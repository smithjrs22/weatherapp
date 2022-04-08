//store object for using api//

let weather = {
    apiKey: "eee684649ca8f26e54eba6e99b817178",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=imperial&appid=" + this.apiKey
        )
        .then((response) => response.json()) 
        .then((data) => console.log(this.displayWeather(data));
    },
    displayWeather: function(data) {
        let {name} = data;
        let {icon, description} = data.weather[0];
        let {temp, humidity} = data.main;
        let {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = "Temp:" + temp + "°F"
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity for today is" + humidity + "%"
        document.querySelector(".icon").src = 
        "" + icon + ".png"
        
    }
};
     
   
        
        



// .catch((error) => {console.error('Error:error')
        // });