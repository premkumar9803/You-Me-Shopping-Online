import React from 'react'
import image1 from '../assets/Bags/anarkali4.avif'
import image2 from '../assets/Bags/baby_gears1.avif'
import image3 from '../assets/Bags/baby_gears2.avif'
import image4 from '../assets/Bags/backbag4.avif'
import image5 from '../assets/Bags/belt2.avif'
import image6 from '../assets/Bags/clutches2.avif'
import image7 from '../assets/Bags/cotton1.avif'
import image8 from '../assets/Bags/cotton2.avif'
import image9 from '../assets/Bags/cotton4.avif'
import image10 from '../assets/Bags/duffel2.avif'
import image11 from '../assets/Bags/girl_shoe1.avif'
import image12 from '../assets/Bags/girl_shoe2.avif'
import image13 from '../assets/Bags/gown2.avif'
import image14 from '../assets/Bags/gown3.avif'
import image15 from '../assets/Bags/handbag1.avif'
import image16 from '../assets/Bags/handbag2.avif'
import image17 from '../assets/Bags/heal1.avif'
import image18 from '../assets/Bags/jeans1.avif'
import image19 from '../assets/Bags/jeans2.avif'
import image20 from '../assets/Bags/kurta3.avif'
import image21 from '../assets/Bags/kurta4.avif'
import image22 from '../assets/Bags/men_watches3.avif'
import image23 from '../assets/Bags/net2.avif'
import image24 from '../assets/Bags/net4.avif'
import image25 from '../assets/Bags/shoppers3.avif'
import image26 from '../assets/Bags/siffron1.avif'
import image27 from '../assets/Bags/t-shirts3.avif'
import image28 from '../assets/Bags/t-shirts4.avif'
import image29 from '../assets/Bags/tops1.avif'
import image30 from '../assets/Bags/tops2.avif'
import image31 from '../assets/Bags/toys1.avif'
import image32 from '../assets/Bags/toys4.avif'
import image33 from '../assets/Bags/trending1.avif'
import image34 from '../assets/Bags/trending3.avif'
import image35 from '../assets/Bags/vest1.avif'
import image36 from '../assets/Bags/vest2.avif'
import image37 from '../assets/Bags/women_belt4.avif'
import image38 from '../assets/Bags/women-tshirts1.avif'
import image39 from '../assets/Bags/women-tshirts2.avif'
import image40 from '../assets/Bags/tops4.avif'
import tag from '../assets/Social_media/rupee-indian.png'

