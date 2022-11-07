import React from 'react'

const Contact = () => {
  return (
    <div name ='contact' className="w-full h-screen bg-[#000000] flex justify-center items-center">
        <form method='post' action="https://getform.io/f/b83e89ce-8198-4700-a2e5-7b7672c16606" className="flex flex-col max-w-[600px] w-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300">Contact</p>
                <p className='text-gray-300 py-4'>Remplissez le formulaire suivant ou envoyer moi un mail.</p>
            </div>
            <input className=' bg-[#ccd6f6] p-2' type="text" placeholder="Nom" name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name='email' />
            <textarea className=' bg-[#ccd6f6] p-2' placeholder='Message' name="message" cols="30" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-yellow-300 hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center'>Envoyer</button>
        </form>
    </div>
  )
}

export default Contact