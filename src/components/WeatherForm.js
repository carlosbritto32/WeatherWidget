import React from "react";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = React.useState("");

  const onChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} />
    </form>
  );
};

export default WeatherForm;
