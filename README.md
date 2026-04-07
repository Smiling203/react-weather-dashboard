# ☁ WeatherNow — Weather Dashboard

A clean, responsive weather dashboard built with **React** and the **OpenWeatherMap API**. Displays current weather conditions and a 5-day forecast for any city in the world.

---

## Features

- **City search** — type any city name and hit Go
- **Current weather** — temperature, description, feels-like, min/max
- **Detailed stats** — humidity, wind speed, pressure, visibility, sunrise/sunset
- **5-day forecast** — daily min/max, weather icon, rain probability
- **°C / °F toggle** — switch units with one click
- **Responsive** — works on mobile, tablet, and desktop

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Smiling203/react-weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Get an API key
- Sign up free at [openweathermap.org](https://openweathermap.org/api)
- After signing up, find your key under **My API Keys**
- Free tier supports all endpoints used here

### 4. Set your API key
Create a `.env` file in the project root:
```
REACT_APP_WEATHER_API_KEY=your_actual_key_here
```

### 5. Run the app
```bash
npm start
```
Opens at `http://localhost:3000`

---

## Project Structure

```
src/
  App.js      — All components (SearchBar, CurrentWeather, ForecastCard, etc.)
  App.css     — All styles using CSS custom properties
  index.js    — React entry point
```

### Design Decisions

- **Single-file components** — kept all components in `App.js` for simplicity and easy review, per the "avoid over-engineering" guideline.
- **No external UI library** — pure CSS with CSS variables for theming; keeps the bundle small and shows CSS proficiency.
- **`useCallback` for fetch** — prevents the `useEffect` from re-running unnecessarily when the component re-renders.
- **Kelvin conversions** — OpenWeatherMap returns temps in Kelvin; conversions are done client-side so we only need one API call per search regardless of selected unit.
- **Grouped forecast** — the `/forecast` endpoint returns 3-hourly data for 5 days; we group by calendar day and pick the midday entry as representative.



## Build for Production

```bash
npm run build
```
Output in the `build/` folder — ready to deploy to Vercel, Netlify, or GitHub Pages.

---

*Built with React · Data by OpenWeatherMap*
