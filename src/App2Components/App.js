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
import EditSchedule from "./scenes/EditSchedule";
import ViewSchedule from "./scenes/ViewScheules";
import CreateSchedule from "./scenes/CreateSchedule";
import Calendar from "./scenes/calendar";
import DroneStatistics from "./components/DroneStatistics";

import { useRef, useEffect } from "react";
import { Viewer, Entity } from "resium";
import { JulianDate, SampledPositionProperty, TimeIntervalCollection, TimeInterval, PathGraphics, VelocityOrientationProperty, Cartesian3, Color, IonResource } from "cesium";
import { createWorldTerrainAsync, createOsmBuildings, Cesium3DTileStyle, Cesium3DTileset, Ion} from "cesium";

import './App.css';

// Add Cesium OSM Buildings.
//Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NmNjZmViMS04MTAwLTQ5NjQtYTdiYi0zODRmYTM5NWRjYzIiLCJpZCI6ODcyODAsImlhdCI6MTY0ODQ0NzY1OH0.KyD7w6STyR5RhWl5JaDQW-p_gWTmwT6aI1CrW7SBzP8";
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMWJkNmFiMi1lZmYyLTQ5ZmUtYTMwNC05Njk4ZDZmMGJhMmMiLCJpZCI6MTQ4Nzk3LCJpYXQiOjE2ODc1NzgyMzJ9.11e3lktXLvEOJTJSQmW5V4moqStiyt9xPUcYjXpMZk0";
const tileset = await Cesium3DTileset.fromIonAssetId(96188);

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

