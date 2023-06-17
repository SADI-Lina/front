import { Badge } from '@mui/material';
import React, { useEffect, useState } from 'react'

const EventCard = (props) => {
    const [badgeColor, setBadgeColor] = useState("white");
    const [badgebgColor, setBadgebgColor] = useState("white");
  
    useEffect(() => {
      colorTheme();
    });
  
    const colorTheme = () => {
      switch (props.categorie) {
        case "a venir": {
            setBadgeColor("#008AD8");
            setBadgebgColor("#ADD2F4");
            break;
          }
        case "en cours": {
          setBadgeColor("#20CE7A");
          setBadgebgColor("#DEF8EB");
          break;
        }
        default:
          setBadgeColor("white");
          setBadgebgColor("white");
      }
    };
  
  return (
      <div class="m-auto overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full w-36 md:w-80">
        <a href="/Description" class="block w-full h-full">
          <img
            alt="estate image"
            src={props.image}
            class="object-cover h-72 w-full "
          />
  
          <div class="w-full p-4 bg-white dark:bg-gray-800 justify-between">
             <Badge
              className=" p-1 px-2 rounded-xl text-xs"
              style={{ backgroundColor: badgebgColor, color: badgeColor }}
            >
              {props.categorie}
            </Badge>
            <p class="my-2 text-xl font-[600]   ">{props.title}</p>
            <div className="flex items-center">
              <p class="font-thin font-[400] text-sm truncate-3 ">
                {props.description}
              </p>
            </div>
            <button className="inline-flex my-4 items-center bg-[#1b76ff] rounded-[10px] border-0 pt-[10px] pb-[10px] pl-[24px] pr-[24px] text-white font-[400]">
           S'inscrire
           <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h13M12 5l7 7-7 7"/></svg>
         </button>
          </div>
        </a>
      </div>
  )
}

export default EventCard
