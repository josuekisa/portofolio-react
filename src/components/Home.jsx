import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Photo_CV from '../assets/photo_cv.jpg';
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-yellow-400'>Bonjour, je m'appelle</p>
          <h1 className='text-4xl sm:text-7xl font-extrabold text-[#ccd6f6]'>Josue Kisa</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> Apprenti Front-developpeur</h2>
    
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          </p>
         
        <div>
            <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-400'>
            <Link to="work"  smooth={true} duration={500} >
                       Voici mes Travaux
                     </Link>
           
            <span className='group-hover:rotate-80 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
           </span>
           </button>
           
        </div>
        
        </div>
    </div>
  )
}

export default Home;