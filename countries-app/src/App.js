import React from "react";
import { Routes, Route } from "react-router-dom";
import Continents from "./components/Continents/index.tsx";
import CountryList from "./components/CountryList/index.tsx";
import {AppContent} from "./App.ts";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/index.js";
import GlobalStyles from "./theme/GlobalStyles.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles/>
      <AppContent>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/continents" element={<Continents />} />
        </Routes>
      </AppContent>
    </ThemeProvider>
  );
}

export default App;
