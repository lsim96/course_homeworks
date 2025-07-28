import type { Trip } from "../../models/trip.model";
import "./TripPanel.css";

interface TripPanelProps {
  trip: Trip;
}

export function TripPanel({ trip }: TripPanelProps) {
  return (
    <div className="trip-panel">
      <div className="trip-info">
        <h2>{trip.passenger.fullName}</h2>
        <p>
          <strong>Budget:</strong> {trip.passenger.budget}
        </p>
        <p>
          <strong>Email:</strong> {trip.passenger.email}
        </p>
        <p>
          <strong>Passport:</strong> {trip.passenger.passportNum}
        </p>
        <p>
          <strong>Comments:</strong> {trip.passenger.comments}
        </p>
      </div>
      <div className="trip-countries">
        <h2>Countries:</h2>
        <ol>
          {trip.countries.map((c, i) => (
            <li key={i}>
              {c.country.name.common} / {c.days}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
