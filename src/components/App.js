import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";

function App({ forecasts, location }) {
  const { city, country } = location;
  const { date, temperature, description, icon } = forecasts;
  return (
    <div className="app">
      <LocationDetails city={city} country={country} />
      <ForecastSummary
        date={date}
        temp={temperature}
        description={description}
        icon={icon}
      />
    </div>
  );
}

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
