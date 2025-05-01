import getWeather from "./weather";
import errorImg from "./images/not-found.png"

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

        const errorMessage = document.querySelector('.error-message');
        const locationInfo = document.querySelector('.location-info');
        const additionalInfo = document.querySelector('.additional-info');
        const forecast = document.querySelector('.forecast');
        if (errorMessage.classList.contains('active')) {
            locationInfo.style.display = 'flex';
            additionalInfo.style.display = 'flex';
            forecast.style.display = 'flex';
            errorMessage.classList.remove('active');
        } else {
            const formInput = document.querySelector('input');
            let search = formInput.value.charAt(0).toUpperCase() + formInput.value.slice(1);
            let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${search}&days=3&aqi=no&alerts=no`;
            getWeather(url);
            formInput.value = '';
        }
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
        const city = document.querySelector('.weather-location');
        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=3&aqi=no&alerts=no`;
        getWeather(url);
    })

    const fahrenheit = document.createElement('button');
    fahrenheit.className = 'btn fahrenheit';
    fahrenheit.textContent = '°F';
    fahrenheit.addEventListener('click', e => {
        if (e.target.classList.contains('active')) return;
        setBtnActive(fahrenheit);
        const city = document.querySelector('.weather-location');
        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=3&aqi=no&alerts=no`
        getWeather(url);
    })

    tempButtons.appendChild(celsius);
    tempButtons.appendChild(fahrenheit);

    header.appendChild(searchBar);
    header.appendChild(tempButtons);

    return header;
}

const createAdditionalInfo = (label, iconClass) => {
    const labelWords = label.split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    );
    const labelKey = labelWords.join('-').toLowerCase();

    const info = document.createElement('div');
    info.className = `weather-info ${labelKey}`;

    const topInfo = document.createElement('p');
    topInfo.className = 'weather-info-label';
    topInfo.textContent = labelWords.join(' ');

    const bottomInfo = document.createElement('div');
    bottomInfo.className = 'weather-info-value';

    const icon = document.createElement('i');
    icon.className = iconClass;

    const value = document.createElement('p');
    value.className = 'weather-info-data';
    value.setAttribute(`data-${labelKey}`, '');

    bottomInfo.appendChild(icon);
    bottomInfo.appendChild(value);

    info.appendChild(topInfo);
    info.appendChild(bottomInfo);

    return info;
};

const createMain = () => {
    const main = document.createElement('main');
    main.className = 'main';

    const locationInfo = document.createElement('div');
    locationInfo.className = 'location-info';

    const location = document.createElement('p');
    location.className = 'weather-location';

    const icon = document.createElement('img');
    icon.className = 'main-icon';

    const condition = document.createElement('p');
    condition.className = 'weather-condition';

    const temp = document.createElement('p');
    temp.className = 'weather-temperature';

    locationInfo.appendChild(location);
    locationInfo.appendChild(icon);
    locationInfo.appendChild(condition);
    locationInfo.appendChild(temp);

    const additionalInfo = document.createElement('div');
    additionalInfo.className = 'additional-info';

    const top = document.createElement('div');
    top.className = 'section top';
    top.appendChild(createAdditionalInfo('feels like', 'fa-solid fa-temperature-half'));
    top.appendChild(createAdditionalInfo('wind speed', 'fa-solid fa-wind'));

    const bottom = document.createElement('div');
    bottom.className = 'section bottom';
    bottom.appendChild(createAdditionalInfo('precipitation', 'fa-solid fa-cloud-rain'));
    bottom.appendChild(createAdditionalInfo('humidity', 'fa-solid fa-droplet'));

    additionalInfo.appendChild(top);
    additionalInfo.appendChild(bottom);

    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Location Not Found!';

    const errorIcon = document.createElement('img');
    errorIcon.className = 'error-icon';
    errorIcon.src = errorImg;
    errorMessage.appendChild(errorIcon);

    main.appendChild(locationInfo);
    main.appendChild(additionalInfo);
    main.appendChild(errorMessage);

    return main;
};

const createForecast = () => {
    const forecast = document.createElement('div');
    forecast.className = 'forecast';

    forecast.appendChild(createWeekDay(0));
    forecast.appendChild(createWeekDay(1));
    forecast.appendChild(createWeekDay(2));

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
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=London&days=3&aqi=no&alerts=no';
    getWeather(url);
}

export default initializePage;