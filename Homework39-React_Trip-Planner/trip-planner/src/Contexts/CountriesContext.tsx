import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Country } from "../models/country.model";
import { httpService } from "../services/http.service";

interface CountriesContexInterface {
  countries: Country[];
  addToTripPlanner: (selectedCountry: Country) => void;
  removeFromTripPlanner: (selectedCountry: Country) => void;
  addCountryDays: (selectedCountry: Country) => void;
  removeCountryDays: (selectedCountry: Country) => void;
  fetchCountries: () => Promise<void>;
  getCountriesInTripPlanner: () => Country[];
}

export const CountriesContext = createContext<CountriesContexInterface>({
  countries: [],
  addToTripPlanner() {},
  async fetchCountries() {},
  getCountriesInTripPlanner() {
    return [];
  },
  removeFromTripPlanner() {},
  addCountryDays() {},
  removeCountryDays() {},
});

function ContriesProvider({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<Country[]>([]);

  const fetchCountries = async () => {
    try {
      const { data } = await httpService.get(
        "/all?fields=name,capital,region,area,flags,population,landlocked"
      );
      const countries: Country[] = data;

      setCountries(
        countries.map((country) => ({
          ...country,
          inTripPlanner: false,
          days: 0,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addToTripPlanner = (selectedCountry: Country) => {
    setCountries((prevCountry) => {
      return prevCountry.map((country) => {
        if (selectedCountry.name.common === country.name.common) {
          country.inTripPlanner = true;
          country.days = 1;
          return country;
        }
        return country;
      });
    });
  };

  const removeFromTripPlanner = (selectedCountry: Country) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.name.common === selectedCountry.name.common
          ? { ...country, inTripPlanner: false, days: 0 }
          : country
      )
    );
  };

  const addCountryDays = (selectedCountry: Country) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.name.common === selectedCountry.name.common
          ? { ...country, days: country.days + 1 }
          : country
      )
    );
  };

  const removeCountryDays = (selectedCountry: Country) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.name.common === selectedCountry.name.common
          ? { ...country, days: country.days - 1 }
          : country
      )
    );
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const getCountriesInTripPlanner = () =>
    countries.filter((country) => country.inTripPlanner);

  return (
    <>
      <CountriesContext.Provider
        value={{
          countries,
          addToTripPlanner,
          fetchCountries,
          getCountriesInTripPlanner,
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