export function ViewDroneStatistics() {
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
                  <Route path="/" element={<DroneStatistics />} />
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

export function EditSchedulePage() {
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
                  <Route path="/" element={<EditSchedule />} />
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

export function ViewMissionPlanner() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const viewerRef = useRef();

  useEffect(() => {

    if (viewerRef.current) {
      
      const csEl = viewerRef.current.cesiumElement;

      var sjsu = csEl.entities.add({
        position : Cartesian3.fromDegrees(-121.885126, 37.335458, 1000),
        point : {
          pixelSize : 10,
          color: Color.YELLOW
        }
      });
      
      csEl.scene.primitives.add(tileset);
      tileset.style = new Cesium3DTileStyle({
        color: {
            conditions: [
                ["${feature['name']} === 'Charles W. Davidson College of Engineering'", "color('red')"],
                ["${feature['name']} === 'Music Building' || ${feature['name']} === 'Art Building'", "color('blue')"],
                ["${feature['building']} === 'apartments' || ${feature['building']} === 'residential'", "color('cyan')"],
                ["${feature['building']} === 'university' || ${feature['building']} === 'civic'", "color('yellow')"],
                ["true", "color('white')"],
            ],
        },
      });

      const flightData = JSON.parse(
        '[{"longitude":-121.88336385250544,"latitude":37.334793440579563,"height":100},{"longitude":-121.88307417393183,"latitude":37.334853824152312,"height":142},{"longitude":-121.88279449535822,"latitude":37.334978043610243,"height":155},{"longitude":-121.88241773212885,"latitude":37.335220506891354,"height":183},{"longitude":-121.88253098197937,"latitude":37.335467334999936,"height":206},{"longitude":-121.88247588012695,"latitude":37.335768040415863,"height":250},{"longitude":-121.88262972801208,"latitude":37.336034623130354,"height":294},{"longitude":-121.88296503356934,"latitude":37.336187370719364,"height":279},{"longitude":-121.88306961029053,"latitude":37.336267753363854,"height":268},{"longitude":-121.88324041512712,"latitude":37.336670354511567,"height":241},{"longitude":-121.88336309845354,"latitude":37.336655157154716,"height":231},{"longitude":-121.88364059051897,"latitude":37.336640236067136,"height":210},{"longitude":-121.88388589607622,"latitude":37.336588254265456,"height":197},{"longitude":-121.88391099792863,"latitude":37.336478316981844,"height":196},{"longitude":-121.88399318443681,"latitude":37.336190136110078,"height":191},{"longitude":-121.88397391327287,"latitude":37.335950484844475,"height":184},{"longitude":-121.88392099792863,"latitude":37.335669363266734,"height":141},{"longitude":-121.88386881142046,"latitude":37.335382936147145,"height":100},{"longitude":-121.88336385250544,"latitude":37.334793440579563,"height":100}]'      
      );

      /* Initialize the viewer clock:
         Assume the radar samples are 30 seconds apart, and calculate the entire flight duration based on that assumption.
         Get the start and stop date times of the flight, where the start is the known flight departure time (converted from PST 
         to UTC) and the stop is the start plus the calculated duration. (Note that Cesium uses Julian dates. See 
         https://simple.wikipedia.org/wiki/Julian_day.)
         Initialize the viewer's clock by setting its start and stop to the flight start and stop times we just calculated. 
         Also, set the viewer's current time to the start time and take the user to that time. 
     */
      const flying_loop_count = 4;
      const timeStepInSeconds = 60;
      const totalSeconds = flying_loop_count * timeStepInSeconds * (flightData.length - 1);
      const start = JulianDate.fromIso8601("2020-03-09T23:10:00Z");
      const stop = JulianDate.addSeconds(
        start,
        totalSeconds,
        new JulianDate()
      );
      csEl.clock.startTime = start.clone();
      csEl.clock.stopTime = stop.clone();
      csEl.clock.currentTime = start.clone();
      csEl.timeline.zoomTo(start, stop);
      // Speed up the playback speed 50x.
      csEl.clock.multiplier = 50;
      // Start playing the scene.
      csEl.clock.shouldAnimate = true;

      // The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
      const positionProperty = new SampledPositionProperty();
        for (let fly_loop = 0; fly_loop < flying_loop_count; fly_loop++) {
        for (let i = 0; i < flightData.length; i++) {
            const dataPoint = flightData[i];

            dataPoint.longitude = dataPoint.longitude;
            dataPoint.latitude = dataPoint.latitude;
            dataPoint.height = dataPoint.height + fly_loop;

            // Declare the time for this individual sample and store it in a new JulianDate instance.
            const time = JulianDate.addSeconds(
                start,
                i * timeStepInSeconds + fly_loop * (flightData.length-1) * timeStepInSeconds,
                new JulianDate()
            );
            const position = Cartesian3.fromDegrees(
                dataPoint.longitude,
                dataPoint.latitude,
                dataPoint.height
            );
            // Store the position along with its timestamp.
            // Here we add the positions all upfront, but these can be added at run-time as samples are received from a server.
            positionProperty.addSample(time, position);

            csEl.entities.add({
                description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.height})`,
                position: position,
                point: { pixelSize: 10, color: Color.RED },
            });
        }
      }

      // STEP 4 CODE (green circle entity)
      // Create an entity to both visualize the entire radar sample series with a line and add a point that moves along the samples.
      const airplaneEntity = csEl.entities.add({
        availability: new TimeIntervalCollection([
          new TimeInterval({ start: start, stop: stop }),
        ]),
        position: positionProperty,
        point: { pixelSize: 30, color: Color.GREEN },
        path: new PathGraphics({ width: 3 }),
      });
      // Make the camera track this moving entity.
      csEl.trackedEntity = airplaneEntity;

      // STEP 6 CODE (airplane entity)
      async function loadModel() {
        // Load the glTF model from Cesium ion.
        const airplaneUri = await IonResource.fromAssetId(2081359);
        const airplaneEntity = csEl.entities.add({
          availability: new TimeIntervalCollection([
            new TimeInterval({ start: start, stop: stop }),
          ]),
          position: positionProperty,
          // Attach the 3D model instead of the green point.
          model: { uri: airplaneUri },
          // Automatically compute the orientation from the position.
          orientation: new VelocityOrientationProperty(positionProperty),
          path: new PathGraphics({ width: 3 }),
        });

        csEl.trackedEntity = airplaneEntity;
      }

      loadModel();
    }
  }, []);
  
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

              <Viewer ref={viewerRef} full >
        
              </Viewer>

              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}