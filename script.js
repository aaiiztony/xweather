const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a2636b10f8msh585d2152c69a9cdp187843jsnac233565b07b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    cityName = document.getElementById('cityName')
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        temp.innerHTML = response.temp 
        humidity.innerHTML  = response.humidity 
        humidity2.innerHTML  = response.humidity 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset 
        feels_like.innerHTML  = response.feels_like
        wind_speed.innerHTML = response.wind_speed
        wind_degree.innerHTML = response.wind_degrees
        max_temp.innerHTML  = response.max_temp 
        min_temp.innerHTML  = response.min_temp 
    })
	.catch(err => console.error(err));
}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeather(city.value);
})
getWeather('Delhi')