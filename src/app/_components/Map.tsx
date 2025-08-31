"use client";

import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import type { Location } from "@/types";

type MapProps = {
  locations: Location[];
};

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = { lat: 19.4326, lng: -99.1332 }; // CDMX como fallback

export default function Map({ locations }: MapProps) {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={
        locations.length > 0
          ? {
            lat: locations[0].location.latitude,
            lng: locations[0].location.longitude,
          }
          : defaultCenter
      }
      zoom={15}
    >
      {locations.map((loc) => (
        <Marker
          key={loc.stepNumber}
          position={{
            lat: loc.location.latitude,
            lng: loc.location.longitude,
          }}
        />
      ))}
    </GoogleMap>
  );
};