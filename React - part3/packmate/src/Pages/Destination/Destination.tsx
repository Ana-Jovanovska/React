import "./Destination.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../state/store";
import {
  fetchCountries,
  setSelectedCountry,
} from "../../state/slice/destination.slice";
import { Country } from "../../models/country.model";

function Destination() {
  const dispatch: AppDispatch = useDispatch();
  const { countries, loading, error } = useSelector(
    (state: RootState) => state.destination
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSelectCountry = (country: Country) => {
    dispatch(setSelectedCountry(country));
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();
  const linkDataArr: LinkData[] = [
    {
      path: "/home",
      text: "HOME",
    },
  ];
  return (
    <div className="Destination">
      <div className="destination-container">
        <Header title="🧳PackMate" linkDataArr={linkDataArr} />
      </div>
      <div className="container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a country"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {loading && <p className="message">Loading...</p>}
        {error && <p className="message">{error}</p>}
        <div className="navigate-btn">
          <button
            onClick={() => {
              navigate("/trip-details");
            }}
          >
            <i className="fa-solid fa-hand-point-right"></i>
          </button>
        </div>
        <div className="country-list">
          {filteredCountries.map((country) => (
            <div
              key={country.name.common}
              className="country-card"
              onClick={() => handleSelectCountry(country)}
            >
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="flag"
              />
              <p className="country-name">{country.name.common}</p>
              <p className="country-info">Population: {country.population}</p>
              <p className="country-info">Region: {country.region}</p>
              <p className="country-info">
                Capital: {country.capital?.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Destination;
