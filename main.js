let url = 'https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=London&days=5&aqi=no&alerts=no';
const form = document.querySelector("[data-form]");
const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".fahrenheit");
const city = document.querySelector(".location");
const weatherCondition = document.querySelector(".condition");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector("[data-feels-like]");
const humidity = document.querySelector("[data-humidity]");
const precipitation = document.querySelector("[data-precipitation]");
const windSpeed = document.querySelector("[data-wind-speed]");
const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const mainIcon = document.querySelector(".main-icon");

const formatDate = (date) => {
    const dateObj = new Date(date + 'T00:00:00');
    return new Intl.DateTimeFormat('en-US').format(dateObj);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('input');
    let search = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${search}&days=5&aqi=no&alerts=no`;
    getData(url);
})

celsius.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return;
    e.target.classList.add('active');
    fahrenheit.classList.remove('active');
    getData(`https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=5&aqi=no&alerts=no`);
})

fahrenheit.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return;
    e.target.classList.add('active');
    celsius.classList.remove('active');
    getData(`https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=5&aqi=no&alerts=no`);
})

async function getData(url) {
    try {
        const response = await fetch(url, { mode: 'cors' });
        const data = await response.json();
        if (celsius.classList.contains('active')) {
            temperature.textContent = `${data.current.temp_c}°`;
            feelsLike.textContent = `${data.current.feelslike_c}°`;
        } else  {
            temperature.textContent = `${data.current.temp_f}°`;
            feelsLike.textContent = `${data.current.feelslike_f}°`;
        }
        city.textContent = data.location.name;
        weatherCondition.textContent = data.current.condition.text;
        humidity.textContent = `${data.current.humidity}%`;
        precipitation.textContent = `${data.current.precip_mm}mm`;
        windSpeed.textContent = `${data.current.wind_kph} km/h`;
        mainIcon.src = `images/${data.current.condition.icon.charAt(35)}/${data.current.condition.text.replace(/ /g, '-').toLowerCase()}.svg`;
        const dayName = document.querySelectorAll('.day-name');
        dayName.forEach(name => {
            let date = new Date(formatDate(data.forecast.forecastday[name.id].date));
            name.textContent = weekDay[date.getDay()];
            name.nextElementSibling.src = `images/${data.forecast.forecastday[name.id].day.condition.icon.charAt(35)}/${data.forecast.forecastday[name.id].day.condition.text.replace(/ /g, '-').toLowerCase()}.svg`;

            if (celsius.classList.contains('active')) {
                name.nextElementSibling.nextElementSibling.children[0].textContent = `min ${data.forecast.forecastday[name.id].day.mintemp_c}°`;
            } else  {
                name.nextElementSibling.nextElementSibling.children[0].textContent = `min ${data.forecast.forecastday[name.id].day.mintemp_f}°`;
            }
            
            if (celsius.classList.contains('active')) {
                name.nextElementSibling.nextElementSibling.children[1].textContent = `max ${data.forecast.forecastday[name.id].day.maxtemp_c}°`;
            } else  {
                name.nextElementSibling.nextElementSibling.children[1].textContent = `max ${data.forecast.forecastday[name.id].day.maxtemp_f}°`;
            }
        })
        if (response.status === 200) {
            console.log('Success', data);
        } else {
            console.log('Server Error', data.meta.msg);
        }
    } catch(error) {
        alert('DATA NOT FOUND!');
        console.log('Error', error);
    }
}

getData(url);

