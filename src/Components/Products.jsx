import React, { useState } from 'react'
import './Products.css'
import Dresses from '../Components/Dresses'
import banner from '../assets/Offer/Banner.webp'
import image1 from '../assets/Offer/image1.webp'
import image2 from '../assets/Offer/image2.webp'
import image3 from '../assets/Offer/image3.webp'
import image4 from '../assets/Offer/image4.webp'

import { ChevronDown, ChevronUp} from  "lucide-react"


function Products() {

{/* ---------------------- Sort by : Relevance Section-------------------------- */}
    const [sortOpen, setsortOpen] = useState(false); // Open/Close
    const [selectedSort, setSelectedSort] = useState("Relevance");
    const sorts = ["Relevance", "New Arrivals", "Price (High to Low)", "Price (Low to High)", "Ratings", "Discount"]; //Sort by :Relevance

{/* ---------------------------- Category Section--------------------------------- */}
    const [categoriesOpen, setCategoriesOpen] = useState(false);  // Open/Close
    const [search, setSearch] = useState(""); // Search-button   
    const [selectedCategories, setSelectedCategories] = useState([]) // Checkbox value
    const products = [                   // list
        { name: "Women T-shirts" },
        { name: "Women Tops And Tunics" },
        { name: "Analog Watches" },
        { name: "Bangles & Bracelets" },
        { name: "Bangles & Bracelets-men" },
        { name: "Bedsheets" },
        { name: "Bike Covers" },     
        { name: "Bluetooth Headphones" }    
    ];

    const checkboxChange = (category) => {      //  Checkbox-function
        if (selectedCategories.includes(category)) {        
            setSelectedCategories(
                selectedCategories.filter(item => item !== category)
            ); 
        }
        else {
            setSelectedCategories ([...selectedCategories, category]);
        }
    };

{/* ------------------------------- Gender Section------------------------ */}    
    const [genderOpen, setGenderOpen] = useState(false); // Open/Close
    const genders = ["Boys", "Girls", "Men", "Women"];  // list

{/* -----------------------------  - Color Section-------------------------- */}
    const [colorOpen, setColorOpen] = useState(false); // Open/Close
    const colors =["Black", "Brown", "Gold", "Grey" ,"Light Pink", "Marron"]; // list

{/* ---------------------------------Size Section----------------------------- */}    
    const [sizeOpen, setSizeOpen] =useState(false); // Open/Close
    const [sizeSearch, setSizeSearch] =useState(""); // Search-Button
    const [selectedSizes, setSelectedSizes] =useState([]); // Checkbox
    const sizes =["0-2 Years", "1.5 meters", "2-5 Years", "10", "10-16 Years", "16-26 Years", "28", "32" ] // List

    const handleChange = (size) => {    //Checkbox Function
        if (selectedSizes.includes(size)) {
            setSelectedSizes (
                selectedSizes.filter(item => item !== size)
            );
        }
        else {
            setSelectedSizes([...selectedSizes, size]);
        }
    }

{/* --------------------------------- Price Section---------------------------------*/}    
    const [priceOpen, setPriceOpen] = useState(false); // Open/close
    const price = ["Under 99", "Under 149", "Under 199", "Under 249", "Under 349", "Under 499", "500 & Above"]; // List

{/* ---------------------------------- Rating Section------------------------- */}    
    const [ratingOpen, setRatingOpen] = useState(false); // Open/Close
    const [ratingCategory, setRatingCategory] =useState([]) // Checkbox
    const ratings = ["2.0 and above", "3.0 and above", "3.5 and above", "4.0 and above"]; // list

    const ratingChange =(rating => { // Checkbox function
        if (ratingCategory.includes(rating)) {
            setRatingCategory (
                ratingCategory.filter(item => item !== rating)
            );
        }
        else {
            setRatingCategory([...ratingCategory, rating]);
        }
    }) 


  return (
    <>
    
        {/* Banner section */}      
        <div className=' relative mt-14'>
            <img src={banner} alt="" />
            <div className=' absolute border-none text-xs top-18 left-1.5 text-[rgb(148,13,116)] bg-white
            px-1.5 py-1 rounded-md font-bold md:text-3xl md:px-8 md:py-4 md:top-72 md:left-14 md:rounded-xl'>
                <a href="">Download Now</a>
            </div>

            {/* ------------------------ Photo Section---------------------- */}
            <div className=' flex gap-2 absolute -top-5 right-5 md:top-14 md:right-32 md:gap-4 cursor-pointer'>
                {/* Photos 1 */}
                <div className=' flex flex-col items-center gap-1.5 md:gap-3 transition-transform duration-300 
                hover:scale-y-105 hover:scale-100'>
                    <img src={image1} alt="" className=' w-16 md:w-36'/>
                    <p className='para px-1 py-0.5 font-medium bg-white rounded-md
                    md:px-4 md:py-1.5 md:rounded-xl md:font-bold'>
                        Trending Now
                    </p>
                </div>
                {/* Photos 2 */}
                <div className=' flex flex-col items-center gap-1.5 md:gap-3 transition-transform duration-300 
                hover:scale-y-105 hover:scale-100'>
                    <img src={image2} alt="" className=' w-16 md:w-36' />
                    <p className='para px-1 py-0.5 font-medium bg-white rounded-md
                     md:px-6 md:py-1.5 md:rounded-xl md:font-bold'>
                        Budget Buys
                    </p>
                </div>
                {/* Photos 3 */}
                <div className=' flex flex-col items-center gap-1.5 md:gap-3 transition-transform duration-300 
                hover:scale-y-105 hover:scale-100'>
                    <img src={image4} alt="" className=' w-16 md:w-36' />
                    <p className='para px-1 py-0.5 font-medium bg-white rounded-md
                     md:px-3 md:py-1.5 md:rounded-xl md:font-bold'>
                        Daily Essentials
                    </p>
                </div>
                {/* Photos 4 */} {/* Desktop-view */}
                <div className=' hidden md:flex flex-col items-center gap-1.5 md:gap-3 transition-transform duration-300 
                hover:scale-y-105 hover:scale-100'>
                    <img src={image3} alt="" className='md:w-36' />
                    <p className='para px-1 py-0.5 font-medium bg-white rounded-md
                     md:px-3 md:py-1.5 md:rounded-xl md:font-bold'>
                        Top Rated Picks
                    </p>
                </div>
            </div>
        </div>
        <div className='filtering-with-products md:flex md:w-full'>
            {/* Products section */}
            <div className='px-1 md:px-4'>
                <h1 className=' mt-10 px-7  text-3xl opacity-75'>Products For You</h1>

                {/* ------------------- Sort by : Relevance Section----------------- */}
                {/* Sort by : Relevance - Arrow */}
                <div className=' px-6'>
                    <div className=' w-80 py-2 mt-5  flex items-center justify-between border border-gray-300 rounded-sm cursor-pointer'
                    onClick={() => setsortOpen(!sortOpen)}>
                        
                        <h3 className=' text-xl px-6'><span className=' opacity-50'>Sort by :</span>
                        {selectedSort}
                        </h3>
                        
                        {sortOpen ? (
                            <ChevronUp size={20}/>
                        ) : (
                            <ChevronDown size={20}/>
                        )}
                    </div>
                    {/* Sort by :Relevance -Option */}
                    {sortOpen && (
                        <div className=' flex flex-col w-80 mt-1 border rounded-md border-gray-300 max-h-64 overflow-y-auto'>
                            {sorts.map((item) => (
                                <button
                                key={item}
                                onClick={() => {
                                    setSelectedSort(item);
                                    setsortOpen(false);
                                }}
                                className={` w-full text-left px-4 py-3  text-lg transition opacity-45 font-semibold cursor-pointer
                                ${item === selectedSort  ? " bg-pink-200 opacity-40 font-medium" : "hover:bg-pink-100"}
                                `}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}  
                </div>

                {/* ---------------------------------------- Filter Sidebar Section--------------------------------- */}
                {/* Filter side bar */}
                <div className=' ml-5'>
                    <div className=' w-80 mt-5 bg-gray-50 p-4  shadow-inner'>
                        
                        <h2 className=' text-xl font-normal'>FILTERS</h2>
                        <p className=' opacity-50 font-normal'>1000+ Products</p>
                        <hr className="mt-4 opacity-25" />

                        {/* ---------------------------------------- Category Section--------------------------------- */}
                        {/* Category- Arrow section */}
                        <div className=' w-72 flex justify-between items-center cursor-pointer'
                        onClick={() => setCategoriesOpen(!categoriesOpen)}>
                            <h1 className=' mt-5 text-xl font-normal'>Category</h1>
                            
                            {categoriesOpen ? (
                                <ChevronUp size={20} className=' mt-5'/>
                            ) : (
                                <ChevronDown size={20} className=' mt-5'/>
                            )}
                        </div>     
                        {/* Categories-Option */}
                        {categoriesOpen && (
                            <>
                            {/* Search bar */}
                            <div className=' relative'>
                                <i className="fa-solid fa-magnifying-glass absolute top-6 left-2 opacity-25 text-2xl"></i>
                                <input 
                                type="text" placeholder='Search'    
                                className=' w-full py-2.5 pl-10 mt-3 border border-gray-300 rounded-md focus:outline-none'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)} 
                                /> 
                            </div>
                            {/* Checkbox-list */}
                            <div className=' mt-5'>
                                {products.filter(item =>
                                    item.name.toLowerCase().includes(search.toLowerCase())
                                ).map((item) => (
                                    <label
                                    key={item.name}
                                    className="flex items-center gap-2 mt-2 cursor-pointer text-lg font-semibold opacity-45">
                                        <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(item.name)}
                                        onChange={() => checkboxChange(item.name)}
                                        />
                                        {item.name}
                                    </label>
                                ))}
                            </div> 
                        </>
                        )}

                        {/* ---------------------------------------- Gender Section--------------------------------- */}
                        <div className='mt-4'>
                            <hr className='mt-5 opacity-25'/>
                            
                            {/* Gender - Arrow */}
                            <div className=" flex justify-between items-center cursor-pointer"
                            onClick={() => setGenderOpen(!genderOpen)}>
                                
                                <h3 className='font-normal text-xl mt-5'>Gender</h3>

                                {genderOpen ? (
                                    <ChevronUp size={20} className=' mt-5'/>
                                ) : (
                                    <ChevronDown size={20} className=' mt-5'/>
                                )}
                            </div>
                            {/* Gender Options */}
                            {genderOpen && (
                                <div className="flex flex-wrap gap-3">
                                    {genders.map((item) => (
                                        <button
                                        key={item}
                                        className=' mt-3 border border-gray-300 rounded-full px-4 py-1 text-lg 
                                        font-semibold opacity-45 cursor-pointer'>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}              
                        </div>

                        {/* ---------------------------------------- Color Section--------------------------------- */}
                        <div className=' mt-4'>
                            <hr className='mt-5 opacity-25'/>  
                            {/* Color - Arrow */}
                            <div className=" flex justify-between items-center cursor-pointer "
                            onClick={() => setColorOpen(!colorOpen)}>
                                
                                <h3 className=' font-normal text-xl mt-5'>Color</h3>
                                {colorOpen ? (
                                    <ChevronUp size={20} className=' mt-5'/>
                                ) : (
                                    <ChevronDown size={20} className=' mt-5'/>
                                )}
                            </div>
                            {/* Color option */}
                            {colorOpen && (
                                <div className=' mt-4 grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-3 '>
                                    {colors.map((item) => (
                                        <button 
                                        key={item} 
                                        className=' border border-gray-300 px-1.5 py-2 text-base opacity-45 
                                        font-medium rounded-full cursor-pointer'>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ----------------------------------------Size Section--------------------------------- */}
                        <div>
                            <hr className=' mt-5 opacity-25' />

                            {/* Size header - Arrow */}
                            <div className=' flex justify-between items-center cursor-pointer'
                            onClick={() => setSizeOpen(!sizeOpen)}>

                                <h3 className=' font-normal text-xl mt-5'>Size</h3>

                                {sizeOpen ? (
                                    <ChevronUp size={20} className=' mt-5'/>
                                ) : (
                                    <ChevronDown size={20} className=' mt-5'/>
                                )}
                            </div>
                            {/* Size Search-button */}
                            {sizeOpen && (
                                <div className=' mt-2 relative'>
                                    <i className="fa-solid fa-magnifying-glass absolute text-2xl top-6 left-2 opacity-30"></i>
                                    <input type="text"
                                    placeholder='Search'
                                    value={sizeSearch} 
                                    onChange={(e) => setSizeSearch(e.target.value)}
                                    className=' w-full border border-gray-300 py-2.5 pl-10 rounded-md focus:outline-none mt-3'
                                    />
                                    {/* Size list */}
                                    <div className=' mt-4 max-h-56 overflow-y-auto flex flex-col gap-3'>
                                        {sizes.filter(size => 
                                        size.toLowerCase().includes(sizeSearch.toLowerCase())
                                        ).map((size) => (
                                            <label 
                                            key={size}
                                            className=' flex gap-2 text-lg cursor-pointer opacity-45 font-semibold'>
                                                <input 
                                                type="checkbox" 
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => handleChange(size)}
                                                />
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ---------------------------------------- Price Section--------------------------------- */}
                        <div>
                            <hr className=' opacity-25 mt-5' />
                            {/* Price Arrow */}
                            <div className=' flex justify-between items-center cursor-pointer'
                            onClick={() => setPriceOpen(!priceOpen)}>

                                <h3 className=' font-normal text-xl mt-5'>Price</h3>
                                {priceOpen ? (
                                    <ChevronUp size={20} className=' mt-6'/>
                                ) : (
                                    <ChevronDown size={20} className=' mt-6'/>
                                )}
                            </div>
                            {/* Price option */}
                            {priceOpen && (
                                <div className=' flex flex-col gap-3 items-start mt-4 text-lg max-h-52 overflow-y-auto
                                font-semibold opacity-45'>
                                    {price.map((item) =>(
                                        <button
                                        key={item}
                                        className=' border border-gray-300 rounded-full py-1.5 px-5 cursor-pointer'>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ---------------------------------------- Rating Section--------------------------------- */}
                        <div>
                            <hr className=' mt-5 opacity-25' />
                            {/* Rating - Arrow */}
                            <div className=' flex justify-between items-center cursor-pointer'
                            onClick={() => setRatingOpen(!ratingOpen)}>

                                <h3 className=' font-normal text-xl mt-5'>Rating</h3>
                                {ratingOpen ? (
                                    <ChevronUp size={20} className=' mt-5'/>
                                ) : (
                                    <ChevronDown size={20} className=' mt-5'/>
                                )}
                            </div>
                            {/* Rating list */}
                            {ratingOpen && (
                                <div className=' flex flex-col gap-3 text-lg font-semibold opacity-45 mt-3'>
                                    {ratings.map((rating) => (
                                        <label
                                        key={rating}
                                        className=' flex gap-2 cursor-pointer'>
                                            <input 
                                            type="checkbox"
                                            checked ={ratingCategory.includes(rating)} 
                                            onChange={() => ratingChange(rating)}
                                            />
                                            {rating}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <Dresses/>
        </div>
    </>
    )
}

export default Products