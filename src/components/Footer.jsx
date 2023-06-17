import React from 'react'
import logo from '../assets/TA7WISA.png'

const Footer = () => {
    const LINKS = [
        {
          title: "Lien rapide",
          items: ["Acceuil", "Lieux", "A propos", "Contact"],
        },
        {
          title: "Contactez nous",
          items: [ 
            "Dar El beida, ALger, Algérie", "serviceclient@ta7wisa.dz", "+21-2533-00"],
        },
        
      ];
       
      const currentYear = new Date().getFullYear();
      const envoyerCommentaire = () => {
       alert ('commentaire envoyé') ; 
      }; 
       
  return (
    <div> 
 
     <footer className="relative w-full items-center">
     <div className='flex justify-center '>
     <h1 className="mb-3 block text-[20px] font-[600] "
                 >
                   Laissez nous un commentaire ! 
                 </h1></div>
      <div className="flex self-center justify-center items-center w-full gap-4" >
     <div className="flex-col self-center justify-center items-center w-96 py-5 ">
               <input type='text' placeholder='Saisir du texte...' className=' bg-white  border-gray-100 border-1 drop-shadow-md shadow-orange-300 text-gray-900 text-[14px] rounded-lg w-full p-2.5 focus:ring-gray-100 ' /> 
               </div>
               <button 
               onClick={()=>envoyerCommentaire()}
               className=" bg-[#1b76ff] rounded-[10px] border-0 h-11 w-24 text-[14px]  text-white font-[600]">
           Envoyer
         </button>
               </div>
            
       <div className="mx-auto w-full max-w-7xl px-8 mt-16">
         <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div className='space-y-6'>
            <img src={logo} alt="TA7WISA" className='h-12' /> 
            <h2 class="text-[rgba(30,30,30,0.5)] w-2/3 text-[12px] md:text-[15px] font-[400] ">Explorez l'Algérie avec nous. Découvrez des destinations incroyables, des expériences authentiques et créez des souvenirs inoubliables</h2>
            <div className="flex gap-4 text-[#1B76FF] ">
            <h4 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path
                   fill-rule="evenodd"
                   d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                   clip-rule="evenodd"
                 />
               </svg>
             </h4>
             <h4 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path
                   fill-rule="evenodd"
                   d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                   clip-rule="evenodd"
                 />
               </svg>
             </h4>
             <h4 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path
                   fill-rule="evenodd"
                   d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                   clip-rule="evenodd"
                 />
               </svg>
             </h4>
             <h4 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/> 
               </svg>
            </h4>
             <h4 as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                 <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
               </svg>
             </h4>
          
           </div>
            </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4">
             {LINKS.map(({ title, items }) => (
               <ul key={title}>
                 <h1
                   className="mb-3 text-[16px] font-[500]"
                 >
                   {title}
                 </h1>
                 {items.map((link) => (
                   <li key={link}>
                     <h1
                       as="a"
                       href="#"
                       color="gray"
                       className="py-1.5 font-[400] text-[15px] transition-colors hover:text-[#1B76FF]"
                     >
                       {link}
                     </h1>
                   </li>
                 ))}
               </ul>
             ))}
           </div>
         </div>
         <div className="mt-12 flex w-full self-center flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
           <h1
             className="mb-4 text-center text-[12px] text-blue-gray-900 md:mb-0 mx-auto"
           >
             &copy; {currentYear} <a href="https://material-tailwind.com/">TA7WISA</a>. All
             Rights Reserved.
           </h1>
         </div>
       </div>
     </footer>
      
    </div>
  )
}

export default Footer
