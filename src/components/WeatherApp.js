import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import styles from "./WeatherApp.module.css";

const WeatherApp = () => {
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    loadInfo();
  }, []);

  React.useEffect(() => {
    document.title = `Weather | ${weather?.location.name}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);
      setWeather(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
};

export default WeatherApp;
