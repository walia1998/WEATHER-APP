import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    // city: "Palampur",
    // feels_like: 35.05,
    // humidity: 100,
    // temp: 28.05,
    // temp_max: 28.05,
    // temp_min: 28.05,
    // weather: "mist",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="Weather_App">
      <h2>Weather App by Ashish Walia</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
