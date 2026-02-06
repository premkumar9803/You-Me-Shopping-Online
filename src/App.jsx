import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Photo from './Components/Photo'
import Brand from './Components/Brand'
import Footer from './Components/Footer'
import Products from './Components/Products'


function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Photo/>
    <Brand/>
    <Products/>
    <Footer/>    
    </>
  )
}

export default App
