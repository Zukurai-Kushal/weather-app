import { format, isToday } from "date-fns";
import { get_weather_at } from "./apiHandler";
import { createWeatherIcon, displayWallpaper } from "./animation";

import search_icon from "./assets/icons/magnify.svg";
import location_icon from "./assets/icons/location-icon.svg";
import alert_icon from "./assets/icons/alert.svg";

const navContainer = document.getElementById("nav-container");
const weatherDisplayContainer = document.getElementById(
  "weather-display-container",
);
let temperatureUnit = localStorage.getItem("temperatureUnit") || "celsius";

function init_search_bar() {
  const searchContainer = createDOMElement({
    type: "div",
    id: "search-container",
  });
  navContainer.appendChild(searchContainer);
  const searchForm = createDOMElement({ type: "form" });
  const searchBar = createDOMElement({
    type: "input",
    attribute: [
      ["type", "text"],
      ["placeholder", "Search location..."],
      ["name", "location"],
    ],
  });
  searchForm.appendChild(searchBar);
  const searchButton = createDOMElement({
    type: "button",
    attribute: [["type", "submit"]],
  });
  searchButton.appendChild(createImgContainer(search_icon, "Search"));
  searchForm.appendChild(searchButton);
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    initiateWeatherSearch(searchBar.value);
  });
  searchContainer.innerHTML = "";
  searchContainer.appendChild(searchForm);
}

function init_temperature_unit() {
  const temperatureUnitContainer = createDOMElement({
    type: "div",
    id: "temperature-unit-container",
  });
  navContainer.appendChild(temperatureUnitContainer);
  const celsiusButton = createDOMElement({
    type: "div",
    classList: ["celsius-button"],
    text: "°C",
  });
  temperatureUnitContainer.appendChild(celsiusButton);

  const fahrenheitButton = createDOMElement({
    type: "div",
    text: "°F",
    classList: ["fahrenheit-button"],
  });
  temperatureUnitContainer.appendChild(fahrenheitButton);

  celsiusButton.onclick = () => {
    fahrenheitButton.classList.remove("bold");
    celsiusButton.classList.add("bold");
    switchTemperatureUnit("celsius");
  };
  fahrenheitButton.onclick = () => {
    celsiusButton.classList.remove("bold");
    fahrenheitButton.classList.add("bold");
    switchTemperatureUnit("fahrenheit");
  };

  switch (temperatureUnit) {
    case "celsius":
      celsiusButton.classList.add("bold");
      break;
    case "fahrenheit":
      fahrenheitButton.classList.add("bold");
      break;
  }
}

function createTemperatureElement(fahrenheitValue, unit, prefix = "") {
  const temperatureContainer = createDOMElement({
    type: "div",
    classList: ["temperature-container"],
    attribute: [
      ["temp-unit", "none"],
      ["prefix", prefix],
      ["fahrenheit-value", fahrenheitValue],
    ],
  });
  updateTemperatureElement(temperatureContainer, unit);
  return temperatureContainer;
}

function updateTemperatureElement(element, newUnit) {
  if (element.getAttribute("temp-unit") != newUnit) {
    switch (newUnit) {
      case "fahrenheit":
        element.textContent = `${element.getAttribute("prefix")} ${element.getAttribute("fahrenheit-value")}°F`;
        break;
      case "celsius":
        element.textContent = `${element.getAttribute("prefix")} ${fahrenheitToCelsius(element.getAttribute("fahrenheit-value"))}°C`;
        break;
    }
    element.setAttribute("temp-unit", newUnit);
  }
}

function createDOMElement(options = { type: "div" }) {
  const elementContainer = document.createElement(options.type);
  if ("id" in options) {
    elementContainer.id = options.id;
  }
  if ("classList" in options) {
    for (const className of options.classList) {
      elementContainer.classList.add(className);
    }
  }
  if ("attribute" in options) {
    for (const attributePair of options.attribute) {
      elementContainer.setAttribute(attributePair[0], attributePair[1]);
    }
  }
  if ("text" in options) {
    elementContainer.textContent = options.text;
  }
  return elementContainer;
}

function switchTemperatureUnit(newUnit) {
  if (temperatureUnit != newUnit) {
    const temperatureElements = document.querySelectorAll(
      ".temperature-container",
    );
    for (const temperatureElement of temperatureElements) {
      updateTemperatureElement(temperatureElement, newUnit);
    }
    temperatureUnit = newUnit;
    localStorage.setItem("temperatureUnit", temperatureUnit);
  }
}

