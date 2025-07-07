import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Country } from "../models/country.model";
import { httpService } from "../services/http.service";

interface CountriesContexInterface {
  countries: Country[];
  fetchCountries: () => Promise<void>;
}

export const CountriesContext = createContext<CountriesContexInterface>({
  countries: [],
  async fetchCountries() {},
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
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <CountriesContext.Provider
        value={{
          countries,
          fetchCountries,
        }}
      >
        {children}
      </CountriesContext.Provider>
    </>
  );
}

export default ContriesProvider;
