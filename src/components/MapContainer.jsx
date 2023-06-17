import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React, { useMemo } from 'react'

const MapContainer = () => {
  const {isLoaded} = useLoadScript ( 
    {
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ,
    }
  ) ; 
  if (!isLoaded) return <div>is loading ... </div> ; 
  return (
    <div>
      <Map/>
    </div>
  )
}
 
function Map () {
  const center = useMemo( () => ( {lat: 36.771721 , lng: 3.051760} ), [])
  return (
   <GoogleMap
   zoom={10}
   center={center}
   mapContainerClassName='map-container'
 >
  <Marker
  position={center}
  />

   </GoogleMap>
    
  )
}
export default MapContainer

