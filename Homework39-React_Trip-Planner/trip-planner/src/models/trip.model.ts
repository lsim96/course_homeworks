import type { Country } from "./country.model";

export interface Passenger {
  fullName: string;
  email: string;
  budget: number;
  passportNum: number;
  comments: string;
}

export interface TripPlanner {
  country: Country;
  days: number;
}

export interface Trip {
  countries: TripPlanner[];
  passenger: Passenger;
}
