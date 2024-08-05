const apiKey = '5242dd4684d876220d3c7bc48cec1cd2'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchButton').addEventListener('click', () => {
  const location = document.getElementById('locationInput').value;
  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('location').textContent = data.name;
      document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
      document.getElementById('description').textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
