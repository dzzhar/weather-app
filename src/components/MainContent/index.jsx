/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { StyledMainContent } from "./MainContent";
import WeatherContext from "../../context/WeatherContext";

export const MainContent = () => {
  const { weatherData } = useContext(WeatherContext);

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const getTodayDate = () => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const today = new Date();
      const day = today.getDate();
      const monthIndex = today.getMonth();
      const year = today.getFullYear();

      const monthName = months[monthIndex];

      const formattedDate = `${monthName} ${day}, ${year}`;
      return formattedDate;
    };

    setCurrentDate(getTodayDate());
  }, []);

  const data = {
    city: weatherData ? weatherData.name : null,
    date: currentDate,
    icon: weatherData ? weatherData.weather[0].icon : null,
    description: weatherData ? weatherData.weather[0].main : null,
    temperature: weatherData
      ? Math.floor(weatherData.main.temp).toString().slice(0, 2)
      : null,
  };

  return (
    <StyledMainContent>
      <h2 className="main__desc"> {data.city}</h2>
      <p>{data.date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt=""
      />
      <h2 className="main__desc">{data.description}</h2>
      <div className="main__temp">
        <h1>{data.temperature}</h1>
        <div className="main__celcius"> °C</div>
      </div>
    </StyledMainContent>
  );
};