const products = [
  {
    id: 1,
    image: image1,
    title: "Charvi Superior Kurtis",
    price: 244,
    rating: 3.9,
    reviews: "56906 Reviews",
  },
  {
    id: 2,
    image: image2,
    title: "New Kids Early Developme",
    price: 572,
    rating: 4.1,
    reviews: "686 Reviews",
  },
  {
    id: 3,
    image: image3,
    title: "Fashionable Kids Die-Cast ",
    price: "1,650",
    rating: 3.6,
    reviews: "20 Reviews",
  },
  {
    id: 4,
    image: image4,
    title: "Funky Fashionate Kids Unis",
    price: 218,
    rating: 4.1,
    reviews: "41066 Reviews",
  },
  {
    id: 5,
    image: image5,
    title: "Fancy Latest Men Belts",
    price: 147,
    rating: 4.1,
    reviews: "8869 Reviews",
  },
  {
    id: 6,
    image: image6,
    title: "Casual Unique Women Clutches",
    price: 129,
    rating: 4.1,
    reviews: "9405 Reviews",
  },
  {
    id: 7,
    image: image7,
    title: "Aishani Attractive Kurtis",
    price: 171,
    rating: 4.1,
    reviews: "14789 Reviews",
  },
  {
    id: 8,
    image: image8,
    title: "Banita Petite Sarees",
    price: 395,
    rating: 4.3,
    reviews: "9281 Reviews",
  },
  {
    id: 9,
    image: image9,
    title: "Chitrarekha Superior Kurtis",
    price: 269,
    rating: 3.9,
    reviews: "9482 Reviews",
  },
  {
    id: 10,
    image: image10,
    title: "Latest Women Women Trave",
    price: 249,
    rating: 3.8,
    reviews: "18268 Reviews",
  },
  {
    id: 11,
    image: image11,
    title: "Fabulous Women Casual ",
    price: 324,
    rating: 3.9,
    reviews: "13821 Reviews",
  },
  {
    id: 12,
    image: image12,
    title: "Casual Shoes",
    price: 309,
    rating: 3.9,
    reviews: "582 Reviews",
  },
  {
    id: 13,
    image: image13,
    title: "Western Gowns",
    price: 304,
    rating: 4.1,
    reviews: "3245 Reviews",
  },
  {
    id: 14,
    image: image14,
    title: "Trendy Western Gowns",
    price: 330,
    rating: 4.1,
    reviews: "4548 Reviews",
  },
  {
    id: 15,
    image: image15,
    title: "Elegant Stylish Women Han",
    price: 167,
    rating: 4.2,
    reviews: "15509 Reviews",
  },
  {
    id: 16,
    image: image16,
    title: "Side Handbag",
    price: 160,
    rating: 4.1,
    reviews: "18144 Reviews",
  },
  {
    id: 17,
    image: image17,
    title: "Heels",
    price: 229,
    rating: 4.5,
    reviews: "10 Reviews",
  },
  {
    id: 18,
    image: image18,
    title: "Men Cargo Jeans",
    price: 313,
    rating: 3.5,
    reviews: "31 Reviews",
  },
  {
    id: 19,
    image: image19,
    title: "EYEBOGLER Men Tapered ",
    price: 640,
    rating: 3.9,
    reviews: "686 Reviews",
  },
  {
    id: 20,
    image: image20,
    title: "Classic Men Kurta Sets",
    price: 655,
    rating: 4.2,
    reviews: "537 Reviews",
  },
  {
    id: 21,
    image: image21,
    title: "Comfy Men Kurtas",
    price: 274,
    rating: 4.2,
    reviews: "18891 Reviews",
  },
  {
    id: 22,
    image: image22,
    title: "Latest Men Analog Watch",
    price: 203,
    rating: 3.9,
    reviews: "3658 Reviews",
  },
  {
    id: 23,
    image: image23,
    title: "Alisha Superior Sarees",
    price: 296,
    rating: 3.8,
    reviews: "8942 Reviews",
  },
  {
    id: 24,
    image: image24,
    title: "Paithani Net Saree With Em",
    price: 326,
    rating: 4.3,
    reviews: "534 Reviews",
  },
  {
    id: 25,
    image: image25,
    title: "Charvi Voguish Women Leh",
    price: 376,
    rating: 3.8,
    reviews: "855 Reviews",
  },
  {
    id: 26,
    image: image26,
    title: "Charvi Pretty Sarees",
    price: 329,
    rating: 4.1,
    reviews: "7340 Reviews",
  },
  {
    id: 27,
    image: image27,
    title: "Men Poly Blend Regular Tsh",
    price: 348,
    rating: 3.8,
    reviews: "8335 Reviews",
  },
  {
    id: 28,
    image: image28,
    title: "Men Cotton Regular Tsh",
    price: 284,
    rating: 3.8,
    reviews: "2519 Reviews",
  },
  {
    id: 29,
    image: image29,
    title: "Pretty Partywear Women To",
    price: 205,
    rating: 4.2,
    reviews: "33723 Reviews",
  },
  {
    id: 30,
    image: image30,
    title: "Stylish Latest Women Tops ",
    price: 206,
    rating: 4.1,
    reviews: "29174 Reviews",
  },
  {
    id: 31,
    image: image31,
    title: "Trendy Wooden Puzzle",
    price: 105,
    rating: 4.1,
    reviews: "24286 Reviews",
  },
  {
    id: 32,
    image: image32,
    title: "Amazing Kids Educational T",
    price: 272,
    rating: 4.3,
    reviews: "1982 Reviews",
  },
  {
    id: 33,
    image: image33,
    title: "Fancy Designer Panelled Tassels",
    price: 602,
    rating: 4.1,
    reviews: "5208 Reviews",
  },
  {
    id: 34,
    image: image34,
    title: "Aagam Petite Women Lehen",
    price: 635,
    rating: 4.3,
    reviews: "284 Reviews",
  },
  {
    id: 35,
    image: image35,
    title: "Stylish Men Vest",
    price: 254,
    rating: 3.6,
    reviews: "36 Reviews",
  },
  {
    id: 36,
    image: image36,
    title: "Standard Men Vest",
    price: 261,
    rating: 4.1,
    reviews: "1593 Reviews",
  },
  {
    id: 37,
    image: image37,
    title: "Styles Modern Women Belts",
    price: 126,
    rating: 4.2,
    reviews: "15768 Reviews",
  },
  {
    id: 38,
    image: image38,
    title: "Classy Elegant Women Tsh",
    price: 214,
    rating: 3.8,
    reviews: "16309 Reviews",
  },
  {
    id: 39,
    image: image39,
    title: "Pretty Elegant Women Tshirts",
    price: 258,
    rating: 4.4,
    reviews: "27619 Reviews",
  },
  {
    id: 40,
    image: image40,
    title: "Pretty Elegant Women Tshirts",
    price: 216,
    rating: 4.2,
    reviews: "15259 Reviews",
  },
];

 
function Dresses() {
  return (
  <div style={{'width':'100%'}} className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4 cursor-pointer">

  {products.map((item) => (
    <div
      key={item.id}
      className="border border-gray-300 rounded-xl shadow-sm p-3 bg-white
       transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className=' overflow-hidden'>
      <img
        src={item.image}
        alt=""
        className="w-full h-48 object-cover rounded-lg md:h-60 md:object-contain
         transition-transform duration-500 ease-in-out hover:scale-110"
      />
      </div>

      {/* Title */}
      <p className="text-sm text-gray-600 font-medium opacity-60 md:text-lg mt-4">
        {item.title}
      </p>

      {/* Price */}
      <div className="flex items-center mt-1">
        <img src={tag} alt="" className="w-6 h-5" />
        <p className=' text-2xl font-medium mb-1 md:text-3xl'>{item.price}</p>
      </div>

      {/* Delivery */}
      <p className="text-xs text-gray-500 font-medium mt-2 md:text-sm">
        Free Delivery
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <span className="bg-[#23BB75] text-white text-sm px-1 py-0.5 rounded-md font-bold md:text-lg md:px-2">
          {item.rating}
          <i className="fa-solid fa-star text-xs md:ml-0.5"></i>
        </span>
        <span className="text-xs text-gray-500 font-medium">
          {item.reviews}
        </span>
      </div>
    </div>
  ))}

</div>

  )
}

export default Dresses