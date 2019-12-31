import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MapView = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.position.latitude, lng: props.position.longitude }}
  >
    <Marker
      position={{ lat: props.position.latitude, lng: props.position.longitude }}
    />
  </GoogleMap>
));