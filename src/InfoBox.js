import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Pick background image based on weather description
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600";
  const COLD_URL =
    "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=600";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600";

  let getImage = () => {
    if (info.weather.includes("rain") || info.weather.includes("drizzle"))
      return RAIN_URL;
    if (info.temp < 15) return COLD_URL;
    return HOT_URL;
  };

  return (
    <div className="InfoBox">
      <h2>
        Weather Info — {info.city}, {info.country}
      </h2>
      <div className="card-container">
        <Card sx={{ maxWidth: 380 }}>
          <CardMedia
            component="img"
            height="180"
            image={getImage()}
            alt={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {info.city} &nbsp;
              <img
                src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
                alt={info.weather}
                style={{ verticalAlign: "middle", width: 50 }}
              />
            </Typography>

            <Typography variant="h5" color="text.secondary" gutterBottom>
              🌡 {info.temp}°C &nbsp;|&nbsp; {info.weather}
            </Typography>

            <Typography variant="body1">
              🔼 Max: <b>{info.tempMax}°C</b> &nbsp; 🔽 Min: <b>{info.tempMin}°C</b>
            </Typography>
            <Typography variant="body1">
              🤔 Feels like: <b>{info.feels_like}°C</b>
            </Typography>
            <Typography variant="body1">
              💧 Humidity: <b>{info.humidity}%</b>
            </Typography>
            <Typography variant="body1">
              🌬 Wind: <b>{info.wind} m/s</b>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
