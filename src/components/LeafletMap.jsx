import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from "leaflet"; 
import "leaflet-control-geocoder/dist/Control.Geocoder.css" ; 
import "leaflet-control-geocoder/dist/Control.Geocoder.js" ; 
import LeafletRoutingMachine from './LeafletRoutingMachine';

const LeafletMap = () => {
    const position = [36.771721, 3.051760]

  return (
    <div className='w-full'>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <LeafletGeoCoder/> */}
    {/* <LeafletRoutingMachine/> */}
    <LeafletRoutingMachine/>
  </MapContainer>
  </div>
  )
}
let DefaultIcon  = L.icon({
    iconUrl:"https://www.iconarchive.com/download/i103443/paomedia/small-n-flat/map-marker.1024.png" , 
    iconSize : [40 , 40], 
   
})
L.Marker.prototype.options.icon = DefaultIcon ;
export default LeafletMap
