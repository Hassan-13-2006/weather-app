async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter city name");
        return;
    }

    // Correct API URL with backticks
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6de9116ef4a8322ec496e16a45e6451a&units=metric`;

    let response = await fetch(url);

    if (response.status === 404) {
        document.getElementById("weatherResult").innerHTML = "<p>City Not Found ❌</p>";
        return;
    }

    let data = await response.json();

    // Get date & time
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    document.getElementById("weatherResult").innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} km/h</p>
    `;
}