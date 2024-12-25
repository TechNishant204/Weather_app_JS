const apiKey = "935a83371fd0c87bfde30f2afc499050";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.color = "white"; // Add this line for red text
        document.querySelector(".error").style.fontSize = "14px"; // Add this line for red text        
        document.querySelector(".error").style.textAlign = "center"; // Add this line for red text
        document.querySelector(".error").style.padding = "8px"; // Add this line for red text        
        document.querySelector(".error").style.borderRadius = "5px"; // Add this line for red text
        document.querySelector(".error").style.backgroundColor = "rgba(3, 3, 3, 0.2)"; // Add this line for red text

    }
    else{
        document.querySelector(".error").style.display = "none";
    }

  

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    //Weather icons update
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }      
    else{
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}


