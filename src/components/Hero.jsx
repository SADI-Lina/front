import React from 'react'
import HeroContainer from './HeroContainer'
import About from './About'
import CardsLieux from './CardsLieux'
import StatHero  from './StatHero'
import arrow from '../assets/arrow.png'
import Footer from './Footer'
const Hero = () => {
  return (
    <div class="">        
        <div class="mt-11">
            <HeroContainer ></HeroContainer>
            <img src={arrow} alt="une fleche" class="w-[151px] h-[80px] md:w-[277px] md:h-[147px]"></img>
            
            <About></About>
            <StatHero></StatHero>
            <CardsLieux></CardsLieux>
            <Footer></Footer>
        </div>
        
        
    </div>
  )
}

export default Hero