import React from 'react'
import Photo_CV from '../assets/photo_cv2.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-300'>
              About
            </p>
          </div>
          <div className=''>
              
          </div>
          </div>
          
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='flex border'>
          
          <img className='object-cover w-full h-full py ' src={Photo_CV} alt='photo cv'/>
          
          </div>
            <div >
              <p className=' text-4xl font-bold py-4'>Bonjour je m'appelle Josue Kisa. 
              Voici mon Portfolio.</p>
              <div>
              <p className='text-2xl py-4 '>Actuellement en Bachelor CSI (Conception de système d'information) au sein
              de l'ORT Toulouse. Je suis a la recherche d'une alternance dans le domaine du developpement web.
              Mon rythme d'alternance est de 2 semaines en cours et 3 semaines en entreprise.
              </p>  
            </div>
            </div>
            
            <div>
              <p></p>  
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default About