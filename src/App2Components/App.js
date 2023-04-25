import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { useState } from "react";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import ViewDrone from "./scenes/viewDrone";
import CreateDrone from "./scenes/createDrone";
import EditDrone from "./scenes/EditDrone";
import ViewSchedule from "./scenes/ViewScheules";
import CreateSchedule from "./scenes/CreateSchedule";
import Calendar from "./scenes/calendar";

import './App.css';


export function ViewDashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app2">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewDronePage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<ViewDrone />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function EditDronePage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<EditDrone />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export function CreateDronePage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<CreateDrone />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewSchedulePage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<ViewSchedule />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function CreateSchedulePage() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<CreateSchedule />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewBar() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Bar />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewPie() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Pie />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewLine() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Line />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewFaq() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<FAQ />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewGeography() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Geography />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewContacts() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Contacts />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function ViewCalendar() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app3">
          <div className="main-container">
            <Topbar setIsSidebar={setIsSidebar} />
            <div className="content-container">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Calendar />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}