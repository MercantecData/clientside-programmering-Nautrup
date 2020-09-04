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

function MagicEightBall() {

	var userQuestion = document.getElementById('input').value;

	var rnd = Math.floor(Math.random() * 5) + 1 // random integer from 1 - 5
	
	if (userQuestion == "") {
		alert('Du har ikke angivet et spørgsmål')
	} else 
	{
		switch (rnd) 
		{
			case 1:
				document.getElementById('answer').innerHTML = "Yes"
				break;
				case 2:
				document.getElementById('answer').innerHTML = "No"
				break;
				case 3:
				document.getElementById('answer').innerHTML = "Maybe"
				break;
				case 4:
				document.getElementById('answer').innerHTML = "Leave me alone!"
				break;
				case 5:
				document.getElementById('answer').innerHTML = "Try again"
				break;
			default:
				break;
		}
	}
}

function GetWeatherDataSearchedCity() {
	var searchedCity = document.getElementById('input').value;
	
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=metric&appid=9e1fdd4200633c1c5db50bbab5e0a38a&lang=da`
	var promise = fetch(url)
	.then(res => {
		if (!res.ok) {
		document.getElementById('cityTest').innerHTML = `Not found`
		document.getElementById('temperaturTest').innerHTML = `####`
		document.getElementById('descriptionTest').innerHTML = `####`
		document.getElementById('iconTest').alt = "Image";
		document.getElementById('degTest').innerHTML = `####`
		} else{
			return res.json()
		}
	}).then(data => {
		
		document.getElementById('cityTest').innerHTML = `${data.name}, ${data.sys.country}`
		document.getElementById('temperaturTest').innerHTML = `${data.main.temp} \xB0`
		document.getElementById('descriptionTest').innerHTML = `${data.weather[0].description}`
		document.getElementById('iconTest').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
		document.getElementById('degTest').innerHTML = `${data.wind.speed}m/s ${data.wind.deg}`
	})
}


