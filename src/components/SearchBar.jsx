import React , {useState} from 'react'
import carte from '../assets/map.png'
import LeafletMap from './LeafletMap';
const SearchBar = () => {
  
  
  const [activeItem, setActiveItem] = useState('tous'); 
  const handleClick = (item) => {
    setActiveItem(item);
     
  }
  return (
    <div class="bg-white rounded-[20px] w-[85%] mx-auto border border-black border-opacity-10" >
        <div class="md:m-[40px] m-[30px] mt-[10px] py-[15px] md:py-[20px] flex flex-col gap-[15px]">
            <div class="flex flex-col gap-[20px]">
            <div class="flex flex-row items-center  gap-[10px] md:gap-[24px] text-[#475467] text-[12px] md:text-[18px] ">
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'tous2' ? 'text-[#1b76ff] ' : ''}`} onClick={()=> handleClick('tous')} >Tous</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'tous2' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'histoire' ? 'text-[#1b76ff]' : ''}`} onClick={()=> handleClick('histoire')} >Histoire</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'histoire' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                <div class="group flex flex-col gap-[1px] items-center" style={{width:'fit-content'}}  >                    
                    <button class={`inline-block  ${activeItem === 'nature' ? 'text-[#1b76ff]' : ''}`} onClick={()=> handleClick('nature')} >Nature</button>                    
                    <div  className={` w-full h-[2px] rounded-[4px] ${activeItem === 'nature' ? 'bg-[#1b76ff]' : 'bg-white group-hover:bg-[#1b76ff]'}`} ></div>
                </div>
                
                
                
            </div>
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
            
            </div>
                  
            <div class="">
              <input
                    type="text"
                    class="bg-[#f9fafb] py-[12px] w-[70%] md:w-[79.5%] px-[20px] text-[#667085]  text-[12px] md:text-[15px] rounded-l-[10px] focus:outline-none focus:ring-0"
                    placeholder='Restaurant ou places...'
                  ></input>
                  <button class="px-[20px] py-[10px] md:px-[60px] md:py-[12px] bg-[#1b76ff] font-[600] rounded-r-[10px] text-white text-[12px] md:text-auto">Search</button>
            </div>


            <div class="md:h-[30%] ">
                <LeafletMap/>
            </div>
        </div>
    </div>
  )
}

export default SearchBar