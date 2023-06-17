import React, { Fragment, useEffect, useState } from 'react'
import logo from '../assets/TA7WISA.png'
import {Link} from 'react-router-dom'


const NavBar = () => {

    const [ isAuth , setIsAuth ] = useState(false) ; 
    const [isOpen, setIsOpen] = useState(false);
    const [IsUcon, setIsUcon] = useState(false);
    const deconnecter = () => {
      alert('deconnected !') ; 
      setIsAuth(false) ;

    };
    const connecter = () => {
      alert('connected !') ; 
      setIsAuth(true) ;

    };
     
    useEffect(()=>{
      setIsOpen(false) ;
      setIsUcon(false); 
    }
    
    , [isAuth])
  
    const guestLinks = (
      <Fragment>
        <Link to="/Login">
          <button 
          
          className="inline-flex items-center bg-[#1B76FF] bg-opacity-10 rounded-[10px] border-0 pt-[10px] pb-[10px] pl-[24px] pr-[24px] text-[#1b76ff] font-[600]">
             Se connecter
           </button>
        </Link>
        <Link to="/SignUp">
          <button className="inline-flex items-center bg-[#1b76ff] rounded-[10px] border-0 pt-[10px] pb-[10px] pl-[24px] pr-[24px] text-white font-[600]">
            S'inscrire
         </button>
        </Link>
         
      </Fragment>

    ) ; 

    const AuthLinks = (
      <Fragment>
        <div className='flex flex-shrink-0 justify-between items-center '>
          <button  
          onClick={()=> setIsUcon(!IsUcon)}
          className={`justify-between block origin-top-left left-4 z-10 mt-6 lg:inline-block lg:mt-0 text-white-200 mr-4 py-3 font-[600] text-[18px] hover:text-[#1b76ff] ${isOpen ? "xs:focus:bg-[#FAFAFA] lg:focus:bg-white " : ""}`} >
           <span className='text-[#1b76ff]'>Bonjour,</span> Mohamed  
           </button>
      <svg 
      className={` ${IsUcon ? "hidden" : "block"}`}
      xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
      viewBox="0 0 20 20" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6"/>
        </svg>
      <svg 
      className={` ${IsUcon ? "block" : "hidden"}`}
      xmlns="http://www.w3.org/2000/svg" width="20" height="20"
       viewBox="0 0 20 20" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
      
         </div>
      </Fragment>

    ) ; 

  return (
    <>
   <nav className="flex items-center justify-between flex-wrap p-4 border-b-2 ">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <a href='/'> <img src={logo}  alt="Logo" /> </a>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center bg-[#FAFAFA] px-2 py-2 rounded text-black-500 hover:text-black-400"
       > 
         <svg
           className={`fill-[#1b76ff] h-4 w-4 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block items-center flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow lg:space-x-6">
         <a href="UserPage" className={`block origin-top-left left-4 z-10 mt-6 lg:inline-block lg:mt-0 text-white-200 mr-4 py-3 font-[500] text-[17px] active:text-[#1b76ff] focus:text-[#1b76ff] hover:text-[#1b76ff] ${isOpen ? "xs:focus:bg-[#FAFAFA] lg:focus:bg-white" : ""}`} >
           Acceuil
         </a>
         <a href="#" className={`block origin-top-left left-4 z-10 mt-6 lg:inline-block lg:mt-0 text-white-200 mr-4 py-3 font-[500] text-[17px] active:text-[#1b76ff] focus:text-[#1b76ff] hover:text-[#1b76ff] ${isOpen ? "xs:focus:bg-[#FAFAFA] lg:focus:bg-white" : ""}`} >
           Lieux
         </a>
         <a href="#" className={`block origin-top-left left-4 z-10 mt-6 lg:inline-block lg:mt-0 text-white-200 mr-4 py-3 font-[500] text-[17px] active:text-[#1b76ff] focus:text-[#1b76ff] hover:text-[#1b76ff] ${isOpen ? "xs:focus:bg-[#FAFAFA] lg:focus:bg-white" : ""}`} >
           A propos
         </a>
         <a href="#" className={`block origin-top-left left-4 z-10 mt-6 lg:inline-block lg:mt-0 text-white-200 mr-4 py-3 font-[500] text-[17px] active:text-[#1b76ff] focus:text-[#1b76ff] hover:text-[#1b76ff] ${isOpen ? "xs:focus:bg-[#FAFAFA] lg:focus:bg-white" : ""}`} >
           Contact
         </a>
         {isAuth ? <a href="AdminPage" className={`block origin-top-left left-4 z-10 mt-6 lg:inline-block lg:mt-0 text-white-200 mr-4 py-3 font-[500] text-[17px] active:text-[#1b76ff] focus:text-[#1b76ff] hover:text-[#1b76ff] ${isOpen ? "xs:focus:bg-[#FAFAFA] lg:focus:bg-white" : ""}`} >
          Profile
         </a> 
         : null }
       </div>
       <div className={`${isOpen ? "mt-4" : "origin-top-right right-4"} space-x-2 `}>
        {isAuth ? AuthLinks : guestLinks }
        {isAuth && IsUcon ? 
        <div
       className={` origin-top-right right-0 block items-center lg:flex lg:items-center lg:w-auto hover:bg-[#FAFAFA]  px-3 border-x-1 border-b-1  rounded `}>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"/></svg>
       <a href='/Login'>
       <button 
       onClick={()=> deconnecter()}
       className=' w-full z-10 mt-6 lg:inline-block lg:mt-0 text-white-200  py-3 font-[500] text-[16px]'> 
        Se déconnecter
       </button>
       </a>
        </div>
        : null }
        
       </div>
       
     </div>
   </nav>
   </>
 );

}

export default NavBar