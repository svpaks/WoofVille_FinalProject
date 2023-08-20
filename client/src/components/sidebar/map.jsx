import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithMarker = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapContainer center={position} zoom={14} style={{ height: '350px', width: '350px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Your Marker Popup Content</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapWithMarker;
