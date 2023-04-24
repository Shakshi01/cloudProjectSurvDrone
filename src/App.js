import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./App2Components/theme";

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import App2 from './App2Components/App';

import Topbar from "./App2Components/scenes/global/Topbar";
import Sidebar from "./App2Components/scenes/global/Sidebar";
import Dashboard from "./App2Components/scenes/dashboard";
import { useState } from "react";
import Team from "./App2Components/scenes/team";
import Invoices from "./App2Components/scenes/invoices";
import Contacts from "./App2Components/scenes/contacts";
import Bar from "./App2Components/scenes/bar";
import Form from "./App2Components/scenes/form";
import Line from "./App2Components/scenes/line";
import Pie from "./App2Components/scenes/pie";
import FAQ from "./App2Components/scenes/faq";
import Geography from "./App2Components/scenes/geography";


function AppContent() {
  const location = useLocation();
  const shouldRenderNavbar = !location.pathname.includes("/dashboard");
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
/*
  return (
    <div className="App">
      {shouldRenderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<App2 />} />
      </Routes>
    </div>
  );
*/
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app2">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/deviceManagement" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

