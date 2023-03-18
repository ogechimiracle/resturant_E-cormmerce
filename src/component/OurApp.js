import React from 'react'

import mobile2 from '../img/mobile2.png';
import {AiFillApple} from 'react-icons/ai';
import {FaGooglePlay} from 'react-icons/fa';


function OurApp() {
  return (
    <div className='bg-green-200'>
        <div className='container px-4 mx-auto py-5'>
            
            <div className='flex flex-col md:flex-row space-y-2 items-center justify-around '>

                <div>
                    <p className='text-4xl font-bold text-black tracking-sm my-4'>FoodSpicy App</p>
                    
                    <div className='text-sm text-gray-400 text-semibold '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <p className='text-black font-semibold mt-1'>Download the app</p>
                    <div className='flex gap-4 mt-4'>
                        <button className='border border-green-600 text-green-600 rounded-lg px-4 py-2 inline-flex items-center hover:translate-y-2 duration-500'> <AiFillApple size={25} /> App Store</button>
                        <button className='border border-green-600 text-green-600 rounded-lg px-4 py-2 inline-flex items-center hover:translate-y-2 duration-500 '> <FaGooglePlay size={25}/> Playstore</button>
                    </div>
                </div>

                <div>
                    <img src={mobile2} alt='Mobile'/>
                </div>

            </div>

        </div>
    </div>
  )
}

export default OurApp