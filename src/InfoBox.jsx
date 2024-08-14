import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HOT_IMG from "./assets/HOT_IMG.jpg"
import COLD_IMG from "./assets/COLD_IMG.jpg"
import RAIN_IMG from "./assets/RAIN_IMG.jpg"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({ info }) {

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card className="card"sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_IMG
                : info.temp > 25
                ? HOT_IMG
                : COLD_IMG
            }
            title="Weather Image"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 25
                ? <WbSunnyIcon />
                : <AcUnitIcon />
              }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;c</p>
              <p>Humidity = {info.humidity}</p>
              <p>Max Temp = {info.temp_max}&deg;c</p>
              <p>Min Temp = {info.temp_min}&deg;c</p>
              <p>
                The weather can be described as{" "}
                <i>
                  <b>{info.weather}</b>
                </i>{" "}
                and feels like {info.feels_like}&deg;c
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
