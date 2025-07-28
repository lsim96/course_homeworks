import "./PageList.css";
import { useContext } from "react";
import { CountriesContext } from "../../Contexts/CountriesContext";
import PageItem from "../PageItem/PageItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function PageList() {
  const navigate = useNavigate();

  const { tripPlanner } = useContext(CountriesContext);

  return (
    <>
      {tripPlanner.length > 0 ? (
        <div className="PageList">
          <ol>
            {tripPlanner.map((plannedCountry) => (
              <PageItem
                key={plannedCountry.country.name.common}
                plannedCountry={plannedCountry}
              />
            ))}
          </ol>
          <div className="tripBtn">
            <Button
              onBtnClick={() => {
                navigate("/trip-info");
              }}
            >
              Create Trip
            </Button>
          </div>
        </div>
      ) : (
        <h2 className="EmptyList">No countries in planner</h2>
      )}
    </>
  );
}
export default PageList;
