import React from 'react'
import Photo1 from '../assets/moderns/Ethnic Wear.png'
import Photo2 from '../assets/moderns/Footwear.webp'
import Photo3 from '../assets/moderns/Menswear.png'
import Photo4 from '../assets/moderns/Western Dresses.png'
import Photo5 from '../assets/moderns/Beauty.webp'
import Photo6 from '../assets/moderns/Accessories.webp'
import banner1 from '../assets/moderns/banner-1.png'



function Photo() {
  return (
    <div>

        <div className=' grid grid-cols-2 gap-7 ml-10 mt-10 w-72 md:w-full md:flex md:justify-center md:gap-10 md:ml-0 cursor-pointer md:font-medium'>

            <div className=' flex flex-col items-center gap-3'>
                {/* Image */}
                <img src={Photo1} alt="" className=' transition-transform duration-500 ease-in-out hover:scale-110' />
                <h1 className=' font-medium text-sm md:text-lg md:opacity-70 '>Ethnic Wear</h1>
            </div>

            <div className=' flex flex-col items-center gap-3'>
                <img src={Photo2} alt="" className=' transition-transform duration-500 ease-in-out hover:scale-110'/>
                <h1 className=' font-medium text-sm md:text-lg md:opacity-70 '>accessories</h1>
            </div>

            <div className=' flex flex-col items-center gap-3 '>
                <img src={Photo3} alt="" className=' transition-transform duration-500 ease-in-out hover:scale-110'/>
                <h1 className=' font-medium text-sm md:text-lg md:opacity-70 '>Footwear</h1>
            </div>

            <div className=' flex flex-col items-center gap-3 '>
                <img src={Photo4} alt="" className=' transition-transform duration-500 ease-in-out hover:scale-110'/>
                <h1 className=' font-medium text-sm md:text-lg md:opacity-70 '>Menswear</h1>
            </div>

            <div className=' flex flex-col items-center gap-3 '>
                <img src={Photo5} alt="" className=' transition-transform duration-500 ease-in-out hover:scale-110'/>
                <h1 className=' font-medium text-sm md:text-lg md:opacity-70'>Western Dresses</h1>
            </div>

            <div className='flex flex-col items-center gap-3 '>
                <img src={Photo6} alt="" className=' transition-transform duration-500 ease-in-out hover:scale-110'/>
                <h1 className=' font-medium text-sm md:text-lg md:opacity-70'>Beauty</h1>
            </div>
            
        </div>

        {/* Banner-Image */}
        <div className=' mt-7'>
            <img src={banner1} alt="banner-1" className=' w-full object-contain ' />
        </div>
                
    </div>
  )
}

export default Photo