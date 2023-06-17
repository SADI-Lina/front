
import React, {useState,useEffect} from 'react'
import Arrow from '../assets/arrow.png'
import Hi from '../assets/WavingHand.png'
import {Link} from 'react-router-dom'
import axios from 'axios';

const SignUp =() => {
    const [ isAuth , setIsAuth ] = useState(false) ; 
    const [isOpen, setIsOpen] = useState(false);
    const [IsUcon, setIsUcon] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


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
          const response = await axios.post('http://127.0.0.1:8080/register', {
            username: name,
            email: email,
            password: password,
            ntelephone: 1,
            adresse_id : 1,
            nom: name,
            prenom: name,
          });
    
          console.log(response.data); // Handle the response from the server
          setIsAuth(true)
          // Clear form inputs after successful submission
          setName('');
          setEmail('');
          setPassword('')
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className='grid grid-cols-1 h-screen w-full'>
         
            <div className='absolute bottom-0 left-0 max-w-xs  '>
                <img className='invisible sm:visible w-60 h-fit' src={Arrow} alt=''/>
            </div>
           
        <div className='bg-[#FAFAFA] flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[450px] w-full mx-auto rounded-lg bg-[#FFFFFF] p-8 px-8'>
                <div className=' flex justify-center'>
                <h2 className='mb-2 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-t from-[#6CDCFF] from-0% to-[#1B76FF] to-100% text-left mt-8'>Bienvenus !</h2> 
                <span>   </span>
                <img src={Hi} className='w-8 sm:w-8 h-8 sm:h-8 mt-8 ml-4' alt=''/>
            </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label className='flex flex-col text-black py-2'>Adresse mail</label>
                    <input className='rounded-lg bg-[#FAFAFA] mt-2 p-2 focus:outline-none' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label className='flex flex-col text-black py-2'>Nom d'utilisateur</label>
                    <input className='rounded-lg bg-[#FAFAFA] mt-2 p-2 focus:outline-none' type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className='flex flex-col text-gray-400 py-4'>
                    <label className='flex flex-col text-black py-2'>Mot de passe</label>
                    <input className='p-2 rounded-lg bg-[#FAFAFA] mt-2 focus:outline-none' type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                 {/* <Link to="/AdminPage">  */}
                    <button  type="submit" className='w-full my-5 py-2 bg-[#1B76FF]  hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Créer un compte</button>
                    
                 {/* </Link>  */}
                
                <div className='flex justify-center text-[#4285F4] py-2'>
                    <p className='underline'>Avez-vous déjà un compte ?</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp