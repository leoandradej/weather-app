/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _landpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landpage */ \"./src/landpage.js\");\n\n\n(0,_landpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/landpage.js":
/*!*************************!*\
  !*** ./src/landpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\nconst createHeader = () => {\n    const header = document.createElement('header');\n    header.className = 'header';\n\n    const searchBar = document.createElement('div');\n    searchBar.className = 'search-bar';\n\n    const searchIcon = document.createElement('i');\n    searchIcon.className = 'fa-solid fa-magnifying-glass search-icon';\n\n    const form = document.createElement('form');\n    form.dataset.form = '';\n    form.addEventListener('submit', e => {\n        e.preventDefault();\n\n        const errorMessage = document.querySelector('.error-message');\n        const locationInfo = document.querySelector('.location-info');\n        const additionalInfo = document.querySelector('.additional-info');\n        const forecast = document.querySelector('.forecast');\n        if (errorMessage.classList.contains('active')) {\n            locationInfo.style.display = 'flex';\n            additionalInfo.style.display = 'flex';\n            forecast.style.display = 'flex';\n            errorMessage.classList.remove('active');\n        } else {\n            const formInput = document.querySelector('input');\n            let search = formInput.value.charAt(0).toUpperCase() + formInput.value.slice(1);\n            let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${search}&days=3&aqi=no&alerts=no`;\n            (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n            formInput.value = '';\n        }\n    })\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.placeholder = 'Search a Location';\n\n    form.appendChild(input);\n    \n    searchBar.appendChild(searchIcon);\n    searchBar.appendChild(form);\n\n    const tempButtons = document.createElement('div');\n    tempButtons.className = 'temp-buttons';\n\n    const celsius = document.createElement('button');\n    celsius.className = 'btn celsius';\n    celsius.textContent = '°C';\n    celsius.addEventListener('click', e => {\n        if (e.target.classList.contains('active')) return;\n        setBtnActive(celsius);\n        const city = document.querySelector('.location');\n        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=3&aqi=no&alerts=no`;\n        (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n    })\n\n    const fahrenheit = document.createElement('button');\n    fahrenheit.className = 'btn fahrenheit';\n    fahrenheit.textContent = '°F';\n    fahrenheit.addEventListener('click', e => {\n        if (e.target.classList.contains('active')) return;\n        setBtnActive(fahrenheit);\n        const city = document.querySelector('.location');\n        let url = `https://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=${city.textContent}&days=3&aqi=no&alerts=no`\n        ;(0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n    })\n\n    tempButtons.appendChild(celsius);\n    tempButtons.appendChild(fahrenheit);\n\n    header.appendChild(searchBar);\n    header.appendChild(tempButtons);\n\n    return header;\n}\n\nconst createMain = () => {\n    const main = document.createElement('main');\n    main.className = 'main';\n    \n    const locationInfo = document.createElement('div');\n    locationInfo.className = 'location-info';\n\n    const location = document.createElement('p');\n    location.className = 'location';\n    const mainIcon = document.createElement('img');\n    mainIcon.className = 'main-icon';\n    const condition = document.createElement('p');\n    condition.className = 'condition';\n    const temperature = document.createElement('p');\n    temperature.className = 'temperature';\n\n    locationInfo.appendChild(location);\n    locationInfo.appendChild(mainIcon);\n    locationInfo.appendChild(condition);\n    locationInfo.appendChild(temperature);\n\n    const additionalInfo = document.createElement('div');\n    additionalInfo.className = 'additional-info';\n\n    additionalInfo.appendChild(createAdditionalInfo('feels like', 'fa-solid fa-temperature-half'));\n    additionalInfo.appendChild(createAdditionalInfo('wind speed', 'fa-solid fa-wind'));\n    additionalInfo.appendChild(createAdditionalInfo('precipitation', 'fa-solid fa-cloud-rain'));\n    additionalInfo.appendChild(createAdditionalInfo('humidity', 'fa-solid fa-droplet'));\n\n    const errorMessage = document.createElement('div');\n    errorMessage.className = 'error-message';\n    errorMessage.textContent = 'Location Not Found!';\n\n    const errorIcon = document.createElement('img');\n    errorIcon.className = 'error-icon';\n    errorIcon.src = '../dist/images/not-found.png';\n\n    errorMessage.appendChild(errorIcon);\n\n    main.appendChild(locationInfo);\n    main.appendChild(additionalInfo);\n    main.appendChild(errorMessage);\n\n    return main;\n}\n\nconst createAdditionalInfo = (name, icon) => {\n    const nameWords = name.split(' ');\n    for (let i = 0; i < nameWords.length; i++) {\n        nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);\n    }\n\n    const info = document.createElement('div');\n    info.className = `info ${nameWords.join('-').toLowerCase()}`;\n\n    const topInfo = document.createElement('p');\n    topInfo.className = 'top-info';\n    topInfo.textContent = nameWords.join(' ');\n\n    const bottomInfo = document.createElement('div');\n    bottomInfo.className = 'bottom-info';\n\n    const infoIcon = document.createElement('i');\n    infoIcon.className = icon;\n    const infoValue = document.createElement('p');\n    infoValue.className = 'info-value';\n    infoValue.setAttribute(`data-${nameWords.join('-').toLowerCase()}`, '');\n\n    bottomInfo.appendChild(infoIcon);\n    bottomInfo.appendChild(infoValue);\n\n    info.appendChild(topInfo);\n    info.appendChild(bottomInfo);\n\n    return info;\n}\n\nconst createForecast = () => {\n    const forecast = document.createElement('div');\n    forecast.className = 'forecast';\n\n    forecast.appendChild(createWeekDay(0));\n    forecast.appendChild(createWeekDay(1));\n    forecast.appendChild(createWeekDay(2));\n    //forecast.appendChild(createWeekDay(3));\n    //forecast.appendChild(createWeekDay(4));\n\n    return forecast;\n}\n\nconst createWeekDay = (id) => {\n    const weekDay = document.createElement('div');\n    weekDay.className = 'week-day';\n\n    const dayName = document.createElement('div');\n    dayName.className = 'day-name';\n    dayName.id = id;\n    const weatherIcon = document.createElement('img');\n    weatherIcon.className = 'weather-icon';\n    const tempInfo = document.createElement('div');\n    tempInfo.className = 'temp-info';\n\n    const minTemp = document.createElement('p');\n    minTemp.className = 'min-temp';\n    const maxTemp = document.createElement('p');\n    maxTemp.className = 'max-temp';\n\n    tempInfo.appendChild(minTemp);\n    tempInfo.appendChild(maxTemp);\n\n    weekDay.appendChild(dayName);\n    weekDay.appendChild(weatherIcon);\n    weekDay.appendChild(tempInfo);\n\n    return weekDay;\n}\n\nconst setBtnActive = (btn) => {\n    const buttons = document.querySelectorAll('.btn');\n\n    buttons.forEach((btn) => {\n        if (btn !== undefined) {\n            btn.classList.remove('active');\n        }\n    });\n\n    btn.classList.add('active');\n}\n\nconst initializePage = () => {\n    const content = document.querySelector('[data-content]');\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createForecast());\n    setBtnActive(document.querySelector('.btn'));\n    const url = 'http://api.weatherapi.com/v1/forecast.json?key=dbb41c73f2e14b6783114523240201&q=London&days=3&aqi=no&alerts=no';\n    (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializePage);\n\n//# sourceURL=webpack://weather-app/./src/landpage.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getWeather(url) {\n    const celsius = document.querySelector(\".celsius\");\n    const city = document.querySelector(\".location\");\n    const weatherCondition = document.querySelector(\".condition\");\n    const temperature = document.querySelector(\".temperature\");\n    const feelsLike = document.querySelector(\"[data-feels-like]\");\n    const humidity = document.querySelector(\"[data-humidity]\");\n    const precipitation = document.querySelector(\"[data-precipitation]\");\n    const windSpeed = document.querySelector(\"[data-wind-speed]\");\n    const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];\n    const mainIcon = document.querySelector(\".main-icon\");\n\n    try {\n        const response = await fetch(url, { mode: 'cors' });\n        const data = await response.json();\n        if (response.status === 200) {\n            if (celsius.classList.contains('active')) {\n                temperature.textContent = `${data.current.temp_c}°`;\n                feelsLike.textContent = `${data.current.feelslike_c}°`;\n            } else  {\n                temperature.textContent = `${data.current.temp_f}°`;\n                feelsLike.textContent = `${data.current.feelslike_f}°`;\n            }\n            city.textContent = data.location.name;\n            weatherCondition.textContent = data.current.condition.text;\n            humidity.textContent = `${data.current.humidity}%`;\n            precipitation.textContent = `${data.current.precip_mm}mm`;\n            windSpeed.textContent = `${data.current.wind_kph} km/h`;\n            mainIcon.src = `images/${data.current.condition.icon.charAt(35)}/${data.current.condition.text.replace(/ /g, '-').toLowerCase()}.svg`;\n            const dayName = document.querySelectorAll('.day-name');\n            dayName.forEach(name => {\n                let date = new Date(formatDate(data.forecast.forecastday[name.id].date));\n                name.textContent = weekDay[date.getDay()];\n                name.nextElementSibling.src = `images/${data.forecast.forecastday[name.id].day.condition.icon.charAt(35)}/${data.forecast.forecastday[name.id].day.condition.text.replace(/ /g, '-').toLowerCase()}.svg`;\n\n                if (celsius.classList.contains('active')) {\n                    name.nextElementSibling.nextElementSibling.children[0].textContent = `min: ${data.forecast.forecastday[name.id].day.mintemp_c}°`;\n                } else  {\n                    name.nextElementSibling.nextElementSibling.children[0].textContent = `min: ${data.forecast.forecastday[name.id].day.mintemp_f}°`;\n                }\n                \n                if (celsius.classList.contains('active')) {\n                    name.nextElementSibling.nextElementSibling.children[1].textContent = `max: ${data.forecast.forecastday[name.id].day.maxtemp_c}°`;\n                } else  {\n                    name.nextElementSibling.nextElementSibling.children[1].textContent = `max: ${data.forecast.forecastday[name.id].day.maxtemp_f}°`;\n                }\n            })\n        } else {\n            const locationInfo = document.querySelector('.location-info');\n            const additionalInfo = document.querySelector('.additional-info');\n            const forecast = document.querySelector('.forecast');\n            const errorMessage = document.querySelector('.error-message');\n            locationInfo.style.display = 'none';\n            additionalInfo.style.display = 'none';\n            forecast.style.display = 'none';\n            errorMessage.classList.add('active');\n            console.log('Server Error', data.error.message);\n            \n        }\n    } catch(error) {\n        alert('DATA NOT FOUND!');\n        console.log('Fetch Error', error.message);\n    }\n}\n\nconst formatDate = (date) => {\n    const dateObj = new Date(date + 'T00:00:00');\n    return new Intl.DateTimeFormat('en-US').format(dateObj);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;