
import Hero from "../component/Hero";
import Menu from "../component/Menu";
import Testiomial from "../component/Testiomial";
import OurApp from "../component/OurApp";
import Contact from "../component/Contact";
import sharwa from '../img/foods/sharwama1.jpg'


function Home() {
  return (
    <>

{/* Hero Component */}
      <Hero />

{/* Testimonial component */}
      <div className="bg-green-200">
        <div className="container px-4 mx-auto py-4">
            <p className="uppercase text-xs text-gray-600 text-center font-bold py-2">Testimonials</p>
            <p className="font-bold text-gray-900  text-center">What our clients say about us</p>

            <div className="my-5">
              <Testiomial/>
            </div>

            <div className="my-4">
              <p className="text-gray-900 font-semibold text-center py-2">Our wonderful Meal Served</p>
              <div className="grid place-items-center text-center text-sm text-gray-400">
                Our network, combined with your personel<br/>
                needs, allow us to create a home and meal<br/>
                tailored to you.
              </div>
              <div className="grid place-items-center mt-4">
                  <button type="button" className="bg-green-500 text-white px-4 py-2">Order Meal</button>
              </div>
            </div>

        </div>
      </div>

{/* menu component */}
      <Menu />

{/* our mobile app  */}
    <OurApp/>

{/* Contact us */}
    <Contact/>


{/* Offer section */}

    <div>
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-evenly">

        <div className="">
          
          <img src={sharwa} alt='shar' className='rounded-full' />
          <div className="rounded-full bg-green-500 text-white p-4 min-w-[3rem] min-h-[3rem] -mt-16 absolute">
            <p className="font-semibold">30%</p>
          </div>
          
        </div>


        <div>
          <p className="text-4xl font-bold text-green-500">Amazing offer </p>
          <p className="text-sm text-gray-400 my-3 font-semibold">Get our amzing sharwarma offer at best deal offer</p>

          <button className="bg-gray-200 rounded-full px-4 py-2 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-700 ease-in">Order Now</button>

        </div>

      </div>
    </div>

    



    </>
  )
}

export default Home