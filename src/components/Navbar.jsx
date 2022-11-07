import React, {useState} from 'react'
import {FaBars, FaTimes, Fatimes, FaGithub, FaLinkedIn, FaFacebook, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/JK.png'
import {Link} from 'react-scroll'
import {Document, Page} from 'react-pdf';



function Navbar() {
    const [nav, setNav] = useState(false)
    const handleclick = () => setNav(!nav)


    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300">

            <div>
                <img src={Logo} alt="Logo image" style={{ width: '550px' }} />


            </div>
            {/* menu nav */}

            <ul className='hidden md:flex'>{/* lorsqu'on reduit la page sur le coté jusqu'a la taille medium , les menus sont  cachés*/}
                <li> <Link to="home"  smooth={true} duration={500} >
                       Acceuil
                     </Link>
                </li>
                <li><Link to="about"  smooth={true} duration={500} >
                       A Propos
                     </Link></li>
                <li><Link to="competences"  smooth={true} duration={500} >
                       Competences
                     </Link></li>
                <li><Link to="work"  smooth={true} duration={500} >
                       Travaux
                     </Link></li>
                <li><Link to="contact"  smooth={true} duration={500} >
                       Contact
                     </Link></li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleclick} className="md:hidden z-10"> {/* lorsqu'on reduit la page sur le coté jusqu'a la taille medium , le nav est caché*/}
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile menu */}

            <ul 
            className={
                !nav ? 'hidden' 
                : ' absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
                <li  className=""ClassName='py-6 text-5xl'><Link onClick={handleclick} to="home"  smooth={true} duration={500} >
                       Acceuil
                     </Link></li>
                <li ClassName='py-6 text-4xl'><Link onClick={handleclick} to="about"  smooth={true} duration={500} >
                       A Propos
                     </Link></li>
                <li ClassName='py-6 text-4xl'><Link onClick={handleclick} to="competences"  smooth={true} duration={500} >
                       Competences
                     </Link></li>
                <li ClassName='py-6 text-4xl'><Link onClick={handleclick} to="work"  smooth={true} duration={500} >
                       Travaux
                     </Link></li>
                <li ClassName='py-6 text-4xl'><Link onClick={handleclick} to="contact"  smooth={true} duration={500} >
                       Contact
                     </Link></li>
            </ul>

            {/* Social icons */}

            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/josue-kisa/">
                            Linkedin <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/josuekisa">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:josue.kisa31@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='../CV_Josue_kisa_.pdf'  >
                        
                            CV <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>


            </div>

        </div>
    )
}

export default Navbar;