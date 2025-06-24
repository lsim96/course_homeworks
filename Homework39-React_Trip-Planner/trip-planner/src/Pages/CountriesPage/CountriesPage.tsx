import "./CountriesPage.css";
import countryData from "../../data/countries.json";
import CountryPanel from "../../Components/CountryPanel/CountryPanel";

interface CountriesPageProps {
  page: string;
}

function CountriesPage({ page }: CountriesPageProps) {
  const filteredCountries = page
    ? countryData.filter((country) => country.continent === page)
    : countryData;
  return (
    <div className="countries">
      {filteredCountries.map((country) => (
        <CountryPanel key={country.name} country={country} />
      ))}
    </div>
  );
}

export default CountriesPage;
