"use client";
import styles from "./page.module.css";
import Map from "./_components/Map";
import Link from "next/link";
import { LoadScript } from "@react-google-maps/api";
import useSWR from "swr";

const fetcher = async () => {
  return {
    tripList: [
      {
        id: 1,
        name: "Seattle downtown",
        description: "Seattle downtown travel for 5 days where I am staying in the Fairmont Olympic Hotel",
        locationList: [
          {
            stepNumber: 1,
            name: "Fairmont Olympic Hotel",
            description: "Starting point",
            location: {
              latitude: 47.6080162,
              longitude: -122.3364451,
            },
          },
          {
            stepNumber: 2,
            name: "Pike Place Market",
            description: "Pike Place Market is a must-visit for anyone visiting Seattle. It is a vibrant market with a variety of vendors selling fresh produce, seafood, and other goods.",
            location: {
              latitude: 47.60621,
              longitude: -122.33207,
            },
          },
          {
            stepNumber: 3,
            name: "Space Needle",
            description: "Space Needle is a must-visit for anyone visiting Seattle. It is a tall tower that offers a panoramic view of the city.",
            location: {
              latitude: 47.60621,
              longitude: -122.33207,
            },
          },
        ],
      },
    ],
  };
};

export default function Home() {
  const { data, isLoading, error } = useSWR('tripList', fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string} libraries={["places"]}>
      <div className={styles.page}>
        <h1>Plan your trip</h1>
        <div>
          {data?.tripList.map((trip) => (
            <div key={trip.id} className={styles.tripContainer}>
              <div>
                <h2>{trip.name}</h2>
                <p>{trip.description}</p>
                <Link href={`/trip/${trip.id}`}><div className={styles.viewTripButton}>View trip</div></Link>
              </div>
              {/* Map of the trip */}
              <div className={styles.mapContainer}>
                <Map
                  locations={trip.locationList}
                />
              </div>
            </div>
          ))}
        </div>
      </div >
    </LoadScript>
  );
}
