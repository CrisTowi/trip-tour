"use client";
import PlacesSelector from "@/app/_components/PlacesSelector";
import Map from "@/app/_components/Map";
import AccordionMenu from "@/app/_components/AccordionMenu";
import { LoadScript } from "@react-google-maps/api";

export default async function TripPage({ params }: { params: { tripId: string } }) {

  const { tripId } = params;
  return (
    <div>TripPage {tripId}
      <AccordionMenu items={[{
        title: "Initial point", content: <div>Step 1</div>
      }, {
        title: "Places", content: <PlacesSelector />
      }]} />
      <Map
        locations={[]}
      />
    </div>
  );
}