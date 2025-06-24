import "./CountryPanel.css";
import type { Country } from "../../models/country.model";

interface CountryPanelProps {
  country: Country;
}

function CountryPanel({ country }: CountryPanelProps) {
  return (
    <div className="panel">
      <h1>{country.name}</h1>
      <div className="card">
        <ul className="capital">
          <h2>Capital:</h2>
          <li>{country.capital}</li>
        </ul>
        <ul className="continent">
          <h2>Continent:</h2>
          <li>{country.continent}</li>
        </ul>
        <ul className="population">
          <h2>Population:</h2>
          <li>{country.population}</li>
        </ul>
      </div>
    </div>
  );
}

export default CountryPanel;
