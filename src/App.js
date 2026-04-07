import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="App">
      <h1 className="app-title">☁ WeatherNow</h1>
      <p className="app-subtitle">Real-time weather anywhere</p>
      <SearchBox updateInfo={updateInfo} />
      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  );
}
