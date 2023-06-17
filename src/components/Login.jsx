import React, {useState,useEffect} from 'react'
import '../index.css'
import Arrow from '../assets/arrow.png'
import Hi from '../assets/WavingHandLight.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar'

const Login =() => {
    const [ isAuth , setIsAuth ] = useState(false) ; 
    const [isOpen, setIsOpen] = useState(false);
    const [IsUcon, setIsUcon] = useState(false);

    const [user_ntelephone, setUser_ntelephone] = useState(0)
    const [user_adresse_id, setUser_adresse_id] = useState(0)
    const [user_username, setUser_username] = useState('')
    const [user_password, setUser_password] = useState('')
    const [user_nom, setUser_nom] = useState('')
    const [user_prenom, setUser_prenom] = useState('')
    const [user_email, setUser_email] = useState('')

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
      if(isAuth) {
        window.location.href='/AdminPage';
      }
    }
    
    , [isAuth])

    const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:8080/login', {
          ntelephone : 1,
          adresse_id : 1, 
          username : user_username,
          password : user_password,
          nom : '',
          prenom : '',
          email : '',
          id :0
        });
  
        console.log(response.data); // Handle the response from the server
        
        // Clear form inputs after successful submission
        setIsAuth(true)
      } catch (error) {
        if(error.response.status === 422){
          console.error(error.response.data.detail)
        }
        console.error(error);
      }
    };
  return (
    <div className='grid grid-cols-1 h-screen w-full'>
         <NavBar isAuth={isAuth}></NavBar>
        <div className='absolute bottom-0 left-0 max-w-xs  '>
                <img className='invisible sm:visible w-60 h-fit' src={Arrow} alt=''/>
            </div>
            
        <div className='bg-[#FAFAFA] flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[450px] w-full mx-auto rounded-lg bg-[#FFFFFF] p-8 px-8'>
                <div className=' flex justify-center'>
                <h2 className='mb-2 font-[700] text-transparent text-3xl bg-clip-text bg-gradient-to-t from-[#6CDCFF] from-0% to-[#1B76FF] to-100% text-left mt-8'>Ravis de vous revoir !</h2> 
                <span>   </span>
                <img src={Hi} className='w-8 sm:w-8 h-8 sm:h-8 mt-8 ml-4' alt=''/>
            </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label className='flex flex-col text-black py-2'>Nom d'utilisateur</label>
                    <input className='rounded-lg bg-[#FAFAFA] mt-2 p-2 focus:outline-none' type="text" name="username" value={user_username} onChange={(e) => setUser_username(e.target.value)}  />
                </div>
                <div className='flex flex-col text-gray-400 py-4'>
                    <label className='flex flex-col text-black py-2' >Mot de passe</label>
                    <input className='p-2 rounded-lg bg-[#FAFAFA] mt-2 focus:outline-none' name="password" onChange={(e) => setUser_password(e.target.value)} value={user_password} type="password" />
                </div>
                {/* <Link to={{pathname: "/UserPage", state: {isAuth: isAuth} }} > */}
                    <button type="submit" className='w-full my-5 py-2 bg-[#1B76FF]  hover:shadow-teal-500/40 text-white font-[700] rounded-lg'>Se connecter</button>
                {/* </Link> */}
                
                <div className='flex justify-center text-[#4285F4] py-2 underline'>
                    <p className=''>Voulez-vous plutôt vous inscrire ?</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login