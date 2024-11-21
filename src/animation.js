import snowIcon from "./assets/weather-icons/animated/snowy-3.svg";
import rainIcon from "./assets/weather-icons/animated/rainy-3.svg";
import fogIcon from "./assets/weather-icons/animated/fog.svg";
import windIcon from "./assets/weather-icons/animated/wind.svg";
import cloudyIcon from "./assets/weather-icons/animated/cloudy.svg";
import partlyCloudyDayIcon from "./assets/weather-icons/animated/cloudy-2-day.svg";
import partlyCloudyNightIcon from "./assets/weather-icons/animated/cloudy-2-night.svg";
import clearDayIcon from "./assets/weather-icons/animated/clear-day.svg";
import clearNightIcon from "./assets/weather-icons/animated/clear-night.svg";

import snowWallpaper from "./assets/wallpaper/snow.mp4";
import rainWallpaper from "./assets/wallpaper/rain.mp4";
import fogWallpaper from "./assets/wallpaper/fog.mp4";
import windWallpaper from "./assets/wallpaper/wind.mp4";
import cloudyWallpaper from "./assets/wallpaper/cloudy.mp4";
import partlyCloudyDayWallpaper from "./assets/wallpaper/partly-cloudy-day.mp4";
import partlyCloudyNightWallpaper from "./assets/wallpaper/partly-cloudy-night.mp4";
import clearDayWallpaper from "./assets/wallpaper/clear-day.mp4";
import clearNightWallpaper from "./assets/wallpaper/clear-night.mp4";

const weatherAssets = {
  snow: { icon: snowIcon, wallpaper: snowWallpaper },
  rain: { icon: rainIcon, wallpaper: rainWallpaper },
  fog: { icon: fogIcon, wallpaper: fogWallpaper },
  wind: { icon: windIcon, wallpaper: windWallpaper },
  cloudy: { icon: cloudyIcon, wallpaper: cloudyWallpaper },
  "partly-cloudy-day": {
    icon: partlyCloudyDayIcon,
    wallpaper: partlyCloudyDayWallpaper,
  },
  "partly-cloudy-night": {
    icon: partlyCloudyNightIcon,
    wallpaper: partlyCloudyNightWallpaper,
  },
  "clear-day": { icon: clearDayIcon, wallpaper: clearDayWallpaper },
  "clear-night": { icon: clearNightIcon, wallpaper: clearNightWallpaper },
};

export function createWeatherIcon(condition) {
  const weatherIconContainer = document.createElement("div");
  weatherIconContainer.classList.add("weather-icon");
  let svgPath;
  if (condition in weatherAssets) {
    svgPath = weatherAssets[condition].icon;
  }
  weatherIconContainer.appendChild(createImgContainer(svgPath, condition));
  return weatherIconContainer;
}

function createImgContainer(src, description = "") {
  const imgContainer = document.createElement("img");
  imgContainer.src = src;
  if (description !== "") {
    imgContainer.setAttribute("alt", description);
  }
  return imgContainer;
}

export function displayWallpaper(condition) {
  if ((!condition) in weatherAssets) {
    return;
  }
  const wallpaper = weatherAssets[condition].wallpaper;
  let wallpaperContainer = document.getElementById("wallpaper-container");
  if (wallpaperContainer === null) {
    wallpaperContainer = document.createElement("div");
    wallpaperContainer.id = "wallpaper-container";
    document.body.appendChild(wallpaperContainer);
  }
  wallpaperContainer.innerHTML = "";
  const videoContainer = document.createElement("video");
  videoContainer.setAttribute("autoplay", "");
  videoContainer.setAttribute("muted", "");
  videoContainer.setAttribute("loop", "");
  videoContainer.setAttribute("playsinline", "");
  videoContainer.id = "wallpaper";
  const sourceContainer = document.createElement("source");
  sourceContainer.setAttribute("src", wallpaper);
  sourceContainer.setAttribute("type", "video/mp4");
  videoContainer.appendChild(sourceContainer);
  wallpaperContainer.appendChild(videoContainer);
}
