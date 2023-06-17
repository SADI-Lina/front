import { Badge } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Card = (props) => {
    const [badgeColor, setBadgeColor] = useState("white");
    const [badgebgColor, setBadgebgColor] = useState("white");
  
    useEffect(() => {
      colorTheme();
    });
  
    const colorTheme = () => {
      switch (props.categorie) {
        case "restaurant": {
          setBadgeColor("#D85B00");
          setBadgebgColor("#F9E8DB");
          break;
        }
        case "hotel": {
          setBadgeColor("#008AD8");
          setBadgebgColor("#84CBD8");
          break;
        }
        case "shopping": {
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
      <div class="m-auto overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 w-80 md:w-80">
        <a href="/Description" class="block w-full h-full">
          <img
            alt="estate image"
            src={props.image}
            class="object-cover w-full h-40"
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
          </div>
        </a>
      </div>
  )
}

export default Card
