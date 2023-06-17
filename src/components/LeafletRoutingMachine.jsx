import React, { useEffect } from 'react'
import L from "leaflet" ; 
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"  ;
import "leaflet-routing-machine" ; 
import { useMap } from 'react-leaflet';

const LeafletRoutingMachine = () => {
    const map = useMap() ; 
    useEffect(() => {
        var maker1 = L.marker ([36.771721, 3.051760]).addTo(map) ;
       map.on('click', function (e) {
        L.marker ([e.latlng.lat, e.latlng.lng]).addTo(map) ;
        L.Routing.control({
            waypoints: [
              L.latLng(36.771721, 3.051760),
              L.latLng(e.latlng.lat, e.latlng.lng)
            ], 
            lineOptions : {
                styles : [
                    {
                        color: "red" , 
                        weight : 3 , 
                        opacity : 0.7 , 
                    }
                ]
            }, 
            routeWhileDragging : false , 
            geocoder: L.Control.Geocoder.nominatim(),
            addWaypoints:false , 
            draggableWayPoints : false , 
            fitSelectedRoutes: true , 
            showAlternatives: false , 
          }).addTo(map);
       })
    } , []);
  return null ;
};

export default LeafletRoutingMachine
