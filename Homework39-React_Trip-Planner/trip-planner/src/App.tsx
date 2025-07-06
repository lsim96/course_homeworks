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

  return (
    <div className="App">
      <Header title={headerTitle} continents={linkData} />
      <main>
        <h1>10 Most popular tourist destinations</h1>
        <Routes>
          <Route path="/" element={<CountriesPage page={""} />}></Route>
          <Route path="/asia" element={<CountriesPage page={"Asia"} />}></Route>
          <Route
            path="/americas"
            element={<CountriesPage page={"Americas"} />}
          ></Route>
          <Route
            path="/europe"
            element={<CountriesPage page={"Europe"} />}
          ></Route>
          <Route
            path="/africa"
            element={<CountriesPage page={"Africa"} />}
          ></Route>
          <Route
            path="/oceania"
            element={<CountriesPage page={"Oceania"} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
