const API_KEY = "0133cc5316757ac730cc46ee342334e4";

const form = document.querySelector("#weatherForm");
const weatherInfo = document.querySelector(".info");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchedCity = city.value;

    const response = await fetch(
        // https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}
    );

    const data = await response.json();

    console.log(data);

    weatherInfo.innerHTML = `
        <h3>Weather Info</h3>
        <p>City: ${data.name}</p>
        <p>Temp: ${(data.main.temp - 273.15).toFixed(1)}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}</p>
        <p>Wind: ${data.wind.speed} m/s</p>
    `;
} else{
    console.log(err)
    weatherInfo.innerHTML=
    <h3>Weather Info </h3>
    <p>City not found </p>
    

});



























