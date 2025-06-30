import "./CountriesPage.css";
import countryData from "../../data/countries.json";
import CountryPanel from "../../Components/CountryPanel/CountryPanel";
import { useMemo, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";

interface CountriesPageProps {
  page: string;
}

function CountriesPage({ page }: CountriesPageProps) {
  // const filteredCountries = page
  //   ? countryData.filter((country) => country.continent === page)
  //   : countryData;

  const [input, setInput] = useState("");

  const filteredCountries = useMemo(() => {
    let result = countryData;

    if (page) {
      result = result.filter((country) => country.continent === page);
    } else if (input.trim()) {
      result = result.filter((country) =>
        country.name.toLowerCase().includes(input.toLowerCase())
      );
    }

    return result;
  }, [page, input]);

  const handleSearch = (input: string) => {
    setInput(input);
  };

  return (
    <div className="countries">
      {(page === "" && <SearchBar onSearch={handleSearch} />
        ? filteredCountries.slice(0, 10)
        : filteredCountries
      ).map((country) => (
        <CountryPanel key={country.name} country={country} />
      ))}
      {/* {page === "" && <SearchBar onSearch={handleSearch} />}
      <div className="countries">
        {filteredCountries.map((country) => (
          <CountryPanel key={country.name} country={country} />
        ))} */}
    </div>
  );
}

export default CountriesPage;
