import { useContext } from "react";
import type { Country } from "../../models/country.model";
import "./PageItem.css";
import { CountriesContext } from "../../Contexts/CountriesContext";
import Button from "../Button/Button";

interface PageItemProps {
  country: Country;
}

function PageItem({ country }: PageItemProps) {
  const { removeFromTripPlanner, addCountryDays, removeCountryDays } =
    useContext(CountriesContext);

  return (
    <div
      className="PageItem"
      style={{ borderColor: country.landlocked ? "green" : "blue" }}
    >
      <h3>{country.name.common}</h3>
      <div className="wrapper">
        <Button
          disabled={country.days === 1}
          onBtnClick={() => {
            removeCountryDays(country);
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </Button>
        <div className="days"> {country.days} days</div>
        <Button
          disabled={country.days === 30}
          onBtnClick={() => {
            addCountryDays(country);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
        <Button
          onBtnClick={() => {
            removeFromTripPlanner(country);
          }}
        >
          <i className="fa-solid fa-eraser"></i>
        </Button>
      </div>
    </div>
  );
}

export default PageItem;
