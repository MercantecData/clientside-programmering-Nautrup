function GetDate() {
	document.getElementById('dateTime').innerHTML = Date();
	document.getElementById('dateTime').style.fontSize = "15px";
}

function ChangeText() {
	document.getElementById('changeText').innerHTML = "Jeg er fra JS";
}



function GetWeatherData() {
	var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&units=metric&appid=9e1fdd4200633c1c5db50bbab5e0a38a&lang=da"
	var promise = fetch(url)
	.then(res => res.json()
	.then(data => {
		console.log(data),
		document.getElementById('city').innerHTML = `${data.name}, ${data.sys.country}`
		document.getElementById('temperatur').innerHTML = `${data.main.temp} \xB0`
		document.getElementById('description').innerHTML = `${data.weather[0].description}`
		document.getElementById('icon').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
	}))
}
