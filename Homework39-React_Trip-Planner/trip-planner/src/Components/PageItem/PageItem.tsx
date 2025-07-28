import { useContext } from "react";
import "./PageItem.css";
import { CountriesContext } from "../../Contexts/CountriesContext";
import Button from "../Button/Button";
import type { TripPlanner } from "../../models/trip.model";

interface PageItemProps {
  plannedCountry: TripPlanner;
}

function PageItem({ plannedCountry }: PageItemProps) {
  const { removeFromTripPlanner, addCountryDays, removeCountryDays } =
    useContext(CountriesContext);

  return (
    <div
      className="PageItem"
      style={{
        borderColor: plannedCountry.country.landlocked ? "green" : "blue",
      }}
    >
      <h3>{plannedCountry.country.name.common}</h3>
      <div className="wrapper">
        <Button
          disabled={plannedCountry.days === 1}
          onBtnClick={() => {
            removeCountryDays(plannedCountry);
          }}
        >
          <i className="fa-solid fa-minus"></i>
        </Button>
        <div className="days"> {plannedCountry.days} days</div>
        <Button
          disabled={plannedCountry.days === 30}
          onBtnClick={() => {
            addCountryDays(plannedCountry);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </Button>
        <Button
          onBtnClick={() => {
            removeFromTripPlanner(plannedCountry);
          }}
        >
          <i className="fa-solid fa-eraser"></i>
        </Button>
      </div>
    </div>
  );
}

export default PageItem;
