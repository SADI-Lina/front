// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';

// import { useState } from 'react';
// import Review from './Review'
// import LeafletMap from './LeafletMap';

// const images = [
//   {id:'1', iamgeName:'/images/Rectangle 8.png',tag:'free'},
//   {id:'2', iamgeName:'src/assets/Rectangle 12.png',tag:'free'},
//   {id:'3', iamgeName:'src/assets/Rectangle 13.png',tag:'free'},
//   {id:'4', iamgeName:'src/assets/Rectangle 11.png',tag:'free'},
//   {id:'5', iamgeName:'src/assets/Frame8.png',tag:'free'},

// ]

// const Description = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleImageScroll = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };


import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Review from './Review';
import LeafletMap from './LeafletMap';

const Description = () => {
  
  
  const handleImageScroll = () => {
        setImages((prevIndex) => (prevIndex + 1) % images.length);
      }
  // const { pointId } = useParams(1);
  const [point, setPoint] = useState(null);
  const [images , setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/point_d_interet/1/image`);
        const imageData = response.data;
        console.log(imageData);
        setImages(imageData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchImages();
  }, []);

  useEffect(() => {
    const fetchPointOfInterest = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8080/points_d_interet/1`);
        setPoint(response.data);
        console.log(point);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPointOfInterest();
  }, []);

  if (!point) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#FAFAFA] pl-8 pr-8 sm:pl-16 sm:pr-16">
      {images && images.length > 0 ? (
       <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-6 sm:h-[390px]">
       {images && images.length > 0 ? (
        images.slice(0, 4).map((image, index) => (
       <img
        key={image.id}
        src={require(`../${image.path}`)}
        className={`h-full w-full ${index === 0 ? 'rounded-s-lg sm:rounded-none col-span-2 row-span-2' : ''}`}
        alt=""
        />
  ))
     ) : (
  <p>No images available</p>
    )}
        <div className="relative">
          <button
            className="absolute bottom-4 ml-4 w-[160px] sm:w-4/5 h-[50px] bg-[#F3F7FF] hover:shadow-teal-500/40 text-[#2D2B72] font-semibold rounded-lg"
            onClick={handleImageScroll}
          >
            Afficher toutes les photos
          </button>
          <img src={images[0].path} className="h-full w-full rounded-br-lg" alt="" />
        </div>
      </div>
      ) : (
      <p>Loading images...</p>
    )}
      <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:gap-[60vw]">
        <div>
          <h1 className="font-bold text-3xl " >{point.nom}</h1>
          <div className="pt-2 flex flex-row gap-4">
            <FontAwesomeIcon icon={faLocationDot} size='lg' style={{ color: "#808080" }} />
            <p className="text-[#555555]">{point.adresse}</p>
          </div>
        </div>
        <button className='w-full sm:w-[200px] text-xl h-[50px] bg-[#1B76FF] hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>
          <FontAwesomeIcon icon={faDiamondTurnRight} size='sm' className='mr-4' />
          Itinéraires
        </button>
      </div>
      <div className="p-4 mt-8 border border-gray-300 rounded-xl">
        <h1 className="font-semibold text-3xl pb-4">Description</h1>
        <p>{point.description}</p>
      </div>
      <div className="p-4 mt-8 border border-gray-300 rounded-xl">
        <h1 className="font-semibold text-3xl pb-4 pt-6">Localisation</h1>
        <LeafletMap/> 
      </div>
      <div>
         <Review></Review>
      </div>
    </div>
  );
  
}

export default Description;
