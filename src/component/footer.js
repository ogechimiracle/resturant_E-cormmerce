import {FaFacebookF, FaTwitter, FaInstagramSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer className='mt-5 bg-green-200 '>
        <div className='container py-2 px-4 mx-auton grid grid-cols-1 md:grid-cols-4 justify-center'>

            <div className='p-4'>
              <div className='text-3xl font-bold my-4'>
                  <span className='text-green-700'>FoodSpyce.</span>Online
              </div>
              <div className='text-gray-600 text-sm'>
                Your natural dishes and inter-continental Taste
                FoodSpyce is here for it!
              </div>

            </div>

            <div className='p-4'>
              <div className='my-4  font-bold text-gray-900'>Policy</div>
              <ul className='flex flex-col space-y-4 text-sm text-gray-500 '>
                <li>Terms and Condition</li>
                <li>Policy</li>
                <li>Price control</li>
                <li>Security</li>
              </ul>

            </div>

            <div className='p-4'>
              <div className='my-4  font-bold text-gray-900'>Service & Links</div>
              <ul className='flex flex-col space-y-4 text-sm text-gray-500 '>
                <li>About us</li>
                <li>Contact us</li>
                <li>Pay on Delivery</li>
                <li>Home Delivery</li>
                <li>Online Payment</li>
                <li>24/7 customer care</li>
              </ul>

            </div>

            <div className='p-4'>
              <div className='my-4  font-bold text-gray-900'>Subscribe </div>
              <div className='text-gray-500 text-sm'>Join over 4,000 Subscribers to our newsletter to get amazing news and offers</div>
              <form>
              <div className='my-4 flex bg-'>
                <input type="email" name="email"  className='w-full focus:outline-none px-4 py-2 placeholder-green-500 text-sm font-bold rounded-l-full' placeholder='me@example.com' />
                <button className='px-4 bg-green-300 shadow-lg rounded-r-full font-bold'>Join</button>
              </div>
              </form>
            </div>

        </div>

        <div className='p-3 bg-green-700 mt-4 flex items-center justify-between'>
          <div className='text-white'>FoodSpyce &copy; 2023</div>
          <div className='mt-4 flex space-x-4 items-center'>
            <FaFacebookF size={20} className=' '/>
            <FaTwitter size={20} className=' '/>
            <FaInstagramSquare size={20} className=''/>
          </div>
        </div>

    </footer>
  )
}

export default Footer