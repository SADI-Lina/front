import React from 'react'
import '../index.css'
import Travelers from '../assets/Travelers.png'

const HeroContainer = () => {
  return (
    <div class="ml-[10%] w-[87%]">       
        
      <div class="flex flex-col md:flex-row items-center p-0 gap-0 w-[90%] ">
        
        <img src={Travelers} alt="deux voyageurs" class="md:order-2 order-1 w-[258px] h-[181px] md:w-[358px] md:h-[271px]"></img>
        <div class="md:order-1 order-2 flex flex-col items-start p-0 gap-[30px]">
            <h1 class="text-[30px] md:text-[40px] font-[700] text-[#1e1e1e]">Découvrez l'Algérie en toute <span className='bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text text-transparent'>splendeur</span> ! </h1>
            <h2 class="text-[rgba(30,30,30,0.5)] text-[15px] md:text-[20px] font-[400] w-full">Explorez l'Algérie avec nous. Découvrez des destinations incroyables, des expériences authentiques et créez des souvenirs inoubliables</h2>
            <button class="text-[15px] rounded-[8px] pt-[14px] pb-[14px] pl-[24px] pr-[24px] text-[#fff] bg-[#1b76ff]">Découvrir plus</button>
          </div>
      </div>
    </div>

    
  )
}

export default HeroContainer