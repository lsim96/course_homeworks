import { useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountriesPage from "./Pages/CountriesPage/CountriesPage";

function App() {
  const linkData: string[] = [
    "Home",
    "Asia",
    "Americas",
    "Europe",
    "Africa",
    "Oceania",
  ];

  const headerTitle = "Trip Planner";

  const [page, setPage] = useState<string>("");

  return (
    <div className="App">
      <Header
        onClickedContinent={(continent) =>
          setPage(continent === "Home" ? "" : continent)
        }
        title={headerTitle}
        continents={linkData}
      />
      <main>
        <h1>10 Most popular tourist destinations</h1>
        <CountriesPage page={page} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
