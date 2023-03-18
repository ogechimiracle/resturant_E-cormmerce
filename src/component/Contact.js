import React from 'react'
import {BiSupport, BiChat} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'


function Contact() {
  return (
    <div>
        <div className='container px-4 mx-auto '>
            <div className='p-4'>
                <p className='text-center text-2xl text-gray-900 font-semibold uppercase'>Contact us</p>
                <p className='my-8 text-md text-gray-400 text-center'>Connect with our 24/7 team</p>

                <div className='grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 md:place-items-center md:gap-4'>

                    <div className='bg-white shadow-md rounded-lg p-4 w-full'>
                        <div className='logo bg-white shadow-lg'>
                            <BiSupport size={35}/>
                        </div>
                        <div className='text-center text-gray-500 font-semibold py-2'>
                            Agent Support 
                        </div>

                        <div className='text-center text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='grid place-items-center mt-4'>
                            <button className='bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md'>Make Call</button>
                        </div>
                    </div>

                    <div className='bg-white shadow-md rounded-lg p-4 w-full'>
                    <div className='logo bg-white shadow-lg'>
                            <AiOutlineMail size={35}/>
                        </div>
                        <div className='text-center text-gray-500 font-semibold py-2'>
                            Email Us 
                        </div>

                        <div className='text-center text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='grid place-items-center mt-4'>
                            <button className='bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md'>Send Mail</button>
                        </div>
                    </div>

                    <div className='bg-white shadow-md rounded-lg p-4 w-full'>
                    <div className='logo bg-white shadow-lg'>
                            <BiChat size={35}/>
                        </div>
                        <div className='text-center text-gray-500 font-semibold py-2'>
                            Live Chat 
                        </div>

                        <div className='text-center text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='grid place-items-center mt-4'>
                            <button className='bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-md'>Chat Now</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact