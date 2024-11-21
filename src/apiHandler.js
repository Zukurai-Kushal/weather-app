export async function get_user_location() {
  try {
    const location_data = await fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=da4cced2b4484b65bfe629c42c1e7c05",
      { method: "GET" },
    );
    const location_result = await location_data.json();
    const location_address = `${location_result.city.name}, ${location_result.country.name}`;
    return location_address;
  } catch (error) {
    console.error("IP Location Error", error);
  }
}

export async function get_weather_at(location) {
  try {
    const weatherDataResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LZH27Q7URJEH39RX3W5DDG2H7`,
      { mode: "cors" },
    );
    const weatherData = await weatherDataResponse.json();
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}
