import dynamic from "next/dynamic";

function MapContainer({ location }) {
  const Map = dynamic(
    () => import("./Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return <Map location={location} />;
}

export default MapContainer;
