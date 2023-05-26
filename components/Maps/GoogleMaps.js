import React, { useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// Assuming you have GOOGLE_MAPS_API_KEY in your environment
const GOOGLE_MAPS_API_KEY =  AIzaSyB9xXrSGUyq6NnPICbyfKkWJPEvVqVc7UE;

const containerStyle = {
 width: '400px',
 height: '400px'
};

const center = {
 lat: -34.397, 
 lng: 150.644
};

function GoogleMaps() {
const { isLoaded } = useJsApiLoader({
 id: 'google-map-script',
 googleMapsApiKey: GOOGLE_MAPS_API_KEY
 })

 const [map, setMap] = React.useState(null)
 const [selectedLocation, setSelectedLocation] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

 

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

 

  useEffect(() => {
    if (isLoaded && !map) {
      new google.maps.Map(mapRef.current, {
        center: center,
        zoom: 8
      });
    }

    if (map) {
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
        const infowindow = new google.maps.InfoWindow({
          content: location.info,
        });
        marker.addListener("click", () => {
          setSelectedLocation(location);
        });
      });
    }
  }, [isLoaded, map]);

 

  return isLoaded ? (
<GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
>
    {locations.map(location => (
<Marker 
        key={`${location.lat}-${location.lng}`} 
        position={location} 
        onClick={() => {
          setSelectedLocation(location);
        }}
      />
    ))}

 

    {selectedLocation && (
<InfoWindow
        position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
        onCloseClick={() => {
          setSelectedLocation(null);
        }}
>
<div>{selectedLocation.info}</div>
</InfoWindow>
    )}

 

    </GoogleMap>
  ) : <></>
}

 

export default GoogleMaps;
