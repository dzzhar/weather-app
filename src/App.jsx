import { useState } from "react";
import { DescriptionContent } from "./components/DescriptionContent";
import { GlobalStyle } from "./components/GlobalStyle";
import { MainContent } from "./components/MainContent";
import { SearchBar } from "./components/SearchBar";
import Layout from "./layout";
import WeatherContext from "./context/WeatherContext";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const value = {
    weatherData,
    setWeatherData,
  };

  return (
    <>
      <WeatherContext.Provider value={value}>
        <GlobalStyle />
        <Layout>
          <SearchBar />
          <MainContent />
          <DescriptionContent />
        </Layout>
      </WeatherContext.Provider>
    </>
  );
}

export default App;
