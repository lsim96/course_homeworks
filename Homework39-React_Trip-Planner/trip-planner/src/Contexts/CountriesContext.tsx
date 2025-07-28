import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Country } from "../models/country.model";
import { httpService } from "../services/http.service";
import type { Trip, TripPlanner } from "../models/trip.model";

interface CountriesContexInterface {
  countries: Country[];
  tripPlanner: TripPlanner[];
  trips: Trip[];
  addToTripPlanner: (selectedCountry: Country) => void;
  createTrip: (trip: Trip) => void;
  removeFromTripPlanner: (selectedCountry: TripPlanner) => void;
  addCountryDays: (selectedCountry: TripPlanner) => void;
  removeCountryDays: (selectedCountry: TripPlanner) => void;
  fetchCountries: () => Promise<void>;
  getCountriesInTripPlanner: () => TripPlanner[];
  resetTripPlanner: () => void;
}

export const CountriesContext = createContext<CountriesContexInterface>({
  countries: [],
  tripPlanner: [],
  trips: [],
  createTrip: () => {},
  addToTripPlanner() {},
  async fetchCountries() {},
  getCountriesInTripPlanner() {
    return [];
  },
  resetTripPlanner() {},
  removeFromTripPlanner() {},
  addCountryDays() {},
  removeCountryDays() {},
});

function ContriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [tripPlanner, setTripPlanner] = useState<TripPlanner[]>([]);
  const [trips, setTrips] = useState<Trip[]>([]);

  const fetchCountries = async () => {
    try {
      const { data } = await httpService.get(
        "/all?fields=name,capital,region,area,flags,population,landlocked"
      );
      const countries: Country[] = data;

      setCountries(countries);
    } catch (error) {
      console.log(error);
    }
  };

  const addToTripPlanner = (selectedCountry: Country) => {
    const countryExist = tripPlanner.some(
      (tripPlanner) =>
        tripPlanner.country.name.common === selectedCountry.name.common
    );

    if (countryExist) {
      return;
    }

    const updatedTrip: TripPlanner[] = [
      ...tripPlanner,
      { country: selectedCountry, days: 1 },
    ];

    setTripPlanner(updatedTrip);

    localStorage.setItem("tripPlanner", JSON.stringify(updatedTrip));

    // console.log(country)
  };

  const removeFromTripPlanner = (selectedCountry: TripPlanner) => {
    const tripPlannerStorage = localStorage.getItem("tripPlanner");

    if (tripPlannerStorage) {
      const filteredTripPlanner = JSON.parse(tripPlannerStorage).filter(
        (tripPlanner: TripPlanner) =>
          tripPlanner.country.name.common !==
          selectedCountry.country.name.common
      );

      localStorage.setItem("tripPlanner", JSON.stringify(filteredTripPlanner));
    }

    setTripPlanner(
      tripPlanner.filter(
        (tripPlanner: TripPlanner) =>
          tripPlanner.country.name.common !==
          selectedCountry.country.name.common
      )
    );
  };

  const addCountryDays = (selectedCountry: TripPlanner) => {
    const plannedCountriesStorage = localStorage.getItem("tripPlanner");

    const updatedDays = (
      plannedCountriesStorage ? JSON.parse(plannedCountriesStorage) : []
    ).map((plannedCountry: TripPlanner) => {
      if (
        plannedCountry.country.name.common ===
        selectedCountry.country.name.common
      ) {
        plannedCountry.days += 1;
      }

      return plannedCountry;
    });

    localStorage.setItem("tripPlanner", JSON.stringify(updatedDays));

    const plannedCountries = tripPlanner.map((plannedCountry) => {
      if (
        plannedCountry.country.name.common ===
        selectedCountry.country.name.common
      ) {
        plannedCountry.days += 1;
      }

      return plannedCountry;
    });

    setTripPlanner(plannedCountries);
  };

  const removeCountryDays = (selectedCountry: TripPlanner) => {
    const plannedCountriesStorage = localStorage.getItem("tripPlanner");

    const updatedDays = (
      plannedCountriesStorage ? JSON.parse(plannedCountriesStorage) : []
    ).map((plannedCountry: TripPlanner) => {
      if (
        plannedCountry.country.name.common ===
        selectedCountry.country.name.common
      ) {
        plannedCountry.days -= 1;
      }

      return plannedCountry;
    });

    localStorage.setItem("tripPlanner", JSON.stringify(updatedDays));

    const plannedCountries = tripPlanner.map((plannedCountry) => {
      if (
        plannedCountry.country.name.common ===
        selectedCountry.country.name.common
      ) {
        plannedCountry.days -= 1;
      }

      return plannedCountry;
    });

    setTripPlanner(plannedCountries);
  };

  const getCountriesInTripPlanner = () => {
    if (!tripPlanner.length) {
      const tripPlannerStorage = localStorage.getItem("tripPlanner");

      const storedPlannedCountries = tripPlannerStorage
        ? JSON.parse(tripPlannerStorage)
        : tripPlanner;

      setTripPlanner(storedPlannedCountries);
    }

    return tripPlanner;
  };

  const resetTripPlanner = () => {
    setCountries((prevCountries) =>
      prevCountries.map((country) => ({
        ...country,
        inTripPlanner: false,
        days: 0,
      }))
    );
  };

  const createTrip = (trip: Trip) => {
    const tripsStorage = localStorage.getItem("trips");

    const storedTrips = tripsStorage ? [...JSON.parse(tripsStorage), trip] : [];

    localStorage.setItem("trips", JSON.stringify(storedTrips));

    setTrips(storedTrips);
  };

  useEffect(() => {
    fetchCountries();
    getCountriesInTripPlanner();
  }, []);

  return (
    <>
      <CountriesContext.Provider
        value={{
          countries,
          tripPlanner,
          trips,
          createTrip,
          addToTripPlanner,
          fetchCountries,
          getCountriesInTripPlanner,
          resetTripPlanner,
          removeFromTripPlanner,
          addCountryDays,
          removeCountryDays,
        }}
      >
        {children}
      </CountriesContext.Provider>
    </>
  );
}

export default ContriesProvider;
