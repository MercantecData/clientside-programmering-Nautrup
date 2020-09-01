function GetDate() {
	document.getElementById('dateTime').innerHTML = Date();
	document.getElementById('dateTime').style.fontSize = "15px";
}

function ChangeText() {
	document.getElementById('changeText').innerHTML = "Jeg er fra JS";
}

function GetWeatherData() {

	var url = "https://api.openweathermap.org/data/2.5/weather?q=Viborg&appid=9e1fdd4200633c1c5db50bbab5e0a38a"
	var promise = fetch(url)
	.then(data=>data.text()
	.then(data=>data));

	document.getElementById('weather').innerHTML = promise;
}
