
const apiKey = "515deccc19952d7d96afbbd0ea9bd9cb";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";



let temp = document.querySelector(".temp");
let placeName = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
let weatherIcon = document.querySelector(".weather");
let error  = document.querySelector(".error");
let input = document.getElementById("city");


    btn.addEventListener("click", () => {

        error.classList.remove("hide");
        checkWeather(input.value);
    });




async function checkWeather(city) {

        let response = await fetch(`${url}${city}&units=metric&appid=${apiKey}`);

        let data = await response.json();


        if(response.status == 404){

            error.classList.add("view");
            document.querySelector(".temp-box").classList.add("hide");
        }else{
            error.classList.remove("view");
            temp.innerHTML = `${Math.round(data.main.temp)}°c`;
            windSpeed.innerHTML = data.wind.speed +" km/h";
            humidity.innerHTML = data.main.humidity + "%";
            placeName.innerHTML = data.name;
    
    
    
            if(data.weather[0].main == "Clear"){
                weatherIcon.src = "./images/clear.png";
            }else if(data.weather[0].main == "Cloudy"){
                weatherIcon.src = "./images/clouds.png";
            }else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "./images/rain.png";
            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "./images/drizzle.png";
            }else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "./images/clouds.png";
            }else if(data.weather[0].main == "Snow"){
                weatherIcon.src = "./images/snow.png";
            }else if(data.weather[0].main == "Fog"){
                weatherIcon.src = "./images/clouds.png";
            }
            document.querySelector(".temp-box").classList.remove("hide");
        }





        } 





