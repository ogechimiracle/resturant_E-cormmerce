import React,{useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'

// importing images for profile pics

import profile1 from '../img/profile/profile1.jpg'
import profile2 from '../img/profile/profile2.jpg'
import profile3 from '../img/profile/profile3.jpg'
import profile4 from '../img/profile/profile4.jpg'
import profile5 from '../img/profile/profile5.jpg'

import 'swiper/css'
import { Autoplay } from 'swiper';

function Testiomial() {
  const [active, setActive] = useState(null)
  const Details = [
    {name: "Smith Erick", description: "I have test the food and have an amazing test must rate them 10%", rate: "100%", image:profile1},
    {name: "Amzy Chris", description: "Always accurate in delivery addresses and on time", rate: "90%", image:profile2},
    {name: "Miracle Dev", description: "I always love ther pizza it's made of good test and yommy", rate: "100%", image:profile3},
    {name: "Amaraz Kiloxs", description: "I have test the food and have an amazing test must rate them 10%", rate: "80%", image:profile4},
    {name: "John Doe", description: "Using the platform was an amzing offer and made my day", rate: "75%", image:profile5}
  ]

  return (
    <div className='flex items-center justify-center overflow-x-hidden'>

        <div className='max-w-5xl'>

          <Swiper spaceBetween={50} slidesPerView={3}
          onSlideChange = {(cur)=> setActive(cur.realIndex)}
          loop ={true}
          centeredSlides={true}
          speed={800}
          autoplay={{
            delay: 3000,
          }}
          modules={[Autoplay]}
          >

            {Details.map((item, i)=>(
              <SwiperSlide key={i}>
              <div className='h-96 flex'>
                
                <div className={`card ${active === i && "card-active"}  to-green-900/20`}>
                  <div className=''>
                    <img src={item.image} alt={item.name} className='logo' />
                  </div>
                  <h2 className='text-3xl mt-3 font-semibold'>{item.name}</h2>
                  <p className='para'>
                  {item.description}
                  </p>

                  <div className='bg-green-500 rate-level mt-3'>
                    {item.rate}
                  </div>

                </div>
              </div>
            </SwiperSlide>
            ))}

          </Swiper>
            
        </div>
        
    </div>
  )
}

export default Testiomial