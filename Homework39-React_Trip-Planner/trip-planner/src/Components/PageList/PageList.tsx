import "./PageList.css";
import { useContext } from "react";
import { CountriesContext } from "../../Contexts/CountriesContext";
import PageItem from "../PageItem/PageItem";

function PageList() {
  const { getCountriesInTripPlanner } = useContext(CountriesContext);

  const countriesInPlanner = getCountriesInTripPlanner();

  return (
    <>
      {countriesInPlanner.length > 0 ? (
        <div className="PageList">
          <ol>
            {countriesInPlanner.map((country) => (
              <PageItem key={country.name.common} country={country} />
            ))}
          </ol>
        </div>
      ) : (
        <h2 className="EmptyList">No countries in planner</h2>
      )}
    </>
  );
}
export default PageList;
