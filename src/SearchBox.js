import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "adec7147ef7ced997f068df6cc41e70e";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }

      let result = {
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        icon: jsonResponse.weather[0].icon,
        wind: jsonResponse.wind.speed,
      };

      setError(false);
      updateInfo(result);
    } catch (err) {
      setError(true);
      updateInfo(null);
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    if (!city.trim()) return;
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="SearchBox">
      <h2>Search for the Weather</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && (
        <p className="error-msg">City not found. Please try again!</p>
      )}
    </div>
  );
}
