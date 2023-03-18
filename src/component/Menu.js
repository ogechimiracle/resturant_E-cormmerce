import React, { useState } from 'react'

import {MdRestaurantMenu} from 'react-icons/md';
import {FaShoppingCart} from 'react-icons/fa';
import {BsHeart} from 'react-icons/bs';
import pizza from '../img/foods/pizza.jpg';
import pizza1 from '../img/foods/pizza1.jpg';
import chickenrice from '../img/foods/chickenrice.jpg';
import rice from '../img/foods/fried rice.jpg';
import ofeowerri from '../img/foods/ofe-owerri.jpg';
import eguisi from '../img/foods/eguisi.jpg';
import sharwama from '../img/foods/sharwama.jpg';
import sharwama1 from '../img/foods/sharwama1.jpg';


function Menu() {

  const [toggle, setToggle] = useState(1);

  const active = (index)=>{
    setToggle(index);
  }

  return (
    <>
        <div className='md:container mx-auto md:px-4 px-1'>
            <div className='md:p-2'>
                <p className='text-gray-900 font-bold inline-flex items-center gap-2'>Menu <span><MdRestaurantMenu/></span></p>

                <div className='my-2 bg-white shadow-lg p-4 rounded-lg'>
                    <div className='container-tab '>
                      <div className='flex items-center w-full justify-start space-x-8'>

                        <button className={toggle === 1 ? 'font-bold text-sm bg-green-600 text-white px-4 py-1 rounded-lg':'font-bold text-sm px-4 rounded-lg py-1 hover:bg-gray-300 '} onClick={()=>active(1)}>Pizza</button>
                        <button className={toggle === 2 ? 'font-bold text-sm bg-green-600 text-white px-4 py-1 rounded-lg':'font-bold text-sm px-4 rounded-lg py-1 hover:bg-gray-300'} onClick={()=>active(2)}>Foods</button>
                        <button className={toggle === 3 ? 'font-bold text-sm bg-green-600 text-white px-4 py-1 rounded-lg':'font-bold text-sm px-4 rounded-lg py-1 hover:bg-gray-300'} onClick={()=>active(3)}>Sharwama</button>
                      </div>

                        <div className=''>
                      
                      {/* pizza menu */}
                          <div id='pizza-tab' className={toggle ===1 ? 'p-4 ':'md-hidden hidden'}>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                              <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>Hot</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={pizza} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Indonise Pizza</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Food Quality 100%</div>
                                      <div>$100</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>

                              <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>4% Off</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={pizza1} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Chicken Pizza</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Food Quality 100%</div>
                                      <div>$70</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>


                            </div>

                          </div>

                          {/* foods menu */}
                          <div id='food-tab' className={toggle ===2 ? 'p-4':'md-hidden hidden'}>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                            <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>15% Off</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={eguisi} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Eguisi Soup</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Food Quality 100%</div>
                                      <div>$40</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>

                              <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>Super</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={rice} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Fried Rice</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Food Quality 100%</div>
                                      <div>$70</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>

                              <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>1% Off</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={ofeowerri} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Ofe Owerri</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Food Quality 100%</div>
                                      <div>$20</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>

                              <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>Hot</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={chickenrice} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Chicken & Chicken</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Food Quality 100%</div>
                                      <div>$90</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>



                            </div>
                          </div>

                          {/* sharwama menu */}
                          <div id='sharwama-tab' className={toggle ===3 ? 'p-4':'md-hidden hidden'}>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                              
                            <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>Hot</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={sharwama} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Sharwama</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Taste Quality 100%</div>
                                      <div>$35</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>


                              
                              <div className='rounded-lg bg-white shadow p-4'>
                                  <div>
                                    <div className='flex justify-between items-center'>
                                        <div className='border border-green-600 rounded-lg text-sm px-3 '>5% off</div>
                                        <BsHeart size={20}/>
                                    </div>
                                    <div className='flex justify-center m-2'>
                                      <img src={sharwama1} alt="pizza food" className='object-scale-down w-52 h-52 rounded-full' />
                                    </div>
                                  </div>

                                  <div className='mt-5'>
                                    <p className='my-4 text-center font-bold text-lg'>Sharwama</p>
                                    <div className='flex items-center justify-around text-gray-500'>
                                      <div>Taste Quality 100%</div>
                                      <div>$25</div>
                                    </div>
                                    <button className='inline-flex items-center justify-center space-x-4 p-2 mt-4 w-full bg-green-600 text-white  rounded-lg'><FaShoppingCart size={20}/> Add to Cart</button>
                                  </div>

                              </div>

                            </div>
                          </div>



                        </div>

                      
                      
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu