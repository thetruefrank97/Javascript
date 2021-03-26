export class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidity");
        this.feelsLike = document.getElementById("w-feels-like");
        this.dewpoint = document.getElementById("w-dewpoint");
        this.wind = document.getElementById("w-wind");
    }
    paint(weather) {
        this.location.textContent = weather.coord.lat;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute("src", weather.weather[0].icon);
        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.dewpoint.textContent = `DewPoint: ${weather.main.temp_min}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
    }
}
