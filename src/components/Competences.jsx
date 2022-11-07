import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactIMG from '../assets/react.png';
import Github from '../assets/github.png';
import TailWind from '../assets/tailwind.png';

const Competences = () => {
  return (
    <div name='competences' className='w-full h-screen bg-[#000000] text-gray-300'>
       {/** Container */}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-300 '>Compétences </p>
            <p className='py-4'> Voici les langages que j'apprends actuellement en autodidacte.</p>
        </div>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={HTML} alt='html logo'/>
                <p className='my-4'>HTML</p>

             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={CSS} alt='css logo'/>
                <p className='my-4'>CSS</p>

             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={JavaScript} alt='js logo'/>
                <p className='my-4'>JS</p>

             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={ReactIMG} alt='react logo'/>
                <p className='my-4'>React Js</p>

             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={Github} alt='html logo'/>
                <p className='my-4'>Github</p>

             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto ' src={TailWind} alt='html logo'/>
                <p className='my-4'>TailWind CSS</p>

             </div>
        </div>


       </div>
    </div>
  )
}

export default Competences