import React from 'react'
import EventCard from './EventCard'
import pic from "../assets/PontMcidi.png"
import SideBar from './SideBar'
const AdminLieux = () => {
    const events = [
        {
          title: "React Tailwind Card with Grid 1",
          img: pic,
          categorie: "en cours",
          content:
            "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        },
        {
          title: "React Tailwind Card with Grid 1",
          img: pic,
          categorie: "en cours",
          content:
            "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        },
        {
          title: "React Tailwind Card with Grid 1",
          img: pic,
          categorie: "en cours",
          content:
            "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        },
        {
          title: "React Tailwind Card with Grid 1",
          img: pic,
          categorie: "en cours",
          content:
            "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        },
    
        {
          title: "React Tailwind Card with Grid 1",
          img: pic,
          categorie: "en cours",
          content:
            "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
        },
       
      ];
  return (
    <div class="flex flex-row bg-[#fafafa]">
        <SideBar class="w-[15%]"></SideBar>
        <div className="grid  place-items-cente py-5 w-[85%] ">

        <h1 className="mb-3 block text-[26px] font-[600] px-6 ">
                Les évènements à venir </h1>        
                 <div className="ml-11 grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15%] py-4 px-2 px-1 justify-between items-center  ">
          {events.slice(0,3).map((items, key) => (
            <EventCard
              title={items.title}
              image={items.img}
              categorie={items.categorie}
              description={items.content}
              key={key}
            />
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default AdminLieux
