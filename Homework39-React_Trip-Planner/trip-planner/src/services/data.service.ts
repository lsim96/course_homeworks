import type { Country } from "../models/country.model";
import type { Passenger, TripPlanner } from "../models/trip.model";

export const savePlannerInLocalStorage = (
  key: string,
  Countries: Country[],
  passangerInfo?: Passenger
) => {
  let result;

  if (key === "tripPlanner") {
    result = Countries?.filter((country) => country.inTripPlanner);
  }

  if (key === "passangerInfo") {
    result = passangerInfo;
  }

  localStorage.setItem(`${key}`, JSON.stringify(result));
};

export const loadPlannerFromLocalStorage = (): TripPlanner[] => {
  const countryJSON = localStorage.getItem("planned");

  if (!countryJSON) return [];

  return JSON.parse(countryJSON);
};
