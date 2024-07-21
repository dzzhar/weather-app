/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { StyledMainContent } from "./MainContent";
import WeatherContext from "../../context/WeatherContext";

export const MainContent = () => {
  const { weatherData } = useContext(WeatherContext);

  const [currentDate, setCurrentDate] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);

  useEffect(() => {
    const fetchTimezoneData = async () => {
      try {
        if (weatherData && weatherData.timezone) {
          setTimezoneOffset(weatherData.timezone);
        }
      } catch (error) {
        console.error("Error fetching timezone data:", error);
      }
    };

    fetchTimezoneData();
  }, [weatherData]);

  useEffect(() => {
    const getTodayDate = () => {
      if (!weatherData || !weatherData.dt) return "";

      const unixTimestamp = weatherData.dt + timezoneOffset;
      const date = new Date(unixTimestamp * 1000);
      const formattedDate = formatDate(date);
      setCurrentDate(formattedDate);
    };

    getTodayDate();
  }, [weatherData, timezoneOffset]);

  const formatDate = (date) => {
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
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${months[monthIndex]} ${day}, ${year}`;
  };

  const formatTimezoneOffset = (offset) => {
    const hours = Math.floor(offset / 3600);
    const minutes = Math.abs(offset % 3600) / 60;
    const sign = offset >= 0 ? "+" : "-";
    return `GMT ${sign}${Math.abs(hours)}:${String(minutes).padStart(2, "0")}`;
  };

  const data = {
    city: weatherData ? weatherData.name : null,
    date: currentDate,
    icon: weatherData ? weatherData.weather[0].icon : null,
    description: weatherData
      ? weatherData.weather[0].description
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : null,
    temperature: weatherData
      ? Math.floor(weatherData.main.temp).toString().slice(0, 2)
      : null,
    timezone: formatTimezoneOffset(timezoneOffset),
  };

  return (
    <StyledMainContent>
      <h2 className="main__desc">{data.city}</h2>
      <p>
        {data.date} {data.timezone}
      </p>
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
