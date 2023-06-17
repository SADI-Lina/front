import React from 'react'
import SearchBar from './SearchBar'
import bgImg from '../assets/bgPic.png'
const UserHome = () => {
  return (
    <div class="mt-[50px]">
        <div style={{backgroundImage: `url(${bgImg})`, backgroundSize:'cover',backgroundPosition:'center'}} class="flex flex-col items-center gap-[-20px] h-[350px]">
                <div class="">
                   <h1 class="mx-auto mt-[13%] text-[40px] text-white font-[700] w-[80%] text-center">Bienvenus dans une unique expérience</h1>
                </div>
            
        </div>
        <div class="mt-[-7%] mb-[100px]">
          <SearchBar></SearchBar>
        </div>
    </div>
  )
}

export default UserHome