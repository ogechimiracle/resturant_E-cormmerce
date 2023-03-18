import eguisi from '../img/foods/eguisi.jpg'
import Sharwama from '../img/foods/sharwama1.jpg'
import {FaTimes, FaPaypal} from 'react-icons/fa'
import {AiFillCreditCard} from 'react-icons/ai'

function CheckOut() {
  return (
    <div className='container px-4 mx-auto mt-16'>
        <p className="text-2xl font-bold my-3">Order Summary</p>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-5'>

            <div className='md:col-span-3'>

                <div className='overflow-x-scroll'>
                    <table className="table-auto w-full">
                       <thead>
                        <tr className="text-left text-sm ">
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total Price</td>
                        </tr>
                        </thead> 
                        <tbody className=''>

                            <tr className='bg-white px-2 shadow-lg rounded '>

                               <td className="py-2">
                                <div className="flex items-center space-x-4 w-full">
                                    <div>
                                        <img src={eguisi} alt='eguisi soup' className='object-scale-down w-16 h-16' />
                                    </div>
                                    <div>
                                        <div className='text-sm font-bold'>Eguisi Soup</div>
                                        <div className='text-xs text-gray-400 '>Soup</div>
                                    </div>
                                </div>
                                </td> 

                                <td className='py-2'>
                                    <div className='bg-green-100 font-bold text-xs rounded text-center p-1'>
                                        $90
                                    </div>
                                </td>

                                <td className=' w-14 px-2 '>
                                    <div className='flex items-center justify-between border border-gray-200 rounded'>
                                        <button className='font-bold text-sm text-gray-900 p-2 bg-gray-200'>-</button>
                                        <div className='font-bold px-2'>1</div>
                                        <button className='font-bold text-sm text-gray-900 p-2 bg-gray-200'>+</button>
                                    </div>
                                </td>

                                <td className='py-2 px-2'>
                                    $90
                                </td>

                                <td className='py-4'>
                                    <button className='font-light bg-red-200 p-2 ronded-lg'><FaTimes/></button>
                                </td>

                            </tr>

                            <tr className='bg-white shadow-lg rounded'>

                               <td className="py-2">
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <img src={Sharwama} alt='eguisi soup' className='object-scale-down w-16 h-16' />
                                    </div>
                                    <div>
                                        <div className='text-sm font-bold'>Sharwama Beaf</div>
                                        <div className='text-xs text-gray-400 '>Sharwama</div>
                                    </div>
                                </div>
                                </td> 

                                <td className='py-2'>
                                    <div className='bg-green-100 font-bold text-xs rounded text-center p-1'>
                                        $80
                                    </div>
                                </td>

                                <td className='py-2 w-14 px-2 '>
                                    <div className='flex items-center justify-between border border-gray-200 rounded'>
                                        <button className='font-bold text-sm text-gray-900 p-2 bg-gray-200'>-</button>
                                        <div className='font-bold px-4'>1</div>
                                        <button className='font-bold text-sm text-gray-900 p-2 bg-gray-200'>+</button>
                                    </div>
                                </td>

                                <td className='py-2 px-2'>
                                    $80
                                </td>

                                <td className='py-4'>
                                    <button className='font-light bg-red-200 p-2 ronded-lg'><FaTimes/></button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className='flex justify-end items-center w-full container px-8 mx-auto mt-8 text-sm'>
                    <div>
                        <div className='font-bold text-gray-900 inline-flex space-x-4 justify-between'><span>Subtotal:</span>  <span className='text-gray-500 font-bold'>$180</span></div>
                    </div> 
                </div>

                <div className='flex justify-end items-center w-full container px-8 mx-auto text-sm'>
                    <div>
                        <div className='font-bold text-gray-900 inline-flex justify-between space-x-4'><p>Shipping:</p>  <p className='text-gray-500 font-bold'>$5</p></div>
                    </div> 
                </div>

                <div className='w-full flex  container md:px-4 px-1 mx-auto items-center justify-between mt-4 '>
                    <div>
                        <button className='rounded-full border-2 border-green-500 text-green-500 px-4 py-2'>Continue Shopping</button>
                    </div>
                    <div className='px-4 text-sm font-bold '>
                        Total:  <span className='text-gray-500 font-bold text-lg '>$185</span>
                    </div>
                </div>

                

            </div>


            <div className='bg-green-500 text-white rounded-xl p-3 mt-4 md:mt-0'>
                <p className='font-bold text-3xl text-white p-2'>Payment Info.</p>
                <div className='my-3 p-2'>
                    <p className='text-xs text-white font-bold'>Payment Method.</p>

                    <div className='flex items-center justify-between mt-2'>
                        <div className='inline-flex items-center space-x-2 px-2 py-1 rounded-full border-2 border-white'><AiFillCreditCard size={25}/> <span className='font-bold'>Credit Card</span></div>
                        <div className='inline-flex items-center space-x-2 px-2 py-1 rounded-full border-2 border-white'><FaPaypal size={25}/> <span className='font-bold'>PayPal</span></div>
                    </div>

                    <form>
                        <div className='mt-5'>

                            <div className='my-3'>
                                <label  className='text-xs text-white font-bold'>Name on Card</label>
                                <input type='text' name='card_name' placeholder='Aeron Charles' className='w-full py-1 border-b border-white text-white text-sm bg-transparent placeholder-white focus:outline-none'/>
                            </div>

                            <div className='my-3'>
                                <label  className='text-xs text-white font-bold'>Card Number</label>
                                <input type='text' name='card_number' placeholder='... ... ... 1234' className='w-full py-1 border-b border-white text-white text-sm bg-transparent placeholder-white focus:outline-none'/>
                            </div>

                            <div className='flex items-center justify-center space-x-2 my-3'>
                                <div>
                                <label  className='text-xs text-white font-bold'>Expiry Date</label>
                                <input type='text' name='card_number' placeholder='MM/YY' className='w-full py-1 border-b border-white text-white text-sm bg-transparent placeholder-white focus:outline-none'/>
                                </div>

                                <div>
                                <label  className='text-xs text-white font-bold'>CVV</label>
                                <input type='text' name='card_cvv' placeholder='278' className='w-full py-1 border-b border-white text-white text-sm bg-transparent placeholder-white focus:outline-none'/>
                                </div>
                            </div>

                            <div className='mt-8 px-2'>
                                <button className='px-4 py-2 rounded-full bg-green-400 text-white font-bold w-full'>Check Out</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default CheckOut