// Popup
var popup = document.getElementById("popup");

setTimeout(function() {
  window.onload(popupopen());
}, 500);

function popupopen() {
  popup.style="display: block";
}

function popupclose() {
  popup.style="display: none";
  getLocation()
}

// Dark Mode
var sec = document.querySelector(".sec");
var click = document.getElementById("btn");
var box = document.getElementById("dark")

function mode() {
  sec.classList.toggle("dark")
  if (click.innerHTML === "Dark") {
    click.innerHTML = "Light";
    click.style="color: black";
    box.style="background-color: white;border: 1px solid black"
  } else {
    click.innerHTML = "Dark";
    click.style="color: white";
    box.style="background-color: black;border: 1px solid white"
  }
}

// Location and Weather
var cityName = document.getElementById("city");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(latlong);
  } else {
    cityName.innerHTML = "Not found.";
  }
}

function latlong(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const apiKey = "3326b4fff200d14de2ee14b0590940e1";
  const unit = "metric"
  var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey + "&units=" + unit ;
  fetch(url)
     .then(response => response.json())
     .then(data => weatherData(data));
}

function weatherData(data) {
  var weatherTemp = document.getElementById("weather");
  var weatherIcon = document.getElementById("img");
  const name = data.name;
  const temp = data.main.temp;
  const icon = data.weather[0].icon;
  var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  cityName.innerHTML = name;
  weatherTemp.innerHTML = temp + "°C";
  weatherIcon.src = iconURL;
}
