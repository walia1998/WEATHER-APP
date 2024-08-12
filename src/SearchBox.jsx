import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";



export default function SearchBox({updateInfo}) {
  const [city, setCity] = useState("");
  const [error, setError]  = useState(false);


  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "da91a0fa0c36a0d682821b53224882ce";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let json = await response.json();
      let result = {
        city: city,
        feels_like : json.main.feels_like,
        temp : json.main.temp,
        humidity : json.main.humidity,
        temp_max : json.main.temp_max,
        temp_min : json.main.temp_min,
        weather : json.weather[0].description,
      }
      console.log(result);
      return result;
    }catch(e) {
     throw(e)
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit =async(e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo)
    }
    catch(e) {
        setError(true);
    }
  };

  return (
    <div className="searchBox">
    
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button type="submit" variant="contained">
          Send
        </Button>
        {error && <p style={{color: "red"}}>No such place exist </p>}
      </form>
    </div>
  );
}
