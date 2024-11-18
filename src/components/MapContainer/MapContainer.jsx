import { Loader } from "@googlemaps/js-api-loader";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

import { useEffect } from 'react';

const MapContainer = () => {

  const mapStyle = {
    display: 'block',
    height: '80vh',
    width: '80vw',
    margin: '5vw 10vw 0 10vw'
  }

  let geocoder;

  useEffect(() => {
    geocoder = new google.maps.Geocoder()
  }, [])

  return (
    <APIProvider
      apiKey={process.env.REACT_APP_API_KEY}
      onLoad={() => console.log("Maps API has loaded.")}
    >
        <Map
          style={mapStyle}
          defaultZoom={13}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        ></Map>
    </APIProvider>
  );
};

export default MapContainer;
