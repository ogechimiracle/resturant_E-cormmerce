import {AiFillEye, AiFillFacebook, AiFillGoogleSquare, AiFillTwitterSquare} from 'react-icons/ai'

import {Link} from 'react-router-dom'

function Sign_up() {
    return (
        <div className='flex w-full h-full justify-center mt-14'>
    
            <div className="md:mt-12 mt-2 w-full  md:w-1/3 bg-white rounded-xl shadow-lg p-4">
    
                <div className='text-2xl font-bold text-center'>
                    <Link to='/'>
                    <span className='text-green-500'>FoodSpyce.</span>Online
                    </Link>
                </div>
    
                <div className="my-3 text-sm text-gray-400 text-center">
                    Create new Account
                </div>
    
                <div  className="mt-8">
                <form>
                    
                    <div className="my-4 ">
                        <input type="email" name="email"  className="px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none placeholder-gray-400 border border-gray-400 w-full" placeholder="Spicy@mail.com"/>
                    </div>

                    <div className="my-4 ">
                        <input type="text" name="name"  className="px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none placeholder-gray-400 border border-gray-400 w-full" placeholder="John Doe"/>
                    </div>
    
                    <div className="flex items-center my-4 px-2 border border-gray-400 w-full rounded-xl">
                        <input type="password" name="password"  className="px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none placeholder-gray-400 w-full" placeholder="Password"/>
                        <AiFillEye size={20}/>
                    </div>

    
                    <div className='my-4'>
                        <button className='px-4 py-3 rounded-lg bg-green-500 font-bold text-white w-full'>Sign Up</button>
                    </div>
    
                    <div className='my-2 text-center text-sm font-bold'>
                        Already have an account ? <span className='text-green-500'><Link to='/SignIn'>Log In</Link></span>
                    </div>
    
                    <p className='text-center p-2 text-gray-400'>Or Sign Up with</p>
    
                    <div className='flex items-center justify-center space-x-4 mt-4'>
                        <div className='rounded-lg p-4 border border-green-500 text-blue-600'>
                            <AiFillFacebook size={25}/>
                        </div>
    
                        <div className='rounded-lg p-4 border border-green-500  text-red-600'>
                            <AiFillGoogleSquare size={25}/>
                        </div>
    
                        <div className='rounded-lg p-4 border border-green-500  text-cyan-500'>
                            <AiFillTwitterSquare size={25}/>
                        </div>
                    </div>
    
                </form>
                </div>
    
    
            </div>
    
        </div>
      )
}

export default Sign_up