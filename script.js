const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a193b63fddmsh13f61720d8defbbp163b70jsn26c34e43de17',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));