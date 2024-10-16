import React, { useMemo, useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import "./APIpage.css";

function APIpage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY, // Your Google API Key from .env
  });

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []); // Center of the map

  const [directionsResponse, setDirectionsResponse] = useState(null);

  // Define the marker positions (Pune and Mumbai)
  const markerPositions = [
    { lat: 18.52043, lng: 73.856743 },  // Pune
    { lat: 19.0760, lng: 72.8777 },     // Mumbai
  ];

  useEffect(() => {
    if (isLoaded) {
      // Create DirectionsService request
      const directionsService = new window.google.maps.DirectionsService();

      const origin = markerPositions[0]; // Start in Pune
      const destination = markerPositions[1]; // End in Mumbai

      // Request route from DirectionsService
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING, // Change travel mode as needed
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result); // Store the response to display the route
          } else {
            console.error(`Error fetching directions: ${result}`);
          }
        }
      );
    }
  }, [isLoaded]);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1> // Show a loading message while the map is being loaded
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={7} // Set zoom level to show the route between cities
        >
          {/* Add markers for origin and destination */}
          {markerPositions.map((position, index) => (
            <Marker key={index} position={position} />
          ))}

          {/* Render the route on the map if available */}
          {directionsResponse && (
            <DirectionsRenderer
              directions={directionsResponse}
              options={{
                polylineOptions: {
                  strokeColor: '#FF0000', // Color of the route line
                  strokeWeight: 4, // Thickness of the route line
                },
              }}
            />
          )}
        </GoogleMap>
      )}
    </div>
  );
}

export default APIpage;
