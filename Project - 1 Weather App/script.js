const apiKey = "d99035b052811d923c9243a212232b89";
const btn = document.querySelector("#searchBtn");

const fetchWeatherData = async () => {
  const city = document.querySelector("#input").value;
  console.log(city);

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const currentWeather = data.list[0];
    const temperature = currentWeather.main.temp;
    const weatherDescription = currentWeather.weather[0].description;
    const iconCode = currentWeather.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    console.log(`Temperature: ${temperature}°C`);
    console.log(`Weather: ${weatherDescription}`);

    const currentWeatherArea = document.querySelector("#currentWeather");
    currentWeatherArea.innerHTML = `
            <div class="current-card">
                <h3>Current Weather in ${city}</h3>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${weatherDescription}</p>
                <img src="${iconUrl}" alt="${weatherDescription}">
            </div>
        `;

    const dailyForecast = getDailyForecast(data.list);
    const forecastArea = document.querySelector("#forecast");
    forecastArea.innerHTML = "";
    dailyForecast.forEach((day) => {
      const dayIconUrl = `http://openweathermap.org/img/wn/${day.icon}.png`;
      forecastArea.innerHTML += `
                <div class="card">
                    <h3>${day.date}</h3>
                    <p>Temperature: ${day.temp}°C</p>
                    <p>Weather: ${day.weather}</p>
                    <img src="${dayIconUrl}" alt="${day.weather}">
                </div>
            `;
    });
  } catch (error) {
    console.log("Error in fetching data", error);
  }
};

const getDailyForecast = (list) => {
  const dailyData = [];
  const forecast = {};

  list.forEach((item) => {
    const date = new Date(item.dt_txt).toLocaleDateString("en-US");
    if (!forecast[date]) {
      forecast[date] = { temp: [], weather: [], icons: [] };
    }
    forecast[date].temp.push(item.main.temp);
    forecast[date].weather.push(item.weather[0].description);
    forecast[date].icons.push(item.weather[0].icon);
  });

  for (const date in forecast) {
    if (forecast.hasOwnProperty(date)) {
      const tempSum = forecast[date].temp.reduce((acc, temp) => acc + temp, 0);
      const tempAvg = tempSum / forecast[date].temp.length;
      const weather = forecast[date].weather[0];
      const icon = forecast[date].icons[0];
      dailyData.push({ date, temp: tempAvg.toFixed(1), weather, icon });
    }
  }

  return dailyData.slice(0, 5);
};

btn.addEventListener("click", fetchWeatherData);