function createImgContainer(src, description = "") {
  const imgContainer = document.createElement("img");
  imgContainer.src = src;
  if (description !== "") {
    imgContainer.setAttribute("alt", description);
  }
  return imgContainer;
}

function displayWeather(weatherData) {
  weatherDisplayContainer.innerHTML = "";
  displayLocation(weatherData.resolvedAddress);
  weatherData.currentConditions["tempmax"] = weatherData.days[0].tempmax;
  weatherData.currentConditions["tempmin"] = weatherData.days[0].tempmin;
  displayConditions(weatherData.currentConditions);
  displayAlert(weatherData.alerts);
  displayHourlyForecast(weatherData.days[0].hours);
  displayTenDayForecast(weatherData.days);
}

function displayAlert(alerts) {
  if (alerts === undefined || alerts.length == 0) {
    return;
  }
  const alertContainer = createDOMElement({
    type: "div",
    id: "alert-container",
  });
  weatherDisplayContainer.appendChild(alertContainer);
  for (const alert of alerts) {
    alertContainer.appendChild(createAlertElement(alert));
  }
}

function createAlertElement(alert) {
  const alertElement = createDOMElement({ type: "div", classList: ["alert"] });
  alertElement.appendChild(createImgContainer(alert_icon, "Alert"));
  alertElement.appendChild(
    createDOMElement({ type: "div", text: alert.event }),
  );
  return alertElement;
}

function displayLocation(location) {
  const locationContainer = createDOMElement({
    type: "div",
    id: "location-container",
  });
  locationContainer.appendChild(createImgContainer(location_icon));
  const locationText = createDOMElement({ type: "div", text: location });
  locationContainer.appendChild(locationText);
  weatherDisplayContainer.appendChild(locationContainer);
}

function displayConditions(weatherCondition) {
  let conditionsContainer = document.getElementById("conditions-container");
  if (conditionsContainer === null) {
    conditionsContainer = createDOMElement({
      type: "div",
      id: "conditions-container",
    });
    weatherDisplayContainer.appendChild(conditionsContainer);
  }
  conditionsContainer.innerHTML = "";

  displayWallpaper(weatherCondition.icon);

  const temperatureConditionContainer = createDOMElement({
    type: "div",
    id: "temperature-condition-container",
  });
  conditionsContainer.appendChild(temperatureConditionContainer);

  const dateContainer = createDOMElement({
    type: "div",
    classList: ["date-container"],
    text: getDateDescription(weatherCondition.datetime),
  });
  temperatureConditionContainer.appendChild(dateContainer);

  const temperatureIconContainer = createDOMElement({
    type: "div",
    classList: ["flex", "current-condition"],
  });
  temperatureConditionContainer.appendChild(temperatureIconContainer);
  temperatureIconContainer.appendChild(
    createTemperatureElement(weatherCondition.temp, temperatureUnit),
  );
  temperatureIconContainer.appendChild(
    createWeatherIcon(weatherCondition.icon),
  );

  const temperatureRangeContainer = createDOMElement({
    type: "div",
    classList: ["flex", "temperature-range-container"],
  });
  temperatureConditionContainer.appendChild(temperatureRangeContainer);
  const maxTempContainer = createTemperatureElement(
    weatherCondition.tempmax,
    temperatureUnit,
    "High",
  );
  const minTempContainer = createTemperatureElement(
    weatherCondition.tempmin,
    temperatureUnit,
    "Low",
  );
  temperatureRangeContainer.appendChild(maxTempContainer);
  temperatureRangeContainer.appendChild(minTempContainer);

  const secondaryConditionsContainer = createDOMElement({
    type: "div",
    id: "secondary-conditions-container",
  });
  conditionsContainer.appendChild(secondaryConditionsContainer);
  const feelsLikeContainer = createDOMElement({
    type: "div",
    classList: ["feels-like-container"],
  });
  secondaryConditionsContainer.appendChild(feelsLikeContainer);
  feelsLikeContainer.appendChild(
    createTemperatureElement(
      weatherCondition.feelslike,
      temperatureUnit,
      "Feels like",
    ),
  );

  const uvIndexContainer = createDOMElement({
    type: "div",
    text: `UV Index ${weatherCondition.uvindex}`,
  });
  secondaryConditionsContainer.appendChild(uvIndexContainer);

  const humidityContainer = createDOMElement({
    type: "div",
    text: `Humidity ${weatherCondition.humidity}%`,
  });
  secondaryConditionsContainer.appendChild(humidityContainer);

  const weatherDescription = createDOMElement({
    type: "div",
    classList: ["weather-description"],
    text: `*${weatherCondition.description || weatherCondition.conditions}`,
  });
  secondaryConditionsContainer.appendChild(weatherDescription);
}

