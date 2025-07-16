import "./CountryPanel.css";
import type { Country } from "../../models/country.model";
import Button from "../Button/Button";
import { useContext } from "react";
import { CountriesContext } from "../../Contexts/CountriesContext";

interface CountryPanelProps {
  country: Country;
}

function CountryPanel({ country }: CountryPanelProps) {
  const { addToTripPlanner } = useContext(CountriesContext);

  return (
    <div
      className="panel"
      style={{ borderColor: country.landlocked ? "green" : "blue" }}
    >
      <h1>{country.name.common}</h1>
      <div className="card">
        <ul className="capital">
          <h2>Capital:</h2>
          <li>{country.capital}</li>
        </ul>
        <ul className="area">
          <h2>Continent:</h2>
          <li>{country.area}</li>
        </ul>
        <ul className="population">
          <h2>Population:</h2>
          <li>{country.population}</li>
          <Button
            disabled={country.inTripPlanner}
            onBtnClick={() => {
              addToTripPlanner(country);
            }}
          >
            {country.inTripPlanner ? (
              "ADDED"
            ) : (
              <i className="fa-solid fa-plane"></i>
            )}
          </Button>
        </ul>
      </div>
    </div>
  );
}

export default CountryPanel;
