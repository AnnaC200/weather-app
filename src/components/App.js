import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
// import ForecastSummary from "./ForecastSummary";

function App({ location }) {
  const { city, country } = location;
  // const { date, temperature, description, icon } = forecasts;
  return (
    <div>
      <LocationDetails city={city} country={country} />
      {/* <ForecastSummary date={date} temperature={temperature} description={description} icon={icon} /> */}
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

// App.propTypes = {
//   forecasts: PropTypes.shape({
//     date: PropTypes.number,
//     description: PropTypes.string,
//     icon: PropTypes.string,
//     temperature: PropTypes.shape({
//       min: PropTypes.number,
//       max: PropTypes.number,
//     }).isRequired,
//   });
// };

export default App;
