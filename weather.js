const weather = document.querySelector(".js-weather");

const API_key = "189d04cbc3d4fcc90dc7fe4a13ed2d76";
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const temperature = data.main.temp;
      const place = data.name;
      const type = data.weather[0].main;
      weather.innerText = `${type} ${temperature}°C @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoors = JSON.parse(loadedCoords);
    // console.log(parsedCoors);
    getWeather(parsedCoors.latitude, parsedCoors.longitude);
  }
}

function init() {
  loadCoords();
}

init();
