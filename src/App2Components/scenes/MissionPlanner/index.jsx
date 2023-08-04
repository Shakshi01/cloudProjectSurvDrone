import React, { useState, useEffect, useRef } from "react";
import { Viewer, Entity, CameraFlyTo, PolylineGraphics } from "resium";
import { Cartesian3, BingMapsImageryProvider, Color, ColorMaterialProperty, PolylineDashMaterialProperty, IonResource} from "cesium";
import { createWorldTerrainAsync, createOsmBuildings, Cesium3DTileStyle, Cesium3DTileset, Ion} from "cesium";

// Add Cesium OSM Buildings.
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NmNjZmViMS04MTAwLTQ5NjQtYTdiYi0zODRmYTM5NWRjYzIiLCJpZCI6ODcyODAsImlhdCI6MTY0ODQ0NzY1OH0.KyD7w6STyR5RhWl5JaDQW-p_gWTmwT6aI1CrW7SBzP8";
const tileset = await Cesium3DTileset.fromIonAssetId(96188);

const MissionPlanner = () => {
  const [mapStyle, setMapStyle] = useState("");
  const [initialTime, setInitialTime] = useState(true);
  const [hasFlownTo, setHasFlownTo] = useState(false);
  const [plottedPoints, setPlottedPoints] = useState([Cartesian3.fromDegrees(-121.88332385250544, 37.33479344057956, 100)]);
  const [center, setcenter] = useState(Cartesian3.fromDegrees(-121.88332385250544, 37.33479344057956, 100));
  const [selectedOption, setSelectedOption] = useState("view1");
  const [pitch, setpitch] = useState(80);

  
  //const viewerRef = useRef(null);
  const duration = 5; 

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

      csEl.scene.primitives.add(tileset)
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialTime(false);
    }, duration * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

