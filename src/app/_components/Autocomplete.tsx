"use client";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

export default function GoogleAutocomplete() {
  const acRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onLoad = useCallback((ac: google.maps.places.Autocomplete) => {
    acRef.current = ac;
  }, []);

  const onPlaceChanged = useCallback(() => {
    const ac = acRef.current;
    if (!ac) return;
    const place = ac.getPlace();
    if (place.geometry?.location) {
      console.log(place);
    }
  }, []);

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
      options={{
        fields: ["geometry", "formatted_address", "address_components", "name"],
        types: ["geocode"],
      }}
    >
      <input style={{ width: "100%", padding: 10, fontSize: 16 }}
        placeholder="Search address..." />
    </Autocomplete>
  )
}