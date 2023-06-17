import React from 'react';

const PlaceCard = ({ image, name, wilaya }) => {
  return (
    <div className="">
      <div className="bg-white w-[291px] h-[225px] shadow-[0px_14px_19px_rgba(0,0,0,0.1)] rounded-[10px]">
        <div className="pt-[10px]">
          <img src={require(`../${image}`)} alt="Lieu" className="rounded-[10px] w-[266px] h-[151px] mx-auto" />
        </div>
        <div className="flex flex-col pl-3 pt-1">
          <div className="font-[700] text-[18px] text-[#1e1e1e]">{name}</div>
          <div className="text-[#008000] font-[300]">{wilaya}</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;