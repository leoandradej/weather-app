import getWeather from "./weather";

const createHeader = () => {
    const header = document.createElement('header');
    header.className = 'header';

    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar';

    const searchIcon = document.createElement('i');
    searchIcon.className = 'fa-solid fa-magnifying-glass search-icon';

    const form = document.createElement('form');
    form.dataset.form = '';
    form.addEventListener('submit', e => {
        e.preventDefault();
        const formInput = document.querySelector('input');
        let search = formInput.value.charAt(0).toUpperCase() + formInput.value.slice(1);
        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${search}&days=5&aqi=no&alerts=no`;
        getWeather(url);
        formInput.value = '';
    })

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Search a Location';

    form.appendChild(input);
    
    searchBar.appendChild(searchIcon);
    searchBar.appendChild(form);

    const tempButtons = document.createElement('div');
    tempButtons.className = 'temp-buttons';

    const celsius = document.createElement('button');
    celsius.className = 'btn celsius';
    celsius.textContent = '°C';
    celsius.addEventListener('click', e => {
        if (e.target.classList.contains('active')) return;
        setBtnActive(celsius);
        const city = document.querySelector('.location');
        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=5&aqi=no&alerts=no`;
        getWeather(url);
    })

    const fahrenheit = document.createElement('button');
    fahrenheit.className = 'btn fahrenheit';
    fahrenheit.textContent = '°F';
    fahrenheit.addEventListener('click', e => {
        if (e.target.classList.contains('active')) return;
        setBtnActive(fahrenheit);
        const city = document.querySelector('.location');
        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=5&aqi=no&alerts=no`
        getWeather(url);
    })

    tempButtons.appendChild(celsius);
    tempButtons.appendChild(fahrenheit);

    header.appendChild(searchBar);
    header.appendChild(tempButtons);

    return header;
}

const createMain = () => {
    const main = document.createElement('main');
    main.className = 'main';
    
    const locationInfo = document.createElement('div');
    locationInfo.className = 'location-info';

    const location = document.createElement('p');
    location.className = 'location';
    const mainIcon = document.createElement('img');
    mainIcon.className = 'main-icon';
    const condition = document.createElement('p');
    condition.className = 'condition';
    const temperature = document.createElement('p');
    temperature.className = 'temperature';

    locationInfo.appendChild(location);
    locationInfo.appendChild(mainIcon);
    locationInfo.appendChild(condition);
    locationInfo.appendChild(temperature);

    const additionalInfo = document.createElement('div');
    additionalInfo.className = 'additional-info';

    additionalInfo.appendChild(createAdditionalInfo('feels like', 'fa-solid fa-temperature-half'));
    additionalInfo.appendChild(createAdditionalInfo('wind speed', 'fa-solid fa-wind'));
    additionalInfo.appendChild(createAdditionalInfo('precipitation', 'fa-solid fa-cloud-rain'));
    additionalInfo.appendChild(createAdditionalInfo('humidity', 'fa-solid fa-droplet'));

    main.appendChild(locationInfo);
    main.appendChild(additionalInfo);

    return main;
}

const createAdditionalInfo = (name, icon) => {
    const nameWords = name.split(' ');
    for (let i = 0; i < nameWords.length; i++) {
        nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);
    }

    const info = document.createElement('div');
    info.className = `info ${nameWords.join('-').toLowerCase()}`;

    const topInfo = document.createElement('p');
    topInfo.className = 'top-info';
    topInfo.textContent = nameWords.join(' ');

    const bottomInfo = document.createElement('div');
    bottomInfo.className = 'bottom-info';

    const infoIcon = document.createElement('i');
    infoIcon.className = icon;
    const infoValue = document.createElement('p');
    infoValue.className = 'info-value';
    infoValue.setAttribute(`data-${nameWords.join('-').toLowerCase()}`, '');

    bottomInfo.appendChild(infoIcon);
    bottomInfo.appendChild(infoValue);

    info.appendChild(topInfo);
    info.appendChild(bottomInfo);

    return info;
}

const createForecast = () => {
    const forecast = document.createElement('div');
    forecast.className = 'forecast';

    forecast.appendChild(createWeekDay(0));
    forecast.appendChild(createWeekDay(1));
    forecast.appendChild(createWeekDay(2));
    forecast.appendChild(createWeekDay(3));
    forecast.appendChild(createWeekDay(4));

    return forecast;
}

const createWeekDay = (id) => {
    const weekDay = document.createElement('div');
    weekDay.className = 'week-day';

    const dayName = document.createElement('div');
    dayName.className = 'day-name';
    dayName.id = id;
    const weatherIcon = document.createElement('img');
    weatherIcon.className = 'weather-icon';
    const tempInfo = document.createElement('div');
    tempInfo.className = 'temp-info';

    const minTemp = document.createElement('p');
    minTemp.className = 'min-temp';
    const maxTemp = document.createElement('p');
    maxTemp.className = 'max-temp';

    tempInfo.appendChild(minTemp);
    tempInfo.appendChild(maxTemp);

    weekDay.appendChild(dayName);
    weekDay.appendChild(weatherIcon);
    weekDay.appendChild(tempInfo);

    return weekDay;
}

const setBtnActive = (btn) => {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {
        if (btn !== this) {
            btn.classList.remove('active');
        }
    });

    btn.classList.add('active');
}

const initializePage = () => {
    const content = document.querySelector('[data-content]');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createForecast());
    setBtnActive(document.querySelector('.btn'));
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=London&days=5&aqi=no&alerts=no';
    getWeather(url);
}

export default initializePage;