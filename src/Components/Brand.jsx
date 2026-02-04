import React from 'react'
import brand1 from '../assets/Brand/Bags.webp'
import brand2 from '../assets/Brand/Electronics.webp'
import brand3 from '../assets/Brand/Makeup.webp'
import brand4 from '../assets/Brand/Perfume.webp'
import brand5 from '../assets/Brand/Personal_Care.webp'
import brand6 from '../assets/Brand/Smart_Phone.webp'

function Brand() {
  return (
    <div>
        <h1 className=' p-10 text-lg md:text-4xl md:px-20 '>Original Brand
            <i className="fa-solid fa-circle-check fa"></i>
        </h1>
        
        <div className=' grid grid-cols-2 gap-10 w-60 ml-20 md:ml-32 md:flex md:gap-8 md:w-40 md:mt-6'>
            <img src={brand1} alt="" />
            <img src={brand2} alt=""/>
            <img src={brand3} alt="" />
            <img src={brand4} alt="" />
            <img src={brand5} alt="" />
            <img src={brand6} alt="" />
        </div>


    </div>
  )
}

export default Brand