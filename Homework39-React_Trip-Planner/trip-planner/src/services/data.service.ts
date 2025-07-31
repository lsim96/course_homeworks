import type { Country } from "../models/country.model";
import type { Passenger, Trip } from "../models/trip.model";

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

export const loadPlannerFromLocalStorage = (): Trip[] => {
  const countryJSON = localStorage.getItem("trips");

  if (!countryJSON) return [];

  return JSON.parse(countryJSON);
};
