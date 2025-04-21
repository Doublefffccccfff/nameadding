import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios
      .get("https://crio-location-selector.onrender.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch countries:", error);
      });
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);

    if (country) {
      axios
        .get(`https://crio-location-selector.onrender.com/country=${country}/states`)
        .then((response) => {
          setStates(response.data);
        })
        .catch((error) => {
          console.error(`Failed to fetch states for ${country}:`, error);
        });
    }
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    if (selectedCountry && state) {
      axios
        .get(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${state}/cities`)
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.error(`Failed to fetch cities for ${state} in ${selectedCountry}:`, error);
        });
    }
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select Location</h2>

      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="block w-full p-2 mb-4 border rounded"
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

      <select
        value={selectedState}
        onChange={handleStateChange}
        className="block w-full p-2 mb-4 border rounded"
        disabled={!states.length}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={handleCityChange}
        className="block w-full p-2 mb-4 border rounded"
        disabled={!cities.length}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {selectedCountry && selectedState && selectedCity && (
        <div className="mt-4 text-lg">
            You selected {selectedCity}, {selectedState}, {selectedCountry}
          
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
