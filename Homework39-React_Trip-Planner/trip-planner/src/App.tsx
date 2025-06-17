import { useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main/Main";

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

  const [page, setPage] = useState<string | null>(null);

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
        <Main title="10 Most popular tourist destinations" page={page} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
