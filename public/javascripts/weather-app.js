
// Define getWeatherData function
getWeatherData = () => {
    
    // Get city from user
    const city = String(document.getElementById('city-input').value);
    // Build url for api call
    url = `/dlog/api/weather/${city}`
    // Fetch data
    fetch(url, {
        method: "GET"
    }).then(response => response.json())
    .then(data => {
        showWeatherData(data);
    });
}

// Show the weather data in HTML
showWeatherData = (weatherData) => {
    
    // Update each relevent element
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temperature').innerText = `Temperature: ${weatherData.main.temp}°`;
    document.getElementById('min-temp').innerText = `Min: ${weatherData.main.temp_min}°`;
    document.getElementById('max-temp').innerText = `Max: ${weatherData.main.temp_max}°`;
    document.getElementById('feels-like').innerText = `Feels like: ${weatherData.main.temp}°`;
    document.getElementById('wind').innerText = `Wind: ${Math.round(weatherData.wind.speed *10/ 2.23694)/10} mph`;
    document.getElementById('sunrise').innerText = `Sunrise: ${toTime(weatherData.sys.sunrise)} AM`;
    document.getElementById('sunset').innerText = `Sunset: ${toTime(weatherData.sys.sunset)} PM`;
                        
}

// Define toTime function
toTime = (unix_timestamp) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Adjust for AM/PM, will display time in 10:30 format
    if (hours > 12) {
        return formattedTime = hours-12 + ':' + minutes.substr(-2);    
    } else {
    return formattedTime = hours + ':' + minutes.substr(-2);
    }
}

