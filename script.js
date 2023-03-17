
const apiKey = "0a432c36c988062d79f6b22f783c43ff";

// Get references to DOM elements
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const weatherInfo = document.querySelector("#weatherInfo");

// Add event listener to search button
searchBtn.addEventListener("click", searchWeather);

function searchWeather() {
  const searchTerm = searchInput.value;

  // Make API call
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Update UI with weather info
    })
    .catch((error) => console.log(error));
}
function searchWeather() {
  const searchTerm = searchInput.value;

  // Make API call
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const { name, sys, main, weather } = data;

      const icon = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
      const country = sys.country;
      const time = new Date().toLocaleTimeString();
      const temperature = Math.round(main.temp);
      const description = weather[0].description;

      // Update UI with weather info
      weatherInfo.innerHTML = `
                <h2>${name}, ${country}</h2>
                <p>${time}</p>
                <img src="${icon}" alt="Weather Icon">
                <p>${temperature}&deg;C</p>
                <p>${description}</p>
            `;
    })
    .catch((error) => console.log(error));
}