const points = [
  Cartesian3.fromDegrees(-121.88332385250544, 37.33479344057956, 100),
  Cartesian3.fromDegrees(-121.88303417393183, 37.33484382415231, 140),
  Cartesian3.fromDegrees(-121.88274449535822, 37.33498804361024, 150),
  Cartesian3.fromDegrees(-121.88249773212885, 37.335200506891354, 180),
  Cartesian3.fromDegrees(-121.88257098197937, 37.335497334999936,  210),
  Cartesian3.fromDegrees(-121.88249588012695, 37.33577804041586, 250),
  Cartesian3.fromDegrees(-121.88269972801208, 37.33602462313035, 290),
  Cartesian3.fromDegrees(-121.88292503356934, 37.33617737071936, 280),
  Cartesian3.fromDegrees(-121.88303961029053, 37.33622775336385, 265),
  Cartesian3.fromDegrees(-121.88320041512712, 37.336600354511, 245),
  Cartesian3.fromDegrees(-121.88334309845354, 37.33668515715471, 230),
  Cartesian3.fromDegrees(-121.88360059051897, 37.336650236067136, 210),
  Cartesian3.fromDegrees(-121.88382589607622, 37.33659825426545, 195),
  Cartesian3.fromDegrees(-121.88390099792863, 37.33641831698184, 195),
  Cartesian3.fromDegrees(-121.88393318443681, 37.33617013611007, 190),
  Cartesian3.fromDegrees(-121.88394391327287, 37.335930484844475, 185),
  Cartesian3.fromDegrees(-121.88390099792863, 37.335699363266734, 145),
  Cartesian3.fromDegrees(-121.88386881142046, 37.33538293614714, 100)
];

  const route_points = [
    Cartesian3.fromDegrees(-121.88336385250544, 37.33479344057956, 100),
    Cartesian3.fromDegrees(-121.88307417393183, 37.33485382415231, 142),
    Cartesian3.fromDegrees(-121.88279449535822, 37.33497804361024, 155),
    Cartesian3.fromDegrees(-121.88241773212885, 37.335220506891354, 183),
    Cartesian3.fromDegrees(-121.88253098197937, 37.335467334999936,  206),
    Cartesian3.fromDegrees(-121.88247588012695, 37.33576804041586, 250),
    Cartesian3.fromDegrees(-121.88262972801208, 37.33603462313035, 294),
    Cartesian3.fromDegrees(-121.88296503356934, 37.33618737071936, 279),
    Cartesian3.fromDegrees(-121.88306961029053, 37.33626775336385, 268),
    Cartesian3.fromDegrees(-121.88324041512712, 37.336670354511, 241),
    Cartesian3.fromDegrees(-121.88336309845354, 37.33665515715471, 231),
    Cartesian3.fromDegrees(-121.88364059051897, 37.336640236067136, 210),
    Cartesian3.fromDegrees(-121.88388589607622, 37.33658825426545, 197),
    Cartesian3.fromDegrees(-121.88391099792863, 37.33647831698184, 196),
    Cartesian3.fromDegrees(-121.88399318443681, 37.33619013611007, 191),
    Cartesian3.fromDegrees(-121.88397391327287, 37.335950484844475, 184),
    Cartesian3.fromDegrees(-121.88392099792863, 37.335669363266734, 141),
    Cartesian3.fromDegrees(-121.88386881142046, 37.33538293614714, 100)
  ];
  
  const viewpoint = Cartesian3.fromDegrees(-121.8831983, 37.336231897, 700);
  const viewpoint2 = Cartesian3.fromDegrees(-121.8841983, 37.324731897, 300);
  const [viewoption, setviewoption] = useState(viewpoint);

  const offset = new Cartesian3(0, 0, 1000);
  const [center_with_offset, setcenter_with_offset] = useState(Cartesian3.add(points[0], offset, new Cartesian3()));

  const imageryProvider = new BingMapsImageryProvider({
    url: "https://dev.virtualearth.net",
    key: "AgUxSV2LllLog7f-EOdWqdLixuTWFOhMyItfEGk0HglTbeh5Sx-aCGQ30dqUGMQt",
    mapStyle: mapStyle
  });

  //let center = Cartesian3.fromDegrees(-121.88107967376709, 37.33519023727494, 100);
  const heading = 0;
  //let pitch = 80;
  const range = 1000;
  //const duration = 5; 
  const delay = 5000; 

  let index = 0;
  const plotPoints = () => {
    if (
      index < points.length
    ) {
      setcenter(points[index]);
      setHasFlownTo(true);
      //setcenter_with_offset(Cartesian3.add(center, offset, new Cartesian3()));
      setPlottedPoints((prevPoints) => [...prevPoints, points[index]]);
      //center = points[index];
      if(index < points.length - 1)
        index++;
      //if (index < points.length) {
      const timer3 = setTimeout(() => {
        plotPoints();
      }, delay);
      //}
    }
  };

  useEffect(() => {
    if (!initialTime) {
      setHasFlownTo(true);
      const timer2 = setTimeout(() => {
        plotPoints();
      }, delay);
      //setTimeout(plotPoints, delay);
      return () => {
        clearTimeout(timer2);
      };
    } 
  }, [initialTime]);

  
  useEffect(() => {
    if(selectedOption === "view1"){
      setpitch(80);
      setviewoption(viewpoint);
      setHasFlownTo(false);
    }
    else if (selectedOption === "view2"){
      setpitch(0);
      setviewoption(viewpoint2);
      setHasFlownTo(false);
    }
  }, [selectedOption]);
  

  return (
    <Viewer ref={viewerRef} full >
      <Entity
        name="SJSU"
        position={center}
        point={{ pixelSize: 10 }}
      />
      <div style={{position: 'absolute', top: 0, left: 0, zIndex: 100}}>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="view1">View 1</option>
          <option value="view2">View2</option>
        </select>
      </div>
      {!initialTime && route_points.map((point, index) => (
      <Entity
        key={index}
        name={`Point ${index}`}
        position={point}
        point={{ pixelSize: 12, color: Color.GREENYELLOW }}
      />
    ))}
      <Entity>
        {!initialTime  && <PolylineGraphics
          positions={plottedPoints}
          material={new ColorMaterialProperty(Color.RED)}
          width={5}
        />}
      </Entity>
      <Entity>
        {!initialTime && <PolylineGraphics
          positions={route_points}
          material={new PolylineDashMaterialProperty({
            color: Color.YELLOW,
            dashLength: 16,
            gapColor: Color.TRANSPARENT
          })}
          width={5}
        />}
      </Entity>
      {initialTime ? (
        <CameraFlyTo duration={duration} destination={viewpoint} orientation={undefined} />
      ) : (!hasFlownTo && 
        <CameraFlyTo duration={1} destination={viewoption} orientation={{ heading, pitch, range }} />
      )}
    </Viewer>
  );
};

export default MissionPlanner;
