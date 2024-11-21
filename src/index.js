import "./style_reset.css";
import "./style.css";

import { get_user_location } from "./apiHandler";
import {
  init_display,
  displayLoadingAnimation,
  initiateWeatherSearch,
} from "./display";

async function startUpProcess() {
  init_display();
  try {
    displayLoadingAnimation(true);
    const userLocation = await get_user_location();
    displayLoadingAnimation(false);
    initiateWeatherSearch(userLocation);
  } catch (err) {
    displayLoadingAnimation(false);
    console.log(err);
  }
}

startUpProcess();
