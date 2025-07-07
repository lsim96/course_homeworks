import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import ContriesProvider from "./Contexts/CountriesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContriesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContriesProvider>
  </StrictMode>
);
