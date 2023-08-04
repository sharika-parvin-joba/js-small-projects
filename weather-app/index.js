//https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=67905c2c95cf4c0ea6e3f9f69f161179&units=metric
const apikey="67905c2c95cf4c0ea6e3f9f69f161179";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox=document.querySelector('.search input')
const searchBtn=document.querySelector('.search button')
const weatherIcon=document.querySelector('.weather-icon')

async function checkWeather(city){
    const response=await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`)
   
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"   
    }
   else{
    var data=await response.json()
    // console.log(data)
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
    document.querySelector('.wind').innerHTML=data.wind.speed + 'km/hr';


    if(data.weather[0].main=="Clouds"){
           weatherIcon.src="./images/cloud.png"
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/sun.png"
    }else if(data.weather[0].main=="Rain"){
    weatherIcon.src="./images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/cloudy-day.png";
        }
    else if(data.weather[0].main=="Mist"){
            weatherIcon.src="./images/snow.png";
            }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
   }
   

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
    searchBox.value=''
})



