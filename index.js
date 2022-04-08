//store object for using api//
let weather = {
    apiKey: "eee684649ca8f26e54eba6e99b817178",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Charlotte&units=imperial&appid=eee684649ca8f26e54eba6e99b817178")
        .then((reponse) => response.json()) 
        .then((data) => console.log(data));
    },
};
     
   
        
        



// .catch((error) => {console.error('Error:error')
        // });