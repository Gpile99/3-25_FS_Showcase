import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Maps() {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const [token, setToken] = useState(""); // Store Mapbox token

    useEffect(() => {
        // Fetch mapbox key from backend
        fetch("http://127.0.0.1:8000/api/mapbox-token/")
            .then((response) => response.json())
            .then((data) => {
                setToken(data.mapbox_token);
            })
            .catch((error) => console.error("Error fetching Mapbox token", error));
    }, []);

    useEffect(() => {
        if (!token) return; // Don't initialize the map until token is available

        mapboxgl.accessToken = token; // Set Mapbox access token

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-75.6903, 45.4211], // Ottawa, Canada (example)
            zoom: 10,
        });

        mapRef.current.on("load", () => {
            console.log("Map has loaded successfully.");
        });

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, [token]); // Runs only when token changes

    return <div ref={mapContainerRef} style={{ width: "100vw", height: "100vh" }} />;
}

export default Maps;
