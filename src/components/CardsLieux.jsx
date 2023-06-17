import React, { useState, useEffect } from 'react';
import PlaceCard from './PlaceCard';

const CardsLieux = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // Fetch the data from the API endpoint
    fetch('http://127.0.0.1:5000/api/statistics/most_visited')
      .then((response) => response.json())
      .then((data) => setPoints(data))
      .catch((error) => console.log(error));
  }, []);

  const renderPlaceCards = () => {
    const rows = [];
    let row = [];

    points.forEach((point, index) => {
      const placeCard = (
        <PlaceCard
          key={index}
          image={point.image_path}
          name={point.point_name}
          wilaya={point.wilaya}
        />
      );

      row.push(placeCard);

      if (row.length === 3 || index === points.length - 1) {
        rows.push(<div key={index} className="flex flex-col md:flex-row gap-[22px]">{row}</div>);
        row = [];
      }
    });

    return rows;
  };

  return (
    <div className="ml-[12%] md:ml-[13%] w-[87%]">
      <h1 className="text-[30px] md:text-[40px] font-[700] text-[#1b76ff] ml-[10%] md:ml-[27%] mt-[100px] mb-[50px]">
        Lieux populaires
      </h1>
      <div className="flex flex-col gap-[16px] pb-[100px]">
        {renderPlaceCards()}
      </div>
    </div>
  );
};

export default CardsLieux;