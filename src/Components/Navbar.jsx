import React, { useEffect, useRef, useState } from "react";
import Banner from '../assets/Banner/Banner.png'
import cod1 from "../assets/Banner/return.png";
import cod2 from "../assets/Banner/cash-on-delivery.png";
import cod3 from "../assets/Banner/dollar.png";

const nav = [
  {
    name: "Saree & Lehanga",
    dropdown: ["View All","Georgette Sarees","Chiffon Sarees","Cotton Sarees","Net Sarees","Silk Sarees"],
  },
  {
    name: "Women & Men",
    dropdown: ["View All", "Gowns", "Jeans", "Tops & Tunics", "Kurtas", "Vests"],
  },
  {
    name: "Kurti",
    dropdown: ["View All", "Anarkali Kurtis", "Rayon Kurtis", "Cotton Kurtis"],
  },
  {
    name: "Kid's & Toys",
    dropdown: ["View All","Toys & Games","Kids Accessories","Baby Gears","Frocks & Dresses"],
  },
  {
    name: "Footwear's",
    dropdown: ["View All","Boys Shoes","Girls Shoes","Men Formal Shoes","Heels and Sandal"],
  },
  {
    name: "Accessories",
    dropdown: ["View All","Men Watches","Wallets","Belts","Women Watches","Women Belts"],
  },
  {
    name: "Bag's",
    dropdown: ["View All","Backpacks","Handbags","Duffel & Trolley Bags","Laptop & Messenger Bags","Clutches"],
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);        // mobile menu
  const [active, setActive] = useState(null);    // active highlight
  const [mobileDrop, setMobileDrop] = useState(null); // mobile dropdown

  // navbar ref (outside click detect panna)
  const navBox = useRef(null);  

  // Outside click close
  useEffect (() => {
    function closeMenu(e) {
      // menu open illa na return
      if(!open) return;

      // navbar ku veliya click panna close
      if(navBox.current && !navBox.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, [open]);

  // Link click close
  const handleLinkClick = () => {
    setOpen(false);
  }

  return (
    <div>
      {/* NAVBAR */}
      <nav ref={navBox} className=" bg-[#FCFCFC]">
        <div className="max-w-4xl mx-auto">

          {/* MOBILE */}
          <div className="md:hidden relative ">
            <div className="flex items-center justify-between h-12 ">
              <h1 className="font-bold text-sm px-4">Categories</h1>

              <button
                onClick={() => setOpen(!open)}
                className="border p-0.5 mr-4 rounded text-xl hover:bg-orange-200">
                <i className="fa fa-bars"></i>
              </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
              <ul className=" w-full bg-white shadow-lg transition-all duration-300 cursor-pointer text-sm">
                {nav.map((item, index) => (
                  <li key={index} className="border-b">
                    
                    {/* main item */}
                    <button
                      onClick={() =>
                        setMobileDrop(mobileDrop === index ? null : index)
                      }
                      className="w-full flex justify-between items-center px-3 py-3 font-normal cursor-pointer"
                    >
                      {item.name}
                      <i className={`fa fa-chevron-${mobileDrop === index ? "up" : "down"}`}></i>
                    </button>

                    {/* dropdown */}
                    {mobileDrop === index && (
                      <ul className="bg-orange-50 animate-slideDown">
                        {item.dropdown.map((sub, i) => (
                          <li
                            key={i} 
                            onClick={handleLinkClick}
                            className="px-6 py-2 text-sm hover:bg-orange-200"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* DESKTOP */}
          <ul className="hidden md:flex justify-around items-center text-lg h-16 font-medium ">
            {nav.map((item, index) => (
              <li
                key={index}
                onClick={() => setActive(index)}
                className={`relative group cursor-pointer
                ${active === index ? "text-red-600 border-b-2 border-red-600" : ""}
                hover:text-red-600`}
              >
                {item.name}

                {/* dropdown */}
                <ul
                  className="absolute left-0 top-full mt-2 
                  invisible opacity-0 group-hover:visible group-hover:opacity-100 
                  transition-all duration-300 ease-out
                  bg-white shadow-lg rounded-md min-w-48 py-2 text-sm z-50"
                >
                  {item.dropdown.map((sub, i) => (
                    <li
                      key={i}
                      onClick={handleLinkClick}
                      className="px-4 py-2 hover:bg-red-100 hover:text-red-600"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* BANNER */}
      <img src={Banner} className="w-full object-cover" alt="banner" />

      {/* COD SECTION */}
      <div className=" border-[#FCECF9] shadow-sm mt-5 rounded-lg">
        <div className="flex justify-center gap-2 text-gray-900 font-medium text-xs md:text-lg md:gap-20">

            <div className="flex items-center gap-1 md:gap-3">
                <img src={cod1} className="w-4 md:w-7" />
                <span>7 Days Easy Return</span>
            </div>

            <div className="flex items-center gap-1 md:gap-3">
                <img src={cod2} className="w-4 md:w-7" />
                <span>Cash on Delivery</span>
            </div>

            <div className="flex items-center gap-1 md:gap-3">
                <img src={cod3} className="w-4 md:w-7" />
                <span>Lowest Prices</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
