import React, { useEffect, useState } from "react";
import markersData from './markers';
import { useRouter } from 'next/router';

function MapExample() {
  
  
const locations = [
  { lat: 47.49504899, lng: 19.05065663 , title: "Budapest", description: "Budapest is the capital and the most populous city of Hungary, and the ninth-largest city in the European Union by population within city limits."},
  { lat: 47.49849535, lng: 19.06504255 },
  { lat: 47.50022643, lng: 19.06265799 },
  { lat: 47.50335807, lng: 19.05146564 },
  { lat: 47.49713962, lng: 19.05654531 },
  { lat: 47.49996959, lng: 19.06168345 },
  { lat: 47.42975086, lng: 19.06757391 },
  { lat: 47.42234708, lng: 19.07143856 },
  { lat: 47.490186, lng: 19.047106 },
  { lat: 47.490186, lng: 19.047106 },
  { lat: 48.876546, lng: 2.364366799 },
  { lat: 52.60017438, lng: 13.39518919 },
  { lat: 52.59027002, lng: 13.33503546 },
  
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

  const router = useRouter();
  const [dataArray, setDataArray] = useState([]);
  const mapRef = React.useRef(null);
    useEffect(() => {
      let google = window.google;
      let map = mapRef.current;
      let lat = "47.4979";
      let lng = "19.0402";
      const myLatlng = new google.maps.LatLng(lat, lng);
      const mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#cbd5e0" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: { url: "img/marker.png",
      scaledSize: new google.maps.Size(50, 50),
      anchor: new google.maps.Point(25, 25),
      shape: {
        coords: [25, 25, 25],
        type: 'circle'
      }
    },
    title: "Budapest",
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((position, i) => {
      marker = new google.maps.Marker({
        position: position,
        map: map,
        // icon:  "img/marker.png",
        icon: { url: "img/marker.png",
        scaledSize: new google.maps.Size(50, 50),
        anchor: new google.maps.Point(25, 25),
        shape: {
          coords: [25, 25, 25],
          type: 'circle'
        },
      },
        animation: google.maps.Animation.DROP,
        // title: "helllooo",
        label: locations.title
      });

      google.maps.event.addListener(marker, "click", function () {
        navigateToLocation(null, position.lat, position.lng);
        handleRedirect();
      });
    });

    const contentString =
      '<div class="info-window-content"><h2>Notus NextJS</h2>' +
      "<p>A free Admin for Tailwind CSS, React, React Hooks, and NextJS.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const navigateToLocation = (address, latitude, longitude) => {
      const zoomLevel = 14;
      let mapUrl = '';
      if (typeof window !== 'undefined') {
        if (address) {
          const encodedAddress = encodeURIComponent(address);
          mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        } else if (latitude && longitude) {
          mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&zoom=${zoomLevel}`;
        }
  
        if (mapUrl) {
          window.open(mapUrl, '_blank');
        }
      }
    }
    const handleRedirect = () => {
      window.open('/art', '_blank');
    };

  });
  return (
    <>
      <div className="relative h-full rounded h-600-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
    </>
  );
}

export default MapExample;
