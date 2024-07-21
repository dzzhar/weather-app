/* eslint-disable react-hooks/exhaustive-deps */
import "boxicons";
import { StyledSearchBar } from "./SearchBar.sytled";
import { useContext, useEffect, useRef, useState } from "react";
import { URL } from "../../../utils/constant/endpoints";
import WeatherContext from "../../context/WeatherContext";

export const SearchBar = () => {
  const inputRef = useRef();

  const { setWeatherData } = useContext(WeatherContext);

  const search = async (city) => {
    if (city === "") {
      alert("Please enter city name");
      return;
    } else if (!city) {
      alert("Wrong city");
      return;
    }

    try {
      const response = await fetch(`${URL(city)}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    search(inputRef.current.value);
  };

  useEffect(() => {
    search("Indonesia");
  }, []);

  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search" ref={inputRef} />
      <button onClick={handleSearch}>
        <box-icon name="search" color="#adafb1"></box-icon>
      </button>
    </StyledSearchBar>
  );
};
