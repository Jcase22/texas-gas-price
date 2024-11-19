import { Loader } from "@googlemaps/js-api-loader";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import axios from 'axios';
import { useEffect, useState } from 'react';

const MapContainer = () => {

  const mapStyle = {
    display: 'block',
    height: '80vh',
    width: '80vw',
    margin: '5vw 10vw 0 10vw'
  }

  //"2995 Dulles Ave Missouri City, TX"

  const geocoder = async (address) => {

    const results = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: process.env.REACT_APP_API_KEY
      }
    })

    console.log(results.data.results);
  }

  useEffect(() => {
    geocoder("2995 Dulles Ave Missouri City, TX")
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
