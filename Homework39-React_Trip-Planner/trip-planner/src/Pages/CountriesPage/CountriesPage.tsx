import "./CountriesPage.css";

import CountryPanel from "../../Components/CountryPanel/CountryPanel";
import { useContext, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { CountriesContext } from "../../Contexts/CountriesContext";

interface CountriesPageProps {
  page: string;
}

function CountriesPage({ page }: CountriesPageProps) {
  const { countries } = useContext(CountriesContext);
  const [input, setInput] = useState("");

  let filteredCountries = countries;

  if (page !== "") {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === page
    );
  } else {
    filteredCountries = filteredCountries.filter((country) =>
      country.name.common.toLowerCase().includes(input.toLowerCase())
    );
  }
  filteredCountries = filteredCountries.slice(0, 10);

  const handleSearch = (input: string) => {
    setInput(input);
  };

  return (
    <div>
      {page === "" && <SearchBar onSearch={handleSearch} />}
      <section className="countries">
        {filteredCountries.map((country) => (
          <CountryPanel key={country.name.common} country={country} />
        ))}
      </section>
    </div>
  );
}

export default CountriesPage;
