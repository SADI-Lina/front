import React from 'react'
import Aboutimg from '../assets/aboutIllustration.png'
const About = () => {
  return (
    <div class="ml-[10%] w-[87%]">
        <h1 class="text-[30px] md:text-[40px] font-[700] text-[#1b76ff] ml-[5%] md:ml-[27%] mt-[30px]">À propos de Ta7was</h1>
        <div class="flex flex-col md:flex-row items-center gap-[20px] w-[90%] mb-[50px] md:mb-[100px]">
            <img src={Aboutimg} alt="plus d'infos" class="md:mt-auto mt-8 w-[334px] h-[180px] md:w-[434px] md:h-[241px]"></img>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante id sapien dictum eleifend. Vivamus euismod quam vitae neque dictum, id tempor ipsum viverra. Vestibulum sollicitudin dolor at congue tristique.</h2>
        </div>
    </div>
  )
}

export default About