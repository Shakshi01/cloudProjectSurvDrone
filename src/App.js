import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./App2Components/theme";

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import {ViewDashboard,ViewDronePage,ViewSchedulePage,CreateDronePage,CreateSchedulePage} from './App2Components/App';
//import App3 from './App2Components/App';

import Topbar from "./App2Components/scenes/global/Topbar";
import Sidebar from "./App2Components/scenes/global/Sidebar";
import Dashboard from "./App2Components/scenes/dashboard";
import Team from "./App2Components/scenes/team";
import Invoices from "./App2Components/scenes/invoices";
import Contacts from "./App2Components/scenes/contacts";
import Bar from "./App2Components/scenes/bar";
import Form from "./App2Components/scenes/form";
import Line from "./App2Components/scenes/line";
import Pie from "./App2Components/scenes/pie";
import FAQ from "./App2Components/scenes/faq";
import Geography from "./App2Components/scenes/geography";
import CreateSchedule from "./App2Components/scenes/CreateSchedule"
import ViewScheules from "./App2Components/scenes/ViewScheules"
import CreateDrone from './App2Components/scenes/createDrone';
import ViewDrone from './App2Components/scenes/viewDrone';


function AppContent() {
  const location = useLocation();
  const shouldRenderNavbar = !location.pathname.includes("/dashboard");
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);



  return (
    <div className="App">
      {shouldRenderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<ViewDashboard />} />
        <Route path="/dashboard/viewSchedular" element={<ViewSchedulePage />} />
        <Route path="/dashboard/createSchedular" element={<CreateSchedulePage />} />
        <Route path="/dashboard/viewDrone" element={<ViewDronePage />} />
        <Route path="/dashboard/createDrone" element={<CreateDronePage />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/geography" element={<Geography />} />
      </Routes>
    </div>
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
