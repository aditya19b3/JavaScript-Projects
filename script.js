const apiKey = "ca92e030ab2da488313a92f74971adb1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//console.log("----",weatherIcon)

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main.toLowerCase() == "clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main.toLowerCase() == "clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main.toLowerCase() == "rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main.toLowerCase() == "drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main.toLowerCase() == "mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

