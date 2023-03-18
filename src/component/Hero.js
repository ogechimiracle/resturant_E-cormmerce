import React from 'react'
import eat from "../img/eat.png";
import quality from "../img/quality.png";
import easy from "../img/easytoorder.png";
import delivery from "../img/delivery.png";


function Hero() {
  return (
    <div className='mt-14 container px-4 mx-auto'>
        <div className='flex flex-col md:flex-row gap-4 md:gap-[12rem] items-center'>
            <div>
            <div className='space-y-3'>

                <div className='my-2 w-[200px]  bg-green-100 font-bold text-sm  rounded-full text-green-600 p-4'>#1 Best Healthy Foodz</div>

                <p className='text-gray-900 font-bold text-4xl'>
                    <span className='font-bold text-green-600'>Skip</span> The Diet, 
                </p>
                <p className='text-4xl text-gray-900 font-bold'> Just Eat Healthy </p>
                <p className='text-4xl text-gray-900 font-bold'>With FoodSpyce Resturant</p>
                <div className='text-gray-400 text-sm font-bold my-8'>
                    Imagine you don't need a diet because we provide <br/> healthy and delicious food for you!
                </div>

                <button className="px-4 rounded-full py-2 bg-green-500 text-white my-4">Order Food</button>
            </div>
                <div className='flex items-center gap-8 mt-8'>
                    <div>
                        <p className='font-bold text-gray-900 text-xl'>5.000+</p>
                        <p className='text-sm text-gray-400 text-center'>Customer</p>
                    </div>
                    <div>
                        <p className='font-bold text-gray-900 text-xl'>8.000+</p>
                        <p className='text-sm text-gray-400 text-center'>Delivery</p>
                    </div>
                    <div>
                        <p className='font-bold text-gray-900 text-xl'>1.000+</p>
                        <p className='text-sm text-gray-400 text-center'>Rating</p>
                    </div>
                </div>
            </div>

            <div className='md:mr-4'>
                <img src={eat} alt="eating" className='object-fit md:h-[430px] md:w-[460px] w-full h-full' />
            </div>
            
        </div>

        <div className='flex  justify-center p-8'>
            <div className='text-center'>
            <p className='uppercase text-green-400 font-bold my-4'>What we served</p>
            <p className='text-gray-900 font-bold text-3xl my-1'>Your Favourite Food</p>
            <p className='text-gray-900 font-bold text-3xl my-1'>Delivery Patner</p>
            </div>
        </div>


        <div className='flex flex-col md:flex-row justify-around gap-8'>

            <div className='p-2'>
                 <div className='flex justify-center'>
                <img src={easy}  alt="easy" className='object-scale-down w-36 h-36 object-center' />
                </div>
                <div className="text-center">
                    <p className=' text-gray-900 font-bold text-xl'>Easy To Order</p>
                    <p className='p-1 text-gray-600 text-sm font-bold'>
                        You only need a few steps in odering food
                    </p>
                </div>
            </div>

            <div className='p-2'>
                <div className='flex justify-center'>
                <img src={delivery}  alt="deliver" className='object-scale-down w-36 h-36'  />
                </div>
                <div className="text-center">
                    <p className=' text-gray-900 font-bold text-xl'>Fast Delivery</p>
                    <p className='p-1 text-gray-600 text-sm font-bold'>
                       Delivery that is always ontime, even faster
                    </p>
                </div>
            </div>

            <div className='p-2'>
                <div className='flex justify-center'>
                <img src={quality}  alt="quality" className='object-scale-down w-36 h-36' />
                </div>
                <div className="text-center">
                    <p className=' text-gray-900 font-bold text-xl'>Best Quality</p>
                    <p className='p-1 text-gray-600 text-sm font-bold'>
                        not only fast, for us quality is number one
                    </p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero