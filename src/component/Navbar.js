import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
    const [Mobile, setMobile] = useState(false)

    const SetNav=()=>{
        setMobile(!Mobile);
        // console.log(Mobile); 
    }
  return (
    <>
    <nav className='p-4 fixed top-0 right-0 left-0  bg-white/20 backdrop-blur-md z-20'>
        <div className='container md:px-4 px-1 mx-auto flex justify-between items-center'>
            <div className='text-xl md:text-3xl font-bold'>
                <span className='text-green-500'>FoodSpyce.</span>Online
            </div>

            <div className='hidden md:block'>
                <ul className='flex gap-x-5 cursor-pointer '>
                    <li className='font-bold text-green-500'>Home</li>
                    <li>Menu</li>
                    <li>Service</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='flex items-center gap-4'>
                <Link to='/CheckOut'>
                    <div className='inline-flex items-center space-2'>
                        <FaShoppingCart size={25}/>
                        <p className='font-bold text-green-500 bg-white rounded-full px-2 border border-green-500 -mt-4'>2</p>
                    </div>
                </Link>
                <button className='hidden md:block px-5 py-2 text-sm font-bold bg-green-500 text-white rounded-full '><Link to='/SignIn'>Sign In</Link></button>

                <button className={Mobile? 'md:hidden -rotate-90 duration-700 ease-in-out' :'md:hidden rotate-180 duration-700 ease-in-out'} onClick={SetNav}>{!Mobile ?<AiOutlineMenu size={25}  /> : <AiOutlineClose size={25} />}</button>
            </div>

        </div>
    </nav>
    <div className={`fixed top-0 left-0 w-4/5 z-40 p-4 bg-black/10 backdrop-blur-md h-full ease-in-out  duration-500  ${Mobile ? "translate-x-0 " :  "translate-x-[-100%]"}`}>
        <ul className='flex-col flex gap-8 text-black font-semibold  '>
            <li className=' hover:translate-y-3 duration-700'>Home</li>
            <li className='hover:translate-y-3 duration-700'>Menu</li>
            <li className='hover:translate-y-3 duration-700'>Service</li>
            <li className='hover:translate-y-3 duration-700'>About Us</li>
            <li className='hover:translate-y-3 duration-700'>Contact Us</li>
        </ul>

        <button onClick={SetNav} className='my-2 px-5 py-2 text-sm font-bold bg-green-500 text-white rounded-full '><Link to='/SignIn'>Sign In</Link></button>
        
    </div>
    </>
  )
}

export default Navbar