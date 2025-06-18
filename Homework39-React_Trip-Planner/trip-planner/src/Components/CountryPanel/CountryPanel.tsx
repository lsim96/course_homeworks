import "./CountryPanel.css";
import type { Country } from "../../models/country.model";

interface CountryPanelProps {
  Country: Country;
}

function CountryPanel({ Country }: CountryPanelProps) {
  return (
    <div className="panel">
      <h1>{Country.name}</h1>
      <div className="card">
        <ul className="capital">
          <h2>Capital</h2>
          <li>{Country.capital}</li>
        </ul>
        <ul className="continent">
          <h2>Continent</h2>
          <li>{Country.continent}</li>
        </ul>
        <ul className="population">
          <h2>Population</h2>
          <li>{Country.population}</li>
        </ul>
      </div>
    </div>
  );
}

export default CountryPanel;
