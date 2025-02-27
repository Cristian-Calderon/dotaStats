import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

// 🔑 Reemplaza con tu token de Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiZ2FyZGVsIiwiYSI6ImNtN25qaDVrYjAxdXIybXNsYW1sandkejMifQ.lDHo9PVSYl2WJVUuSWg9lw";

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.006, 40.7128], // Coordenadas de Nueva York
      zoom: 10,
    });

    map.addControl(new mapboxgl.NavigationControl());

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />;
};

export default MapComponent;
