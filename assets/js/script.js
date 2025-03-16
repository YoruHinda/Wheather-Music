const client_id = '58487d2e0e5742bcbe7b1720e680e313'
const client_secret = '8aaec22a5aa9441c810add5c212ecab3'
const wheather_api_key = 'cf48277dcd6b12f2c677beec71d86f50'
const wheathers = ['raining', 'thunderstorm', 'snow', 'mist', 'clear sky', 'broken clouds']
var wheather
var access_token

fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(r => r.json())
    .then(r => {
        access_token = r.access_token
    })

function musicByWeather() {

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWheather)
    } else {
        console.log('Location Invalid!')
    }
}

async function getWheather(position) {
    let wheather_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${wheather_api_key}`, {
        method: 'GET'
    })
    wheather = await wheather_api.json()
    console.log(wheather.weather)
}

getLocation()