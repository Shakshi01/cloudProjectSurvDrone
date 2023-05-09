import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '1500px',
    height: '600px'
  };

  function Map1(props) {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAyOOeicrTp_8wTLPxp-64TCuwl_-OvntM"
    })

    const center={lat:37.33590253146588,lng:-121.88253879547119};
    const [marker,setMarkers]=React.useState({});

    const placeClicked = (e) => {
        setMarkers({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          });
          props.setLocation({lat:e.latLng.lat(),lng:e.latLng.lng()})
  }
  
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onClick={placeClicked}
        >
                <Marker 
                position={{ 
                    lat: marker.lat,
                    lng: marker.lng 
                }} />
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(Map1);