function displayHourlyForecast(hourlyData) {
  let hourlyForecastContainer = document.getElementById(
    "hourly-forecast-container",
  );
  if (hourlyForecastContainer === null) {
    hourlyForecastContainer = createDOMElement({
      type: "div",
      id: "hourly-forecast-container",
    });
    weatherDisplayContainer.appendChild(hourlyForecastContainer);
  }
  hourlyForecastContainer.innerHTML = "";
  hourlyForecastContainer.appendChild(
    createDOMElement({
      type: "div",
      classList: ["heading"],
      text: "Hourly Forecast",
    }),
  );
  const hourlyForecastScrollContainer = createDOMElement({
    type: "div",
    classList: ["scroll-container"],
  });
  hourlyForecastContainer.appendChild(hourlyForecastScrollContainer);
  for (const hourData of hourlyData) {
    hourlyForecastScrollContainer.appendChild(createHourElement(hourData));
  }
}

function createHourElement(hourData) {
  const hourContainer = createDOMElement({
    type: "div",
    classList: ["hour-forecast-container"],
  });
  hourContainer.appendChild(
    createTemperatureElement(hourData.temp, temperatureUnit),
  );
  hourContainer.appendChild(createWeatherIcon(hourData.icon));
  hourContainer.appendChild(
    createDOMElement({
      type: "div",
      classList: ["time-container"],
      text: format(new Date(`December 17, 1995 ${hourData.datetime}`), "h aaa"),
    }),
  );

  return hourContainer;
}

function displayTenDayForecast(days) {
  let tenDayForecastContainer = document.getElementById(
    "ten-day-forecast-container",
  );
  if (tenDayForecastContainer === null) {
    tenDayForecastContainer = createDOMElement({
      type: "div",
      id: "ten-day-forecast-container",
    });
    weatherDisplayContainer.appendChild(tenDayForecastContainer);
  }
  tenDayForecastContainer.innerHTML = "";
  for (let i = 0; i < 8; i++) {
    tenDayForecastContainer.appendChild(createDayForecastElement(days[i]));
  }
}

function createDayForecastElement(dayData) {
  const dayForecastContainer = createDOMElement({
    type: "div",
    classList: ["day-forecast-container"],
  });
  const dateDateDescriptionContainer = createDOMElement({
    type: "div",
    classList: ["date-description"],
    text: getDateDescription(dayData.datetime),
  });
  dayForecastContainer.appendChild(dateDateDescriptionContainer);
  dayForecastContainer.appendChild(createWeatherIcon(dayData.icon));
  const tempReadingContainer = createDOMElement({ type: "div" });
  dayForecastContainer.appendChild(tempReadingContainer);
  tempReadingContainer.appendChild(
    createTemperatureElement(dayData.tempmax, temperatureUnit, "↑"),
  );
  tempReadingContainer.appendChild(
    createTemperatureElement(dayData.tempmin, temperatureUnit, "↓"),
  );
  dayForecastContainer.onclick = () => {
    const prevHighlightedContainer = document.querySelector(
      ".day-forecast-container.highlight",
    );
    if (prevHighlightedContainer !== null) {
      prevHighlightedContainer.classList.remove("highlight");
    }
    dayForecastContainer.classList.add("highlight");
    displayConditions(dayData);
    displayHourlyForecast(dayData.hours);
  };
  return dayForecastContainer;
}

function fahrenheitToCelsius(fahrenheitValue) {
  return (((fahrenheitValue - 32) * 5) / 9).toFixed(1);
}

function getDateDescription(date) {
  const timeRegex = new RegExp(
    /^(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?$/,
  );
  if (timeRegex.test(date)) {
    return `Today ${date}`;
  } else if (isToday(date)) {
    return "Today";
  } else {
    return format(date, "eee, d MMM");
  }
}

export function displayLoadingAnimation(state) {
  if (state) {
    weatherDisplayContainer.innerHTML = "";
    const loaderContainer = createDOMElement({
      type: "div",
      classList: ["loader"],
    });
    weatherDisplayContainer.appendChild(loaderContainer);
  } else {
    weatherDisplayContainer.removeChild(
      weatherDisplayContainer.querySelector(".loader"),
    );
  }
}

export async function initiateWeatherSearch(location) {
  try {
    displayLoadingAnimation(true);
    const weatherData = await get_weather_at(location);
    displayLoadingAnimation(false);
    displayWeather(weatherData);
  } catch (err) {
    console.log(err);
  }
}

export function init_display() {
  init_search_bar();
  init_temperature_unit();
}
