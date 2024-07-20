import { StyledDescriptionContent } from "./DescriptionContent.styled";
import wind from "../../assets/wind.png";
import humidity from "../../assets/humidity.png";
import pressure from "../../assets/pressure.png";
import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";

export const DescriptionContent = () => {
  const { weatherData } = useContext(WeatherContext);

  const data = {
    wind: weatherData ? weatherData.wind.speed : null,
    humidity: weatherData ? weatherData.main.humidity : null,
    pressure: weatherData ? weatherData.main.pressure : null,
  };

  return (
    <StyledDescriptionContent>
      <div className="desc__single">
        <img src={wind} alt="" />
        <h3>{data.wind} Km/h</h3>
        <p>Wind Speed</p>
      </div>
      <div className="desc__single">
        <img src={humidity} alt="" />
        <h3>{data.humidity} %</h3>
        <p>Humidity</p>
      </div>
      <div className="desc__single">
        <img src={pressure} alt="" />
        <h3>{data.pressure} mb</h3>
        <p>Pressure</p>
      </div>
    </StyledDescriptionContent>
  );
};
