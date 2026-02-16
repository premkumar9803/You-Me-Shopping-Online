import React from 'react'
import logo from '../assets/Social_media/logo.png'
import user from '../assets/Social_media/user.png'
import shopping from '../assets/Social_media/shopping-cart.png'

function Header() {
  return (
   

        <header className=" bg-[#FCFCFC] sticky top-0 z-50">
            {/* Logo */} {/* Mobile-view */}
            <div className=' md:hidden flex justify-center'>
                <img src={logo} alt="logo" className=" w-40" />
            </div>
            
            <div className="md:px-24">
                <div className="flex items-center h-full">
                    
                    {/* Logo */} {/* Desktop-view */}
                    <div className=' hidden md:flex'>
                        <img src={logo} alt="logo" className=' w-60' />
                    </div>
                    
                    {/* Search */}
                    <div className=" relative flex items-center gap-2.5 ml-2.5 md:ml-28 md:gap-10">
                        <i className="fa-solid fa-magnifying-glass absolute opacity-20 left-3.5 bottom-4 text-lg
                        md:text-3xl md:left-4 md:bottom-5"></i>

                        <div className=' ml-2'>
                            <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" 
                            className='  bg-gray-100 rounded-3xl w-56 h-12 px-7 hover:border md:rounded-4xl md:h-15 md:px-14 md:w-xl'/>
                        </div>
                        
                        {/* Icon */}
                        <div className=' flex flex-col items-center mt-4 cursor-pointer'>
                            <img src={user} className=' w-5 h-4 md:w-8 md:h-7' />
                            <p className=' font-medium text-sm opacity-75 md:text-lg'>Profile</p>
                        </div>
                        <div className=' flex flex-col items-center mt-4 cursor-pointer'>
                            <img src={shopping} className=' w-5 h-4 md:w-8 md:h-7' />
                            <p className=' font-medium text-sm opacity-75 md:text-lg'>Cart</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <hr className=' border-gray-200'/>
        </header>
    
  )
}

export default Header