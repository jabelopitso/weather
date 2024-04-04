let weather = {
  apikey: "ea09b2e7e6be71b0545a7d9119da1a34",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((error) => console.log("Error fetching weather data:", error));
  },
  displayWeather: function (data) {
    const { name } = data;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading")
  },
  search: function () {
    let city = document.querySelector(".search-bar").value;
    this.fetchWeather(city);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
    
})