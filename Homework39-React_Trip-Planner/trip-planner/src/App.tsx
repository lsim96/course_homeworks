import { useState } from "react";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountriesPage from "./Pages/CountriesPage/CountriesPage";
import { Route, Routes } from "react-router";

function App() {
  const linkData = [
    { page: "Home", path: "/" },
    { page: "Asia", path: "/asia" },
    { page: "Americas", path: "/americas" },
    { page: "Europe", path: "/europe" },
    { page: "Africa", path: "/africa" },
    { page: "Oceania", path: "/oceania" },
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
        <Routes>
          <Route path="/" element={<CountriesPage page={page} />}></Route>
          <Route path="/asia" element={<CountriesPage page={page} />}></Route>
          <Route path="/americas" element={<CountriesPage page={page}/>}></Route>
          <Route path="/europe" element={<CountriesPage page={page}/>}></Route>
          <Route path="/africa" element={<CountriesPage page={page}/>}></Route>
          <Route path="/oceania" element={<CountriesPage page={page}/>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
