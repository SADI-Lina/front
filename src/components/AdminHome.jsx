import React ,{useState} from 'react'
import SideBar from './SideBar';
import {Link} from 'react-router-dom'
import pic from "../assets/PontMcidi.png"
import LieuCard from './LieuCard';

const AdminHome = () => {
    const [activeItem, setActiveItem] = useState('tous'); 
  const handleClick = (item) => {
    setActiveItem(item);
     
  }
  const lieux = [
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "shopping",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },

    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "restaurant",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
    {
      title: "React Tailwind Card with Grid 1",
      img: pic,
      categorie: "hotel",
      content:
        "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
    },
   
  ];
  return (
    <div class="bg-white">
        <div class="flex flex-row ">
            <SideBar class="w-[15%]"></SideBar>
            <div class="bg-[#fafafa] w-[85%] ">
            <div class="bg-white rounded-[20px] w-[85%] mx-auto border border-black border-opacity-10" >
            <div class="md:m-[40px] m-[30px] mt-[10px] py-[15px] md:py-[20px] flex flex-col gap-[15px]">
            <div class="flex flex-row items-center  gap-[10px] md:gap-[24px] text-[#475467] text-[12px] md:text-[18px] ">
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'tous' ? 'text-[#1b76ff] ' : ''}`} onClick={()=> handleClick('tous')} >Tous</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'tous' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'monuments' ? 'text-[#1b76ff]' : ''}`} onClick={()=> handleClick('monuments')} >Monuments</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'monuments' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'restaurants' ? 'text-[#1b76ff]' : ''}`} onClick={()=> handleClick('restaurants')} >Restaurants</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'restaurants' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'hotels' ? 'text-[#1b76ff]' : ''}`} onClick={()=> handleClick('hotels')} >Hôtels</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'hotels' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'places' ? 'text-[#1b76ff]' : ''}`} onClick={()=> handleClick('places')} >Places</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'places' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                
                
            </div>
                  
            <div class="">
              <input
                    type="text"
                    class="bg-[#f9fafb] py-[12px] w-[70%] md:w-[69.5%] px-[20px] text-[#667085]  text-[12px] md:text-[15px] rounded-l-[10px] focus:outline-none focus:ring-0"
                    placeholder='Restaurant ou places...'
                  ></input>
                  <Link to="/AjoutLieu">
                    <button class="px-[20px] py-[10px] md:px-[60px] md:py-[12px] bg-[#1b76ff] font-[600] rounded-r-[10px] text-white text-[13px] md:text-auto">Ajouter un lieu</button>
                  </Link>
                  
            </div>

            <div className="grid place-items-cente py-5   ">     
                 <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-4 px-2 px-1 justify-center items-center  ">
          {lieux.map((items, key) => (
            <LieuCard
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
    </div>
            </div>
        
    </div>
 </div>
  )
}

export default AdminHome








