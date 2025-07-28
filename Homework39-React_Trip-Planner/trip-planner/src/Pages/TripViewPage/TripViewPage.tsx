import { useContext } from "react";
import { TripPanel } from "../../Components/TripPanel/TripPanel";
import "./TripViewPage.css";
import { CountriesContext } from "../../Contexts/CountriesContext";

export function TripViewPage() {
  const { trips } = useContext(CountriesContext);
  return (
    <>
      <h1 className="title">Trips:</h1>
      <div className="wrapper-trips">
        {trips.map((trip) => (
          <TripPanel
            key={`${trip.passenger.passportNum}-${Date.now()}`}
            trip={trip}
          />
        ))}
      </div>
    </>
  );
}
