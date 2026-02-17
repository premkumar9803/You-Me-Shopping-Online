import React from "react";
import googleplay from "../assets/Social_media/googleplay.webp";
import appstore from "../assets/Social_media/appstore.webp";
import facebook from "../assets/Social_media/facebook.png";
import instagram from "../assets/Social_media/instagram.png";
import twitter from "../assets/Social_media/twitter.png";
import linkedin from "../assets/Social_media/linkedin.png";
import youtube from "../assets/Social_media/youtube.png";

function Footer() {
  return (
    <footer className=" bg-[#F8F8FF] py-5 ">
      <div className=" max-w-full mx-auto px-5 md:pt-10 md:ml-36">
    
        <div className=" md:grid grid-cols-[1fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div>
            <h1 className="text-gray-800 text-4xl font-semibold md:text-5xl">
              Non-Stop Shop On You & Me 
            </h1>
            <p className="text-lg  text-gray-500 font-medium mt-5">
              Trusted by crores of Indians
            </p>
            <p className="text-lg  text-gray-500 font-medium">
              Cash on Delivery | Free Delivery
            </p>
            {/* Icon */}
            <div className=" w-36 h-12 flex gap-3 mt-8 ">
              <img src={googleplay} alt="Google Play" className=" cursor-pointer
               hover:transition-transform duration-300 hover:scale-110" />
              <img src={appstore} alt="App Store" className=" cursor-pointer
               hover:transition-transform duration-300 hover:scale-110" />
            </div> 
          </div>

          {/* Careers */}
          <div className=" grid grid-cols-2 mt-2">
            <div className="text-lg  text-gray-600 font-medium space-y-3">
              <p>Careers</p>
              <p>Become a supplier</p>
              <p>Hall of Fame</p>
              <p>Sitemap</p>
            </div>
            
            <div className="text-lg text-gray-600 font-medium space-y-3">
              <p>Legal & Policies</p>
              <p>You & Me Tech Blog</p>
              <p>Notices & Returns</p>
            </div>
          </div>

          {/* Social-Media */}
          <div>
            <h3 className="font-medium text-xl text-gray-900 mt-8 md:mt-2.5">
              Reach out to us
            </h3>
            <div className="flex gap-3 w-7 mt-3 cursor-pointer md:gap-4">
              <img src={facebook} alt="Facebook" className=" hover:transition-transform duration-300 hover:scale-125"/>
              <img src={instagram} alt="Instagram" className=" hover:transition-transform duration-300 hover:scale-125"/>
              <img src={twitter} alt="Twitter" className=" hover:transition-transform duration-300 hover:scale-125"/>
              <img src={linkedin} alt="LinkedIn" className=" hover:transition-transform duration-300 hover:scale-125"/>
              <img src={youtube} alt="YouTube" className=" hover:transition-transform duration-300 hover:scale-125"/>
            </div>

            {/* Contact */}
            <div className=" md:mt-12">
              <h3 className="text-2xl text-gray-900 font-medium mt-3">
                Contact Us
              </h3>
              <div className="text-sm space-y-1 text-gray-600 font-medium mt-4">
                <p>12, Kalavasal</p>
                <p>Madurai – 602 011</p>
                <a href=""><p className="mt-1">Ph : 98765 43210</p></a>
                <a href=""><p className="mt-1">Mail : you&me@gmail.com</p></a>
              </div>
            </div> 
          </div>

        </div>

        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-600 font-medium text-xs md:text-sm">
          © 2026 You & Me. All rights reserved.
        </div>

      </div>
    
    </footer>
  );
}

export default Footer;
